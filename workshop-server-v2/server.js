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
    const username = req.body.username;
    console.log("this is username");
    console.log(username);
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const email = req.body.email;
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
    const title = req.body.title;
    const date = req.body.date;
    const location = req.body.location;
    const maxseats = req.body.maxseats;
    const instructor = req.body.instructor;
    try{
        const template = "SELECT * FROM workshopinfo WHERE title = $1 AND date = $2 AND location = $3";
        const response = await pool.query(template,[title, date, location]);
        if(response.rowCount > 0){
            res.json({ status: 'workshop already in database'});
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
    const title = req.body.title;
    const date = req.body.date;
    const location = req.body.location;
    const username = req.body.username;
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
        
        //maxseats
        const seatCheck = "SELECT * FROM attendees WHERE title = $1 AND date = $2 AND location = $3";
        const SeatResponse = await pool.query(seatCheck,[title, date, location]);
        const maxseatsCheck = "SELECT * FROM workshopinfo WHERE title = $1 AND date = $2 AND location = $3";
        const maxseatsResponse = await pool.query(maxseatsCheck,[title, date, location]);
        console.log("7");
        console.log(title);
        console.log(date);
        console.log(location);
        console.log(maxseatsResponse);
        let seaters = {};
        seaters.num = maxseatsResponse.rows[0].maxseats;
        if(SeatResponse.rowCount >= (seaters.num)){
            res.json({status: 'no seats available'})
            reutrn;
        }
        
        //add user
        const addToShop = "INSERT INTO attendees (username, title, date, location) VALUES($1, $2, $3, $4)";
        const addToShopResponse = await pool.query(addToShop, [username, title, date, location]);
        res.json({status: 'user added'});
  
    } catch (err){
        // whoops
        console.log(err);
    }

});
app.get("/attendees", async (req, res) => {
    const title = req.query.title;
    const date = req.query.date;
    const location = req.query.location;
    try{
        const template = "SELECT * FROM workshopinfo WHERE title = $1 AND date = $2 AND location = $3";
        const response = await pool.query(template,[title, date, location]);
        if(response.rowCount == 0){
            res.json({error: 'workshop doesnt exist'});
            }
        const template2 = "SELECT * FROM attendees WHERE title = $1 AND date = $2 AND location = $3";
        const response2 = await pool.query(template2,[title, date, location]);
        let users = [];
        let temp = {};
        console.log(response2);
        for(i = 0; i < response2.rowCount; i++){
            temp = {};
            temp.username = response2.rows[i].username;
            users.push(temp);
        }   
        console.log("this is users");
        console.log(users);
        
        //pull users
        let temp2 = {};
        let results = [];
        for(i = 0; i < response2.rowCount;i++){
            temp2 = {};
            const template3 = "SELECT * FROM users WHERE username = $1";
            const response3 = await pool.query(template3,[users[i].username]);
            console.log("response3");
            console.log(response3);
            temp2.firstname = response3.rows[0].firstname;
            temp2.lastname = response3.rows[0].lastname;
            console.log("heres rows btw8888888888");
            console.log(response3.rows[0].firstname);
            console.log(response3.rows[0].lastname);
            results.push(temp2);
        }
        res.json({attendees: results});
     
    } catch (err){
        // whoops
        console.log(err);
    }

});
app.delete("/delete-user",async (req, res) => {
    const username = req.body.username;
    
    try{
        const template = "DELETE FROM users WHERE username = $1";
        const response = await pool.query(template,[username]);
        const template2 = "DELETE FROM attendees WHERE username = $1";
        const response2 = await pool.query(template2,[username]);
        res.json({status: 'deleted'});
 
    } catch (err){
        res.json({error: 'error/user not in db'});
        console.log(err);
    }

});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); 
});
