const express=require('express');


const User=require('../models/user.model');

const { uploadSingle } = require("../middlewares/upload")

const router= express.Router();

router.get('',async(req,res)=>{
    try{
        const user=await User.find();
        // console.log(user)
        return res.status(200).send(user);
    }catch(e){
        return res.status(500).send(e.mes);

    }
})

router.post('/single' ,uploadSingle("pic_url"), async(req,res)=>{
    try{
        const user=await User.create(
             {
            first_name:req.body.fisrt_name,
            last_name:req.body.last_name,
            pic_url:req.file.path,
         }
         )
         return res.status(200).send({user});
    }
    catch(e){
        return res.status(500).send(e.mes);
    }
})

module.exports =router;