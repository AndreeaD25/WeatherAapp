const cities = [
  { name: "Bucharest", lat: 44.4268, lon: 26.1025 },
  { name: "Cluj-Napoca", lat: 46.7712, lon: 23.6236 },
  { name: "Timisoara", lat: 45.7489, lon: 21.2087 },
  { name: "Iasi", lat: 47.1585, lon: 27.6014 },
  { name: "Constanta", lat: 44.1598, lon: 28.6348 },
  { name: "Craiova", lat: 44.3302, lon: 23.7949 },
  { name: "Slatina", lat: 44.4333, lon: 24.3667 },
  { name: "Brasov", lat: 45.6579, lon: 25.6012 },
  { name: "Galati", lat: 45.4369, lon: 28.007 },
  { name: "Ploiesti", lat: 44.9429, lon: 26.0132 },
  { name: "Oradea", lat: 47.0722, lon: 21.921 },
  { name: "Braila", lat: 45.2692, lon: 27.9575 },
  { name: "Arad", lat: 46.1866, lon: 21.3123 },
  { name: "Pitesti", lat: 44.8565, lon: 24.8692 },
  { name: "Sibiu", lat: 45.7983, lon: 24.1256 },
  { name: "Bacau", lat: 46.5671, lon: 26.9138 },
  { name: "Targu Mures", lat: 46.5425, lon: 24.5577 },
  { name: "Baia Mare", lat: 47.6613, lon: 23.5795 },
  { name: "Buzau", lat: 45.1517, lon: 26.8234 },
  { name: "Botosani", lat: 47.7456, lon: 26.6694 },
  { name: "Satu Mare", lat: 47.7928, lon: 22.8854 },
  { name: "Ramnicu Valcea", lat: 45.1047, lon: 24.3757 },
  { name: "Suceava", lat: 47.6371, lon: 26.2594 },
  { name: "Piatra Neamt", lat: 46.927, lon: 26.37 },
  { name: "Drobeta-Turnu Severin", lat: 44.6369, lon: 22.6597 },
  { name: "Focsani", lat: 45.6967, lon: 27.1865 },
  { name: "Bistrita", lat: 47.1356, lon: 24.4939 },
  { name: "Resita", lat: 45.2993, lon: 21.8895 },
  { name: "Targoviste", lat: 44.9256, lon: 25.4571 },
  { name: "Tulcea", lat: 45.1872, lon: 28.808 },
  { name: "Targu Jiu", lat: 45.031, lon: 23.2745 },
  { name: "Deva", lat: 45.875, lon: 22.911 },
  { name: "Alba Iulia", lat: 46.0786, lon: 23.5808 },
  { name: "Hunedoara", lat: 45.7673, lon: 22.9203 },
  { name: "Zalau", lat: 47.1817, lon: 23.0566 },
  { name: "Sfantu Gheorghe", lat: 45.8604, lon: 25.7936 },
  { name: "Barlad", lat: 46.2333, lon: 27.6667 },
  { name: "Vaslui", lat: 46.6383, lon: 27.7292 },
  { name: "Roman", lat: 46.9207, lon: 26.9262 },
  { name: "Giurgiu", lat: 43.9023, lon: 25.9699 },
  { name: "Slobozia", lat: 44.5642, lon: 27.3638 },
  { name: "Alexandria", lat: 43.997, lon: 25.3203 },
  { name: "Petrosani", lat: 45.4123, lon: 23.3601 },
  { name: "Medgidia", lat: 44.2456, lon: 28.2633 },
  { name: "Mangalia", lat: 43.8186, lon: 28.582 },
  { name: "Calarasi", lat: 44.2042, lon: 27.3138 },
  { name: "Tecuci", lat: 45.8475, lon: 27.4283 },
  { name: "Odorheiu Secuiesc", lat: 46.3028, lon: 25.2942 },
  { name: "Miercurea Ciuc", lat: 46.361, lon: 25.806 },
  { name: "Campina", lat: 45.1281, lon: 25.7347 },
  { name: "Sighisoara", lat: 46.219, lon: 24.7903 },
  { name: "Turda", lat: 46.5725, lon: 23.7842 },
  { name: "Medias", lat: 46.1653, lon: 24.3752 },
  { name: "Sighetu Marmatiei", lat: 47.931, lon: 23.8898 },
  { name: "Campulung", lat: 45.273, lon: 25.0481 },
  { name: "Caracal", lat: 44.1108, lon: 24.3511 },
  { name: "Turnu Magurele", lat: 43.7466, lon: 24.8735 },
  { name: "Fagaras", lat: 45.8417, lon: 24.9735 },
  { name: "Lugoj", lat: 45.6886, lon: 21.9035 },
  { name: "Roman", lat: 46.9272, lon: 26.9223 },
  { name: "Petrila", lat: 45.4521, lon: 23.4098 },
  { name: "Curtea de Arges", lat: 45.1394, lon: 24.6873 },
  { name: "Blaj", lat: 46.1768, lon: 23.9203 },
  { name: "Campia Turzii", lat: 46.5511, lon: 23.8786 },
  { name: "Oltenita", lat: 44.0833, lon: 26.6333 },
  { name: "Moreni", lat: 44.9833, lon: 25.65 },
  { name: "Mioveni", lat: 44.9528, lon: 24.9411 },
  { name: "Caransebes", lat: 45.4155, lon: 22.2193 },
  { name: "Voluntari", lat: 44.4903, lon: 26.1806 },
  { name: "Sacele", lat: 45.6097, lon: 25.6663 },
  { name: "Rosiorii de Vede", lat: 44.1167, lon: 24.9833 },
  { name: "Fetesti", lat: 44.3833, lon: 27.8333 },
  { name: "Bals", lat: 44.35, lon: 24.1 },
  { name: "Codlea", lat: 45.7, lon: 25.45 },
  { name: "Harsova", lat: 44.6833, lon: 27.95 },
  { name: "Orastie", lat: 45.8333, lon: 23.2 },
  { name: "Bocsa", lat: 45.3717, lon: 21.7092 },
  { name: "Nehoiu", lat: 45.4167, lon: 26.2833 },
  { name: "Mizil", lat: 45.0167, lon: 26.45 },
  { name: "Jimbolia", lat: 45.7922, lon: 20.7214 },
  { name: "Tandarei", lat: 44.65, lon: 27.65 },
  { name: "Iernut", lat: 46.4502, lon: 24.2231 },
  { name: "Ocna Mures", lat: 46.3811, lon: 23.8558 },
  { name: "Campulung Moldovenesc", lat: 47.528, lon: 25.563 },
  { name: "Bumbesti-Jiu", lat: 45.1833, lon: 23.4 },
  { name: "Odobesti", lat: 45.85, lon: 27.1 },
  { name: "Stefanesti", lat: 44.8, lon: 24.9 },
  { name: "Avrig", lat: 45.7167, lon: 24.3667 },
  { name: "Costesti", lat: 44.8, lon: 24.9667 },
  { name: "Beius", lat: 46.6667, lon: 22.3333 },
  { name: "Slanic", lat: 45.25, lon: 25.95 },
  { name: "Calafat", lat: 43.993, lon: 22.9314 },
  { name: "Calan", lat: 45.7222, lon: 23.0061 },
  { name: "Popesti-Leordeni", lat: 44.3667, lon: 26.1833 },
  { name: "Dorohoi", lat: 47.95, lon: 26.4 },
  { name: "Darabani", lat: 48.1833, lon: 26.5833 },
];

