const city = "paris";

const cityElement = document.getElementById("city");
const conditionImg = document.getElementById("conditionImg");

const conditionElement = document.getElementById("condition");
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("windSpeed");
const humidityElement = document.getElementById("humidity");

fetch(`https://www.prevision-meteo.ch/services/json/${city}`)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    console.log(data.city_info.name);
  });
