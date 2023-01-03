import React, {Component} from 'react';
import { Formik, Form, Field } from 'formik'
import ProfileDataService from './ProfileDataService.js';
import AuthenticationService from './AuthenticationService.js'


//creating new profile
class ProfileComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            id: '',
            firstName: 'Ijaj',
            lastName: 'Shaikh',
            email: 'ijajShaikh@gmail.com',
            city: 'Mumbai',
            notificationType : 'email',
            userName : ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    //calling update profile service
    onSubmit(values){
        let userId = AuthenticationService.getUserId()
        console.log("not"+values.notificationType)
        ProfileDataService.updateUserProfile({
            id: userId,
            firstName : values.firstName,
            lastName : values.lastName,
            email : values.email,
            city : values.city,
            notificationType: values.notificationType,
            userName: values.userName
        }).then( () => {
            //updating session values
            sessionStorage.setItem('authenticatedUser', values.userName)
            sessionStorage.setItem('notificationType', values.notificationType)
            sessionStorage.setItem('city', values.city)
            this.props.navigate(`/homePage/${AuthenticationService.getUserName()}`)
        })
    }

    componentDidMount(){ 
        ProfileDataService.retriveUserProfile(AuthenticationService.getUserId())
        .then(response => this.setState({
            id : response.data.id,
            firstName : response.data.firstName,
            lastName : response.data.lastName,
            email : response.data.email,
            city : response.data.city,
            notificationType : response.data.notificationType,
            userName : response.data.userName
        })
        )
    }

    render(){
        return(
            <div>
                <div className='container'>
                    <Formik
                        initialValues={{
                            firstName : this.state.firstName,
                            lastName : this.state.lastName,
                            email : this.state.email,
                            city : this.state.city,
                            notificationType : this.state.notificationType,
                            userName : this.state.userName
                        }}
                        onSubmit={this.onSubmit}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <fieldset className='form-group'>
                                        <label>First Name</label>
                                        <Field className='form-control' type='text' name='firstName'></Field>
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Last Name</label>
                                        <Field className='form-control' type='text' name='lastName'></Field>
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Email</label>
                                        <Field className='form-control' type='text' name='email'></Field>
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>City</label>
                                        <Field className='form-control' type='text' name='city'></Field>
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>Notification Type</label>
                                        <Field as='select' className='form-control' name='notificationType'>
                                            <option value="email">Email</option>
                                            <option value="slack">Slack</option>
                                            <option value="message">Message</option>
                                        </Field>
                                    </fieldset>
                                    <fieldset className='form-group'>
                                        <label>User Name</label>
                                        <Field className='form-control' type='text' name='userName'></Field>
                                    </fieldset>
                                    <button className='btn btn-success' type='submit'>Submit</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        )
    }

}

export default ProfileComponent