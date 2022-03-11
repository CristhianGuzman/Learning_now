import React from 'react'
import {
    Link
} from 'react-router-dom'

function SidebarStudent() {
    return (
        <>s
            <nav className="navbar navbar-expand navbar-secondary d-flex">
                <div className="col-12 container-fluid">
                   

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/contenidostudent">
                                    <a className="nav-link active">Cursos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/miaprendizaje">
                                    <a className="nav-link">Mi Aprendizaje</a>
                                </Link>
                            </li>                          
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default SidebarStudent