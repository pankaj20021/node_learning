const express = require('express');
const app = express();
const db = require('./db');
// const Person = require('./models/person');
// menu item require here
// const menuItem  = require('./models/menuItem')
const bodyparser = require('body-parser');  
// const person = require('./models/person');
app.use(bodyparser.json());

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

app.listen(3000, () =>{
    console.log('server listen on 3000');
})