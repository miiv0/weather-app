const weatherBtn = document.getElementById("fetchWeatherBtn")
const locationQuery = document.getElementById("cityInput")
const cityDataList = document.getElementById("cityList")
const cityPromise = fetch("./cities500.json")
const cityResponse = await cityPromise

const cityList = await cityResponse.json()

cityDataList.innerHTML = "hi"

function getCityNames() {

}

weatherBtn.addEventListener("click", function () {
    const key = `PJZ3FXN2MGCFQZ6B6BR3K34FE`
    const api = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${(locationQuery.value)}?unitGroup=us&key=${key}&contentType=json`

    console.log(locationQuery.value)
    console.log(api)
    fetch(encodeURI(api))
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
        })
        .catch(function (e) {
            console.log(e)
        })
})