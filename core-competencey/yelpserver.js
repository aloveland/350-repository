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
    database: "workshopv2"
};

const pool = new Pool(config);


app.get('/hello', (req, res) => {
  // console log the request query json object
  console.log(req.query);
  // console log the person parameter
  console.log(req.query.person);
  // now send a response back to the client
  res.json({response: `Hello from yelp, ${req.query.person}`});
});


app.post("/create-user",async (req, res) => {
    const name = req.body.name;
    console.log("this is username");
    console.log(username);
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const dollars = req.body.dollars;
    try {
        const template = "SELECT name FROM restaurant WHERE name = $1 AND zpi";
        const check = await pool.query(template, [username]);
        if (check.rowCount > 0){
            res.json({status: 'username taken'});
             }
        else{
           const template1 = "INSERT INTO users(username, firstname, lastname, email) VALUES ($1, $2, $3, $4)";
           const response = await pool.query(template1, [username, firstname, lastname, email]);
            res.json({status: 'user added'})
        }
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }

});
