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
        if(workshop == null || workshop == ''){
            console.log('null');
            const shop = "SELECT DISTINCT workshopgroup FROM workshop WHERE workshopgroup is not NULL";
            const response = await pool.query(shop);
            const results = response.rows.map((row) => {return (row.workshopgroup)})
            res.json({workshops: results});
        }
        
        
        const tablename = workshop;
        const shop = "SELECT name FROM workshop WHERE workshopgroup = $1";
        console.log(shop,[workshop]);
        const response = await pool.query(shop, [workshop]);
        if(response.rowCount == 0){
            res.json({error: "workshop not found"});
        }
        const results = response.rows.map((row) => {return (row.name)})
        res.json({attendees: results});
    } catch (err){
        res.json({error: "workshop not found"});
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
