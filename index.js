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
