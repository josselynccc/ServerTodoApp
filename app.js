require('dotenv').config();
const express = require('express')
const cors = require('cors')
//creamos el servidor
const app = express()
const { dbConnect } = require('./config/mongo')

const PORT = process.env.PORT || 3000
app.use(cors())
app.use(express.json())

app.use('/api/1.0/auth', require('./app/routes/auth'))
app.use('/api/1.0/task', require('./app/routes/task'))

dbConnect()

app.listen(PORT, () => {
    console.log('API lista por el puerto ', PORT)
})

// app.get('/',(req,res) => {
//     res.send(process.env.jwt)
// })

app.get('/',(req,res) => {
    res.send('hola desde app.js')
});


//p08xaZBkQLm791aI
//mongodb+srv://cristheljosselyn1:<password>@cluster0.6sjyqr8.mongodb.net/