function fetchweather(queryURL) {
  var APIKey = "46d767d8cdd700f17ec41548fc1afb0f";

  var city = "Miami";

  var queryURL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}`;

  fetch(queryURL)
    .then((response) => response.json())
    .then((data) => console.log(data));
}

fetchweather();
