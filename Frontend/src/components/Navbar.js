import React from 'react'
import logo from '../assets/img/Logo.png'
import '../assets/styles.css'
import {
    Link
} from 'react-router-dom'

function Navbar({user}) {
    
    
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex">
                <div className="col-12 container-fluid">
                    <Link to="/">
                        <img src={logo} className="d-block w-100 h-10"
                            alt="/"
                            width="80"
                            height="80"
                            className="d-inline-block align-text-top" />
                    </Link>

                    <a className="text-white navbar-brand p-3" href="/">Learning Now

                    </a>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">
                                    <a className="text-white nav-link active">Inicio</a>
                                </Link>
                            </li>
                            <li className="nav-item">
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
                                    >Inicio de sesión
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li>
                                        <Link
                                            to={`/login`}
                                            
                                            className="dropdown-item" >Iniciar sesión
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/registro"
                                            className="dropdown-item" >Registrarme
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