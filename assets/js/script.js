var search = document.getElementById("search-button");
search.addEventListener("click", getSearchedCity);

let store = JSON.parse(localStorage.getItem("history")) || [];
var historyEl = document.querySelector(".history");
historyEl.addEventListener("click", searchHistory);
var city;
function searchHistory(e) {
  city = e.target.getAttribute("id");
  fetchWeather();
}
if (store.length) {
  $(".history").html("");
  store.forEach((city) => {
    document.querySelector(
      ".history"
    ).innerHTML += `<button id="${city}" class=" cityhistory btn btn-info m-2">${city}</button>`;
    var cityhistoryEl = document.querySelector(".cityhistory");
    cityhistoryEl.addEventListener("click", fetchWeather);
  });
}
function storeCity(city) {
  if (store.includes(city)) {
    return;
  }
  store.push(city);
  localStorage.setItem("history", JSON.stringify(store));
  console.log(store);
}
function getSearchedCity() {
  $(".forecast").html("");
  city = $("input").val();
  document.querySelector(
    ".history"
  ).innerHTML += `<button id="${city}" class="btn btn-info m-2">${city}</button>`;

  fetchWeather();
}
function fetchWeather() {
  //getSearchedCity();

  console.log("from fetch Weather", city);
  if (!city) return;
  storeCity(city);
  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${APIKey}&units=imperial&q=${city}`;

  document.querySelector(".forecast").innerHTML = "";
  fetch(queryURL)
    .then(function (res) {
      return res.json();
    })
    .then(function ({ list }) {
      let {
        dt,
        main: { temp, humidity },
        wind: { speed },
        weather: [{ icon }],
      } = list[0];
      var todaydate = " (" + new Date(dt * 1000).toLocaleDateString() + ")";
      var iconsrc = "http://openweathermap.org/img/w/" + icon + ".png";
      $("main").html(
        `<div>
          <h1>
            ${city} ${todaydate} <img src=${iconsrc}>
          </h1>
          <h3>Temp: ${temp} °F </h3>
          <h3>Wind: ${speed} MPH</h3>
          <h3>Humidity: ${humidity} %</h3>
        </div>`
      );
      for (let i = 5; i < list.length; i = i + 8) {
        let {
          dt,
          main: { temp, humidity },
          wind: { speed },
          weather: [{ icon }],
        } = list[i];
        document.querySelector(".forecast").innerHTML += `
            <div class="card">
             <h3> ${new Date(dt * 1000).toLocaleDateString()}</h3>
              <img src="http://openweathermap.org/img/w/${icon}.png">
              <h3>Temp: ${temp} °F</h3>
              <h3>Wind: ${speed} MPH</h3>
              <h3>Humidity: ${humidity} </h3>
            </div>
        `;
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}
