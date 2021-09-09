import React from "react";
import FormMatriz from "../Forms/FormMatriz";

/*
    Componente SumaResta
    Se encarga de Mostar el Formulario para Suma y Resta
    Envía operacion como prop de FormMatriz para realizar la operación correspondiente
*/

const SumaResta = () => {
    return (
        <div>
            <h4>Suma y Resta de Matrices</h4>
            <FormMatriz operacion="SumayResta"></FormMatriz>
        </div>
    )
}

export default SumaResta;
