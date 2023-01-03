import React, {Component} from 'react';
import AuthenticationService from './AuthenticationService.js';
import {Link} from 'react-router-dom'

class LoginComponent extends Component {
    constructor(props){
        super(props)
        //stting login state
        this.state={
            userName: '',
            userId: '',
            notificationType: '',
            city: '',
            hasFailed : false,
            hasPassed : false
        }
        //binding methods in constructore 
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChange(event){
        this.setState({[event.target.name]:event.target.value})
    }

    //calling login service and registering session values
    loginClicked(){
        AuthenticationService
        .excuteBasicAuthenticationService(this.state.userName)
        .then( response => {
            this.setState ({ id: response.data.id, userName: response.data.userName, notificationType: response.data.notificationType, city: response.data.city} )
            AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.id, this.state.notificationType, this.state.city)
            this.props.navigate(`/homePage/${this.state.userName}`)
        }).catch( () => {
            this.setState({hasPassed:false})
            this.setState({hasFailed:true})
        })
    }

    render(){
        return(          
            <div className = "container">
                 <h1>Login</h1>
                {this.state.hasFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                <div>User Name : <input type="text" name="userName" value={this.state.userName} onChange={this.handleChange}/></div>
                <div><button className='btn btn=s' onClick={this.loginClicked}>Login</button></div>
                <div>Sign up <Link to="/createProfile">here</Link></div>
            </div>
        )
    }
}

export default LoginComponent