const weatherBtn = document.getElementById("fetchWeatherBtn")
const locationQuery = document.getElementById("cityInput")
const cityDataList = document.getElementById("cityList")
const cityPromise = fetch("./cities500.json")
const weatherResult = document.getElementById("weatherResult")
const cityResponse = await cityPromise

let cityList = await cityResponse.json()

// function combineCityNames() {
//     const cityNames = []
//     const NY = cityList["New York"]
//     const AL = cityList["Alabama"]
//     const TX = cityList["Texas"]
//     for (let i = 0; i < NY.length; i++) {
//         const nyCities = NY[i]
//         cityNames.push(nyCities)
//     }
//     for (let i = 0; i < AL.length; i++) {
//         const alCities = AL[i]
//         cityNames.push(alCities)
//     }
//     for (let i = 0; i < TX.length; i++) {
//         const txCities = TX[i]
//         cityNames.push(txCities)
//     }
//     return cityNames
// }

// function combineCityNames() {
//     const cityNames = []
//     const NY = cityList["New York"]
//     const AL = cityList["Alabama"]
//     const TX = cityList["Texas"]
//     const cityNamesCombined = cityNames.concat(NY).concat(AL).concat(TX)
//     return cityNamesCombined
// }

// function combineCityNames() {
//     const NY = cityList["New York"]
//     const AL = cityList["Alabama"]
//     const TX = cityList["Texas"]
//     return [...NY, ...AL, ...TX]
// }

function combineCityNames() {
    const cityNames = []
    for (const state in cityList) {
        const stateCities = cityList[state]
        cityNames.push(...stateCities)
    }
    return cityNames
}

cityList = combineCityNames()

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
    weatherResult.innerHTML = ''
    console.log(locationQuery.value)
    console.log(api)
    fetch(encodeURI(api))
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log(data)
            const temp = document.createElement('div')
            const conditions = document.createElement('div')
            const description = document.createElement('div')
            weatherResult.append(temp, conditions, description)
            temp.setAttribute('id', 'temp');
            conditions.setAttribute('id', 'conditions');
            description.setAttribute('id', 'decscription');
            temp.innerHTML = data.currentConditions.temp
            conditions.innerHTML = data.currentConditions.conditions
            description.innerHTML = data.description
        })
        .catch(function (e) {
            console.log(e)
        })
})

const cityNames = getCityNames()
const datasetOptions = cityDatasetOptions(cityList)
cityDataList.innerHTML = datasetOptions.join("\n")
