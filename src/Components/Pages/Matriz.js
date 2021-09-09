import React from "react";
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import SumaResta from '../Pages/SumaResta';
import MultiplicaDivide from '../Pages/MultiplicaDivide';
import Potencia from '../Pages/Potencia';

/* 
    Componente Matriz.
    Este componente contiene rutas anidadas para mantener por separado la elección
    de la operación a efectuar.
    Usa Switch y Route para realizar dicho comportamiento.
    Usa el hook useRouteMatch para crear la ruta sin erroes.
*/

const Matriz = () => {

    // Obtiene la url y path por medio de destructurar el objeto que devuelve useRouterMatch()
    const { url, path } = useRouteMatch();

    return (
        <>
            <h1>Operaciones con Matrices</h1>

            <ul className="nav d-flex justify-content-evenly">
                <li className="nav-item">
                    <Link to={`${url}/suma_resta`} style={{textDecoration: 'none'}}>Suma y Resta</Link>
                </li>
                <li className="nav-item">
                    <Link to={`${url}/multiplica_divide`} style={{textDecoration: 'none'}}>Multiplicación</Link>
                </li>
                <li className="nav-item">
                    <Link to={`${url}/potencia`} style={{textDecoration: 'none'}}>Potencia</Link>
                </li>
            </ul>

            <Switch>
                <Route path={`${path}/suma_resta`} component={SumaResta} />
                <Route path={`${path}/multiplica_divide`} component={MultiplicaDivide} />
                <Route path={`${path}/potencia`} component={Potencia} />
            </Switch>
        </>
    )

}

export default Matriz;