const showWeatherBtn = document.getElementById("show-weather");
const showForecastBtn = document.getElementById("show-forecast");
const cityInput = document.getElementById("city");
const weatherContainer = document.getElementById("weather-container");
const forecastContainer = document.getElementById("forecast");

showWeatherBtn.addEventListener("click", showWeather);
showForecastBtn.addEventListener("click", showForecast);

const URL_CURRENT_WEATHER =
  "https://api.openweathermap.org/data/2.5/weather?appid=69518b1f8f16c35f8705550dc4161056&units=metric&q=";

const URL_FORECAST_WEATHER =
  "https://api.openweathermap.org/data/2.5/forecast?appid=69518b1f8f16c35f8705550dc4161056&units=metric&lat=";

const map = L.map("map").setView([45.9432, 24.9668], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

function showWeather() {
  const cityName = cityInput.value;
  fetch(URL_CURRENT_WEATHER + cityName)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod !== 200) {
        alert("Orașul nu a fost găsit.");
        return;
      }
      const weatherDetails = `
        <div class="weather-icon">
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="Weather Icon">
        </div>
        <div class="weather-details">
          <h2>${data.name}, ${data.sys.country}</h2>
          <p>Temperatura: ${data.main.temp} &deg;C</p>
          <p>${data.weather[0].description}</p>
          <p>Umiditate: ${data.main.humidity}%</p>
          <p>Presiune: ${data.main.pressure} hPa</p>
          <p>Vânt: ${data.wind.speed} m/s</p>
        </div>
      `;
      weatherContainer.innerHTML = weatherDetails;
      map.setView([data.coord.lat, data.coord.lon], 10);
      L.marker([data.coord.lat, data.coord.lon]).addTo(map);
    })
    .catch((error) => {
      alert("A apărut o eroare.");
      console.error(error);
    });
}
