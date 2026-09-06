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


