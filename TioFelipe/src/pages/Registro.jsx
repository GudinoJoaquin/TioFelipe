import React from 'react'
import ReactDOM from 'react-dom/client'

function Registro(){
    return (
        <section>
            <h1>Registro</h1>
            <div>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Apellido</label>
                    <input type="text" />
                </div>
                <div>
                    <label htmlFor="">Correo</label>
                    <input type="mail" />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" />
                </div>
                <div>
                    <label htmlFor="">Repetir Password</label>
                    <input type="password" />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </div>
        </section>
    )
}

export default Registro;
