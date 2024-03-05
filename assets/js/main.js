const textoData = document.querySelector('h1');

const data = new Date();
const mesAtual = pegaMes(data);
const diaSemanaAtual = pegaDiaSemana(data);
const horario = formataHoras(data);
const diaAtual = data.getDate(data);
const anoAtual = data.getFullYear();

function zeroAEsquerda (num) {
return num >= 10 ? num : `0${num}`;
}

function formataHoras(data) {
    const hora = zeroAEsquerda (data.getHours());
    const min = zeroAEsquerda (data.getMinutes());
    return `${hora}:${min}`
}

function pegaDiaSemana(data) {
    let diaSemana = data.getDay() + 1;
    if (diaSemana === 1) {
        diaSemana = 'Domingo'
    } else if (diaSemana === 2) {
        diaSemana = 'Segunda'
    } else if (diaSemana === 3) {
        diaSemana = 'Terça-feira'
    } else if (diaSemana === 4) {
        diaSemana = 'Quarta-feira'
    } else if (diaSemana === 5) {
        diaSemana = 'Quinta-feira'
    } else if (diaSemana === 6) {
        diaSemana = 'Sexta-feira'
    } else if (diaSemana === 7) {
        diaSemana = 'Sábado'
    }

    return diaSemana;
}

function pegaMes(data){
    let mes = data.getMonth() + 1;
    if (mes === 1) {
        mes = 'Janeiro'
    } else if (mes === 2) {
        mes = 'Fevereiro'
    } else if (mes === 3) {
        mes = 'Março'
    } else if (mes === 4) {
        mes = 'Abril'
    } else if (mes === 5) {
        mes = 'Maio'
    } else if (mes === 6) {
        mes = 'Junho'
    } else if (mes === 7) {
        mes = 'Julho'
    } else if (mes === 8) {
        mes = 'Agosto'
    } else if (mes === 9) {
        mes = 'Setembro'
    } else if (mes === 10) {
        mes = 'Outubro'
    } else if (mes === 11) {
        mes = 'Novembro'
    } else if (mes === 12) {
        mes = 'Dezembro'
    } else {
        mes = 'Valor inválido'
    }
    return mes
}

textoData.innerHTML = `${diaSemanaAtual}, ${diaAtual} de ${mesAtual} de ${anoAtual} ${horario}`