import React, { useState } from "react";
import FormMatriz from "../Forms/FormMatriz";
import Control from "../../Control";

/*
    Componente SumaResta
    Se encarga de Mostar el Formulario para Suma y Resta
    Envía operacion como prop de FormMatriz para realizar la operación correspondiente
*/

const SumaResta = () => {

    const [mat_a, setMat_a] = useState([]);
    const [mat_b, setMat_b] = useState([]);
    const [validar, setValidar] = useState(false);

    const get_data = (matriz_a, matriz_b) => {
        // console.log('In parent Component', matriz_a, matriz_b)
        setMat_a(matriz_a);
        setMat_b(matriz_b);
        setValidar(true);
    }
    
    return (
        <div className="mt-2">
            <h4>Suma y Resta de Matrices</h4>
            <FormMatriz operacion="SumayResta" get_data={get_data}></FormMatriz>
            {
                validar ?
                    <div id="mat_res" className="mt-5 d-flex text-center justify-content-evenly">
                        <div>
                            <p>A + B</p>
                            {
                                Control.suma_or_resta_matrices(mat_a, mat_b, true).map((item, index) => {
                                    return (
                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p>A - B</p>
                            {
                                Control.suma_or_resta_matrices(mat_a, mat_b, false).map((item, index) => {
                                    return (
                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p>B + A</p>
                            {
                                Control.suma_or_resta_matrices(mat_b, mat_a, true).map((item, index) => {
                                    return (
                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <p>B - A</p>
                            {
                                Control.suma_or_resta_matrices(mat_b, mat_a, false).map((item, index) => {
                                    return (
                                        <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    :
                    <div></div>
            }
        </div>
    )
}

export default SumaResta;
