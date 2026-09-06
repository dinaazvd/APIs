//Tabuada Dinâmica e Formatada
function gerarTabuada(numero, limite = 10) {
    const tabuada = [];
    for (let i = 1; i <= limite; i++) {
        tabuada.push(`${numero} x ${i} = ${numero * i}`);
    }
    return tabuada;
}
console.log(gerarTabuada(7, 5));
console.log(gerarTabuada(9, 5));