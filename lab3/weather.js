var APPID = "babde2779459e0c9acc24f2ec0442ba1";

function showError(errorMsg) {
  var resp = document.getElementById("response");
  resp.style["display"] = "";
  var el = document.getElementById("error");
  document.getElementById("results").style["display"] = "none";
  el.innerHTML = errorMsg;
  el.style["display"] = "";
}

function onWeather(err, data) {
  if (err) {
    showError("Could not find any weather data for the given zip code");
    return;
  }

  document.getElementById("error").style["display"] = "none";

  var el = document.getElementById('response');

  var temp = data.main.temp;
  document.getElementById("temp").innerHTML = temp + " &deg;F";

  var windspeed = data.wind.speed;
  document.getElementById("windspeed").innerHTML = `${windspeed} mph`;

  var iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var iconEl = document.getElementById("icon");

  var iconImg = document.createElement("img");
  iconImg.setAttribute("src", iconUrl);

  if (iconEl.firstChild) {
    iconEl.removeChild(icon.firstChild);
  }
  iconEl.appendChild(iconImg);

  var locationEl = document.getElementById("location");
  locationEl.innerHTML = data.name;

  el.style["display"] = "";
  document.getElementById("results").style["display"] = "";
}

function onZipCode(err, data) {
  if (err) {
      showError("That zip code does not exist");
      return;
  }
  var firstMatch = data.places[0];
  var city = firstMatch["place name"];
  var state = firstMatch.state;
  var country = data.country;
  
  var url = "http://api.openweathermap.org/data/2.5/weather";
  var url_with_params = url + `?APPID=${APPID}&units=imperial&q=${city},${state},${country}`;
  AJAX.getJSON(url_with_params, onWeather);
}

function getWeather(e) {
  e.preventDefault(); // stop submit
  var zipCode = document.getElementById("zipCode").value;
  if (!zipCode) {
    showError("Must enter a zip code");
    return;
  }

  var url = `http://api.zippopotam.us/us/${zipCode}`;
  AJAX.getJSON(url, onZipCode);
}
