const { ask } = require('../helpers/input');

function obtenerPromedio(numeros){
    let total = 0;
    for (let i=0; i<numeros.length; i++){
        total = total + numeros[i];
    }
    return (total / numeros.length);
}

function obtenerAprobados(numeros){
    let aprobados = 0;
    let reprobados = 0;
    for (let i = 0; i<numeros.length; i++){
        if (numeros[i] >=70){
            aprobados++;
        } else{
            reprobados++
        }
    }
    return { aprobados, reprobados };
}

function analizarCalificaciones (numeros) {
    const {aprobados, reprobados} = obtenerAprobados(numeros);
    const promedio = Math.floor(obtenerPromedio(numeros));
    const califAlta = Math.max(...numeros);
    const califBaja = Math.min(...numeros);

    return {aprobados, reprobados, promedio, califAlta, califBaja};
}

async function main() {

    const calificaciones = [90,35,35,60,70,75,85,80,95];
    const resultado = analizarCalificaciones(calificaciones);
    console.log(resultado);

}

main();