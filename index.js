require("dotenv").config();

if(process.env.NODE_ENV === "production"){
  console.log("Running in Production Mode");

} else if (process.env.NODE_ENV === "development"){
  console.log("Runnig in Development mode");
}else{
  console.log("Unknown Environment Mode");
}

console.log("Server running on port:",process.env.PORT);
console.log("Your API key:", process.env.API_KEY);
console.log("Environment:", process.env.NODE_ENV);

const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
