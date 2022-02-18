import React from 'react'

function Search() {
    return (
        <>

            <div className="container col-11 d-flex">

                <h5 className="h5">Buscar: </h5>
                <form>
                    <input class="form-control mx-2"
                        type="search"
                        placeholder="¿Qué quieres aprender?"
                        aria-label="Search" />

                </form>
                <button className="btn boton1 mx-2" type="submit">
                    <i className="fa-solid fa-magnifying-glass" ></i>
                </button>

            </div>

        </>
    )
}

export default Search