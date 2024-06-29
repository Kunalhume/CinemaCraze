const express = require("express");
const app = express();

const bodyParser = require('body-parser');
const cors = require("cors");
const cookieParser = require("cookie-parser");
require('dotenv').config();
require('./database');

const PORT = 8000;

app.use(bodyParser.json());
const allowedorigin = ['http://localhost:3000'];  // Add more origins as allowed

// Configuring CORS with credentials
app.use(
    cors({
        origin: function(origin , callback){
            if(!origin || allowedorigin.includes(origin)){
                return callback(null, true);
            }
            else{
                callback(new Error('Not allowed by CORS'));
            }
        },
        credentials: true, //Allowed Credentials

    })
);
app.use(cookieParser());

app.get('/', (req,res)=>{
    res.json({message: 'The API is working'});
});


app.listen(PORT , ()=>{
    console.log(`Server running on PORT : ${PORT}`);
});