const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const path=require('path')

const app=express();
const PORT=process.env.PORT || 3001
// const MONGODB_URI="mongodb+srv://shiva123:shiva123@shivaprasad-l5j7k.mongodb.net/test?retryWrites=true&w=majority"
    
// mongoose.connect(MONGODB_URI || 'mongodb://localhost/mern-app',{
    mongoose.connect('mongodb://localhost/mern-app',{
        
    useNewUrlParserL:true,
    useUnifiedTopology:true

});
mongoose.connection.on('connected',()=>{
    console.log('mongodb is connected successfuly')
});

const Schema=mongoose.Schema;
const BlogPostSchema=new Schema({
    title:String,
    body:String,
    date:{
        type:String,
        default:Date.now()
    }
})
const BlogPost=mongoose.model('BlogPost',BlogPostSchema);
const data={
    title:'mern-stak class',
    body:'practice more'
}
const newBlogPost=new BlogPost(data);
// newBlogPost.save((error)=>{
// if(error){
//     console.log('something went wrong');
//     }else{
//         console.log('data saved successfuly');
//     }
// })

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
const data={
    nameL:'shiva',
    place:'anantapur'
    
};
 BlogPost.find({}).then((data)=>{
    console.log('data:',data);
    res.send(data)
 }).catch((error)=>{console.log('error', error)});
//  res.json(data);
 });

app.get('/api',(req,res)=>{
    const data={
        name:'nagarjuna',
        place:'anantapur'
    }
    res.json(data);
    });

app.listen(PORT,console.log(`server is running successfully on port ${PORT}`))    