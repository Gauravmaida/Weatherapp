const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "79ec2976b5msh56e0c860efbcafdp1507ccjsnf9d67ba65b2c",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const weather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      Wind_speed.innerHTML = response.wind_speed + " Km/h";
      Temp.innerHTML = response.temp + "°C";
      Humidity.innerHTML = response.humidity + "%";
      Sunset.innerHTML = response.sunset;
      Min_temp.innerHTML = response.sunrise;
      Cloud_pct.innerHTML = response.cloud_pct;
      Feels_like.innerHTML = response.feels_like;
      Sunrise.innerHTML = response.sunrise;
      Max_tem.innerHTML = response.max_tem;
    })
    .catch((err) => console.error(err));
};
const submitbt = document.querySelector("#submit");
submitbt.addEventListener("click", (e) => {
  e.preventDefault();
  weather(city.value);
});
weather("New York");

// e.preventDefault();
// weather(city.value);
