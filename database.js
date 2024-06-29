const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URL, {
    dbName: process.env.DB_NAME
}).then(()=>{
    console.log("Connected Database Successfully");
}).catch((err)=>{
    console.log('Error Connecting Database : '+ err );
})