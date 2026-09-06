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
