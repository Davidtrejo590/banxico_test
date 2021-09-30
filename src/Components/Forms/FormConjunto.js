import React from "react";
import Control from "../../Control";

/*
    Componente FormConjunto
    Muetra un formuario para recibir dos conjuntos de datos.
*/

const FormConjunto = (props) => {

    /* 
        Método para extraer los valores de cada input
    */
    const get_values_conj = () => {
        let cont_a = document.querySelectorAll("div.cont_con_a");
        let cont_b = document.querySelectorAll("div.cont_con_b");
        let conj_a_values = [];
        let conj_b_values = [];

        /* Obtiene valores de A */
        let con_a = cont_a[0].childNodes;
        for (let i = 0; i < con_a.length; i++) {
            conj_a_values.push(parseInt(con_a[i].value));
        }

        /* Obtiene valores de B */
        let con_b = cont_b[0].childNodes;
        for (let i = 0; i < con_b.length; i++) {
            conj_b_values.push(parseInt(con_b[i].value));
        }

        /* Envía los valores de los conjuntos al componente Padre */
        props.get_data(conj_a_values, conj_b_values);
    }


    return (
        <>
            {/* Formularios para elementos de cada Conjunto */}
            <div className="d-flex justify-content-evenly mb-3">
                <div>
                    <h4>Número de Elementos del Conjunto A</h4>
                    <input id="conjunto_a" type="text" />
                </div>

                <div>
                    <h4>Número de Elementos del Conjunto B</h4>
                    <input id="conjunto_b" type="text" />
                </div>
            </div>


            <button className="btn btn-primary" type="button" onClick={Control.data_conjuntos}>Dibujar Conjuntos</button>

            {/* Container para dibujar los inputs de cada conjunto */}
            <div className="d-flex flex-column justify-content-around mt-3 mb-3">
                <div>
                    <p id="res_con_a"></p>
                    <div id="cont_con_a" className="cont_con_a"></div>
                </div>

                <div>
                    <p id="res_con_b"></p>
                    <div id="cont_con_b" className="cont_con_b"></div>
                </div>

            </div>

            <div className="d-flex justify-content-evenly">
                <button className="btn btn-success" type="button" onClick={get_values_conj}>Resolver</button>
                <button className="btn btn-danger" type="button" onClick={Control.delete_values}>Eliminar</button>
            </div>

        </>
    )
}

export default FormConjunto;
