// const fetchData= require('./data.json')

// const displayData = ()=>{

// }

const apiKey = 'eecfff6ff36846bda3861748240802'
let baseUrl = 'http://api.weatherapi.com/v1'
let userInput = 'Nairobi'

const fetchWeather = async ()=>{
    const endpoint = `${baseUrl}/current.json?key=${apiKey}&q=${userInput}`
    const response = await fetch(endpoint)
    const data = await response.json()
    console.log(data)

}
fetchWeather()