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

  
  // now send a response back to the client
  res.json({response: `Hello from yelp, ${req.query.person}`});
});


app.post("/restaurant",async (req, res) => {
    const name = req.body.name;

    const city = req.body.city;
    const state = req.body.state;
    const zip = req.body.zip;
    const type = req.body.type;
    const dollars = req.body.dollars;
    try {
        const template = "SELECT name FROM restaurant WHERE name = $1 AND zip = $2";
        const check = await pool.query(template, [name, zip]);
        if (check.rowCount > 0){
            res.json({status: 'restaurant already registered'});
             }
        else{
           const template1 = "INSERT INTO restaurant(name, city, state, zip, type, dollars) VALUES ($1, $2, $3, $4, $5, $6)";
           const response = await pool.query(template1, [name, city, state, zip, type,dollars]);
            res.json({status: 'restaurant added'})
        }
        
 
    } catch (err){
        res.json({error: 'restaurant not found'});
        console.log(err);
    }

});

app.get("/restaurant",async (req, res) => {
      const name = req.query.name;
    const city = req.query.city;
    const state = req.query.state;
    const zip = req.query.zip;
    const dollars = req.query.dollars;
    var avg = 0;
    try {
        const template = "SELECT * FROM restaurant WHERE name = $1 AND zip = $2";
        const check = await pool.query(template, [name, zip]);
        if (check.rowCount == 0){
            res.json({status: 'restaurant does not exist'});
             }
        else{
              const temp1 = "SELECT * FROM reviews WHERE name = $1 AND zip = $2";
              const checker = await pool.query(temp1, [name, zip]);
             if(checker.rowCount == 0){
                 console.log("no reviews");
		
             }
		var d = 0;
		var added = 0;
		for(d = 0; d < checker.rowCount; d ++){
			added = added + parseInt(checker.rows[d].rating,10);	
			
		}
		
		avg = added/checker.rowCount;
		if(avg.toString().includes(".")){
		 var avgsplit = avg.toString(10).split(".");
		  avgsplit[1] = avgsplit[1].substr(0, 2);
		  avg = avgsplit[0] + "." + avgsplit[1];
		}
		
		
		
		
		
            let results = []
           let result = {};
	var y = 0;
         for(y = 0; y < check.rowCount; y++){
            result.name = check.rows[0].name;
            result.city = check.rows[0].city;
            result.state = check.rows[0].state;
            result.zip = check.rows[0].zip;
            results.stars = avg;
	    results.push(result);
	 }
     
          res.json({status: 'OK', result: results});
        
        
 
 
    
	}
    }catch (err){
        res.json({error: 'not found'});
        console.log(err);
    }

});
app.post("/review",async (req, res) => {
     const name = req.body.name;
    const zip = req.body.zip;
    const reviewer = req.body.reviewer;
    const rating = req.body.rating
    const review = req.body.review;

    try {
	      const temp1 = "SELECT * FROM reviews WHERE name = $1 AND zip = $2";
              const checker = await pool.query(temp1, [name, zip]);
	    if(checker.rowCount > 0){
		res.json({status: 'review already added'});
	    }
	    
	    
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
            result.name = check.rows[0].name;
            result.zip = check.rows[0].zip;
            result.reviewer = check.rows[0].reviewer
            result.rating = check.rows[0].rating;
            result.review = check.rows[0].review;
             results.push(result);
         }
		res.json({status: 'OK', result: results});
        }
  
        }
    
 
     catch (err){
        //res.json({error: 'not found'});
        console.log(err);
    }
});
app.get("/find",async (req, res) => {
      var type = req.query.type;
 
    try {
        const template = "SELECT * FROM restaurant WHERE type LIKE $1";
        const check = await pool.query(template, ["%" + type + "%"]);
        if (check.rowCount == 0){
            res.json({status: 'no restaurants of this type'});
             }
       
           let result = {};
	   let results = [];
	    var g = 0;
	    for(g = 0; g < check.rowCount; g++){
		    result = {};
            result.restaurant = check.rows[0].name;
            result.dollars = check.rows[0].dollars;
             result.city = check.rows[0].city;
            result.state = check.rows[0].state;
            result.zip = check.rows[0].zip; 
		  results.push(result);
	    }
     
          res.json({status: 'OK', result: results});
        
        
 
 
    
	}
	catch (err){
        //res.json({error: 'not found'});
        console.log(err);
    }

});



app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
