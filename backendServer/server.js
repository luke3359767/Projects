const express= require('express');
const app= express()

app.use(express.static("public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.set('view engine',"ejs")
// app.use(logger)

// app.get('/',logger,(req,res,next)=>{
//     console.log('Here')
//     // res.sendStatus(500)
//     // res.download('server.js')
//     // res.json({'Hi':"error"})
//     res.render('index',{text:"world"})

// })


const userRouter=require('./router/users')

app.use('/users',userRouter)

function logger(req,res, next){
    console.log(req.originalUrl)
    next()
}

app.listen(3000)