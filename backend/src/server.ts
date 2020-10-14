import express from 'express'

const app = express()

app.listen(3333)

app.get('/users', ()=>{ 
    console.log("Ola")
})