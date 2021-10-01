import React, { useState } from "react";
import Control from "../../Control";

/* 
    Componente para dibujar una matriz de acuerdo a las dimensiones obtenidas 
    Recibe 'operacion' (String) como props para hacer las validaciones correspondientes

*/

const DrawMatriz = (props) => {

    /* 
        Estado para válidar que los inputs no estén vacíos
    */
    const [listo, setListo] = useState(false);

    /* Elementos HTML necesarios  */
    /* matriz_container_a y b son los lugares donde se dibujarán las matrices de inputs */
    const matriz_container_a = document.getElementById("matriz_a");
    const matriz_container_b = document.getElementById("matriz_b");

    /* 
        Los elementos filas_* y columnas_* contienen número de filas y columnas correspondientes 
        de cada matriz (Son las dimensiones de cada una).
    */
    const filas_a = document.getElementById("filas_a");
    const columnas_a = document.getElementById("columnas_a");

    const filas_b = document.getElementById("filas_b");
    const columnas_b = document.getElementById("columnas_b");


    /* Método para la creación de la matriz de inputs */
    const dibujar_matriz = () => {

        /* Válida que las entradas tengan algún valor y sean numéricos */
        if (isNaN(parseInt(filas_a.value)) || isNaN(parseInt(columnas_a.value)) || isNaN(parseInt(filas_b.value)) || isNaN(parseInt(columnas_b.value))) {
            alert("Debes de Ingresar las Dimensiones de cada Matriz");
        } else {
            switch (props.operacion) {
                /* Para una suma o resta válida que las dimensiones de cada una sean iguales */
                case 'SumayResta':
                    if ((parseInt(filas_a.value) === parseInt(filas_b.value)) && parseInt(columnas_a.value) === parseInt(columnas_b.value)) {
                        Control.get_values_matriz(filas_a, columnas_a, filas_b, columnas_b, matriz_container_a, matriz_container_b);
                    } else {
                        alert("Las dimensiones de A deben ser iguales a las de B");
                    }
                    break;

                /* Para una multiplicación valida que las columnas de A sean igual a filas de B */
                case 'MultiplicayDivide':
                    if (parseInt(columnas_a.value) !== parseInt(filas_b.value)) {
                        alert("Las Columnas de A no coinciden con las Filas de B / NxM - MxN");
                    } else {
                        Control.get_values_matriz(filas_a, columnas_a, filas_b, columnas_b, matriz_container_a, matriz_container_b);
                    }
                    break;

                /* Para la potencia de válida que las matrices sean cuadradas */
                case 'Potencia':
                    if ((parseInt(filas_a.value) !== parseInt(columnas_a.value)) || (parseInt(filas_b.value) !== parseInt(columnas_b.value))) {
                        alert("La matriz debe de ser cuadrada");
                    } else if ((!document.getElementById("pot").value)) {
                        alert("El campo de potencia no es  válido");
                    }
                    else {
                        Control.get_values_matriz(filas_a, columnas_a, filas_b, columnas_b, matriz_container_a, matriz_container_b);
                    }
                    break;

                default:
                    break;
            }
            setListo(true);
        }
    }

    /* 
        Método para recuperar los valores de cada input de las matrices A y B 
        Envía los valores hacía del componente padre correspondiente en forma de 
        lista de listas.
    */
    const values_matriz = () => {

        let matriz_a_values = [];
        let matriz_b_values = [];
        let values_a = [];
        let values_b = [];

        if (!listo) {
            alert('No hay entradas');
        } else {
            // Contiene el valor de las columnas de la Matriz A
            let container_a = document.querySelectorAll("div.matriz_a");
            let matriz_a = container_a[0].childNodes;
            for (let i = 0; i < matriz_a.length; i++) {
                let filas = matriz_a[i].childNodes;
                for (let j = 0; j < filas.length; j++) {
                    let columna = filas[j].id;
                    // console.log(`Matriz A - Indíce: ${i}${j}, Valor: ${document.getElementById(columna).value}`);
                    if (document.getElementById(columna).value === '') {
                        alert(` La celda ${i}${j} de A no tiene valor`);
                    } else {
                        matriz_a_values.push(document.getElementById(columna).value);
                    }

                }
            }

            // Contiene el valor de las columnas de la Matriz B
            let container_b = document.querySelectorAll("div.matriz_b");
            let matriz_b = container_b[0].childNodes;
            for (let i = 0; i < matriz_b.length; i++) {
                let filas = matriz_b[i].childNodes;
                for (let j = 0; j < filas.length; j++) {
                    let columna = filas[j].id;
                    // console.log(`Matriz B - Indíce: ${i}${j}, Valor: ${document.getElementById(columna).value}`);
                    if (document.getElementById(columna).value === '') {
                        alert(` La celda ${i}${j} de B no tiene valor`);
                    } else {
                        matriz_b_values.push(document.getElementById(columna).value);
                    }

                }
            }

            /* Formatea los datos de String a int y los forma en lista de listas según las dimensiones */
            for (let i = 0; i < parseInt(filas_a.value); i++) {
                let arr = matriz_a_values.splice(0, parseInt(columnas_a.value));
                values_a.push(arr.map((item) => parseInt(item)));
            }

            for (let i = 0; i < parseInt(filas_b.value); i++) {
                let arr = matriz_b_values.splice(0, parseInt(columnas_b.value));
                values_b.push(arr.map((item) => parseInt(item)));
            }

            /* Envía los valores hacía el componente padre */
            props.func_data(values_a, values_b);
        }

    }


    /* 
        Formulario que se usa en cada situación SUMA, RESTA, MULTIPLICACIÓN, DIVISIÓN , POTENCIA 
        Dibuja el resultado según la operación correspondiente
    */
    return (
        <>
            <div className="d-flex justify-content-around mt-2">
                <div>
                    <h4>Dimensiones Matriz A</h4>
                    <div className="d-flex justify-content-end mt-3">
                        <p>Numero de filas: </p>
                        <input id="filas_a" className="input_dim" />
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <p>Numero de Columnas: </p>
                        <input id="columnas_a" className="input_dim" />
                    </div>
                </div>

                <div>
                    <h4>Dimensiones Matriz B</h4>
                    <div className="d-flex justify-content-end mt-3">
                        <p>Numero de filas: </p>
                        <input id="filas_b" className="input_dim" />
                    </div>

                    <div className="d-flex justify-content-end mt-3">
                        <p>Numero de Columnas: </p>
                        <input id="columnas_b" className="input_dim" />
                    </div>
                </div>

            </div>

            <div className="mt-3">
                <button className="btn btn-primary" type="button" onClick={dibujar_matriz}>Dibujar Matriz</button>

                {/* 
                    container_res aparece cuando se validan las entradas de las dimensiones y dibuja la matriz 
                    Aquí se dibujan las matrices de inputs
                */}
                <div id="container_res" className="d-flex justify-content-around mt-3 mb-3">
                    <div>
                        <p id="res_a"></p>
                        <div id="matriz_a" className="matriz_a"></div>
                    </div>
                    <div>
                        <p id="res_b"></p>
                        <div id="matriz_b" className="matriz_b"></div>
                    </div>
                </div>

                <div className="d-flex justify-content-evenly">
                    <button className="btn btn-success mt-2" type="button" onClick={values_matriz}>Resolver</button>
                    <button className="btn btn-danger mt-2" type="button" onClick={Control.delete_values}>Eliminar</button>
                </div>

            </div>
        </>
    )
}

export default DrawMatriz;