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
