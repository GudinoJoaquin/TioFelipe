import React from 'react'
import ReactDOM from 'react-dom/client'

function Login(){
    return (
        <section>
            <h1>Login</h1>
            <div>
                <div>
                    <label htmlFor="">Correo</label>
                    <input type="mail" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <div>
                    <span>Mantener logeado</span>
                    <input type="submit" />
                </div>
            </div>
        </section>
    )
}

export default Login;
