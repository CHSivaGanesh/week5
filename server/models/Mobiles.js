const mongoose =  require('mongoose')

const Schema = mongoose.Schema


const MobilesSchema = new Schema({
    company : String,
    model_name:String,
    model_no:String,
    type:String,
Operating_system:String,
ram:String,
rom:String,
price:Number,
display:String,
processor:String,
graphic_card:String,
color:String,
})

module.exports = mongoose.model('mobiles',MobilesSchema,'Mobiles')