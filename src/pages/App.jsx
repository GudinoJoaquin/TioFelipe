import React, { useState } from 'react';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Registro from './Registro.jsx';
import Pedidos from './Pedidos.jsx';
import Encargos from './Encargos.jsx';

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const handleNavigation = (path) => {
        setCurrentPath(path);
        window.history.pushState({}, '', path);
    };

    return (
        <>
            <button onClick={() => handleNavigation('/TioFelipe')}>Home</button>
            <button onClick={() => handleNavigation('/TioFelipe/login')}>Login</button>
            <button onClick={() => handleNavigation('/TioFelipe/register')}>Registro</button>
            <button onClick={() => handleNavigation('/TioFelipe/pedido')}>Hacer pedido</button>
            <button onClick={() => handleNavigation('/TioFelipe/encargos')}>Encargos</button>

            {currentPath === '/TioFelipe' && <Home/>}
            {currentPath === '/TioFelipe/login' && <Login/>}
            {currentPath === '/TioFelipe/register' && <Registro/>}
            {currentPath === '/TioFelipe/pedido' && <Pedidos/>}
            {currentPath === '/TioFelipe/encargos' && <Encargos/>}
        </>
    );
}

export default App;
