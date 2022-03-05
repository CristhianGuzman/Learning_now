import { useState } from 'react';


function Form_Curso({cargarImagen}) {


    const [formVideo, setFormVideo] = useState({
        titulo: '',
        descripcion: '',
        video: null
    })


    function handleChange(value) {

        setFormVideo({
            ...formVideo,
            titulo: value
        })

    }       
/*
    function handleClick() {
        setVideos([
            ...videos,
            formVideo
        ])
        console.log(formVideo)
        console.log(videos)


    }*/


    function cargarImagen(e){

        const file = e.target.files[0]
        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)

        fileReader.addEventListener('load',(e)=>{
            setFormVideo({
                ...formVideo,
                video : e.target.result
            })
        })
    }

   

    return(
    <div className="row col-6 border px-5 py-3 my-4">
        <label >Nombre del curso</label>
        <input type="text" className='form-control mb-3' placeholder="Escribe el titulo para el curso"></input>
        <label>Descripción</label>
        <textarea className='form-control mb-3' placeholder="Escribe una descripcion del curso"></textarea>
        <label >Cargar imagen</label>
        <input
            type="file"
            accept=""
            className='form-control mb-3'
            onChange={(e) => cargarImagen(e)}
        ></input>
        <img src={formVideo.video}></img>
    </div>
    )

}



export default Form_Curso