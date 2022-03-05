
import "../assets/styles.css";
import { useState } from 'react';

import Form_Curso from '../components/Form_Curso'

function Gestion_contenido() {



    const [videos, setVideos] = useState([])

    

    
    function handleClick(){
        if(validFields){

        }
        


    }



    function validFields(){

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
                        <Form_Curso ></Form_Curso>
                        <button onClick={(e)=>handleClick(e)}><i class="fa-solid fa-floppy-disk"></i></button>
                    </div>

                </div>
            </div>
        </>

    )



}


export default Gestion_contenido