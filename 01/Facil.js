function sumarUno(entrada){
    let salida = [];
    let multiplicador = 1;
    let result = 0;
    let res = "";
    let digitos = 1;
    //Paso el array a numero
    for (let index = entrada.length-1; index >= 0; index--) {
        const element = entrada[index];
        if (digitos<=16) {
            result = digitos == 1 ? result + ((element+1) * multiplicador) : result + (element * multiplicador); 
            multiplicador = multiplicador * 10; 
            digitos++;  
        }else if(digitos == 17){
            //Le sumo 1
            res = result + "";
            res = element + res ;
            digitos++;  
        }else{
            res = element + res ;
        }
        
    }
    
    for (let index = 0; index < res.length; index++) {
        const element = res[index];
        salida.push(element) 
    }
    return salida;
}

const res = sumarUno([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9,9,9,9,9,9])
console.log(res)


