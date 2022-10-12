/*Las funciones mutables consisten en cambiar el array original. Estos métodos son:
push,unshift,pop,shift,splice,sort*/

/*El método push agrega uno o varios elementos al final del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.*/
const push = [1,2,3];
push.push(4,5);
console.log(push);

/*El método unshift agrega uno o varios elementos al inicio del array original. El método recibe como argumento los valores a agregar. Retorna el número de elementos del array mutado.*/
const unshift = [3,4,5];
unshift.unshift(1,2);
console.log(unshift);

/*El método pop extrae el elemento del final del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.*/
const pop = [1,2,3,4];
const lastElement = pop.pop();
console.log(lastElement);
console.log(pop);

/*El método shift extrae el elemento del inicio del array original. El método no recibe ningún argumento. Retorna el elemento extraído, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.*/
const shift = [1,2,3,4];
const firstElement = shift.shift();
console.log(firstElement);
console.log(shift);

/*El método splice extrae uno o varios elementos del array original a partir del índice y los reemplaza con otro elemento especificado como argumento. Retorna un array con los elementos extraídos, si no se guarda en una variable, el Garbage Collection{target="_blank"} lo elimina.*/

/*El método splice recibe tres argumentos:
El índice donde comenzará a cambiar el array.
La cantidad de elementos que serán reemplazados.
Uno o varios elementos que reemplazarán a los originales del array.*/
const splice1 = [1,2,3,4];
const elements = splice1.splice(2,1,"tres");
console.log(elements);
console.log(splice1);

const splice2 = [1,2,3,4];
const elements2 = splice2.splice(1,2,"dos", "tres");
console.log(elements2);
console.log(splice2);

/*A continuación se muestra un nuevo ejemplo, tenemos un array de productos y otro array de los productos que yo voy eligiendo*/
const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

/*Buscamos en el array de productos el que tiene el id de hamburguesa*/ 
const product = products.find(item => item.id === "🍔");

/*Obtenemos el índice del producto en cuestión*/
const productIndex = products.findIndex(item => item.id === "🍔");

/*Realizamos la validación en la que se evidencia si el producto existe, si si existe, se almacena el producto en el array myProducts y se elimina mediante el método splice del arreglo products. Esta el la forma mutable de hacerlo, al usar splice estamos modificando el arreglo*/
if(productIndex != -1){
    myProducts.push(product);
    products.splice(productIndex,1);
    console.log(products);
    console.log(myProducts);
};

/*Se crea la versión dos del arreglo de alimentos*/
const productsV2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

/*Se declaran las actualizaciones que queremos hacer sobre el arreglo*/
const update = {
    changes : {
        price : 200,
        description : "Delicioso"
    }
};

/*Se realizan las actualizaciones sobre el arreglo*/
const productIndex2 = productsV2.findIndex(item => item.id === "🥞");
productsV2[productIndex2] = {
    ...productsV2[productIndex2],
    ...update.changes
};
/*Se imprime el arreglo con los cambios*/
console.log(productsV2);
