const letters = ["a","b","c","d"];
const arr2 = [];

/* Utilizando for con la función map */
for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    arr2.push(element + "++");
}
console.log("original", letters);
console.log("modificado con map", arr2);

/*Utilizando directamente el map para ahorrar código*/

const conMap = letters.map(item => item + "++");
console.log(conMap);