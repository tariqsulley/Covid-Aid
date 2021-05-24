const express = require('express')
const app  = express()
app.use(express.json())

var covid_data = []

app.get('/', function(req,res){
    res.send(covid_data)
})

app.listen(8080, ()=> console.log("Server is running"))

app.post('/',function(req,res){
    var data = req.body
    console.log(data);
    covid_data.push(data);
    res.send("Data  uploaded")
})
