import express from 'express'
import cors from 'cors'
import collection from './mongi.js'
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())   


app.get('/',cors,(req,res)=>{

})

app.post('/',async(req,res)=>{
    const {email,password}=req.body

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json('not exist')
        }
    } catch (error) {
        res.json('internal server error')
        
    }
})



app.post('/signup',async(req,res)=>{
    const {email,password}=req.body

    const data = {
        email:email,
        password:password
    }

    try {
        const check = await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json('not exist')
            await collection.insertMany([data])
        }
    } catch (error) {
        res.json('internal server error')
        
    }
})

app.listen(3004,()=>{
    console.log(`server is running on port 8000`);
})