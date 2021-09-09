import React, { useState } from "react";
import Control from '../../Control';

/* 
    Componente FormPotencia
    Crea el formulario correspondiente para recibir una matriz y la potencia deseada
    Muestra el resultado de la operación
*/

const FormPotencia = () => {

    /* 
        Estados necesarios
        validar --> determina si los campos han sido llenados para mostrar el resultado de la operación
        matriz --> contiene el contenido de la matriz obtenido del formulario
        potencia --> contiene el valor de la potencia a elevar
    */
    const [validar, setValidar] = useState(false);
    const [matriz, setMatriz] = useState([]);
    const [potencia, setPotencia] = useState(0);

    // Función para manejar el evento del botón 'Resolver'
    const handleResolver = (e) => {
        e.preventDefault();
        let tam_a = document.getElementById("matriz").value;
        setMatriz(tam_a.split('-').map(fila => fila.split(',').map(item => parseInt(item, 10))));
        setPotencia(document.getElementById("potencia").value);
        setValidar(true)
    }

    return (
        <div>
            <form>
                <div>
                    <h2>Matriz</h2>
                    <input
                        className="w-50"
                        type="text"
                        id="matriz"
                        placeholder="Ingresa los elementos del Conjunto de la forma '1,1,1 - 1,1,1'"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <h2>Potencia</h2>
                    <input
                        className="w-50"
                        type="number"
                        id="potencia"
                        placeholder="Potencia a Elevar la Matriz"
                    />
                </div>
                <br />
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-success" onClick={handleResolver}>Resolver</button>
                </div>
            </form>

            <div>
                {
                    /* valida el estado de 'validar' para efectuar la acción correspondiente */
                    validar ?
                        <div className="d-flex flex-column align-items-center mt-3">
                            <p>Potencia</p>
                            {
                                Control.potencia_matriz(matriz, potencia).map((item, index) => {
                                    return (
                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    )
                                })
                            }
                        </div>
                        :
                        <div></div>
                }
            </div>
        </div>
    )
}

export default FormPotencia;
