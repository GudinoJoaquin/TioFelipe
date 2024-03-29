import React from 'react'
import ReactDOM from 'react-dom/client'
import Input from '../components/Input';

function Pedidos(){
    return (
        <section>
            <h1>Pedidos</h1>
            <form action='http://localhost:5000/sendPedido' method='post'>
                <Input type='text' placeholder='Nombre' name='nombre'/>
                <Input type='text' placeholder='Apellido' name='apellido'/>
                <Input type='email' placeholder='Email' name='email'/>
                <Input type='text' placeholder='Link del pdf' name='pdfLink'/>
                <Input type='submit'/>
            </form>
        </section>
    )
}

export default Pedidos;
