const mongoose = require('mongoose')

//define connection string
mongoose.connect('mongodb://localhost:27017/indordecor',()=>{
    console.log('MongoDB connected successfully');
})

// modal
const Design=mongoose.model('Design',{
    id:Number,
    title:String,
    image:String,
    budget:String
})

const User = mongoose.model('User',{
    uname:String,
    password:String,
    email:String
})

module.exports={
    Design,User
}