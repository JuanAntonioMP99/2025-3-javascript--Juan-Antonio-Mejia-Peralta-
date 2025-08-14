const { ask } = require('../helpers/input.js');

async function main() {
<<<<<<< HEAD
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
=======
  // TODO: Crear una calculadora simple que realice operaciones básicas:
  // 1.- Pedir el primer número
  // 2.- Pedir el segundo número
  // 3.- Pedir operador
>>>>>>> 6ca22d284312c9bb380e559dcd96ba66e2f29e1e

}

main();