const buttonCalc = window.document.getElementById('buttonCalc')
const matematica = window.document.getElementById('notaMat')
const linguagem = window.document.getElementById('notaLing')
const natureza = window.document.getElementById('notaNat')
const humanas = window.document.getElementById('notaHuman')
const redacao = window.document.getElementById('notaRedç')
const media = window.document.getElementById('mediaTot')

let mediaTotal  = 0

function Calcular()
{
    const notaMat = parseFloat(matematica.value);
    const notaLing = parseFloat(linguagem.value);
    const notaNat = parseFloat(natureza.value);
    const notaHuman = parseFloat(humanas.value);
    const notaRedc = parseFloat(redacao.value);

    mediaTotal = (notaMat + notaLing + notaNat + notaHuman + notaRedc) / 5

    media.value = mediaTotal.toFixed(2);
}



