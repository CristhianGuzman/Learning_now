import { useState } from 'react';


function Form_Curso({ handleChange, formCurso, cargarImagen }) {





    return (
        <div className="row col-6 border px-5 py-3 my-4">
            <form>
                <label >Nombre del curso</label>
                <input
                    onChange={(e)=> handleChange(e.target.name, e.target.value)} 
                    name='titulo_curso'
                    type="text" className='form-control mb-3' 
                    placeholder="Escribe el titulo para el curso">
                </input>
                <label>Descripción</label>
                <textarea 
                    onChange={(e)=> handleChange(e.target.name, e.target.value)} 
                    name='descripcion_curso'
                    className='form-control mb-3' 
                    placeholder="Escribe una descripcion del curso">
                </textarea>
                <label >Cargar imagen</label>
                <input
                    type="file"
                    accept=""
                    className='form-control mb-3'
                    onChange={(e) => cargarImagen(e)}
                ></input>
                <img src={formCurso.imagen.img}></img>
            </form>
        </div>
    )

}



export default Form_Curso