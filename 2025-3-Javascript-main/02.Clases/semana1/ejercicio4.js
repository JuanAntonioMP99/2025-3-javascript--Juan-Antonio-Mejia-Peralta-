const { ask } = require('../helpers/input.js');

function diffDays(actualDate,birthDate)
    const diff = actualDate - birthDate
    const edadEnDias = Math.floor(diff / (1000*60*60*24));
    
    return edadEnDias;

async function main() {
const actualDate = new Date()
const birthDateDay = Number await (ask('¿Cual es el dia de tu fecha de nacimiento?')) 
const birthDateMonth = Number await (ask('¿Cual es el mes de tu fecha de nacimiento?')) 
const birthDateYear =  Number await (ask('¿Cual es el año de tu fecha de nacimiento?'))

const brithDate = new Date (`${birthDateYear}-${birthDateMonth}-${birthDateDay}`)

}

main();