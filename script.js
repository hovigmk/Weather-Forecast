var search = document.getElementById("search-button");
search.addEventListener("click", fetchWeather);

var APIKey = "46d767d8cdd700f17ec41548fc1afb0f";

function fetchWeather() {
  let city = $("input").val();

  if (!city) return;

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${APIKey}&units=imperial&q=${city}`;

  fetch(queryURL)
    .then(function (res) {
      return res.json();
    })
    .then(function ({ list }) {
      console.log(list[0]);
      let {
        dt,
        main: { temp, humidity },
        wind: { speed },
        weather: [{ icon }],
      } = list[0];

      var iconsrc = "http://openweathermap.org/img/w/" + icon + ".png";
      $("main").html(
        `<div>
          <h2>
            ${city} ${dt} <img src=${iconsrc}>
          </h2>
          <h3>Temp: ${temp}</h3>
          <h3>Wind: ${speed}</h3>
          <h3>Humidity: ${humidity}</h3>
        </div>`
      );
    })
    .catch(function (err) {
      console.error(err);
    });
}

$("button").on("click", fetchWeather());
