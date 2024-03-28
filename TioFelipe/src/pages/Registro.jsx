import React from 'react'
import ReactDOM from 'react-dom/client'

function Registro(){
    return (
        <section>
            <h1>Registro</h1>
            <form action="http://localhost:5000/sendRegister" method='post'>
                <input type="text" placeholder='nombre' name='nombre'/>
                <input type="text" placeholder='apellido' name='apellido'/>
                <input type="email" placeholder='email' name="email"/>
                <input type="pass" placeholder='contraseña' name="password"/>
                <button type='submit'>Enviar</button>
            </form>
        </section>
    )
}

export default Registro;
