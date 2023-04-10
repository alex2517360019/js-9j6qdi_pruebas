// Import stylesheets
import './style.css';

// Crear una función que tome dos fechas como argumentos y devuelva la cantidad de días entre esas dos fechas.

// import moment from 'moment';

// const fechaInicio = moment().format('DD MM YYYY hh:mm:ss');
// const fechaFin = moment().add(61, 'days').format('DD MM YYYY hh:mm:ss');

// function addArrayDays(fechaInicio, fechaFin) {
//   const start = moment(fechaInicio, 'DD MM YYYY hh:mm:ss');
//   const end = moment(fechaFin, 'DD MM YYYY hh:mm:ss');
//   const days = end.diff(start, 'days');
//   const months = end.diff(start, 'months');
//   const years = end.diff(start, 'years');
//   console.log(
//     `Difference to ${days} days | months ${months} and ${years} years`
//   );
// }

// addArrayDays(fechaInicio, fechaFin);

// Crear una función que tome un array de números como argumento y devuelva un nuevo array con todos los números ordenados de menor a mayor.

// const numerosDesordenados = [0,3,4,50,-99,-3,5,8,2,5,776,2,51,3,4];

// function ordenar(numeros){
//   const ordenar = numeros.sort((a, b) => a - b);
//   console.log(ordenar);
// }

// ordenar(numerosDesordenados);

// Crear una función que tome un array de strings como argumento y devuelva un nuevo array con todas las palabras que empiezan con la letra "a" sea muniscula mayuscula o con acento.
// const regexp = /^['AaÁá']/;
// const nombres = ['Miguel', 'ário', 'Andrea', 'Ándre', 'Alma', 'armado', 'luis'];

// function startsWith(nombres) {
//   const array = [];
//   for (let nombre of nombres) {
//     if (regexp.test(nombre)) {
//       array.push(nombre);
//     }
//   }
//   console.log(array);
// }
// startsWith(nombres);

// Crear una función que tome un número como argumento y devuelva el factorial de ese número.

// function factotial(numero) {
//   let factorial = 1;
//   if (typeof numero == 'number') {
//     for (let i = 1; i <= numero; i++) {
//       factorial *= i;
//     }
//   } else {
//     throw new Error('No es un número');
//   }
//   console.log(factorial);
// }

// factotial(5);

// Crear una función que tome una cadena de palabras separadas por espacios como argumento y devuelva una cadena en formato camelCase.
// const palabra = 'Esta palabra es el ejemplo que contiene palabras separadas por espacios';

// function camelCase(palabra){
//   let nuevaPalabra = '';
//   const tranformar = palabra.split(' ');
//   tranformar.map( palabra=>{
//     nuevaPalabra += palabra.trim().slice(0, -1) + palabra.trim().split('')[palabra.length - 1].toUpperCase();
//   });
//   console.log(nuevaPalabra);
// }

// camelCase(palabra);

// function camelCase(palabra){
//   const tranformar = palabra.split(' ');
//   const camelCaseWords = tranformar.map( palabra => {
//     const ultimaLetra = palabra.trim().slice(-1).toUpperCase();
//     const palabraSinUltimaLetra = palabra.trim().slice(0, -1);
//     return palabraSinUltimaLetra + ultimaLetra;
//   });
//   const resultado = camelCaseWords.join('');
//   console.log(resultado);
// }

// camelCase(palabra);

// // Crear una función que tome un objeto como argumento y devuelva una cadena que represente ese objeto en formato JSON.

// const persona = {nombre:'Alejandro',apellido:'Magana',edad:25,recidencia:'Mexico',municipio:'Tecamac'};

// function trasformarJson(persona){
//    const json = JSON.stringify(persona);
//    console.log(json);
// }

// trasformarJson(persona);

// Crear una función que tome un array de números como argumento y devuelva un nuevo array con todos los números mayores que 10.

// const arregloNumeros = [0,3,4,50,-99,-3,5,8,2,5,776,2,51,3,4,99,10];

// function ordenar(numeros){
//   const nuevoArreglo = numeros.filter( numero => numero >= 10);
//   console.log(nuevoArreglo);
// }

// ordenar(arregloNumeros);

// Crear una función que tome un array de números como argumento y devuelva la suma de todos los números pares e impares del array.

// const numeros = ['2','4','6','8','10','12','14','16','18','20','22','24','26','28','30','1','3','5','7','9','11','13','15','17','19','21','23','25','27','29'];

// function parImpar(numeros){
//   let sumaPares = 0;
//   let sumaImpares = 0;
//   numeros.map((numero)=>{
//    if(numero % 2 == 0){
//     sumaPares+= Number(numero);
//    }else{
//     sumaImpares+= Number(numero);
//    }
//   });
//   console.log(` la suma de pares es de: ${sumaPares}`);
//   console.log(` la suma de impares es de: ${sumaImpares}`);
// }

// parImpar(numeros);

// const palabra = 'Esta palabra es el ejemplo que contiene palabras separadas por espacios';

// function inversa(palabra){
//    const trasformarPalbra = palabra.split(' ');
//    const nueva = trasformarPalbra.reverse().join(' ');
//    console.log(nueva);
//    return nueva;
// }

// inversa(palabra);

// Crear una función que tome dos números como argumentos y devuelva la suma de esos dos números.

// function sumaNumeros(a,b){
//   let suma = 0;
//   if(typeof a == 'number' && typeof b == 'number' && a >= 0 && b >= 0){
//     suma = a + b;
//   }else{
//     throw new Error('Numeros negativos no permitidos');
//   }
//   console.log(suma);
//   return suma;
// }

// sumaNumeros(12,55);
