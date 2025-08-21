function searchButtonSubmit(event) {
  event.preventDefault();
}

let weatherAppSearchForm = document.getElementById("weather-app-form");
weatherAppSearchForm.addEventListener("submit", searchButtonSubmit);
