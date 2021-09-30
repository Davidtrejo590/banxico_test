import React, { useState } from "react";
import Control from '../../Control';
import FormMatriz from "./FormMatriz";

/* 
    Componente FormPotencia
    Crea el formulario correspondiente para recibir una matriz y la potencia deseada
    Muestra el resultado de la operación
*/

const FormPotencia = () => {

    /* 
        Estados necesarios
        validar --> determina si los campos han sido llenados para mostrar el resultado de la operación
        mat_a --> Obtiene los valores de la matriz a que provienen del componente hijo
        mat_b --> Obtiene los valores de la matriz b que provienen del componente hijo
    */
    const [mat_a, setMat_a] = useState([]);
    const [mat_b, setMat_b] = useState([]);
    const [validar, setValidar] = useState(false);


    /* Método para obtener los valores de las matrices que provienen del componente hijo */
    const get_data = (matriz_a, matriz_b) => {
        setMat_a(matriz_a);
        setMat_b(matriz_b);
        setValidar(true);
    }

    return (
        <div className="mt-2">
            <input id="pot" type="number" placeholder="Potencia a Elevar"></input>
            <FormMatriz operacion="Potencia" get_data={get_data}></FormMatriz>

            {
                validar ?
                    <div className="mt-3 d-flex text-center justify-content-evenly">
                        <div>
                            <p>{`A ^ ${document.getElementById("pot").value}`}</p>
                            {
                                Control.potencia_matriz(mat_a, document.getElementById("pot").value).map((item, index) => {
                                    return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                })
                            }
                        </div>
                        <div>
                            <p>{`B ^ ${document.getElementById("pot").value}`}</p>
                            {
                                Control.potencia_matriz(mat_b, document.getElementById("pot").value).map((item, index) => {
                                    return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
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

export default FormPotencia;
