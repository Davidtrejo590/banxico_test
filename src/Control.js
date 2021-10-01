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
    
        if (matriz_1.length === matriz_2.length && matriz_1[0].length === matriz_2[0].length) {
            for (let i = 0; i < matriz_1.length; i++) {
                for (let j = 0; j < matriz_1[0].length; j++) {
                    if (opcion) {
                        res.push(matriz_1[i][j] + matriz_2[i][j]);
                    } else {
                        res.push(matriz_1[i][j] - matriz_2[i][j]);
                    }
                }
            }
            for (let a = 0; a < matriz_2.length; a++) {
                slice = res.splice(0, matriz_2[0].length);
                matriz_res.push(slice);
            }
            return matriz_res;
    
        } else {
            console.log('Matriz No Adecuada');
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


    // DOM METHODS

    /* 
        Creación de una matriz de inputs de manera dinámica 
        Recibe como parámetro el número de filas y columnas correspondientes
        El parámetro container es un elemento donde se colocará la matriz a dibujar
    */
    static create_matriz = (filas, columnas, container) => {
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

    /* Método para eliminar los campos, recarga la página actual */
    static delete_values = () => {
        window.location.reload(true);
    }

    /* 
        Método para mostrar las dimensiones de las matrices y crearlas 
        Recibe como parámetro los elementos filas_*, columnas_* el container_*
    
    */
    static get_values_matriz(filas_a, columnas_a, filas_b, columnas_b, container_a, container_b) {
        document.getElementById("res_a").innerHTML = "Dimensiones de A: " + parseInt(filas_a.value) + "x" + parseInt(columnas_a.value);
        document.getElementById("res_b").innerHTML = "Dimensiones de B: " + parseInt(filas_b.value) + "x" + parseInt(columnas_b.value);

        /* Hace el llamado a la función para crear y dibujar la matriz en el lugar y con los valores correspondientes */
        Control.create_matriz(parseInt(filas_a.value), parseInt(columnas_a.value), container_a);
        Control.create_matriz(parseInt(filas_b.value), parseInt(columnas_b.value), container_b);
    }

    /* Métodos para Conjuntos */

    // Obtiene el valor de los inputs de la dimensión de los conjuntos y los válida
    static data_conjuntos = () => {
        const conjunto_a = parseInt(document.getElementById("conjunto_a").value);
        const conjunto_b = parseInt(document.getElementById("conjunto_b").value);
        const cont_con_a = document.getElementById("cont_con_a");
        const cont_con_b = document.getElementById("cont_con_b");

        if (isNaN(conjunto_a) || isNaN(conjunto_b)) {
            alert('Entradas Inválidas');
        } else {
            // Dibujar conjuntos
            document.getElementById("res_con_a").innerHTML = `Elementos de A - ${conjunto_a}`;
            document.getElementById("res_con_b").innerHTML = `Elementos de B - ${conjunto_b}`;
            Control.create_conjunto(conjunto_a, cont_con_a);
            Control.create_conjunto(conjunto_b, cont_con_b);
        }
    }

    /* 
        Dibuja los inputs necesarios para cada conjunto
        Recibe una lista de elementos y una container que es donde se colocará
    */
    static create_conjunto = (elementos, container) => {
        for (let i = 0; i < elementos; i++) {
            let elem = document.createElement("input");
            elem.setAttribute("type", "number");
            elem.setAttribute("id", `elem-${i}`);
            container.appendChild(elem);
        }
    }



}

export default Control;