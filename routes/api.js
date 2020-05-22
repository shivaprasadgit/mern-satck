const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');




router.get('/',(req,res)=>{
    
     BlogPost.find({}).then((data)=>{
        console.log('data:',data);
        res.json(data)
     }).catch((error)=>{console.log('error', error)});
    //  res.json(data);
     });
    
     router.post('/save',(req,res)=>{
       console.log('body:',req.body);
        res.json({msg:'we received your data'});
        });
    router.get('/name',(req,res)=>{
        const data={
            name:'nagarjuna',
            place:'anantapur'
        }
        res.json(data);
        });

        module.exports = router;