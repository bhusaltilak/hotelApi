const Validator = require("fastest-validator");
const models= require('../models')

function save(req,res){
    const post = {
        name: req.body.name,
        address : req.body.address,
        fblink : req.body.fblink,
        description : req.body.description
    }

    const schema ={
        name:{type:"string",required:true,max:"20"},
        address:{type:"string",optional:false,max:"15"},
        fblink:{type:"string",optional:false,max:"50"},
        description:{type:"string",optional:false,max:"30"}
    }
    const v =new Validator();
    const validationResponse=v.validate(post,schema);
    if(validationResponse !==true){
       return res.status(400).json({
            message:"Validation fail!",
            Error:validationResponse
        })
    }

     console.log(post);
    models.Hotel.create(post).then(result=>{
        res.status(200).json({
            message:"successful",
            post : result
        })
    }).catch(error=>{
        res.status(500).json({
            message:"Error Occur",
            error:"error"
        })
    })
}

function index(req,res){
    models.Hotel.findAll().then(result=>{
        res.status(200).json({
            "message": "Successful",
            message:result
        });
    }).catch(error=>{
        res.status(404).json({
           "message":"Error Occur",
           Result:error
        });
    });
}




function show(req,res){
    const id = req.params.id;
    console.log(id);
    models.Hotel.findByPk(id).then((result)=>{
            if(result==null){
               return res.status(500).json({
                    message:"Invalid Id"
                })
        }
        res.status(200).json({
            message:'Successful',
            Result : result
        });
    });
}


function update(req,res){
    const id = req.params.id
console.log(id);
    const updatePost={
        name: req.body.name,
        address: req.body.address,
        fblink: req.body.fblink,
        description: req.body.description
    }

    const schema={
        name:{type:"string",optional:false,max:"10"},
        address:{type:"string",optional:false,max:"10"},
        fblink:{type:"string",optional:false,max:"20"},
        description:{type:"string",optional:false,max:"30"}
    }
    const v = new Validator();
    const validateResponse=v.validate(updatePost,schema);
    if(validateResponse !==true){
      return  res.status(400).json({
            message:"Validation failed!",
            Error:validateResponse
        })
    }

    models.Hotel.findByPk(id).then(result=>{
       if(result==null){
      return res.status(500).json({
            message:"Invalid Id"
        })
       }
        models.Hotel.update(updatePost,{where:{id:id}}).then(result=>{
            res.status(201).json({
               message:'successful',
               update: updatePost
            })
       }).catch(error=>{
           res.status(500).json({
               message:"Error Occur",
           });
       });

    })
    
}

function destroy(req,res){
    const id = req.params.id;
    models.Hotel.destroy({where:{id:id}}).then(result=>{
        if(result==0){
            return res.status(500).json({
                message:"Invalid number"
            })
        }
        res.status(200).json({
            message:"Successful destroy",
            Result:result
        })
    }).catch(error=>{
        res.status(500).json({
            message:"Error Occur",
            Error:error
        })
    })
}
module.exports ={
  save:save,
  index:index,
  show:show,
  update:update,
  destroy:destroy
}