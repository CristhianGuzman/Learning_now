import React from 'react'
import Navbar from '../components/Navbar'
import NavbarStudent from '../components/NavbarStudent'
import Search from '../components/Search'
import Footer from '../components/Footer'
import ListaCursos from '../components/ListaCursos';


import { useState, useEffect } from 'react';

function Contenido_Student() {

    const [usuario ,setUsuario] = useState('sssjwww');

    useEffect(() => {

        setUsuario(JSON.parse(localStorage.getItem('data')));
        console.log(usuario)
       
    }, [])

    return (
        <div>

            <div>
                <div className="row">
                    <Navbar user={usuario} />
                </div>

                <div className="row mb-2">
                    <NavbarStudent />
                </div>

                <div className="row mb-4">
                    <Search />
                </div>

                <div className="row mb-2">
                    <ListaCursos />
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>

        </div>
    )
}

export default Contenido_Student