/*
    Clase Control.
    Contiene los métodos necesarios para las operaciones de Suma, Resta, Multiplicación
    y Potencia de Matrices. También contiene los métodos para las operaciones de Unión,
    Intersección y Diferencia de Conjuntos.
*/
class Control {

    // Operaciones Básicas de Conjuntos
    /*
        Unión de Conjuntos.
        Recibe como paramétro 2 conjuntos en forma de arreglo.
        Devuelve un arreglo como resultado de la unión de las entradas
        de manera ordenada de menor a mayor.
        A UNION B
    */
    static union_conjunto = (con_a, con_b) => {
        let union = con_a.concat(con_b);
        union = union.filter((item, index) => {
            return union.indexOf(item) === index;
        });

        return union.sort((a, b) => a - b);
    }

    /*
        Intersección de Conjuntos.
        Recibe como paramétro 2 conjuntos en forma de arreglo.
        Devuelve un arreglo como resultado de la intersección de las entradas
        A INTERSECCION B
    */
    static interseccion_conjunto = (con_a, con_b) => {
        let interseccion = con_a.filter((item) => {
            return con_b.includes(item);
        });
        return interseccion;
    }

    /*
        Diferencia de Conjuntos.
        Recibe como paramétro 2 conjuntos en forma de arreglo.
        Devuelve un arreglo como resultado de la diferencia de las entradas
        A - B
    */
    static diferencia_conjunto = (con_a, con_b) => {
        let res = con_a.filter(item => !con_b.includes(item))
        return res;
    }

    // Operaciones Básicas con Matrices
    /*
        Suma y Resta de Matrcies
        Recibe como paramétro 2 matrices, las matrices deben de ser cuadradadas,
        además de un tercer parámetro que indicca si realiza una Suma o una Resta
        true --> Suma
        false --> Resta
        Devuelve una matriz con el resultado de la operación 
    */
    static suma_or_resta_matrices = (matriz_1, matriz_2, opcion) => {
        let res = [];
        let matriz_res = [];
        let slice = [];

        if (matriz_1.length === matriz_1[0].length && matriz_2.length === matriz_2[0].length) {
            for (let i = 0; i < matriz_1.length; i++) {
                for (let j = 0; j < matriz_2.length; j++) {
                    if (opcion) {
                        res.push(matriz_1[i][j] + matriz_2[i][j]);
                    } else {
                        res.push(matriz_1[i][j] - matriz_2[i][j]);
                    }
                }
            }

            for (let a = 0; a < matriz_2.length; a++) {
                slice = res.splice(0, matriz_2.length);
                matriz_res.push(slice);
            }
            return matriz_res;

        } else {
            console.log('Matriz No Cuadrada');
            return matriz_1.length !== matriz_1[0].length ? matriz_1 : matriz_2;
        }

    }

    /*
        Multiplicación de Matrcies
        Recibe como paramétro 2 matrices, las matrices deben de cumplir la condición
        de mxn nxm
        Devuelve una matriz con el resultado de la operación 
    */
    static multiplica_matrices = (matriz_1, matriz_2) => {
        if (matriz_1[0].length === matriz_2.length) {
            let matriz_multiplicacion = new Array(matriz_1.length);
            for (let i = 0; i < matriz_multiplicacion.length; i++) {
                matriz_multiplicacion[i] = new Array(matriz_2[0].length).fill(0);
            }

            for (let i = 0; i < matriz_multiplicacion.length; i++) {
                for (let j = 0; j < matriz_multiplicacion[0].length; j++) {
                    for (let k = 0; k < matriz_1[0].length; k++) {
                        matriz_multiplicacion[i][j] = matriz_multiplicacion[i][j] + matriz_1[i][k] * matriz_2[k][j];
                    }
                }
            }
            return matriz_multiplicacion;
        } else {
            console.log('Las dimensiones de mXn no son las adecuadas');
            return matriz_1[0].length !== matriz_2.length ? matriz_2 : matriz_1;
        }

    }

    /*
        Potencia de una Matriz
        Recibe como paramétro 1 matriz que debe de se cuadrada,
        además de un segundo parámetro que indicca la potencia a elevar la matriz.
        Devuelve una matriz con el resultado de la operación 
        Hace uso de la función de multiplicar implementada previamente.
    */
    static potencia_matriz = (matriz, potencia) => {
        let matriz_copia = matriz;
        if (matriz.length === matriz[0].length) {
            for (let i = 1; i < potencia; i++) {
                matriz_copia = Control.multiplica_matrices(matriz_copia, matriz);
            }
            return matriz_copia;
        } else {
            console.log('Matriz NO Cuadrada');
            return matriz_copia;
        }

    }



}

export default Control;