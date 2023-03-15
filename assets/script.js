let botoes = document.getElementById('botoes');
let cont = null;
document.onkeydown = eventoTeclado;

botoes.addEventListener('click', botaoClicado);

let sounds = {
    a: new Audio("./assets/sounds/a.wav"),
    s: new Audio("./assets/sounds/s.wav"),
    d: new Audio("./assets/sounds/d.wav"),
    f: new Audio("./assets/sounds/f.wav"),
    g: new Audio("./assets/sounds/g.wav"),
    h: new Audio("./assets/sounds/h.wav"),
    j: new Audio("./assets/sounds/j.wav"),
    k: new Audio("./assets/sounds/k.wav"),
    l: new Audio("./assets/sounds/l.wav"),
}

let teclas = ['a', 's', 'd','f','g','h','j','k','l'];


function botaoClicado(e) {
    sounds[e.target.id].play();
}

function eventoTeclado (e) {

    let event = e.key;

    switch(event){
        case 'a': cont = 0;
        break;
        case 's': cont = 1;
        break;
        case 'd': cont = 2;
        break;
        case 'f': cont = 3;
        break;
        case 'g': cont = 4;
        break;
        case 'h': cont = 5;
        break;
        case 'j': cont = 6;
        break;
        case 'k': cont = 7;
        break;
        case 'l': cont = 8;
        break;
        default : cont = null;
        break;
    }


    tocaTecla(cont)

}

function tocaTecla(cont){
    sounds[teclas[cont]].play();
}

