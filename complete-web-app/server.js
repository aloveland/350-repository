require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set("port", 8080);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "food_nutrition"
};

const pool = new Pool(config);
app.get("/get", async (req, res) =>{
  const term = req.body.term;
  try{
    const template = "SELECT * FROM workshopinfo where description LIKE '%$1%'";
    const response = await pool.query(template,[term]);
    let results = [];
    let temp = {};
    res.json({result: response});
    console.log(response);
  
  }
  catch(err){
        res.json({error: 'workshop not found'});
        console.log(err);
  
}



});
