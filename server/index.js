const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { apiRouter } = require('./routes/api')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

app.get("/",(req,res) => {
  res.send("Home Route for the server")
})
app.use('/api',apiRouter)


mongoose.connect("mongodb://localhost/sampledb")
.then(() => console.log("Database Successfully Connected"))
.catch((e) => console.log("Database Error", e))

const PORT = process.env.PORT || 5000;
app.listen(PORT,() => console.log(`Server Running on PORT ${PORT}`))