const mongoose = require('mongoose');
require('dotenv').config();
//define the mongo connection url
// const mongoURL = 'mongodb://localhost:27017/hotels' // local connection 

// const mongoURl = process.env.MONGODB_URL_Local; // its a online local url 

const mongoURL =process.env.MONGODB_URL;  // online url connection 


mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db = mongoose.connection;

db.on("connected", ()=>{
    console.log("connected to mongoDb server ");
})
db.on("error", (err)=>{
    console.error("show error in  mongoDb server ");
})

db.on("disconnected", (err)=>{
    console.log("disconnected to mongoDb server ");
})


// export the connection  

module.exports = db;
