import React, {Component} from 'react'; 
import {BrowserRouter, Routes, Route, useNavigate, useParams} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx';
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import HomePageComponent from './HomePageComponent.jsx'
import ErrorPageComponent from './ErrorPageComponent.jsx'
import LoginComponent from './LoginComponent.jsx'
import LogOutComponent from './LogOutComponent.jsx'
import ProfileComponent from './ProfileComponent.jsx'
import CreateNewProfileComponent from './CreateNewProfileComponent.jsx';


//weather app and routing all components 
class WeatherApp extends Component{
    render(){
        const LoginComponentWithNavigation = withNavigation(LoginComponent);
        const HomePageComponentWithParams = withParams(HomePageComponent);
        const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
        const ProfileComponentWithNavigation = withNavigation(ProfileComponent);
        const CreateNewProfileComponentNavigation = withNavigation(CreateNewProfileComponent);
        return (
            <div className = "WeatherApp">
                <BrowserRouter>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/login" element={<LoginComponentWithNavigation />}/>
                        <Route path="/homePage/:name" 
                            element={
                                <AuthenticatedRoute>
                                    <HomePageComponentWithParams />
                                </AuthenticatedRoute>
                        }/>
                        <Route path="/profile" 
                            element={
                                <AuthenticatedRoute>
                                    <ProfileComponentWithNavigation/>
                                </AuthenticatedRoute>
                        }/>
                        <Route path="*" element={<ErrorPageComponent />}/>
                        <Route path="/logout" 
                            element={
                                <AuthenticatedRoute>
                                    <LogOutComponent/>
                                </AuthenticatedRoute>
                        }/>
                        <Route path="/createProfile" element={<CreateNewProfileComponentNavigation/>}/>
                    </Routes>
                    <FooterComponent/>
                </BrowserRouter>
            </div>
        )
    }
}

function withNavigation(Component){
    return props => <Component {...props} navigate={useNavigate()}/>;
}

function withParams(Component){
    return props => <Component {...props} params={useParams()}/>;
}

export default WeatherApp