const mongoose =  require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    cart: {
        type: []
    }

})


module.exports = mongoose.model('user',userSchema , 'users')
