import React from 'react';
import { Link } from 'react-router-dom';
/*
    Componente Header
    Contiene los Links hacia las rutas regustradas en el Componente App
*/

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'>Banxico Test</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" to='/matriz'>Matrices</Link>
                        <Link className="nav-link active" to='/conjunto'>Conjuntos</Link>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
