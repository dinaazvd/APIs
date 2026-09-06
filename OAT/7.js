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

