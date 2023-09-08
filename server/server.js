require('dotenv').config();
const express = require('express')
const cors = require('cors')
const app = express()
require('./database');
const paymentRouter = require('./routes/paymentRoutes')
const port = process.env.PORT || 5000


app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
}) 

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})