import React, { useContext, useState } from 'react';
import "../assets/styles.css";
import Logo from "../assets/img/Logo.png"

import {
    Link, useHistory
} from 'react-router-dom'




//Uso de hook useState
function RegisterUser() {


    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [validFirstname, setValidFirstname] = useState('form-control');
    const [validLastname, setValidLastname] = useState('form-control');
    const [validEmail, setValidEmail] = useState('form-control');
    const [validPass, setValidPass] = useState('form-control');


    function validarCampos() {

        let validador = true
        if (firstname === '') {
            setValidFirstname('is-invalid ' + validFirstname)
            validador = false
        } else setValidFirstname('form-control')

        if (lastname === '') {
            setValidLastname('is-invalid ' + validLastname)
            validador = false
        } else setValidLastname('form-control')

        if (email === '') {
            setValidEmail('is-invalid ' + validEmail)
            validador = false
        } else setValidEmail('form-control')

        if (pass === '') {
            setValidPass('is-invalid ' + validPass)
            validador = false
        } else setValidPass('form-control')

        return validador
    }



    function handleSubmit(e) {
        e.preventDefault()
        if (validarCampos()) {
            createUser()
        }

    }



    function handleChange(name, value) {
        if (name === "firstname") {
            setFirstname(value)
        } else {
            if (name === "lastname") {
                setLastname(value)
            } else
                if (name === "email") {
                    setEmail(value)
                } else
                    if (name === "pass") {
                        setPass(value)
                    }
        }
    };




    async function createUser() {

        var datos = {
            username: firstname,
            lastname: lastname,
            email: email,
            pass: pass
        }



        const response = await fetch('http://localhost:5001', {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        })


        if (response.ok) {
            /*localStorage.setItem('usuario', JSON.stringify(datos))
            window.location = '/'*/

            alert('usuario creado')
            window.location.href = "./inicio"
        }

    }





    /////////////////////////////////////////////////////////////////////////////////////////
    return (
        <>

            <div className="container-fluid d-flex justify-content-center mt-5">

                <div className='col-4'>
                    <div className="text-center">
                        <Link to="/inicio">
                            <img className='logo' src={Logo} />
                        </Link>
                    </div>
                    <h6 className="mb-2 text-center">Create a new account</h6>
                    <div className="col-9 mx-auto px-4 bg-light py-2 border border-info">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    className={validFirstname}
                                    name="firstname"
                                    type='text'
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input
                                    className={validLastname}
                                    name="lastname"
                                    type='text'
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                </input>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    className={validEmail}
                                    name="email"
                                    type='email'
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group'>
                                <label>Contraseña</label>
                                <input
                                    className={validPass}
                                    name="pass"
                                    type='password'
                                    onChange={(e) => handleChange(e.target.name, e.target.value)}>
                                </input>
                            </div>
                            <div className="d-flex justify-content-center align-items-center mt-4">
                                <button type="submit"
                                    className="btn col-12 mx-3 boton">
                                    Registrarse</button>
                            </div>
                            <div className="text-center">

                                <Link to="/">
                                    <button onClick={() => { }} type="button"
                                        className="btn btn-link">Cancelar
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
export default RegisterUser