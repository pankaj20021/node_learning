const express = require('express')
const app = express();

// const db = require('./db')

app.get('/', (req, res) => {
    res.send("hellow world  this is my world!")
})


app.get('/chicken', (req, res) => {
    res.send("<h1>i loves chicken when i eat ,delicious disc</h1> ")
})
app.get('/girl', (req, res) => {
    res.send("i have no such a girlfriend as you that i can loves like that")
})

app.get('/dahi', (req, res) => {

    var costomise_dahi = {
        name: "dahi",
        locatio: "lko",
        made_by: "mummy ",
        obtained: "from milk"
    }
    res.send(costomise_dahi);
})

app.post('/student', (req, res) => {
    res.send("hey student ")
    console.log("data is post ");
})


app.listen(3000, () => {
    console.log("server listing on the port: 3000");
}); 