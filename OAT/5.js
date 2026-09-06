//Analisador Estatístico de Números em Array
function analisarNumeros(arrayDeNumeros){
    if(!Array.isArray(arrayDeNumeros) || arrayDeNumeros.length === 0){
        return {total: 0, media: 0, maior: null, menor: null, pares: 0, impares: 0};
    };

    const total = arrayDeNumeros.length;
    let soma = 0;
    let maior = arrayDeNumeros[0];
    let menor = arrayDeNumeros[0];
    let pares = 0;
    let impares = 0;

    for (const num of arrayDeNumeros){
        soma += num;
        if(num > maior){
            maior = num;
        }
        if(num < menor){
            menor = num;
        }

        if (num % 2 === 0){
            pares++;
        }else{
            impares++;
        }
    }

    const valorMedia = soma / total;
    const media = Number(valorMedia.toFixed(2));
    return {total, media, maior, menor, pares, impares};
}  

console.log(analisarNumeros([12, 5, 8, 130, 44, 3]));