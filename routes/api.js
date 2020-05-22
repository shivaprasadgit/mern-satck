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
       const data=req.body;
        const newBlogPost= new BlogPost(data)
          newBlogPost.save((error)=>{
              if(error){
                  res.status(500).json({
                      msg:'your data is not stored in the database'
                  })
                  return;
              }
              else{
                 return res.status(200).json({
                      msg:'your data has been saved !!!'
                  });
              }
          });
        });
       
    router.get('/name',(req,res)=>{
        const data={
            name:'nagarjuna',
            place:'anantapur'
        }
        res.json(data);
        });

        module.exports = router;