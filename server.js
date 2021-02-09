// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance. 
// Cors is a package that lets the browser and server talk to each other without any security interruptions.
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));


// Setup Server
const port = 8000;

// Spin up the server
const server = app.listen(port, listening);


// Callback to debug. This function will run when we execute the listen method to let you know that the server is running and on which port by logging messages to the console. 
function listening(){
    console.log("server running");
    console.log(`running on localhost: ${port}`);
}


// Create a GET route that uses the url /all and returns the JavaScript object named projectData.
app.get('/all', sendData)

function sendData (request, response) {
    response.send(projectData);
}

// Create an array to hold data. Post Route
const data = [];
app.post('/addMovie', addMovie )

function addMovie (req, res){
    console.log(req.body)
    data.push(req.body)
 }
