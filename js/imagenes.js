var imagenes = [
    {

        "imagen_g": "imagenes/Grande/baño.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/cocina.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/escalera.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/estar.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/gym.jpg"
    },
    {
        "imagen_g": "imagenes/Grande/habitaadult.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/habitaadult2.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/habitaniño.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/parking.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/parque.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/piscina.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/salon.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/salon2.jpg"
    },
    {

        "imagen_g": "imagenes/Grande/salon3.jpg"
    },
    {
        "imagen_g": "imagenes/Grande/tenis.jpg"
    },
]

var casas = document.querySelector('.fotos_casas');

function carga_img() {

    var casas = document.querySelector('.fotos_casas');
    casas.innerHTML ="";
    for (var i = 0; i < imagenes.length; i++) {

        casas.innerHTML += `<img class="Polygon" src="${imagenes[i].imagen_g}">`;

    };

}