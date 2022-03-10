function Form_vide0() {






    return (



        <div className="row col-6 border px-5 py-3">
            <div className="col-7"><label>Cargar video</label>
                <input
                    type="file"
                    accept="video/*"
                    className='form-control mb-3'
                    name='videoFile'

                ></input>
                <label >Titulo del video</label>
                <input
                    name='titulo'
                    type="text"
                    className='form-control mb-3'
                    placeholder="Escribe el titulo para el curso"
                    onChange={(e) => handleChange(e.target.value)}
                ></input>
                <label>Descripcion video</label>
                <textarea
                    name='descripcion'
                    type="text"
                    className='form-control mb-4'
                    placeholder="Descripción del video"
                    onChange={(e) => handleChange(e.target.value)}

                ></textarea>
                <button onClick={() => handleClick()} className='btn boton col-12'>Añadir video</button>

            </div>

            <div className='col-5 bg-light'>
                <table class="table table-hover">
                    <thead class="table-dark">
                        <tr>

                            <th scope="col">Video</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            videos.map(video =>
                                <>
                                    <tr>

                                        <td className="">{video.titulo}</td>
                                        <td className="d-flex justify-content-end">
                                            <button className="btn btn-link p-2">
                                                <i className="fa-solid fa-pencil btn-dange"></i>
                                            </button>
                                            <button className="btn btn-link p-2">
                                                <i className="fa-regular fa-circle-xmark iconcolor"></i>
                                            </button>
                                        </td>

                                    </tr>
                                </>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )

}