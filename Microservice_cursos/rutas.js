const router = require('express').Router()
const path = require('path')
const multer = require('multer');
const { Pool } = require('pg');


const pool = new Pool({
    host: 'localhost',
    password: 'admin',
    user: 'postgres',
    port: '5432',
    database: 'COURSES'

});



const diskstorage = multer.diskStorage({
    destination: path.join(__dirname,'./images'),

    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer(
    { storage: diskstorage }
)



const createCourse = async (req, res)=>{
    try{

        const response = await pool.query(
            "INSERT INTO CURSO "+
            "(TITULO_CURSO, DESCRIPCION_CURSO, URL_IMAGEN) VALUES " +
            "($1, $2, $3)",
            [req.body.titulo, req.body.descripcion, req.file.filename]
        )

        res.send('user created')
    }catch(e){
        console.log(e)        
    }
}


const getCourse = async (req, res)=>{
    try{

        const response = await pool.query(
            "SELECT * FROM curso"
        )
        res.json(JSON.stringify(response.rows))
        
    }catch(e){
        console.log(e)        
    }
}





router.put('/cursos', upload.single('imagen'), (req, res) => {

    createCourse(req, res)
})

router.get('/cursos', (req, res) => {
    console.log('peticion')
    getCourse(req, res)
})




module.exports = router