import React from 'react'
import { useState, useEffect } from 'react'

function Card_Matricula() {

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


    return (
        <>
            <div className="container-fluid col-11 ">
                <div className="row d-flex ">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">{coursesList.titulo_curso}</h5>
                            <img src={'http://localhost:5002/'+coursesList.url_imagen} card-img-top d-block width="270" height="160" d-inline-block align-text-top />
                            <p className="card-text">{coursesList.descripcion_curso}</p>
                            <button type="submit" className="btn boton2 ">Matricular curso</button>
                        </div>
                    </div>                  
                </div>
            </div>
        </>
    )
}

export default Card_Matricula