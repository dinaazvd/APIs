//Calculadora de IMC com Classificação OMS
function calcularIMC(peso, altura){
    if(typeof peso !== 'number' || peso <= 0 || typeof altura !== 'number' || altura <=0 ){
        return 'Coloque um número maior que 0.';
    };

const valorIMC = peso / (altura * altura);
const imcFormatado = Number(valorIMC.toFixed(2));
let classificacao = '';

    if(valorIMC < 18.5){
    classificacao = 'abaixo do peso';
    }   
    else if (valorIMC >= 18.5 && valorIMC <24.9){
    classificacao = 'peso normal';
    }
    else if (valorIMC >= 25 && valorIMC < 29.9){
    classificacao = 'sobrepeso';
    }
    else if(valorIMC >= 30 && valorIMC < 34.9){
    classificacao = 'obesidade grau 1';
    }
    else if(valorIMC >= 35 && valorIMC < 39.9){
    classificacao = 'obesidade grau 2';
    }
    else{
    classificacao = 'obesidade grau 3';
    }

    return {
    imc: imcFormatado,
    classificacao
    };
}

console.log(calcularIMC(78.5, 1.75));
