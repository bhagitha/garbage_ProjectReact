const express = require('express')
const bodyParser=require('body-parser')
const app = express()



const BinRouter = require('./src/routes/BinsRouter')
const RegisterRouter = require('./src/routes/RegisterRouter')
const volunteersRouter = require('./src/routes/volunteersRouter')
const Wasterouter = require('./src/routes/Wasterouter')
const LoginRouter = require('./src/routes/LoginRouter')
const RecyclerRouter = require('./src/routes/RecyclerRouter')

app.use(express.json())
app.use(express.static('./public'));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });
app.set('view engine','ejs')
app.set('views',__dirname+'/src/views')
app.use('/bin',BinRouter)
app.use('/api',RegisterRouter)
app.use('/volunteers',volunteersRouter)
app.use('/waste',Wasterouter)
app.use('/login',LoginRouter)
app.use('/recycle',RecyclerRouter)

app.get('/',(req, res)=>{
    res.render('index',{
        title:'Smart Garbage Collector',
        sidebar
    })
})
app.listen(3000, ()=>{
    console.log("3000 listening")
})