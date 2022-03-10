
import "../assets/styles.css";
import { useState } from 'react';

import Form_Curso from '../components/Form_Curso'

function Gestion_contenido() {








    const [formCurso, setFormCurso] = useState({
        titulo: '',
        descripcion: '',
        imagen: {}
    })


    function handleChange(name, value) {
        console.log(value )
        if (name == 'titulo_curso') {
            setFormCurso({
                ...formCurso,
                titulo: value
            })
        }else {
            setFormCurso({
                ...formCurso,
                descripcion: value
            })
        }
    }

    async function handleClick() {
        
        const data = new FormData()
        data.append('titulo', formCurso.titulo)
        data.append('descripcion', formCurso.descripcion)
        data.append('imagen', formCurso.imagen.file)

        const response = await fetch('http://localhost:5002/cursos', {
            method: 'PUT',
            body: data,
        })

        if (response.ok) {
            alert('usuario creado')
        }
    }


    function cargarImagen(e) {

        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.addEventListener('load', (e) => {
            setFormCurso({
                ...formCurso,
                imagen: {
                    img: e.target.result,
                    file: file
                }
            })
        })
    }



    function validFields() {

    }






    return (
        <>
            <div className="container-fluid">
                <div class="row flex-nowrap">

                    <div class=" col-md-3 col-xl-2 px-sm-2 px-0 boton">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-2 pt-2 text-white min-vh-100">
                            <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                <span class="fs-5 d-none d-sm-inline">Menu</span>
                            </a>
                            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                                <li class="d-flex align-items-center">
                                    <i class="fa-solid fa-book icono"></i>
                                    <a href="#" class="nav-link">
                                        <span class="d-none d-sm-inline  text-white">Mis cursos</span>
                                    </a>
                                </li>
                                <li class='d-flex align-items-center'>
                                    <i class="fa-solid fa-user-pen icono"></i>
                                    <a href="#" class="nav-link">
                                        <span class="d-none d-sm-inline  text-white">Gestión usuarios</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="ps-5">
                        <Form_Curso formCurso={formCurso} handleChange={handleChange} cargarImagen={cargarImagen}></Form_Curso>
                        <button onClick={() => handleClick()}><i class="fa-solid fa-floppy-disk"></i></button>
                    </div>

                </div>
            </div>
        </>

    )



}


export default Gestion_contenido