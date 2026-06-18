const weatherBtn = document.getElementById("fetchWeatherBtn")
const locationQuery = document.getElementById("cityInput")
const cityDataList = document.getElementById("cityList")
const cityPromise = fetch("./cities500.json")
const cityResponse = await cityPromise

const cityList = (await cityResponse.json()).slice(0, 50)

// function getCityNames() {
//     const cityNames = []
//     for (let i = 0; i < cityList.length; i++) {
//         const cityObj = cityList[i]
//         const cityName = cityObj.name
//         cityNames.push(cityName)
//     }
//     return cityNames
// }

// function getCityNames() {
//     const cityNames = []
//     for (const cityObj of cityList) {
//         const cityName = cityObj.name
//         cityNames.push(cityName)
//     }
//     return cityNames
// }

function getCityNames() {
    return cityList.map((cityObj) => cityObj.name)
}

function cityDatasetOptions(cityNames) {
    const options = []
    for (let i = 0; i < cityNames.length; i++) {
        const cityName = cityNames[i]
        options.push(`<option value="${cityName}"></option>`)
    }
    return options
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

const cityNames = getCityNames()
const datasetOptions = cityDatasetOptions(cityNames)
cityDataList.innerHTML = datasetOptions.join("\n")