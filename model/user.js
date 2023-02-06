// mongodb+srv://my:<password>@cluster0.5zb5hem.mongodb.net/?retryWrites=true&w=majority

const mongoose=require("mongoose");
mongoose.set('strictQuery', false);
const User=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true ,unique:true},
    password:{type:Number,required:true},

})

const User1 = mongoose.model('UserData',User);

module.exports = User1;