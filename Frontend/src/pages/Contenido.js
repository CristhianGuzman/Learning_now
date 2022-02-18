
import "../assets/styles.css";


function Gestion_contenido() {


    function handleClick(){


        alert('ajajaj')
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
                        <div className="row col-8 border px-5 py-3 my-4">
                            <label >Nombre del curso</label>
                            <input type="text" className='form-control mb-3' placeholder="Escribe el titulo para el curso"></input>
                            <label>Descripción</label>
                            <textarea className='form-control mb-3' placeholder="Escribe una descripcion del curso"></textarea>
                            <label >Cargar imagen</label>
                            <input type="file" accept="image/*" className='form-control mb-3' ></input>
                        </div>
                        <div className="row col-8 border px-5 py-3">
                            <div className="col-7">
                                <label >Titulo del video</label>
                                <input type="text" className='form-control mb-3' placeholder="Escribe el titulo para el curso"></input>
                                <label>Cargar video</label>
                                <input type="file" accept="video/*" className='form-control mb-3' ></input>
                                <label>Descripcion video</label>
                                <textarea type="text" className='form-control mb-4' placeholder="Descripción del video"></textarea>
                                <button onClick={()=>handleClick()} className='btn boton col-12'>Añadir video</button>

                            </div>

                            <div className='col-5 bg-light'>




                            </div>
                        </div>
                    </div>





                </div>
            </div>
        </>

    )



}


export default Gestion_contenido