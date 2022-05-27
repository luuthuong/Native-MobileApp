const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    create:{
        type:Date
    },
    information:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Information'
    }
});
const User=mongoose.model("User",userSchema)

const informationSchema=new mongoose.Schema({
    fullname:{
        type:String,
    },
    birthday:{
        type:String
    },
    age:{
        type:Number
    },
    skill:{
        type:[String]
    },
    position:{
        type:String
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    }
})
const Information=mongoose.model("Information",informationSchema);

module.exports ={
    User,
    Information
}