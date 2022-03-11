import React from 'react'
import { useState, useEffect } from 'react'


import {
    Link
} from 'react-router-dom'

function Lista_matriculados() {

    const [coursesList, setCoursesList] = useState([])


    useEffect(() => {

        cargarCursos()
    }, [])


    async function cargarCursos() {

        const response = await fetch('http://localhost:5002/cursos')
        const data = await response.json()
        //console.log(JSON.parse(data))
        setCoursesList(JSON.parse(data))
    }


    const renderCard = (card, index) => {
        return (
            <Link to="/micurso">
                <button className="btn">
                    <div className="card px-2">

                        <img src={'http://localhost:5002/' + card.url_imagen} card-img-top d-block width="270" height="160" d-inline-block align-text-top />
                        <div className="card-body">
                            <h5 className="card-title">{card.titulo_curso}</h5>
                            <p className="card-text">{card.descripcion_curso}</p>
                        </div>
                    </div>
                </button>
            </Link>
        )
    }




    return (
        <>

            <div className="container-fluid col-11 ">
                <div className="row d-flex ">
                    <h2>Mis cursos matriculados</h2>
                    <div className="col d-flex">
                        {coursesList.map(renderCard)}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Lista_matriculados