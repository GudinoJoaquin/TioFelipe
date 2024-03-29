import React from 'react'
import ReactDOM from 'react-dom/client'
import Input from '../components/Input';

function Login(){
    return (
        <section>
            <h1>Login</h1>
            <form action='http://localhost:5000/sendLogin' method='post'>
                <Input type='email' placeholder='Email' name='email'/>
                <Input type='password' placeholder='Contraseña' name='password'/>
                <Input type='submit'/>
            </form>
        </section>
    )
}

export default Login;
