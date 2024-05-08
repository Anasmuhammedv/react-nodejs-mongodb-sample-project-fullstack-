import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/llogin-signup-sample')
.then(()=>{
    console.log("db connected");
}).catch((e)=>{
    console.log("failed" , e);
})

const newShema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection =mongoose.model("collection",newShema)
export default collection