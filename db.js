const mongoose = require('mongoose');
//define the mongo connection url
const mongoURL = 'mongodb://localhost:27017/hotels'

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
