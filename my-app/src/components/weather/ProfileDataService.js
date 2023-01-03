import axios from 'axios'

//class to call external service with help of axios
class ProfileDataService{
    retriveUserProfile(id){
        return axios.get(`http://localhost:8080/weather-assignment-rest/api/users/${id}`)
    }

    updateUserProfile(user){
        return axios.put('http://localhost:8080/weather-assignment-rest/api/users', user)
    }

    createUserProfile(user){
        return axios.post('http://localhost:8080/weather-assignment-rest/api/users', user)
    }
}

export default new ProfileDataService()