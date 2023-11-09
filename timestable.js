//let firstNumber = document.querySelector('#fn');
let resultado = document.querySelector('#result');
//let boton = document.querySelector('button');
let check = document.querySelector('#orden');
let optDividir = document.querySelector('#optionDiv');

let btnUno = document.querySelector('.uno');
let btnDos = document.querySelector('.dos');
let btnTres = document.querySelector('.tres');
let btnCuatro = document.querySelector('.cuatro');
let btnCinco = document.querySelector('.cinco');
let btnSeis = document.querySelector('.seis');
let btnSiete = document.querySelector('.siete');
let btnOcho = document.querySelector('.ocho');
let btnNueve = document.querySelector('.nueve');
let btnDiez = document.querySelector('.diez');
let btnOnce = document.querySelector('.once');
let btnDoce = document.querySelector('.doce');

//boton.addEventListener('click', tablaDividirNumero);
/* function tablaDividirNumero(){
    let numero = firstNumber.value - 0;
    printTable(numero);
} */
btnUno.addEventListener('click', escribeUno);
btnDos.addEventListener('click', escribeDos);
btnTres.addEventListener('click', escribeTres);
btnCuatro.addEventListener('click', escribeCuatro);
btnCinco.addEventListener('click', escribeCinco);
btnSeis.addEventListener('click', escribeSeis);
btnSiete.addEventListener('click', escribeSiete);
btnOcho.addEventListener('click', escribeOcho);
btnNueve.addEventListener('click', escribeNueve);
btnDiez.addEventListener('click', escribeDiez);
btnOnce.addEventListener('click', escribeOnce);
btnDoce.addEventListener('click', escribeDoce);

function escribeUno(){printTable(1);};
function escribeDos(){printTable(2);};
function escribeTres(){printTable(3);};
function escribeCuatro(){printTable(4);};
function escribeCinco(){printTable(5);};
function escribeSeis(){printTable(6);};
function escribeSiete(){printTable(7);};
function escribeOcho(){printTable(8);};
function escribeNueve(){printTable(9);};
function escribeDiez(){printTable(10);};
function escribeOnce(){printTable(11);};
function escribeDoce(){printTable(12);};


function printTable(numero) {
    optDividir.checked ? tablaDividirNumero(numero) : tablaMultiplicarNumero(numero);
}

function tablaMultiplicarNumero(numero) {
    let arrayNumeros = [1,2,3,4,5,6,7,8,9,10,11,12];

    // esta linea permite ordenar aleatoriamente el array.
    if (!check.checked)
    {arrayNumeros.sort(() => Math.random() - 0.5);};
    
    let phrase = '';
    for (let index = 0; index < arrayNumeros.length; index++) {
        const element = arrayNumeros[index];
        phrase = phrase + `  ${element} x ${numero} = ${element * numero}  <br>`;
        resultado.innerHTML = phrase;
    }
}

function tablaDividirNumero(numero) {
    let arrayNumeros = [];
    while (arrayNumeros.length < 12) {
        for (let index = 1; index < 145; index++) {
            if (index % numero === 0 && !arrayNumeros.some(number => number === index)){
            arrayNumeros.push(index);
            break;
            }
        }
    }
    // esta linea permite ordenar aleatoriamente el array.
    if (!check.checked)
    {arrayNumeros.sort(() => Math.random() - 0.5);};
    
    let phrase = '';
    for (let index = 0; index < arrayNumeros.length; index++) {
        const element = arrayNumeros[index];
        phrase = phrase + `  ${element} / ${numero} = ${element / numero}  <br>`;
        resultado.innerHTML = phrase;
    }
}