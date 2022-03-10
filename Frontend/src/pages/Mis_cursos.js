import { useState, useEffect } from 'react'

function Mis_cursos() {

    let val = 0
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
            <div className="container-fluid">
                <div className="row flex-nowrap">

                    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                        <div className="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
                            <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span className="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li className="nav-item">
                                    <a href="#" className="nav-link px-0">
                                        <span className="ms-1 d-none d-sm-inline">Mis cursos</span>
                                    </a>
                                </li>
                                <li className='d-flex'>
                                    <i className="fa-solid fa-user-pen"></i>
                                    <a href="#" className="nav-link px-0 bg-success">
                                        <span className="ms-1 d-none d-sm-inline">Gestión usuarios</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>

                        <div className='col-7'>

                            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <div className="container-fluid">
                                    <a className="navbar-brand" href="#">Navbar</a>
                                    <div className="collapse navbar-collapse">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <a className="nav-link" aria-current="page" href="#">Nuevo curso</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Mis cursos</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </nav>

                            <nav className="navbar navbar-light bg-light">
                                <div className="container-fluid">

                                    <form className="d-flex justify-content-end">
                                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form>
                                </div>
                            </nav>

                            <table className="table table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Titulo</th>
                                        <th scope="col">Descripción</th>
                                        <th scope="col">Imagen</th>

                                    </tr>
                                </thead>


                                <tbody>
                                    {
                                        coursesList.map(course => {
                                            val ++
                                            return (
                                                <tr>
                                                    <th scope="row">{val}</th>
                                                    <td>{course.titulo_curso}</td>
                                                    <td>{course.descripcion_curso}</td>
                                                    <td>
                                                        <img src={'http://localhost:5002/'+course.url_imagen}/>
                                                    </td>
                                                    <td className='d-flex'>
                                                        <button className="btn btn-link p-2">
                                                            <i className="fa-solid fa-pencil btn-dange"></i>
                                                        </button>
                                                        <button className="btn btn-link p-2">
                                                            <i className="fa-regular fa-circle-xmark iconcolor"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}


export default Mis_cursos