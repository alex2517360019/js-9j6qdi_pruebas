// Import stylesheets
import './style.css';

import moment from 'moment';

const fechaInicio = moment().format('DD MM YYYY hh:mm:ss');
const fechaFin = moment().add(61, 'days').format('DD MM YYYY hh:mm:ss');

function addArrayDays(fechaInicio, fechaFin) {
  const start = moment(fechaInicio, 'DD MM YYYY hh:mm:ss');
  const end = moment(fechaFin, 'DD MM YYYY hh:mm:ss');
  const days = end.diff(start, 'days');
  const months = end.diff(start, 'months');
  const years = end.diff(start, 'years');
  console.log(
    `Difference to ${days} days | months ${months} and ${years} years`
  );
}

addArrayDays(fechaInicio, fechaFin);
