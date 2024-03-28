import React from 'react'
import ReactDOM from 'react-dom/client'

function Login(){
    return (
        <section>
            <h1>Login</h1>
            <form action="http://localhost:5000/sendLogin" method='post'>
                <input type="email" placeholder='email' name="email"/>
                <input type="pass" placeholder='contraseña' name="password"/>
                <button type='submit'>Enviar</button>
            </form>
        </section>
    )
}

export default Login;
