

const dataDoEvento = new Date("apr 17, 2027 22:00:00");//esta é uma variavel do tipo data apontando para uma data lá no futuro;
//recuperando o time Stamp do futuro
const timeStampDoEvento = dataDoEvento.getTime();

//contador de horas
const contaAsHoras = setInterval(function(){

    //agora
    const agora = new Date();

    //recuperando o time stamp de agora
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000*60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / (diaEmMs));
    const horasAteOEvento = Math.floor((distanciaAteOEvento % (diaEmMs)) / (horaEmMs));// o % retorna o resto da divisão, no caso aquela parte que o floor está ocultando
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % (horaEmMs)) / (minutoEmMs));
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
console.log(diasAteOEvento );
console.log(horasAteOEvento);
console.log(minutosAteOEvento);
console.log(segundosAteOEvento);

document.getElementById('contador').innerHTML = `${diasAteOEvento}D     ${horasAteOEvento}H     ${minutosAteOEvento}M     ${segundosAteOEvento}s`
 if (distanciaAteOEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById('contador').innerHTML = 'Evento expirado'//innerHtml permite que escrevemos no html pelo js
 }
},1000);
