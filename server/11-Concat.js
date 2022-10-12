/*El método concat es inmutable (No modifica el array original sino que crea uno nuevo) y consiste en crear un nuevo array a partir de la unión de otros valores o arrays especificados como argumentos.*/

/*Arrays creados para el ejemplo en específico*/
const elements = [1,1,2,2];
const otherElements = [3,3,4,4];

/*Ejemplo del uso de concat sobre los dos arrays*/
const ejemploConcat = elements.concat(otherElements);

/*Imprimimos por consola el resultado del ejemplo anterior*/
console.log(ejemploConcat);

/*Segunda forma válida para hacer la concatenación de los elementos de un array*/
const ejemploConcat2 = [...elements, ...otherElements];

/*Impresión por consola del resultado del anterior ejemplo*/
console.log(ejemploConcat2); 