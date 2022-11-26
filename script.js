function fetchweather(queryURL) {
  var APIKey = "46d767d8cdd700f17ec41548fc1afb0f";

  var city = "Miami";

  var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
}

fetchweather();

function displayWeather(data) {
  const name = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const speed = data.wind;

  console.log(name, icon, description, temp, humidity, speed);
}
