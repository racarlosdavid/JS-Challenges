let salida = [];
let posicion = 0;

function getValues(digito){
    switch (digito) {
        case "2":
            return ['a','b','c'];
        case "3":
            return ['d','e','f'];
        case "4":
            return ['g','h','i'];
        case "5":
            return ['j','k','l'];
        case "6":
            return ['m','n','o'];
        case "7":
            return ['p','q','r','s'];
        case "8":
            return ['t','u','v'];
        case "9":
            return ['w','x','y','z']; 
        default:
            break;
    }
}

function combinaciones(digitos_x,digitos_y,entrada){
    for (let index = 0; index < digitos_x.length; index++) {
        const element_x = digitos_x[index];
        for (let index = 0; index < digitos_y.length; index++) {
            const element_y = digitos_y[index];
            salida.push(element_x+element_y)
            //console.log(element_x+element_y)
        }
    }
    if (posicion == (entrada.length-1)){
        //console.log("termino")
        return salida;
    }else if (posicion >= 1 ) {
        digitos_x = salida;
        salida = [];
        posicion++;
        digitos_y = getValues(entrada[posicion]);
        //console.log(posicion+" "+(entrada.length-1))
        return combinaciones(digitos_x,digitos_y,entrada)
    } 
}

function combinar(entrada){
    let digitos_x = getValues(entrada[posicion]);
    posicion++;
    let digitos_y = getValues(entrada[posicion]);
    let result = (entrada.length <= 4) ? (entrada.length == 1 ? getValues(entrada[0]) : combinaciones(digitos_x,digitos_y,entrada)) : "La entrada no puede tener mas de 4 digitos"; 
    console.log(result)
}

combinar("525");

