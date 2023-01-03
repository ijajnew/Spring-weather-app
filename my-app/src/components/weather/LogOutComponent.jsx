import React, {Component} from 'react'; 

class LogOutComponent  extends Component{
    render(){
        return(
            <div className='logOut'>
                <h1>You're logged out</h1>
                <div className="container">
                    Thank you for using our application!
                </div>
            </div>
        )
    }
}

export default LogOutComponent