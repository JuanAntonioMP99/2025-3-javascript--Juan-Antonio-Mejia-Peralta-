const { ask } = require('../helpers/input.js');

async function main() {
  const num1 = Number(await ask ("Ingresa el primer numero: "))
  const num2 = Number(await ask ("Ingresa el segundo numero: "))
  const operador = await ask('Ingresa el operador que deseas usar: ')
  
  const suma = num1+num2;
  const resta = num1-num2;
  const multiplicacion = num1*num2;
  const division = num1/num2;

  let resultado = 0;
  if (operador === '+'){
    resultado = num1+num2;
  } else if (operador === '-'){
    resultado = num1-num2;
  } else if(operador === '*'){
    resultado = num1*num2;
  } else if(operador === '/'){
    resultado = num1/num2;
  }
  
  console.log("El resultado de la suma es ") 

}

main();