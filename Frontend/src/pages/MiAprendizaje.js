import React from 'react'
import Navbar from '../components/Navbar'
import NavbarStudent from '../components/NavbarStudent'
import Search from '../components/Search'
import Footer from '../components/Footer'
import Lista_matriculados from '../components/Lista_matriculados'
import { useState, useEffect } from 'react';



function MiAprendizaje() {

  const [usuario ,setUsuario] = useState('sssjwww');

    useEffect(() => {

        setUsuario(JSON.parse(localStorage.getItem('data')));
        console.log(usuario)
       
    }, [])




  return (
    <><div>

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
            <Lista_matriculados />
        </div>

        <div className="row">
            <Footer />
        </div>
    </div>

</div></>
  )
}

export default MiAprendizaje