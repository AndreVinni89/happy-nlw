import express from 'express'

import './database/connection'

const app = express()

app.use(express.json())

app.listen(3333)

app.post('/orphanages', (req, res)=>{ 
    console.log(req.body)
    return res.json({message:"OLA MUNDO"})
})