import React, {Component} from 'react'
import WeatherService from './WeatherService.js';
import AuthenticationService from './AuthenticationService.js'

class HomePageComponent extends Component{
    constructor(props){
        super(props)
        this.retriveWeatherUpdate = this.retriveWeatherUpdate.bind(this)
        this.state= {
            temp_c : '',
            city : '',
            state : '',
            country : '',
            condtion : '',
            message : ''
        }
    }
    //rendering response
    render(){
        return(
            <>
                <h1>Welcome!</h1>
                <div className='container'>
                    Welcome to HomePage {this.props.params.name}.
                </div>
                <div className='container'>
                   Click here to get today's weather update 
                   <button className='btn btn-success' onClick={this.retriveWeatherUpdate}>Get Temperature</button>
                </div>
                <div className='container'>                    
                   
                    <table className='table'>
                        <tbody>
                            <tr>
                                <td>Temperature</td>
                                <td>{this.state.temp_c}</td>
                            </tr>
                            <tr>
                                <td>Condition</td>
                                <td>{this.state.condtion}</td>
                            </tr>
                            <tr>
                                <td>City</td>
                                <td>{this.state.city}</td>
                            </tr>
                            <tr>
                                <td>State</td>
                                <td>{this.state.state}</td>
                            </tr>
                            <tr>
                                <td>Country</td>
                                <td>{this.state.country}</td>
                            </tr>
                            <tr>
                                <td>Notification</td>
                                <td>{this.state.message}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

    retriveWeatherUpdate(){
        //calling weather service to get temperature
        WeatherService.executeGetWeatherService(AuthenticationService.getCity(), AuthenticationService.getNotifiactionType())
        .then(response => this.handleWeatherStatus(response))
    }
    
    //setting response into state
    handleWeatherStatus(response){
        this.setState(
            {
                temp_c: response.data.temp_c,
                city : response.data.city,
                state : response.data.state,
                country : response.data.country,
                condtion : response.data.condition,
                message : response.data.message
            })
    }
}

export default HomePageComponent