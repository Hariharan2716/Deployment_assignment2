require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3010;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=> {
  res.json({
    message:"Environment variable demo.",
    environment: process.env.NODE_ENV,
    api_key: process.env.API_KEY ? "API key is set." : "API key is missing."
  })
})

app.listen(PORT, ()=>{
  console.log(`Server is running in PORT ${PORT} in ${process.env.NODE_ENV} mode`)
})