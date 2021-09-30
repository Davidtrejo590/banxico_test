import React, { useState } from "react";
import FormConjunto from "../Forms/FormConjunto";
import Control from "../../Control";

/*
    Componente Conjunto
    Se encarga de mostar el formulario correspondiente para conjuntos.
*/

const Conjunto = () => {

    /* 
        Estados necesarios 
        con_a --> guarda una lsita con los elementos del conjunto a     
        con_b -->  guarda una lsita con los elementos del conjunto b
        validar -->  permite validar los datos para mostrar el resultado     
    */
    const [con_a, setCon_a] = useState([]);
    const [con_b, setCon_b] = useState([]);
    const [validar, setValidar] = useState(false);

    /* 
        Obiene los datos de cada conjunto de inputs 
        Los datos vienen desde el componente hijo, y se guarda en el estado indicado.
    */
    const get_data = (conj_a, conj_b) => {
        setCon_a(conj_a.sort((a, b) => a - b));
        setCon_b(conj_b.sort((a, b) => a - b));
        setValidar(true);
    }

    return (
        <div>
            <h4>Operaciones con Conjuntos</h4>
            <FormConjunto get_data={get_data}></FormConjunto>

            <div className="mt-5">
                {
                    validar ?
                        <div>
                            <div className="d-flex align-items-baseline mt-3">
                                <h6>Conjunto A: </h6>
                                {
                                    con_a.map((item, index) => {
                                        return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    })
                                }
                            </div>
                            <div className="d-flex align-items-baseline">
                                <h6>Conjunto B: </h6>
                                {
                                    con_b.map((item, index) => {
                                        return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    })
                                }
                            </div>
                            <div className="d-flex align-items-baseline">
                                <h6>A ∪ B : </h6>
                                {
                                    Control.union_conjunto(con_a, con_b).map((item, index) => {
                                        return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    })
                                }
                            </div>
                            <div className="d-flex align-items-baseline">
                                <h6>A ∩ B : </h6>
                                {
                                    Control.interseccion_conjunto(con_a, con_b).map((item, index) => {
                                        return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    })
                                }
                            </div>
                            <div className="d-flex align-items-baseline">
                                <h6>A - B : </h6>
                                {
                                    Control.diferencia_conjunto(con_a, con_b).map((item, index) => {
                                        return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    })
                                }
                            </div>
                            <div className="d-flex align-items-baseline">
                                <h6>B - A : </h6>
                                {
                                    Control.diferencia_conjunto(con_b, con_a).map((item, index) => {
                                        return <div className="mx-2" key={index}><p>{`${item}`}</p></div>
                                    })
                                }
                            </div>
                        </div>
                        :
                        <div></div>
                }
            </div>
        </div>
    )
}

export default Conjunto;


