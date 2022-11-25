// function fetchweather(queryURL) {
//   var APIKey = "46d767d8cdd700f17ec41548fc1afb0f";
//   var city;

//   var queryURL =
//     "http://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=" +
//     APIKey;

//   fetch(queryURL)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// fetchweather();

// function DisplayWeather(data) {
//   const name = data;
//   const icon, description = data.weather;
//   const temp, humidity = data.main;
//   const speed = data.wind;

// }

// function fetchweather(queryURL) {
//   var APIKey = "46d767d8cdd700f17ec41548fc1afb0f";

//   var lat = 40.73061;
//   var lon = -73.935242;

//   var queryURL = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`;

//   fetch(queryURL)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }

// fetchweather();

function fetchweather(queryURL) {
  var APIKey = "46d767d8cdd700f17ec41548fc1afb0f";

  var city = "Miami";

  var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchweather();
