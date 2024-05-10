import express from 'express'
import cors from 'cors'
import collection from './src/assets/components/mongi.js'
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
            return  res.json('not exist')
            
        }

        // const validUser = check.password==password
        // console.log(validUser);
        // if(validUser==true){
        //     // alert("user logged successfully")
        //    return res.json("exist") 
        // }
        // else{
        //     alert("please enter valid password")
        // }
        

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


app.get('/getUsers', async (req, res) => {
    try {
      const users = await collection.find();
      res.json(users);
    } catch (error) {
      res.status(500).json(error); // Return the error object itself
    }
  });

app.listen(3004,()=>{
    console.log(`server is running on port 8000`);
})