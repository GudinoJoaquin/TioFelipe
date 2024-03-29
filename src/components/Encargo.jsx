import React from 'react';

function Encargo({ user_name, user_surname, user_email, product_link }) {
    return (
        <div>
                <li>
                    <strong>Nombre:</strong> {user_name} <br />
                    <strong>Apellido:</strong> {user_surname} <br />
                    <strong>Email:</strong> {user_email} <br />
                    <strong>Link del Producto:</strong> <a target='_blank' href={product_link} > {product_link} </a>
                </li>
        </div>
    );
}

export default Encargo;
