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

    let content = null;

    if (currentPath === '/' || currentPath === '/TioFelipe') {
        content = <Home />;
    } else if (currentPath === '/login') {
        content = <Login />;
    } else if (currentPath === '/register') {
        content = <Registro />;
    } else if (currentPath === '/pedido') {
        content = <Pedidos />;
    } else if (currentPath === '/encargos') {
        content = <Encargos />;
    } else {
        // Handle other paths or show a 404 page
        content = <div>Page Not Found</div>;
    }

    return (
        <>
            <button onClick={() => handleNavigation('/')}>Home</button>
            <button onClick={() => handleNavigation('/login')}>Login</button>
            <button onClick={() => handleNavigation('/register')}>Registro</button>
            <button onClick={() => handleNavigation('/pedido')}>Hace tu pedido</button>
            <button onClick={() => handleNavigation('/encargos')}>Encargos</button>
            {content}
        </>
    );
}

export default App;
