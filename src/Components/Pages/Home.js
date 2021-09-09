import React from "react";

/*
    Componente Home
    Muestra el Inicio de la Aplicación
*/
const Home = () => {
    return (
        <div className="d-flex flex-column">
            <div className="d-flex flex-column mt-3">
                <h4> Operaciones con Matrices</h4>
                <h5> Las operaciones se efenctúan de la manera</h5>
                <p> Suma: A + B</p>
                <p> Resta: A - B</p>
                <p> Multiplicación: A * B</p>
                <p> Potencia A<sup>n</sup></p>
            </div>

            <div className="d-flex flex-column">
                <h4> Operaciones con Conjuntos</h4>
                <h5> Las operaciones se efenctúan de la manera</h5>
                <p> Unión: A ∪ B</p>
                <p>Intersección: A ∩ B</p>
                <p>Diferencia: A - B</p>
            </div>

        </div>
    )
}

export default Home;

