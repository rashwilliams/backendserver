const express = require ("express")
const path = require ("path")
const bodyParser = require("body-parser");


const app = express ()

app.use(bodyParser.urlencoded ({extended:false}));

app.get ("/", (req, res) => {
    res.sendFile (path.join (__dirname, "..", "public", "index.html"))

})

app.post ("/email/send", (req, res)=>{
    console.log ("request received")
    
    console.log (email)

});


module.export = app