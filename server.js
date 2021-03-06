
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors=require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001; 

const routes = require('./routes/api');


mongoose.connect("mongodb+srv://shiva123:shiva123@shivaprasad-l5j7k.mongodb.net/test?retryWrites=true&w=majority" || 'mongodb://localhost/mern-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected!!!!');
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));



if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}



app.use(cors());
app.use(morgan('tiny'));
app.use('/api', routes);
if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
}



app.listen(PORT, console.log(`Server is starting at ${PORT}`));