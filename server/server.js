const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.get("/",(req,res)=>
{
    console.log("sdqsd")
    res.json("hello")
}
)
app.listen(3001,()=> {
    console.log("server running")
})