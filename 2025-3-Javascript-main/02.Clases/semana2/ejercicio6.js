const { ask } = require('../helpers/input');

async function main() {
    const palabra = await ask('Escribe una palabra ');
    let resultado = '';
    for (let i = palabra.length -1; i >= 0; i--){
        resultado = resultado + palabra[i];
    }

    console.log('Tu palabra al revés es: ', resultado)

}

main();