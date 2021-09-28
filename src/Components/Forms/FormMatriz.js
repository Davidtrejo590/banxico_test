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
        operación --> toma el valor de operacion que se recibe mediante props
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