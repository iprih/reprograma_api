const express = require("express")
const app = express()

app.all("*", function(req, res, next){
    console.log("passamos pelo app, irruuuuuuu!!!!")
    next()
})
//rotas
const index = require("./routes/index")
const alunas = require('./routes/alunasRoute')

app.use('/', index)
app.use("/alunas", alunas)

module.exports = app