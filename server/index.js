var express = require("express");
const cors=require("cors")
const mongoose=require("mongoose")
const Food=require("./databases.js");

var app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));


app.get("/food",  async (req, res) => {
  console.log("hello");
  try {
    await Food.find({}).then(result => res.send(result))
  }
  catch (err) { console.log(err) }
});
app.post("/food",async (req, res)=>{
try{ 
  let new_food = new Food
  ({
    number: req.body.number,
    name: req.body.name,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    note:req.body.note
  })
  await new_food.save()
  res.send("data saved")}
  catch(err){console.log(err)}

});
app.delete("/delete/:id",async(req,res)=> {
  try{
    await Food.findByIdAndDelete({_id:req.params.id})
      res.send("deleted");
    }
    catch(err){console.log(err)}
  }
    )
    app.put("/update/:id",async(req,res)=>{
try{
  await Food.findByIdAndUpdate({_id:req.params.id},{note:req.body.note})
  res.send("updated")
}
catch(err){console.log(err)}


    })
  

var PORT = 4000;

app.listen(PORT, function () {
  console.log("RESTful API listening on http://localhost:" + PORT);
});

mongoose.connect("mongodb+srv://yahyadhaou:Yaya2410@cluster0.dcakgmu.mongodb.net/?retryWrites=true&w=majority",(err,done)=>{
if(err){console.log(err)}
  if(done){console.log("Database troahebobikom")};}
)