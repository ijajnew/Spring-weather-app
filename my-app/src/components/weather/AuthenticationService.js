import axios from "axios"

class AuthenticationService{

    excuteBasicAuthenticationService(username){
        return axios.get(`http://localhost:8080/weather-assignment-rest/api/users/auth/${username}`)
    }

    //Setting username, userId, notification type and city in session 
    //purpose of doing this is to get updated fields ad make calls
    registerSuccessfulLogin(username,userId, notificationType, city){
        console.log("User Authentication Service")
        sessionStorage.setItem('authenticatedUser', username)
        sessionStorage.setItem('authenticatedUserId', userId)
        sessionStorage.setItem('notificationType', notificationType)
        sessionStorage.setItem('city', city)
    }

    //removing items from session
    logout(){
        console.log("User authentication removed")
        sessionStorage.removeItem('authenticatedUser')
        sessionStorage.removeItem('authenticatedUserId')
        sessionStorage.removeItem('notificationType')
        sessionStorage.removeItem('city')
    }

    //to check is user logged
    isUserLoggedIn(){
        let user = sessionStorage.getItem('authenticatedUser')
        if(user===null)return false
        return true
    }

    //to get userId
    getUserId(){
        let userid = sessionStorage.getItem('authenticatedUserId')
        if(userid===null)return ''
        return userid
    }

    //to get username
    getUserName(){
        let userName = sessionStorage.getItem('authenticatedUser')
        if(userName===null)return ''
        return userName
    }

    //to get notification type
    getNotifiactionType(){
        let notificationType = sessionStorage.getItem('notificationType')
        if(notificationType===null)return ''
        return notificationType
    }

    //to get city
    getCity(){
        let city = sessionStorage.getItem('city')
        if(city===null)return ''
        return city
    }

}

export default new AuthenticationService()
