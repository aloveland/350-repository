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
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const username = req.query.username;
    const email = req.query.email;
    try {
        const template = "SELECT username FROM users WHERE username = $1";
        const check = await pool.query(template, [username]);
        if (check.rowCount > 0){
            res.json({status: 'username taken'});
             }
        else{
           const template1 = "INSERT INTO users(firstname, lastname,username, email) VALUES ($1, $2, $3, $4)";
           const response = await pool.query(template1, [firstname, lastname, username, email]);
            res.json({status: 'user added'})
        }
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }

});

app.post("/create-user",async (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    const username = req.query.username;
    const email = req.query.email;
    try {
        const template = "SELECT username FROM users WHERE username = $1";
        const check = await pool.query(template, [username]);
        if (check.rowCount > 0){
            res.json({status: 'username taken'});
             }
        else{
           const template1 = "INSERT INTO users(firstname, lastname,username, email) VALUES ($1, $2, $3, $4)";
           const response = await pool.query(template1, [firstname, lastname, username, email]);
            res.json({status: 'user added'})
        }
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }

});

app.post("/list-users",async (req, res) => {
    const type = req.query.type;
    try {
       if(type == "full"){
           const template = "SELECT * FROM users WHERE username is NOT NULL";
           const response = await pool.query(template1);
           const results = response.rows.map((row) => {return (row.workshopgroup)})
           res.json({users: results});
                }
        if(type == "summary"){
           const template = "SELECT firstname, lastname FROM users WHERE username is NOT NULL";
           const response = await pool.query(template1);
           const results = response.rows.map((row) => {return (row.workshopgroup)})
           res.json({users: results}); 
            
        }
        
             }
        else{
            res.json({status: 'error'})
        }
        
 
    } catch (err){
        res.json({error: 'workshop not found'});
        console.log(err);
    }

});

app.post("/api", async (req, res) => {
    const attendee = req.body.attendee;
    const workshop = req.body.workshop;
    console.log('this is attendee');
    console.log(attendee);
    try {
        if(attendee == null || workshop == null || workshop == '' || attendee == ''){
            res.json({error: "parameters not given"});
        }
        
        const template = "SELECT * FROM workshop where name = $1 AND workshopgroup = $2";
        console.log('this is template');
        console.log(template);
        const check = await pool.query(template, [attendee, workshop]);
        console.log('this is check by the way');
        console.log(check);
        //console.log(check.rows[0].name);
        //console.log(check.rows[0].workshopgroup);
         //if (check.rows[0].name == attendee && check.rows[0].workshopgroup == workshop){
           // res.json({error: 'attendee already enrolled'});
             //} ^prior attempt that gave errors.
        if (check.rowCount > 0){
            res.json({error: 'attendee already enrolled'});
             }
        
        else {
            // else let's insert it
            const template1 = "INSERT INTO workshop (name, workshopgroup) VALUES ($1, $2)";
            const response = await pool.query(template1, [attendee, workshop]);
            res.json({attendee: attendee, workshop: workshop});
        }
    } catch (err){
        // whoops
        console.log(err);
    }

})

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
