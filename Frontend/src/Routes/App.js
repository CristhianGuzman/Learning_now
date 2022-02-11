
import './App.css';
import Login from '../components/Auth/Login';
import Registro from '../components/Auth/Registro';
import React, { useContext, useState } from 'react';


import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from 'react-router-dom';





//Uso de hook useState
function App() {









    /////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>

            <Router>

                <Switch>
                    
                    <Route exact path='/' >  <Login /> </Route>
                    <Route exact path='/registro' >  <Registro /> </Route>
                    
                </Switch>

            </Router>

        </>
    );
}

export default App;
