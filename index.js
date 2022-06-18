// configuração
require('dotenv').config()
const { application } = require('express')
const express = require('express')
const req = require('express/lib/request')
const { contentType } = require('express/lib/response')
const res = require('express/lib/response')
const mongoose = require('mongoose')
const app = express()


//ler json
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())
//rotas api
const personRoutes = require("./routes/personRoutes")

app.use('/person', personRoutes)

//endpoint inicial
app.get('/', (req, res) =>{

    //view req

    res.json({message: 'API INICIADA'})

})
app.options('/', (req, res) => {
    res.setHeader('ALLOW', ["POST", "GET", "PATCH", "DELETE"])
    res.setHeader('Content-Type', req.headers.accept )
    res.status(200).json('ok')
})

//porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@clusterapinext.h7wzlrn.mongodb.net/?retryWrites=true&w=majority`)
.then(()=>{
    console.log('conectamos ao MongoDB!')
    app.listen(3001)
})
.catch((err)=> console.log(err))
