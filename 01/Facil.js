
function sumarUno(entrada){
    let salida = [];
    let auxiliar = [];
    let multiplicador = 1;
    let result = 0;
    //Paso el array a numero
    for (let index = entrada.length-1; index >= 0; index--) {
        const element = entrada[index];
        result = result + element * multiplicador;
        multiplicador = multiplicador * 10;   
    }

    //Le sumo 1
    result = result+1;

    //Separo el numero en digitos y lo paso a un array
    while(result > 0){
        salida.push(result%10);
        result = Math.trunc(result/10);
    }

    //Invierto el orden 
    for (let index = salida.length-1; index >= 0; index--) {
        const element = salida[index];
        auxiliar.push(element)  
    }
    return auxiliar;
}

const res = sumarUno([1,2,3])
console.log(res)


