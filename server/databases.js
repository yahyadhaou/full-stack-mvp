var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var foodSchema = new mongoose.Schema({
    number:Number,
    name:String,
    description:String,
    imageUrl:String,
    note:Number
})

var food = mongoose.model("food",foodSchema);
 

module.exports = food;