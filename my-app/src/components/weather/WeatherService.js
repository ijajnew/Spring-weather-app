import axios from 'axios'

//calling external service to get temprature
class WeatherService{

    executeGetWeatherService(city, notificationType){
        return axios.get(`http://localhost:8080/weather-assignment-rest/weather/temperature/${city}/${notificationType}`)
    }

}

export default new WeatherService()