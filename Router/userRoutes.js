const express = require("express");
const userController = require("../Controller/user.controller");
const router = express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *      signUp:
 *        type: object
 *        properties:
 *          name:
 *           type: string
 *           description: user name
 *          email:
 *           type: string
 *           description: email of the user
 *          password:
 *           type: string
 *           description: password
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      login:
 *        type: object
 *        properties:
 *          email:
 *           type: string
 *           description: email of the user
 *          password:
 *           type: string
 *           description: password
 */

/**
 * @swagger
 * tags:
 *     name: post
 *     description: The User managing API endpoint
 */

 

/**
 * @swagger
 * /user/signUp:
 *   post:
 *     summary: Create a new post 
 *     tags: [User]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/signUp'
 *     responses:
 *      201:
 *          description: User Created Successfully
 *      500:
 *          description: Some Server Error
 */
router.post('/signUp',userController.signUp);


/**
 * @swagger
 * /user/login:
 *   post:
 *     summary: login the data 
 *     tags: [User]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/login'
 *     responses:
 *      201:
 *          description: User Created Successfully
 *      500:
 *          description: Some Server Error
 */
router.post('/login',userController.login);
module.exports = router;