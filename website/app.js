/* Global Variables */

// Base URL and API Key for OpenWeatherMap API
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
let apiKey = '9ea15014039e4036b1113881c7de76a0';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);

// Function called by event listener
function performAction(e){
  const newZip = document.getElementById('zip').value;
  const content = document.getElementById('feelings').value;
// Make an API call
getTemperature(baseURL, newZip, apiKey)
.then(function(userData){
  // console.log(userData)
  // Add data to POST request
  postData('/add', {date:newDate, temp:userData.main.temp, content})
}).then(function(newData){
  updateUI()
});
}

/* Function to GET Web API Data*/
const getTemperature = async (baseURL, newZip, apiKey) => {
  // res equals to the result of fetch function
  const res = await fetch(baseURL + newZip + apiKey);
  try {
    // userData equals to the result of fetch function
    const userData = await res.json();
    return userData;
  } catch (error) {
    console.log("error", error);
  }
}

/* Function to POST data */
const postData = async ( url = '', data = {})=>{
    console.log(data)
      const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
  
      try {
        const newData = await response.json();
        // console.log(newData);
        return newData
      }catch(error) {
      console.log("error", error);
      // appropriately handle the error
      }
  } 

  // Update user interface
const updateUI = async () => {
  const request = await fetch('/all');
  try{
    const allData = await request.json();
    document.getElementById('date').innerHTML = allData.date;
    document.getElementById('temp').innerHTML = allData.temp;
    document.getElementById('content').innerHTML = allData.content;

  }catch(error){
    console.log("error", error);
  }
}



// 9ea15014039e4036b1113881c7de76a0

// https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid:${APIkey}&units=metric

// projectData['date'] = req.body.date;
//   projectData['temp'] = req.body.temp;
//   projectData['content'] = req.body.content;
//   res.send(projectData);







