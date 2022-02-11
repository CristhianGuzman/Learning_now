
const router = require('express').Router()
const { response } = require('express');
const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    password: 'admin',
    user: 'postgres',
    port: '5432',
    database: 'USERS'

});



const getUser = async (req, res) => {
    try{
        const response = await pool.query("SELECT * FROM usuario WHERE nombre_usuario = $1",[req.body.username])   

        if (response.rows[0] === undefined) {
            res.json('nombre_usuario')
        } else {
            console.log(req.body.pass)
            if(response.rows[0].contrasena === req.body.pass){
                res.json(JSON.stringify(response.rows[0]))
            }else{
                res.json('contraseña')
            }
        }  
    }catch(e){
        console.log(e)        
    }
}



const createUser = async (req, res) => {
    try{

        const {username, lastname, email, pass}= req.body
        const response = await pool.query(
            "INSERT INTO USUARIO "+
            "(NOMBRE, APELLIDO, NOMBRE_USUARIO, EMAIL_USUARIO, CONTRASENA, TIPO_USUARIO, ESTADO ) VALUES " +
            "($1, $2, 'nombreusuario', $3, $4, 'estudiante', true)",
            [username, lastname, email, pass])

        res.send('user created')
    }catch(e){
        console.log(e)        
    }
}




router.post('/', (req, res) => {
    getUser(req, res);
})


router.put('/', (req, res) => {
    createUser(req, res);
})


module.exports = router