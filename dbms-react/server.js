const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
// const fs = require("fs")




const index = require("./Routes/index")

const app = express()
const mongoURI = "mongodb://localhost/E-dealers"


app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));




mongoose.connect(mongoURI,{ useNewUrlParser: true })
.then( () => console.log("successfully connected to mongoDB") )
.catch( (err) => console.log("err",err) )



app.get("/", (req,res) =>{
    res.send("working server");

})  

app.use("/",index)

const port = process.env.PORT || 4000

app.listen(port, () => console.log(`server running on port ${port}`))