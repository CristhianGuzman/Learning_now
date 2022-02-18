

import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Home from '../pages/Home'
import Contenido from '../pages/Contenido';
import Que_ofrecemos from '../pages/Que_ofrecemos'; 
import Mis_cursos from '../pages/Mis_cursos'
import Contactenos from '../pages/Contactenos'


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
                    <Route exact path='/' >  <Home /> </Route>
                    <Route exact path='/registro' >  <Registro /> </Route>
                    <Route exact path='/contenido'><Contenido /></Route>
                    <Route exact path='/cursos'><Mis_cursos /></Route>
                    <Route exact path='/login'><Login/></Route>
                    <Route exact path='/ofertas'><Que_ofrecemos/></Route>
                    <Route exact path='/contactenos'><Contactenos/> </Route>
                    
                </Switch>

            </Router>

        </>
    );
}

export default App;
