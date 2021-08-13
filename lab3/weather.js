var appid = "babde2779459e0c9acc24f2ec0442ba1";  // insert valid APPID here

function onWeather(err, data) {
  if (err) {
    /* TODO:
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */
    var el = document.getElementById("error");
    return;
  }

  // TODO: Empty the error element and hide it.

  var el = document.getElementById('response');

  var temp = data.main.temp;
  document.getElementById("temp").innerHTML = temp + " &deg;F";

  var windspeed = data.wind.speed;
  // TODO: Set the element with ID windspeed's content to the windspeed above,
  // with the unit "mph" afterwards

  var iconUrl = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var iconEl = document.getElementById("icon");
  // TODO: Create an img tag with src set to iconUrl, and set the content of the
  // icon element to that image.

  var locationEl = document.getElementById("location");
  locationEl.innerHTML = data.name;

  // TODO: Make the response element and results elements both visible
}

function onZipCode(err, data) {
  if (err) {
    /* TODO:
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */
    var el = document.getElementById("error");
    return;
  }
  var firstMatch = data.places[0];
  /* TODO:
   * Get the city name, state name and country from the place data returned by
   * the Zippopotamus API.
   */
  var url = "http://api.openweathermap.org/data/2.5/weather";
  /* TODO:
   * Access the url above with the query string below:
   *   ?APPID=[APPID]&units=imperial&q=[CITY],[STATE],[COUNTRY]
   * Where the things in brackets were found above.
   */
}

function getWeather(e) {
  e.preventDefault(); // stop submit
  var zipCode = document.getElementById("zipCode").value;
  if (!zipCode) {
    /* TODO:
     * Toggle the results display for the response display.
     * Print an error message in the error element and change its display so
     * that it is no longer hidden.
     */
    var el = document.getElementById("error");
    return;
  }
  /* TODO:
   * Access the url http://api.zippopotam.us/us/ZZZZZ where ZZZZ is the given
   * zip code.
   */
}
