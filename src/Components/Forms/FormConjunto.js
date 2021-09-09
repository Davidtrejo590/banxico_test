import React, { useState } from "react";
import Control from "../../Control";

/*
    Componente FormConjunto
    Muetra un formuario para recibir dos conjuntos de datos.
*/

const FormConjunto = () => {

    /* 
        Estados necesarios
        validar --> determina si los campos han sido llenados para mostrar el resultado de la operación
        con_a --> toma el valor del primer formulario
        con_b --> toma el valor del segundo formulario
    */
    const [validar, setValidar] = useState(false);
    const [con_a, setCon_a] = useState([]);
    const [con_b, setCon_b] = useState([]);

    // Función para manejar el evento del botón 'Resolver'
    const handleResolver = (e) => {
        e.preventDefault();
        // Obtiene el contenido de cada formulario
        let tam_a = document.getElementById("conjunto_a").value;
        let tam_b = document.getElementById("conjunto_b").value;
        // Transforma el contenido de los formularios ( De String a Array ) y los asiga a su estado correspondiente
        setCon_a(tam_a.split('-').map(item => parseInt(item, 10)));
        setCon_b(tam_b.split('-').map(item => parseInt(item, 10)));
        setValidar(true);
    }


    return (
        <div>
            <form>
                <div>
                    <h2>Elementos del Conjunto A</h2>
                    <input
                        className="w-50"
                        type="text"
                        id="conjunto_a"
                        placeholder="Ingresa los elementos del Conjunto de la forma '1-1-1-1-1'"
                        autoComplete="off"
                    />
                </div>
                <div>
                    <h2>Elementos del Conjunto B</h2>
                    <input
                        className="w-50"
                        type="text"
                        id="conjunto_b"
                        placeholder="Ingresa los elementos del Conjunto de la forma '1-1-1-1-1'"
                        autoComplete="off"
                    />
                </div>
                <br />
                <button className="btn btn-success" onClick={handleResolver}>Resolver</button>
            </form>

            <div>
                {
                    /* valida el estado de 'validar' para mostar el resultado de cada una de la operaciones */
                    validar ?
                        <div>
                            <div className="d-flex mt-3">
                                <h6>Conjunto A</h6>
                                {
                                    con_a.map((item, index) => {
                                        return <p className="mx-4" key={index}>{`${item}`}</p>
                                    })
                                }
                            </div>
                            <div className="d-flex">
                                <h6>Conjunto B</h6>
                                {
                                    con_b.map((item, index) => {
                                        return <p className="mx-4" key={index}>{item}</p>
                                    })
                                }
                            </div>
                            <div className="d-flex mt-2">
                                <h6>Unión</h6>
                                {
                                    Control.union_conjunto(con_a, con_b).map((item, index) => {
                                        return <p className="mx-4" key={index}>{item}</p>
                                    })
                                }
                            </div>
                            <div className="d-flex">
                                <h6>Intersección</h6>
                                {
                                    Control.interseccion_conjunto(con_a, con_b).map((item, index) => {
                                        return <p className="mx-5" key={index}>{item}</p>
                                    })
                                }
                            </div>
                            <div className="d-flex">
                                <h6 className="mr-2">Diferencia</h6>
                                {
                                    Control.diferencia_conjunto(con_a, con_b).map((item, index) => {
                                        return <p className="mx-5" key={index}>{item}</p>
                                    })
                                }
                            </div>

                        </div>
                        :
                        <div></div>
                }
            </div>
        </div>
    )
}

export default FormConjunto;
