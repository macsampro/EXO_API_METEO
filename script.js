let city = "herblay";

const cityElement = document.getElementById("city");
const conditionImg = document.getElementById("conditionImg");

const conditionElement = document.getElementById("condition");
const temperatureElement = document.getElementById("temperature");
const windSpeedElement = document.getElementById("windSpeed");
const humidityElement = document.getElementById("humidity");

const inputCity = document.getElementById("userCity");
const buttonSearch = document.getElementById("search");

const nextDaysElement = document.getElementById("nextDays");

const getData = async (cityParam) => {
  try {
    const response = await fetch(
      `https://www.prevision-meteo.ch/services/json/${city}`
    );
    const data = await response.json();
    console.log(data);
    cityElement.innerText = data.city_info.name;
    conditionImg.src = data.current_condition.icon;

    for (let index = 1; index < 5; index++) {
      const previsionWeek = data[`fcst_day_${index}`];
      const jour = data[`fcst_day_${index}`].day_long;
      const icon = data[`fcst_day_${index}`].icon_big;
      const condition = data[`fcst_day_${index}`].condition;
      const temperatureMin = data[`fcst_day_${index}`].tmax;
      const temperatureMax = data[`fcst_day_${index}`].tmin;
     
      /**
       * Le code ici servira à mettre à jour les autre cartes
       */

      nextDaysElement.innerHTML += `
      <div class="card week">
        <img src="${icon}" alt="">
          <div class="infoText">
            <p>${jour}</p>
            <p>${condition}</p>
              <div class="tempMinMax">
                <p>${temperatureMin}</p>
                <p>${temperatureMax}</p>
              </div>
          </div>
      </div>`;
    }
  } catch (error) {
    console.log(error);
  }
};

getData();
