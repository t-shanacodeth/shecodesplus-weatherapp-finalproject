function refreshWeather(response) {
  let responseData = response.data;
  console.log(responseData);

  // Update date and time

  // Update city

  let locationElement = document.querySelector("#location");
  locationElement.innerHTML = responseData.city;

  // Update temperature
  let apiTemperature = Math.round(responseData.temperature.current);
  let currentTemperatureElement = document.querySelector("#temperature");
  currentTemperatureElement.innerHTML = apiTemperature;

  // Update weather condition

  let apiWeatherCondition = responseData.condition.description;
  let conditionSentence = apiWeatherCondition;
  let conditionArray = conditionSentence.split(" ");

  for (let i = 0; i < conditionArray.length; i++) {
    conditionArray[i] =
      conditionArray[i][0].toUpperCase() + conditionArray[i].substr(1);
  }

  let conditionSentenceUpdated = conditionArray.join(" ");
  let weatherDescriptionElement = document.querySelector(
    "#weather-condition-description"
  );
  weatherDescriptionElement.innerHTML = conditionSentenceUpdated;

  // Update weather icon

  // Update precipitation
  let apiFeelsLike = Math.round(responseData.temperature.feels_like);
  let feelsLikeElement = document.querySelector("#feels-like");
  feelsLikeElement.innerHTML = apiFeelsLike;

  // Update humidity
  let apiHumidity = Math.round(responseData.temperature.humidity);
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = apiHumidity;

  // Update wind speed
  let apiWindSpeed = Math.round(responseData.wind.speed);
  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = apiWindSpeed;
}

function searchCity(city) {
  // call API and update interface

  let apiKey = "68b934o4bafcaf00b4452c44bfc46ct3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearchButtonSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");

  // search for the city
  searchCity(searchInput.value);
}

let weatherAppSearchForm = document.getElementById("weather-app-form");
weatherAppSearchForm.addEventListener("submit", handleSearchButtonSubmit);

searchCity("London");
