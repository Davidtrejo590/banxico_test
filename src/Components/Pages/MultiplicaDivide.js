import React from "react";
import FormMatriz from "../Forms/FormMatriz";

/*
    Componente MultiplicaDivide
    Se encarga de Mostar el Formulario para Multiplicación y División
    Envía operacion como prop de FormMatriz para realizar la operación correspondiente
*/

const MultiplicaDivide = () => {
    return (
        <div>
            <h4>Multiplicación de Matrices</h4>
            <FormMatriz operacion="MultiplicayDivide"></FormMatriz>
        </div>
    )
}

export default MultiplicaDivide;
