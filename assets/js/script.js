var search = document.getElementById("search-button");
search.addEventListener("click", fetchWeather);

let store = localStorage.history ? JSON.parse(localStorage.history) : [];

if (store.length) {
  $(".history").html("");

  store.forEach((city) => {
    document.querySelector(
      ".history"
    ).innerHTML += `<button class="btn btn-info m-2">${city}</button>`;
  });
}

function fetchWeather() {
  let city = $("input").val();

  if (!city) return;

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${APIKey}&units=imperial&q=${city}`;

  fetch(queryURL)
    .then(function (res) {
      return res.json();
    })
    .then(function ({ list }) {
      console.log(list);
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
          <h3>Temp: ${temp}</h3>
          <h3>Wind: ${speed}</h3>
          <h3>Humidity: ${humidity}</h3>
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
              <h3>Temp: ${temp}</h3>
              <h3>Wind: ${speed}</h3>
              <h3>Humidity: ${humidity}</h3>
            </div>
        `;
      }
    })
    .catch(function (err) {
      console.error(err);
    });
}

$("button").on("click", fetchWeather());
