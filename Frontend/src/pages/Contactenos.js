import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Contactenos() {
    return (
        <>

            <Navbar />

            <div className="container col-8 pt-5">

                <div className="mb-3 rounded justify-content-center" id="contacto">
                    <h1>Contáctenos</h1>

                    <h6>¿Cómo podemos ayudarte?</h6>

                    <h6>Si tienes cualquier pregunta o simplemente quieres saludarnos,
                        la mejor manera de contactarnos es a través de nuestro formulario.
                        Hacemos todo lo posible para responder en menos de 48 horas.</h6>
                </div>

                <form>

                    <div className="pt-4 mb-3">
                        <label className="form-label text-dark">Nombre completo</label>
                        <input type="text"
                            className="form-control"
                            id="nombre_contacto"
                            aria-describedby="nombre_contacto" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Correo electrónico</label>
                        <input type="email"
                            className="form-control"
                            id="correo_contacto"
                            aria-describedby="email" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Teléfono</label>
                        <input type="text"
                            className="form-control"
                            id="telefono_contacto"
                            aria-describedby="telefono_contacto" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-dark">Escriba sus comentarios</label>
                        <textarea type="email"
                            className="form-control"
                            id="correo_contacto"
                            aria-describedby="email" />
                    </div>

                    <div className="pb-3 justify-content-end">
                        <button type="submit"
                            className="btn boton2 ">Enviar comentarios</button>
                    </div>

                </form>

            </div>


            <Footer />

        </>

    )
}

export default Contactenos