import React, { useState, useEffect } from 'react';
import Encargo from '../components/Encargo';

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
                    <Encargo user_name={encargo.user_name} user_surname={encargo.user_surname} user_email={encargo.user_email} product_link={encargo.product_link}/>
                ))}
            </ul>
        </div>
    );
}

export default Encargos;
