// Contador Regressivo para Datas
function CalcularContagemRegressiva(dataFutura){
    const agora = new Date ().getTime();
    const futuro = new Date(dataFutura) .getTime ();
    let diferenca = futuro - agora;

    if (diferenca <= 0)
        return {dias: 0, horas: 0, minutos: 0, segundos: 0, texto: "A data já passou ou é o momento atual"};

const umSegundo = 1000;
const umMinuto = umSegundo * 60;
const umaHora = umMinuto * 60;
const umDia = umaHora * 24;

const dias = Math.floor(diferenca / umDia);
const horas = Math.floor((diferenca % umDia) / umaHora);
const minutos = Math.floor((diferenca % umaHora) / umMinuto);
const segundos = Math.floor((diferenca % umMinuto) / umSegundo);

return{ 
    dias, horas, minutos, segundos, texto: `Faltam ${dias} dias, ${horas} h, ${minutos} m e ${segundos} s.`
 };
}

console.log(CalcularContagemRegressiva("2027-01-01T00:00:00"));
console.log(CalcularContagemRegressiva("2027-09-04T00:00:00"));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Tabuada Dinâmica e Formatada
function gerarTabuada(numero, limite = 10) {
    const tabuada = [];
    for (let i = 1; i <= limite; i++) {
        tabuada.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tabuada;
}//Validador de Dados de Cadastro de Usuário
function validarUsuario(usuario) {
    const {nome, email, senha} = usuario || {};
    const erros = [];
    
    // Regra 1
    if (!nome || typeof nome !== 'string' || nome.trim().length < 3) {
        erros.push('O nome deve ter pelo menos 3 caracteres.');
    }
    // Regra 2
    if (!email || typeof email !== 'string') {
        erros.push('O email é inválido.');
    } else {
        const arrobaindex = email.indexOf('@');
        const pontoindex = email.indexOf('.', arrobaindex);
        if (arrobaindex === -1 || pontoindex === -1 || pontoindex <= arrobaindex + 1) {
            erros.push('O email é inválido.');
        }
    }
    // Regra 3
    if (!senha || typeof senha !== 'string' || senha.length < 6) {
        erros.push('A senha deve ter pelo menos 6 caracteres.');
    } else if (! /\d/.test(senha) ) {
        erros.push('A senha deve conter pelo menos um número.');
    }
    if (erros.length > 0) {
        return { valido: false, erros };
    }
    return { valido: true };
}
console.log(validarUsuario({ nome: "Al", email: "teste", senha: "123" }));
console.log(validarUsuario({ nome: "Carlos Silva", email: "carlos@provedor.com", senha: "senha123" }));


console.log(gerarTabuada(7, 5));
console.log(gerarTabuada(9, 5));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

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

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Conversor Universal de Temperaturas
function celsiusParaFahrenheit(celsius) {
    if (typeof celsius !== 'number' || Number.isNaN(celsius)) {
        throw new TypeError('O valor fornecido não é um número válido.');
    }
    const fahrenheit = (celsius * 1.8) + 32;
    return parseFloat(fahrenheit.toFixed(2));
}

function fahrenheitParaCelsius(fahrenheit) {
    if (typeof fahrenheit !== 'number' || Number.isNaN(fahrenheit)) {
        throw new TypeError('O valor fornecido não é um número válido.');
    }
    const celsius = (fahrenheit - 32) / 1.8;
    return parseFloat(celsius.toFixed(2));
}
console.log(celsiusParaFahrenheit(30)); 
console.log(fahrenheitParaCelsius(86)); 


//------------------------------------------------------------------------------------------------------------------------------------------------------------

// Contador de Vogais, Consoantes e Espaços
function contarCaracteres(texto){
    if(typeof texto !== 'string'){
        return 'escreva apenas texto';
    }

    const txtSemAcento = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    let vogais = 0;
    let consoantes = 0;
    let espacos = 0;
    let especiais = 0;

    for(let i = 0; i < txtSemAcento.length; i++){
        const char = txtSemAcento[i];
    if (char === ' '){
        espacos++;
    } else if (/[aeiou]/.test(char)){
        vogais++;
    } else if(/[b-df-hj-np-tv-z]/.test(char)){
        consoantes++;
    } else {
        especiais++;
    }
}
return {vogais, consoantes, espacos, especiais, total: texto.length};
}

console.log(contarCaracteres('Desenvolvimento de APIs REST!'));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Gerador de Tokens e Códigos de Cupom
function gerarTokenAleatorio(tamanho= 8, tipo= 'alfanumerico') {
    const charsNumeros = '0123456789';
    const charsLetras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const charsAlfanumerico = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    let banco = charsAlfanumerico;
    if (tipo === 'numerico') {
        banco = charsNumeros;
    } else if (tipo === 'letras') {
        banco = charsLetras;
    }
    let token = '';
    for (let i = 0; i < tamanho; i++) {
        const indiceAleatorio = Math.floor(Math.random() * banco.length);
        token += banco[indiceAleatorio];
    }
    return token;
}

console.log(gerarTokenAleatorio(8, "alfanumerico"));
console.log(gerarTokenAleatorio(6, "numerico"));


//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Localizador da Maior Palavra em Frases
function encontarMaiorPalavra(frase) {
    if (typeof frase !== "string" || frase.trim().length === 0) {
        return {palavra: "", tamanho: 0};
    }
    const fraseLimpa = frase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    const palavras = fraseLimpa.split(/\s+/).filter(p => p.length > 0);

    let maiorPalavra = '';
    for (const palavra of palavras){
        if (palavra.length > maiorPalavra.length){
            maiorPalavra = palavra;
        }
    }

    return {
        palavra: maiorPalavra,
        tamanho: maiorPalavra.length
    };
}

console.log(encontarMaiorPalavra('O desenvolvimento de microsserviços e APIs é essencial.'));

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//Sorteador e Distribuidor de Equipes / Times
function distribuirTimes(listaDeNomes, quantidadeDeTimes) {
    if (!Array.isArray(listaDeNomes) || quantidadeDeTimes <= 0) {
        return [];
    }
    const copiaNomes = [...listaDeNomes];
    for (let i = copiaNomes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copiaNomes[i], copiaNomes[j]] = [copiaNomes[j], copiaNomes[i]];
    }
    const times = Array.from({ length: quantidadeDeTimes }, () => []);
    copiaNomes.forEach((nome, index) => {
       const timeAlvo = index % quantidadeDeTimes;
       times[timeAlvo].push(nome);
    });
    return times;
}

console.log(distribuirTimes(["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"], 2));
