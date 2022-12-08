var search = document.getElementById("search-button");
search.addEventListener("click", fetchWeather);
$("button").on("click", fetchWeather());
let store = localStorage.history ? JSON.parse(localStorage.history) : [];
// let searchcity = $("input").val();
// // $("input").val("");
// // fetchWeather(searchcity);
if (store.length) {
  $(".history").html("");

  store.forEach((city) => {
    document.querySelector(
      ".history"
    ).innerHTML += `<button class="btn btn-info m-2">${city}</button>`;
  });
}
// var history = JSON.parse(localStorage.getItem("history")) || [];
// // history.push(searchcity);
// localStorage.setItem("history", JSON.stringify(history));
// //sets history array search to correct length
// if (history.length > 0) {
//   fetchWeather(history[history.length - 1]);
// }
// //makes a row for each element in history array(searchTerms)
// for (var i = 0; i < history.length; i++) {
//   createRow(history[i]);
// }

// //puts the searched cities underneath the previous searched city
// function createRow(text) {
//   var listItem = $("<li>").addClass("list-group-item").text(text);
//   $(".history").append(listItem);
// }

// //listener for list item on click function
// $(".history").on("click", "li", function () {
//   fetchWeather($(this).text());
//   // weatherForecast($(this).text());
// });
// function searchistory() {
//   var history = JSON.parse(localStorage.getItem("history")) || [];
//   let searchcity = $("input").val();
//   history.push(searchcity);
// }

function fetchWeather() {
  $(".forecast").html("");
  var city = $("input").val();

  if (!city) return;

  var queryURL = `https://api.openweathermap.org/data/2.5/forecast?&appid=${APIKey}&units=imperial&q=${city}`;

  fetch(queryURL)
    .then(function (res) {
      return res.json();
    })
    .then(function ({ list }) {
      // console.log(list);
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
