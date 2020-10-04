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
    database: "workshopv1"
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

app.get("/api",async (req, res) => {
    const workshop = req.query.workshop;
    console.log(workshop);
    try {
        const shop = "SELECT name FROM hardworkers WHERE name is not NULL";
        const response = await pool.query(shop, [workshop]);
        const results = response.rows.map((row) => {return (row.name)})
        res.json({result: results});
    } catch (err){
        console.log(err);
    }

});



app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
