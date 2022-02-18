import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Slider from '../components/Slider'
import Search from '../components/Search'


import { useState, useEffect } from 'react';





function Home() {



    const [usuario ,setUsuario] = useState('sssjwww');






    useEffect(() => {

        setUsuario(JSON.parse(localStorage.getItem('data')));
        console.log(usuario)
       

    }, [])


    return (
        <div>
            <div>
                <div className="row mb-5">
                    <Navbar user={usuario}/>
                </div>

                <div className="row mb-2">
                    <Search />
                </div>

                <div className="row mb-5">
                    <Slider />
                </div>

                <div className="row">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default Home