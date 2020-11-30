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

app.get('/hello', (req, res) => {
  // console log the request query json object
  console.log(req.query);
  // console log the person parameter
  console.log(req.query.person);
  // now send a response back to the client
  res.json({response: `Hello, ${req.query.person}`});
});


app.get("/search",async (req, res) => {
    console.log("here");
    const term = req.query.term;
    console.log(term);
    try {
       const template = "SELECT * FROM entries WHERE CONTAINS(description, $1)";
       const check = await pool.query(template,[term]);
        console.log(check);
        res.json({result: check});
        
    } catch (err){
        res.json({error: 'query failed'});
        console.log(err);
    }

});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
