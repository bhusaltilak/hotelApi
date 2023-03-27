const models = require("..//models");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

function signUp(req, res) {
    models.user.findOne({ where:{ email: req.body.email } })
    .then((result) => {
      if (result) {
        res.status(409).json({
          message: "Email already exist",
        });
      } else {
        bcryptjs.genSalt(10, function (err, salt) {
          bcryptjs.hash(req.body.password, salt, function (err, hash) {
            const userCreate = {
              Name: req.body.Name,
              email: req.body.email,
              password: hash,
            };
            console.log(userCreate);
            models.user.create(userCreate)
              .then((result) => {
                return res.status(200).json({
                  message: "Successfully created",
                  user:userCreate
                });
              })
              .catch((error) => {
                res.status(400).json({
                  message: "Error Occur",
                });
              });
          });
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "something went wrong!",
      });
    });
}

function login(req, res) {
  models.user
    .findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (user == null) {
        res.status(401).json({
          message: "Invalid Email!",
        });
      } else {
        res.status(200).json({
          message: "Successfully login",
        });
      }
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

module.exports = {
  signUp: signUp,
  login: login,
};
