import React, { useState } from 'react';
import Login from './Login.jsx';
import Home from './Home.jsx';
import Registro from './Registro.jsx';

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    const handleNavigation = (path) => {
        setCurrentPath(path);
        window.history.pushState({}, '', path);
    };

    let content = null;

    if (currentPath === '/') {
        content = <Home />;
    } else if (currentPath === '/login') {
        content = <Login />;
    } else if (currentPath === '/register') {
        content = <Registro />;
    }else {
        // Handle other paths or show a 404 page
        content = <div>Page Not Found</div>;
    }

    return (
        <>
            <button onClick={() => handleNavigation('/')}>Home</button>
            <button onClick={() => handleNavigation('/login')}>Login</button>
            <button onClick={() => handleNavigation('/register')}>Registro</button>
            {content}
        </>
    );
}

export default App;
