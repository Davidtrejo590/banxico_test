import React, { useState, useEffect } from "react";
import DrawMatriz from "./DrawMatriz";


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

    const [operacion, setOperacion] = useState('');

    // Coloca el contenido de props en el estado de operacion cuando carga el Componente
    useEffect(() => {
        setOperacion(props.operacion);
    }, [props])


    // Función para obtener props de CHILD to PARENT
    const pull_data = ( matriz_A, matriz_B) => {
        props.get_data(matriz_A, matriz_B);
    }

    return (
        <div>
            <DrawMatriz func_data={pull_data} operacion = {operacion}></DrawMatriz>
        </div>
    )
}

export default FormMatriz;