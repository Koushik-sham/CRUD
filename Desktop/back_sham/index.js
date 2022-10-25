const express = require('express');
const dotenv = require('dotenv');
require('./src/db/connection');
const studentRouter = require('./src/routers/apis')

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.use(express.json())
app.use(studentRouter)



app.listen(port,()=>{
    console.log(`connecting is setup at ${port}`);
})