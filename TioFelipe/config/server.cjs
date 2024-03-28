const express = require('express')
const mysql = require('mysql2')
const port = 5000
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tiofelipe'
})

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))

app.post('/sendRegister', (req, res) => {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const email = req.body.email;
    const pass = req.body.password;

    // Usar consultas parametrizadas para evitar la inyección de SQL
    const query = 'INSERT INTO reg_usuarios(user_name, user_surname, user_email, user_pass) VALUES (?, ?, ?, ?)';
    
    // Pasar los valores como un array al método query
    conexion.query(query, [nombre, apellido, email, pass], (err, results) => {
        if(err) {
            console.log('Error al insertar los datos:', err);
            res.status(500).send('Error interno del servidor');
            return
        }
        res.redirect('http://localhost:5173/login');
    });
});

app.post('/sendLogin', (req, res) => {
    const email = req.body.email;
    const pass = req.body.password;

    const query = `SELECT * FROM reg_usuarios WHERE user_email = ? AND user_pass = ?`;

    conexion.query(query, [email, pass], (err, results) => {
        if (err) {
            console.log('Error al recuperar los datos:', err);
            res.status(500).send('Error interno del servidor');
            return;
        }

        if (results.length > 0) {
            res.redirect('http://localhost:5173/')
        } else {
            res.status(401).send('Credenciales inválidas');
        }
    });
});


app.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)

})