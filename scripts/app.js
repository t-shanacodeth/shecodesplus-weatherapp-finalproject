function handleSearchButtonSubmit(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-input");
  let h1Element = document.querySelector("#location");
  h1Element.innerHTML = searchInput.value;
  console.log(searchInput.value);

  // call API

  let apiKey = "68b934o4bafcaf00b4452c44bfc46ct3";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query={query}&key={key}`;

  // search for the city
}

let weatherAppSearchForm = document.getElementById("weather-app-form");
weatherAppSearchForm.addEventListener("submit", handleSearchButtonSubmit);

axios.get(apiUrl).then;
