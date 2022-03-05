import React, { useContext, useState } from 'react';
import "../assets/styles.css";
import Logo from "../assets/img/Logo.png"


import {
    Link, Redirect, useHistory
} from 'react-router-dom'






function LoginUser() {


    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [validPass, setValidPass] = useState('form-control');
    const [validUser, setValidUser] = useState('form-control');




    function validarCampos() {
    //valida que los campos de texto del formulario login no esten vacios
        let validador = true
        if (user === '') {
            setValidUser('is-invalid ' + validUser)
            validador = false
        } else setValidUser('form-control')

        if (password === '') {
            setValidPass('is-invalid ' + validPass)
            validador = false
        } else setValidPass('form-control')

        return validador
    }



    function handleSubmit(e) {
    //
        e.preventDefault()
        if (validarCampos()) {
            consultUser()
        }
    }



    function handleChange(name, value) {
    //captura los cambios efectuados a los campos de texto del formulario de login
        console.log(value)
        if (name === "usuario") {
            console.log(value)
            setUser(value)
        } else {
            if (name === "password") {
                setPassword(value)
            }
        }
    };




    async function consultUser() {
    //permite el acceso como un usuario logueado del sistema
        var datos = {
            username: user,
            pass: password
        }

        const response = await fetch('http://localhost:5001', {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        const data = await response.json()
        if (data === 'nombre_usuario') {
            alert('El usuario no existe')
        } else
            if (data === 'contraseña') {
                alert('Contraseña incorrecta')
            } else{
                localStorage.setItem('data', data);
                window.location = '/'
            }
             

    }





    /////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>

            <div className="container-fluid d-flex justify-content-center mt-5">

                <div className="ventana-modal col-4 ">
                    <div className="text-center">
                        <Link to="/inicio">
                            <img className='logo' src={Logo} />
                        </Link>
                    </div>
                    <h3 className="mb-2 text-center">¡Welcome!</h3>
                    <h6 className="mb-2 text-center">Sign in to your account</h6>
                    <div className="col-9 mx-auto px-4 bg-light py-2 border border-info">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Usuario</label>
                                <input
                                    id="usuario"
                                    name="usuario"
                                    type="text"
                                    className={validUser}
                                    placeholder=""
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Contraseña</label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    className={validPass}
                                    placeholder=""
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                </input>
                                <div className='d-flex justify-content-end'>
                                    <h6>¿Olvidó su contraseña?</h6>
                                </div>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-3">
                                <button type="submit"
                                    className="btn boton col-12 mx-3">
                                    Login</button>
                            </div>
                            <div className="text-center">

                                <Link to="/registro">

                                    <button onClick={() => { }} type="button"
                                        className="btn btn-link">Regístrate
                                    </button>

                                </Link>

                            </div>
                        </form >

                    </div>
                </div>
            </div>

        </>
    );
}
export default LoginUser