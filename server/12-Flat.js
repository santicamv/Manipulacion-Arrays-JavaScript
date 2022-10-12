/*El método flat es inmutable que consiste en retornar un array donde los sub-arrays han sido aplanados hasta una profundidad especificada. El aplanamiento consiste en transformar un array de arrays a una sola dimensión.*/
/*Este procedimiento recibe un argumento:

La profundidad del aplanamiento, por defecto, tiene un valor de 1. Si se desea aplanar todos los sub-arrays en una sola dimensión, utiliza el valor de Infinity.*/

/*Matriz construída específicamente para el ejemplo*/
const matriz = [
    [1,2,3],
    [4,5,6,[1,5,4,3]],
    [7,8,9]
];

/*Ejemplo del uso e implementación de flat*/
const ejemploFlat = matriz.flat(Infinity);

/*Impresión por consola del resultado de la anterior operación*/
console.log(ejemploFlat);