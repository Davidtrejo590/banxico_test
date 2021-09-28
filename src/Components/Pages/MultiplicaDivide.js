import React, { useState } from "react";
import FormMatriz from "../Forms/FormMatriz";
import Control from "../../Control";

/*
    Componente MultiplicaDivide
    Se encarga de Mostar el Formulario para Multiplicación y División
    Envía operacion como prop de FormMatriz para realizar la operación correspondiente
*/

const MultiplicaDivide = () => {

    const [mat_a, setMat_a] = useState([]);
    const [mat_b, setMat_b] = useState([]);
    const [validar, setValidar] = useState(false);

    const get_data = (matriz_a, matriz_b) => {
        setMat_a(matriz_a);
        setMat_b(matriz_b);
        setValidar(true);
    }

    return (
        <div className="mt-2">
            <h4>Multiplicación de Matrices</h4>
            <FormMatriz operacion="MultiplicayDivide" get_data={get_data}></FormMatriz>
            {
                validar ?
                    <div id="mat_res" className="mt-5 d-flex text-center justify-content-evenly">
                        <div>
                            <p>A * B</p>
                            {
                                Control.multiplica_matrices(mat_a, mat_b).map((item, index) => {
                                    return (
                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p>A / B</p>
                            <p className="strong">No disponible aún...</p>
                        </div>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}

export default MultiplicaDivide;
