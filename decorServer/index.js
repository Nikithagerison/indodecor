const express=require('express')
const dataService=require('./services/data.Service')
const cors=require('cors')
const app=express()

app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000,()=>{
    console.log('Server Started At 3000');
})

app.use(express.json())

//api to get all products
app.get('/all-designs',(req,res)=>{
    dataService.getDesigns()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})


//api to get particular product :m--change--
app.get('/all-designs/id',(req,res)=>{
    dataService.getParticular()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//to resolve client requests:LOGIN
app.post('/login',(req,res)=>{
    console.log(req.body);
    dataService.login(req.body.uname,req.body.password)
    .then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)
    })

})


//to resolve client requests:REGISTER
app.post('/register',(req,res)=>{
    console.log(req.body);
    dataService.register(req.body.email,req.body.uname,req.body.password)
    .then((result)=>{
        console.log(result);
        res.status(result.statusCode).json(result)
    })

})