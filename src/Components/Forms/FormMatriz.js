import React, { useState, useEffect } from "react";
import Control from "../../Control";

/* 
    Componente FormMatriz
    Recibe operacion mediante props para decidir si se muestra un 
    formulario para Suma y Resta o para Multiplicación y División
*/

const FormMatriz = (props) => {

    /* 
        Estados necesarios
        validar --> determina si los campos han sido llenados para mostrar el resultado de la operación
        operación --> toma el valor de operacion que se recibe mediante props
        mat_a y mat_b son el contenido de la Matriz A y B respectivamente.
    */
    const [validar, setValidar] = useState(false);
    const [operacion, setOperacion] = useState('');
    const [mat_a, setMat_a] = useState([]);
    const [mat_b, setMat_b] = useState([]);

    // Coloca el contenido de props en el estado de operacion cuando carga el Componente
    useEffect(() => {
        setOperacion(props.operacion);
    }, [props])

    // Función para manejar el evento del botón 'Resolver'
    const handleResolver = (e) => {
        e.preventDefault();
        // Se obtiene el contenido de los formularios
        let tam_a = document.getElementById("matriz_a").value;
        let tam_b = document.getElementById("matriz_b").value;
        // Transforma el contenido de los formularios, de String a Array
        setMat_a(tam_a.split('-').map(fila => fila.split(',').map(item => parseInt(item, 10))));
        setMat_b(tam_b.split('-').map(fila => fila.split(',').map(item => parseInt(item, 10))));
        setValidar(true);
    }

    return (
        <div>
            <form>
                <div>
                    <h2>Matriz A</h2>
                    <input
                        className="w-50"
                        type="text"
                        id="matriz_a"
                        placeholder="Ingresa los elementos del Conjunto de la forma '1,1,1 - 1,1,1'"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <h2>Matriz B</h2>
                    <input
                        className="w-50"
                        type="text"
                        id="matriz_b"
                        placeholder="Ingresa los elementos del Conjunto de la forma '1,1,1 - 1,1,1'"
                        autoComplete="off"
                    />
                </div>
                <br />
                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-success" onClick={handleResolver}>Resolver</button>
                </div>
            </form>

            <div>
                {
                    /* valida el estado de 'validar' y el de 'operacion' para efectuar la acción correspondiente */
                    validar ?
                        <div className="mt-5">
                            {
                                operacion === 'SumayResta' ?
                                    <div className="d-flex text-center justify-content-evenly">
                                        <div>
                                            <p>Suma</p>
                                            {
                                                Control.suma_or_resta_matrices(mat_a, mat_b, true).map((item, index) => {
                                                    return (
                                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div>
                                            <p>Resta</p>
                                            {
                                                Control.suma_or_resta_matrices(mat_a, mat_b, false).map((item, index) => {
                                                    return (
                                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    :
                                    operacion === "MultiplicayDivide" ?
                                        <div className="d-flex text-center justify-content-evenly">
                                            <div>
                                                <p>Multiplicación</p>
                                                {
                                                    Control.multiplica_matrices(mat_a, mat_b).map((item, index) => {
                                                        return (
                                                            <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                                        )
                                                    })
                                                }
                                            </div>
                                            <div>
                                                <p>División</p>
                                                {
                                                    // Control.multiplica_matrices(mat_a, mat_b).map((item, index) => {
                                                    //     return (
                                                    //         <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                                    //     )
                                                    // })
                                                    <p className="strong">No disponible aún...</p>
                                                }
                                            </div>
                                        </div>
                                        :
                                        <div></div>
                            }
                        </div>
                        :
                        <div></div>
                }
            </div>
        </div>
    )
}

export default FormMatriz;