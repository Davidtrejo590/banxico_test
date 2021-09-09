import React from "react";
import { Route, Switch } from "react-router";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./Components/Header";
import Home from './Components/Pages/Home';
import Matriz from './Components/Pages/Matriz';
import Conjunto from './Components/Pages/Conjunto';
import NotFound from "./Components/Pages/NotFound";

/*
    Componente App
    Contiene un Componente Header para seleccionar los Módulos disponibles.
    Usa Route para definir las rutas necesarias a otros Componentes.
    Mediante Switch se elije el Componente de acuerdo a su ruta.
    NotFound es un Componente que se renderiza en caso de una ruta no específicada.
    Se utiliza bootstrap desde este Coponente para que todos los Componentes puedan tener acceso.
*/


const App = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/matriz' component={Matriz} />
        <Route path='/conjunto' component={Conjunto} />
        <Route component={NotFound} />
      </Switch>
    </div>
  )
}

export default App;
