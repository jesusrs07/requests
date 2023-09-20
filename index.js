const express = require('express')
const app = express()

//http://localhost:3000/cualquiercosa
app.get('/login/:user/:password', (req, res) =>{
    const {user, password} = req.params
    
    if (user === 'jesus' && password === '123'){
        res.json({msg: 'Inicio de sesion exitoso'})
        return
    }
    res.json({msg: 'Error en el usuario o la contraseña'})
})

/*FUNCIONALIDAD*/

app.post('/', (req, res) => {res.json({msg: 'Hola POST'})})

app.put('/', (req, res) =>{res.json({msg:'Hola PUT'})})

app.patch('/', (req, res) =>{res.json({msg:'Hola PATCH'})})

app.delete('/', (req, res) =>{res.json({msg:'Hola DELETE'})})

//http://localhost:3000/
app.listen(3000, () => {
    console.log('listenig on port 3000')
})