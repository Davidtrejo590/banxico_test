import React from "react";

const DrawMatriz = (props) => {

    const matriz_container_a = document.getElementById("matriz_a");
    const matriz_container_b = document.getElementById("matriz_b");

    const filas_a = document.getElementById("filas_a");
    const columnas_a = document.getElementById("columnas_a");

    const filas_b = document.getElementById("filas_b");
    const columnas_b = document.getElementById("columnas_b");



    const send_values = () => {

        if (isNaN(parseInt(filas_a.value)) || isNaN(parseInt(columnas_a.value)) || isNaN(parseInt(filas_b.value)) || isNaN(parseInt(columnas_b.value))) {
            alert("Entrada Inválida");
        }

        switch (props.operacion) {
            case 'SumayResta':
                if ((parseInt(filas_a.value) === parseInt(filas_b.value)) && parseInt(columnas_a.value) === parseInt(columnas_b.value)) {
                    get_values_matriz();
                } else {
                    alert("Las dimensiones de las matrices no son iguales");
                }
                break;

            case 'MultiplicayDivide':
                if (parseInt(columnas_a.value) !== parseInt(filas_b.value)) {
                    alert("Las dimensiones de las matrices no son adecaudas");
                } else {
                    get_values_matriz();
                }
                break;

            case 'Potencia':
                if ((parseInt(filas_a.value) !== parseInt(columnas_a.value)) || (parseInt(filas_b.value) !== parseInt(columnas_b.value))) {
                    alert("La matriz debe de ser cuadrada");
                } else {
                    get_values_matriz();
                }
                break;

            default:
                break;
        }

    }

    const create_matriz = (filas, columnas, container) => {
        for (let i = 0; i < filas; i++) {
            let fila = document.createElement("div");
            fila.setAttribute("id", `${container.id}-fil-${i}`);
            fila.setAttribute("class", `${container.id}-fil-${i}`);
            // console.log(fila);
            for (let j = 0; j < columnas; j++) {
                let columna = document.createElement("input");
                columna.setAttribute("type", "number");
                columna.setAttribute("id", `${container.id}-col-${i}${j}`);
                // console.log(columna);
                fila.appendChild(columna);
                container.appendChild(fila);
            }
        }
    }

    const check_values = () => {

        let matriz_a_values = [];
        let matriz_b_values = [];
        let values_a = [];
        let values_b = [];


        // Contiene el valor de las columnas de la Matriz A
        let container_a = document.querySelectorAll("div.matriz_a");
        let matriz_a = container_a[0].childNodes;
        for (let i = 0; i < matriz_a.length; i++) {
            let filas = matriz_a[i].childNodes;
            for (let j = 0; j < filas.length; j++) {
                let columna = filas[j].id;
                // console.log(`Matriz A - Indíce: ${i}${j}, Valor: ${document.getElementById(columna).value}`);
                matriz_a_values.push(document.getElementById(columna).value);
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
                matriz_b_values.push(document.getElementById(columna).value);
            }
        }

        for (let i = 0; i < parseInt(filas_a.value); i++) {
            let arr = matriz_a_values.splice(0, parseInt(columnas_a.value));
            values_a.push(arr.map((item) => parseInt(item)));
        }

        for (let i = 0; i < parseInt(filas_b.value); i++) {
            let arr = matriz_b_values.splice(0, parseInt(columnas_b.value));
            values_b.push(arr.map((item) => parseInt(item)));
        }

        props.func_data(values_a, values_b);
    }

    const delete_values = () => {
        document.getElementById("mat_res").remove();
        document.getElementById("container_res").remove();
    }


    function get_values_matriz() {
        document.getElementById("res_a").innerHTML = "Dimensiones de A: " + parseInt(filas_a.value) + "x" + parseInt(columnas_a.value);
        document.getElementById("res_b").innerHTML = "Dimensiones de B: " + parseInt(filas_b.value) + "x" + parseInt(columnas_b.value);

        create_matriz(parseInt(filas_a.value), parseInt(columnas_a.value), matriz_container_a);
        create_matriz(parseInt(filas_b.value), parseInt(columnas_b.value), matriz_container_b);
    }


    return (
        <>
            <div className="d-flex justify-content-around mt-2">
                <div>
                    <h4>Dimensiones Matriz A</h4>
                    <div className="d-flex justify-content-end mt-3">
                        <p>Numero de filas: </p>
                        <input type="text" id="filas_a" className="input_dim" />
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
                <button className="btn btn-primary" type="button" onClick={send_values}>Dibujar Matriz</button>

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
                    <button className="btn btn-success mt-2" type="button" onClick={check_values}>Resolver</button>
                    <button className="btn btn-danger mt-2" type="button" onClick={delete_values}>Eliminar</button>
                </div>

            </div>
        </>
    )
}

export default DrawMatriz;