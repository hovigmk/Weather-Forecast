function fetchweather(queryURL) {
  var APIKey = "46d767d8cdd700f17ec41548fc1afb0f";

  var city = "Toronto";
  var lat = 43.653225;
  var lon = -79.383186;
  var queryURL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit={limit}&appid=${APIKey}`;

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

// function displayWeather(data) {
//   const name = data;
//   const { icon, description } = data.weather[0];
//   const { temp, humidity } = data.main;
//   const speed = data.wind;

//   console.log(name, icon, description, temp, humidity, speed);
// }

fetchweather();
