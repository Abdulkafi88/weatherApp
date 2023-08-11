// const chagne = document.querySelector("#change")

// chagne.addEventListener("click", (e) => {
//   const target = e.target
//   document.body.classList.toggle("dark-theme")
//   console.log(target)
// })






const citys = document.querySelector(".city")
const temp = document.querySelector(".temp")
const icon = document.querySelector(".flex")
const hum = document.querySelector(".humidity")
const cloudy = document.querySelector(".description")
const wind = document.querySelector(".wind")
const tempIcon = document.querySelector(".temIcon")
const input = document.querySelector(".search-bar")
const searchBtn = document.querySelector(".searchBtn")

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    getWeather()
  }
})

searchBtn.addEventListener("click", function () {
  getWeather()
})

function getWeather() {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=8cced427c682481685b222916231703&q=${input.value} &aqi=no`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let locationCity = data.location.name
      citys.innerText = locationCity
      let locationTep = data.current.temp_f
      temp.innerText = locationTep
      let getdesc = data.current.condition.text
      cloudy.innerText = getdesc
      let humi = data.current.humidity
      hum.innerText = "humidity: " + humi + "%"
      let windspeed = data.current.wind_mph
      wind.innerText = "Wind speed: " + windspeed + " km/h"
      const newIcons = document.createElement("span")
      newIcons.innerText = "°C"
      temp.appendChild(newIcons)
      document.querySelector(".weather").classList.remove("loading")
      input.value = ""

      document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + locationCity + "')"
    })
    .catch((error) => alert("Wrong Name"))
}