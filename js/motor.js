

var QS = document.getElementById('Quienes');
var QO = document.getElementById('Ofrecemos');
var G = document.getElementById('gallery');
var Cnt = document.getElementById('Contact');
var form = document.getElementById('formularioContacto');
var opciones = document.getElementById('opcion');
var mapa = document.getElementById('mapa');
var eslogan = document.getElementById('eslogan');

function cargaOpcion(x) {

    if (x == 0) {
        opciones.style.display = 'none';
    }
    else if (x == 1) {
        opciones.style.display = 'block';
    }
}

$(document).ready(function () {

    $(".opciones_menu_ordenador").click(function () {
        var eleccion = $(this).attr("id");
        localStorage.eleccion1 = eleccion;

        cargaOpcion(1);


        if (eleccion == 'quienesSomos') {
            reseteoOpciones();
            QuienesSomos(1);

        } else if (eleccion == 'queOfrecemos') {
            reseteoOpciones();
            QueOfrecemos(1);

        } else if (eleccion == 'galeria') {
            reseteoOpciones();
            galeria(1);

        } else if (eleccion == 'contacto') {
            reseteoOpciones();
            Contacto(1);

        }

    });

});

function QuienesSomos(x) {

    if (x == 0) {
        QS.style.display = 'none';
    }
    else if (x == 1) {
        QS.style.display = 'block';
        esloganAscao(0);
    }

}
function QueOfrecemos(x) {
    if (x == 0) {
        QO.style.display = 'none';
    }
    else if (x == 1) {
        QO.style.display = 'block';
        esloganAscao(0);
    }
}
function Contacto(x) {

    if (x == 0) {
        Cnt.style.display = 'none';
        form.style.display = 'none';
        mapa.style.display = 'none';
    } else if (x == 1) {
        Cnt.style.display = 'block';
        form.style.display = 'block';
        mapa.style.display = 'block';
        esloganAscao(0);
    }

}
function galeria(x) {
    if (x == 0) {
        G.style.display = 'none';
    }
    else if (x == 1) {
        G.style.display = 'block';
        carga_img();
        esloganAscao(0);
    }
}
function reseteoOpciones() {

    QuienesSomos(0);
    QueOfrecemos(0);
    Contacto(0);
    galeria(0);
    esloganAscao(1);

}
function esloganAscao(x) {

    if (x == 0) {
        eslogan.style.zIndex = '-2';
    } else if (x == 1) {
        eslogan.style.zIndex = '2';
    }
}

cruz();

function cruz() {

    document.querySelector('.cruz').addEventListener('click', cerrar);

}

function cerrar() {

    reseteoOpciones();
    cargaOpcion(0);
}


//-----QUITAR COOKIES----

document.querySelector('#btn1').addEventListener('click', quitar);
function quitar() {
    document.querySelector('#cookies').style.display = 'none';
}








/*
var QS = document.getElementById('Quienes');
var QO = document.getElementById('Ofrecemos');
var G = document.getElementById('gallery');
var Cnt = document.getElementById('Contact');
var form = document.getElementById('formularioContacto');
var opciones = document.getElementById('opcion');
var mapa = document.getElementById('mapa');
var eslogan = document.getElementById('eslogan');

function cargaOpcion(x) {

    if (x == 0) {
        opciones.style.display = 'none';
    }
    else if (x == 1) {
        opciones.style.display = 'block';
    }
}

$(document).ready(function() {

    $(".opciones_menu_ordenador").click(function() {
        var eleccion = $(this).attr("id");

        var claseOpcion = document.querySelectorAll('div');

        for (var i = 0; i < claseOpcion.length; i++) {
            if (eleccion == claseOpcion[i].classList) {


                var elige = claseOpcion[i].classList;

                var cambio = cambio.value;


                console.log(eleccion);

                //  document.getElementsByClassName(cambio)[claseOpcion[i]].style.display='block';


            }
        }

    });

});

function QuienesSomos(x) {

    if (x == 0) {
        QS.style.display = 'none';
    }
    else if (x == 1) {
        QS.style.display = 'block';
        esloganAscao(0);
    }

}
function QueOfrecemos(x) {
    if (x == 0) {
        QO.style.display = 'none';
    }
    else if (x == 1) {
        QO.style.display = 'block';
        esloganAscao(0);
    }
}
function Contacto(x) {

    if (x == 0) {
        Cnt.style.display = 'none';
        form.style.display = 'none';
        mapa.style.display = 'none';
    } else if (x == 1) {
        Cnt.style.display = 'block';
        form.style.display = 'block';
        mapa.style.display = 'block';
        esloganAscao(0);
    }

}
function galeria(x) {
    if (x == 0) {
        G.style.display = 'none';
    }
    else if (x == 1) {
        G.style.display = 'block';
        carga_img();
        esloganAscao(0);
    }
}
function reseteoOpciones() {

    QuienesSomos(0);
    QueOfrecemos(0);
    Contacto(0);
    galeria(0);
    esloganAscao(1);

}
function esloganAscao(x) {

    if (x == 0) {
        eslogan.style.zIndex = '-2';
    } else if (x == 1) {
        eslogan.style.zIndex = '2';
    }
}

cruz();

function cruz() {

    document.querySelector('.cruz').addEventListener('click', cerrar);

}

function cerrar() {

    reseteoOpciones();
    cargaOpcion(0);
}


//-----QUITAR COOKIES----

document.querySelector('#btn1').addEventListener('click', quitar);
function quitar() {
    document.querySelector('#cookies').style.display = 'none';
}



*/




























































