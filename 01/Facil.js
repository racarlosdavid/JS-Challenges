function sumarUno(entrada){
    let salida = [];
    let num = "";
    
    for (let index = 0; index < entrada.length; index++) {
        const element = entrada[index];
        num = num + element + "";  
    }
    let result = (BigInt(num) + 1n).toString();

    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        salida.push(element) 
    }
    return salida;
}

const res = sumarUno([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9,9,9,9,9,9])
console.log(res)


