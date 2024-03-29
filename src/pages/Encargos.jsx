import React, { useState, useEffect } from 'react';

function Encargos() {
    const [encargos, setEncargos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/pedidos/encargos")
            .then(response => response.json())
            .then(data => {
                setEncargos(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <h1>Encargos</h1>
            <ul>
                {encargos.map(encargo => (
                    <li key={encargo.id}>
                        <strong>Nombre:</strong> {encargo.user_name} <br />
                        <strong>Apellido:</strong> {encargo.user_surname} <br />
                        <strong>Email:</strong> {encargo.user_email} <br />
                        <strong>Link del Producto:</strong> <a target='_blank' href={encargo.product_link} > {encargo.product_link} </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Encargos;
