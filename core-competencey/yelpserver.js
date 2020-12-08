require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");

const app = express();


app.set("port", 3000);

app.use(bodyParser.json({ type: "application/json" }));
app.use(bodyParser.urlencoded({ extended: true }));

const Pool = require("pg").Pool;
const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "yelp"
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


app.post("/restaurant",async (req, res) => {
    const name = req.body.name;
    console.log("this is name");
    console.log(name);
    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const dollars = req.body.dollars;
    try {
        const template = "SELECT name FROM restaurant WHERE name = $1 AND zip = $2";
        const check = await pool.query(template, [name, zip]);
        if (check.rowCount > 0){
            res.json({status: 'restaurant already registered'});
             }
        else{
           const template1 = "INSERT INTO restaurant(name, city, state, zip, dollars) VALUES ($1, $2, $3, $4, $5)";
           const response = await pool.query(template1, [name, city, state, zip, dollars]);
            res.json({status: 'restaurant added'})
        }
        
 
    } catch (err){
        res.json({error: 'restaurant not found'});
        console.log(err);
    }

});

app.get("/restaurant",async (req, res) => {
      const name = req.query.name;
    console.log("this is name");
    console.log(name);
    const city = req.query.city;
    const state = req.query.state;
    const zip = req.query.zip;
    const dollars = req.query.dollars;
    try {
        const template = "SELECT * FROM restaurant WHERE name = $1 AND zip = $2";
        const check = await pool.query(template, [name, zip]);
        if (check.rowCount == 0){
            res.json({status: 'restaurant does not exist'});
             }
        else{
              const temp1 = "SELECT * FROM reviews WHERE name = $1 AND zip = $2";
              const reviews = await pool.query(temp1, [name, zip]);
             if(reviews.rowCount == 0){
                 console.log("no reviews");
           
            console.log("this is reviews " + reviews);
           let result = {};
            result.name = check.rows[0].name;
            result.city = check.rows[0].city;
            result.state = check.rows[0].state;
            result.zip = check.rows[0].zip; 
     
          res.json({status: result});
        }
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }

});
app.post("/review",async (req, res) => {
     const name = req.body.name;
    console.log("this is name");
    console.log(name);
    const zip = req.body.zip;
    const reviewer = req.body.reviewer;
    const rating = req.body.rating
    const review = req.body.review;

    try {
           const template1 = "INSERT INTO reviews(name, zip, reviewer, rating, review) VALUES ($1, $2, $3, $4, $5)";
           const response = await pool.query(template1, [name, zip, reviewer, rating, review ]);
            res.json({status: 'OK'})

        
 
    } catch (err){
        res.json({error: 'review error'});
        console.log(err);
    }
    
});
app.get("/reviews",async (req, res) => {
      const name = req.query.name;
    console.log("this is name");
    console.log(name);
    const zip = req.query.zip;
    const state = req.query.state;
    try {
        const template = "SELECT * FROM reviews WHERE name = $1 AND zip = $2";
        const check = await pool.query(template, [name, zip]);
        if (check.rowCount == 0){
            res.json({status: 'no reviews exist'});
             }
        else{
            let results = [];
            let result = {};
            var i = 0;
         for(i = 0; i < check.rowCount; i++){
           result = {};
            console.log(check);
            result.name = check.rows[0].name;
            result.zip = check.rows[0].zip;
            result.reviewer = check.rows[0].reviewer
            console.log(check);
            result.rating = check.rows[0].rating;
            result.review = check.rows[0].review;
             results.push(result);
         }
        }
     
          res.json({status: 'OK', result: results});
        }
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }
});
app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});