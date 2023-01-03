import React, {Component} from 'react';
import { Formik, Form, Field } from 'formik'
import ProfileDataService from './ProfileDataService.js';

class CreateNewProfileComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            city: '',
            notificationType: '',
            userName: ''
        }
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(values){
        ProfileDataService.updateUserProfile({
            firstName : values.firstName,
            lastName : values.lastName,
            email : values.email,
            city : values.city,
            notificationType: values.notificationType,
            userName: values.userName
        }).then( () => this.props.navigate('/login'))
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
                            notifiactionType : 'Please select notification type',
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

export default CreateNewProfileComponent