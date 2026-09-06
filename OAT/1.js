//Contador Regressivo para Datas
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
