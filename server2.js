const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config(); // secure porpose



// const Person = require('./models/person');
// menu item require here
// const menuItem  = require('./models/menuItem')
const bodyparser = require('body-parser');  
// const person = require('./models/person');
app.use(bodyparser.json());
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('welcome to my code ... where i code lots of program');
})


// get method to get user info 








// import the router file 

// const personRouter = require('./routes/personRouter')
// app.use('/person', personRouter);

const personRoutes = require('./routes/personRoutes')
app.use('/person',personRoutes);

const menuItemRoutes = require('./routes/menuItemsRoutes');
app.use('/menuItem',menuItemRoutes);



app.listen(PORT, () =>{
    console.log('server listen on 3000');
})