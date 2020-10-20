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
  res.json({response: `Hello, ${req.query.person}`});
});

app.post("/create-user",async (req, res) => {
    const username = req.query.username;
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const email = req.query.email;
    try {
        const template = "SELECT username FROM users WHERE username = $1";
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


app.get("/list-users",async (req, res) => {
    console.log("here");
    const type = req.query.type;
    try {
       if(type == "full"){
           console.log("in full");
           const template = "SELECT * FROM users WHERE username is NOT NULL";
           const response = await pool.query(template);
           console.log(response);
           let results = [];
           let temp = {};
           for(i = 0;i < response.rowCount; i++){
                let temp = {};
                temp.username = response.rows[i].username;
                temp.firstname = response.rows[i].firstname;
                temp.lastname = response.rows[i].lastname;
                temp.email = response.rows[i].email;
                results.push(temp);
                

           }
           res.json({users: results});
                }
        else if(type == "summary"){
          const template = "SELECT * FROM users WHERE username is NOT NULL";
          const response = await pool.query(template);
          let results = [];
           let temp = {};
           for(i = 0;i < response.rowCount; i++){
                let temp = {};
                temp.firstname = response.rows[i].firstname;
                temp.lastname = response.rows[i].lastname;
                results.push(temp);
                

           }
           res.json({users: results});
            
        }
        
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }

});

app.post("/add-workshop", async (req, res) => {
    const title = req.query.title;
    const date = req.query.date;
    const location = req.query.location;
    const maxseats = req.query.maxseats;
    const instructor = req.query.instructor;
    try{
        const template = "SELECT * FROM workshopinfo WHERE title = $1 AND date = $2 AND location = $3";
        const response = await pool.query(template,[title, date, location]);
        if(response.rowCount > 0){
            ress.json({ status: 'workshop already in database'});
            }
        else{
            const template = "INSERT INTO workshopinfo (title, date, location, maxseats, instructor) VALUES ($1, $2, $3, $4, $5)";
            const response = await pool.query(template, [title, date, location, maxseats, instructor]);
            res.json({status: 'workshop added'});
        }
    } catch (err){
        // whoops
        console.log(err);
    }

});
app.get("/list-workshops",async (req, res) => {
    
    
    try{
    const template = "SELECT * FROM workshopinfo where title is NOT NULL";
    const response = await pool.query(template);
    let results = [];
    let temp = {};
    for(i = 0; i < response.rowCount; i++){
        let temp = {};
        temp.title = response.rows[i].title;
        temp.date= response.rows[i].date;
        temp.location = response.rows[i].location;
        temp.maxseats = response.rows[i].maxseats;
        temp.instructor = response.rows[i].instructor;
        results.push(temp);

     }
         res.json({workshops: results});  
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }

});

app.post("/enroll", async (req, res) => {
    const title = req.query.title;
    const date = req.query.date;
    const location = req.query.location;
    const username = req.query.username;
    try{
        console.log("1");
        const usertest = "SELECT * FROM users WHERE username = $1";
        const userresponse = await pool.query(usertest,[username]);
        console.log("2");
        console.log(userresponse);
        if(userresponse.rowCount == 0){
            console.log("3");
            const useradd = "INSERT INTO users (username) VALUES($1)";
            console.log("4");
            const useraddresponse = await pool.query(useradd,[username]);
            console.log("5");
            res.json({status: 'user not in database, user added'});
        }
        const workshoptest = "SELECT * FROM workshopinfo WHERE title = $1 AND date = $2 AND location = $3";
        const workshopresponse= await pool.query(workshoptest,[title, date, location]);
        if(workshopresponse.rowCount == 0){
            res.json({status: 'workshop does not exist'});
        }
        const userinshop = "SELECT * FROM attendees WHERE username = $1 AND title = $2 AND date = $3 AND location = $4";
        const userinshopresponse = await pool.query(userinshop,[username, title, date, location]);
        console.log("----");
        console.log(userinshopresponse);
        if(userinshopresponse.rowCount > 0){
            res.json({status: 'user already enrolled'});
        }
  
    } catch (err){
        // whoops
        console.log(err);
    }

});



app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
