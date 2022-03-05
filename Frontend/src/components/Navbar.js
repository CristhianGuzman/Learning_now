import React from 'react'
import logo from '../assets/img/Logo.png'
import '../assets/styles.css'
import {
    Link
} from 'react-router-dom'


import { useState, useEffect } from 'react';




function Navbar({user}) {

    useEffect(() => {

        
        
       

    }, [])






    
    return (
        <>
                        
            <nav className="navbar navbar-expand-lg d-flex ps-4 py-1">
                <div className="col-12 container-fluid">
                    <Link to="/">
                        <img src={logo} 
                            alt="/"
                            className="d-inline-block logo align-text-top" />
                    </Link>

                    <a className="text-white navbar-brand p-1" href="/">Learning Now

                    </a>


                    <div className="collapse navbar-collapse ms-5" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item me-3">
                                <Link to="/">
                                    <a className="text-white nav-link active">Inicio</a>
                                </Link>
                            </li>
                            <li className="nav-item me-3">
                                <Link to="/ofertas">
                                    <a className="text-white nav-link">¿Qué ofrecemos?</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactenos">
                                    <a className="text-white nav-link">Contáctenos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="botones-nav  navbar-nav justify-content-end mx-1">


                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle me-5 text-white"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >{user ? user.nombre +' '+user.apellido : 'Inicio de sesión'}
                            </a>

                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link
                                        to='/login'
                                        className="dropdown-item"
                                        
                                    >{user ? 'Cerrar sesion' : 'Iniciar sesión'}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/registro"
                                        className="dropdown-item" 
                                    >{user ? 'Editar perfil' : 'Registrarme'}
                                    </Link>
                                </li>
                            </ul>
                        </li>







                    </div>

                </div>
            </nav>
        </>

    )
}

export default Navbar