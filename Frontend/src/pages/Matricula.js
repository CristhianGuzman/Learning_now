import React from 'react'
import Navbar from '../components/Navbar'
import NavbarStudent from '../components/NavbarStudent'
import Search from '../components/Search'
import Footer from '../components/Footer'
import Card_Matricula from '../components/Card_Matricula';


import { useState, useEffect } from 'react';


function Matricula() {

    const [usuario, setUsuario] = useState('sssjwww');

    useEffect(() => {

        setUsuario(JSON.parse(localStorage.getItem('data')));
        console.log(usuario)

    }, [])

    return (
        <>

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
                    <Card_Matricula />                
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>

        </>
    )
}
export default Matricula