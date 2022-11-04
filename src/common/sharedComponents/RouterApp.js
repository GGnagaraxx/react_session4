import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import About from "../../pages/aboutUs/About";
import Nav from "./Nav";
import Dashboard from "../../pages/dashboard/Dashboard";
import ContactUs from "../../pages/contactUs/ContactUs";
import Login from "../../pages/login/Login";
import Notifications from "./Notifications";

class RouterApp extends React.Component{

    state = {
        signedUp: false
    }

    setSignedUp = () => {
        this.setState({
            signedUp: true
        })
    }

    render(){
        return(
            <BrowserRouter>
                <Nav/>
                <div className="page-content">
                    <Notifications signedUp={this.state.signedUp}/>
                    <Routes>
                        <Route path='/' element={ 
                            this.state.signedUp ? 
                            <Dashboard/> :
                            <Login setSignedUp={this.setSignedUp}/>
                        }/>
                        <Route path='/dashboard' element={<Dashboard/>}/>
                        <Route path='/about-us' element={<About/>}/>
                        <Route path='/contact-us' element={<ContactUs/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
    
}

export default RouterApp;