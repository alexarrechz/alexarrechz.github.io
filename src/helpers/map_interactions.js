let map_main_wrapper_content = document.getElementById("map_main_wrapper_content");
let edificio_1 = document.getElementById("edificio_1");
let carta = document.getElementById("main-card");
let carta_div = document.getElementById("main-card_div");
let carta_body = document.getElementById("main-card_body");
let carta_img = document.getElementById("main-card_img");



let carta_name = document.getElementById("main-card_name");
let carta_parrafo = document.getElementById("main-card_parrafo");

// Seleccionar todos los elementos de edificio
const edificios = document.getElementsByClassName("edificio");

// Agregar el evento de clic a cada elemento de edificio
Array.from(edificios).forEach(function(edificio) {
  edificio.addEventListener("click", function() {
    console.log("click");

    if (window.innerWidth < 576) {
        console.log("si");
        // carta.style.position = "absolute";
        carta.style.display = "flex";
    } else {
        // carta.style.position = "";
        carta.style.display = "flex";
    }

    const container = document.getElementById("map_div");

    container.addEventListener("click", function(event) {
        if (event.target && event.target.classList.contains("edificio")) {
            var clickedDiv = event.target;
            // id mapa
            var divId = clickedDiv.id;

            carta_name.textContent = "Edificio " + divId;
            carta_subtitle.textContent = "subtitle";
            carta_subtitle.classList.remove("d-none");
            carta_parrafo.textContent = "lorem20";
        }
    });
  });
});

// // popup.style.display = "absolute";
// edificio_1.addEventListener("click", function() {
//     console.log("click");

//     if (window.innerWidth < 576) {
//         console.log("si");
//         // carta.style.position = "absolute";
//         carta.style.display = "flex";
//     } else {
//         // carta.style.position = "";
//         carta.style.display = "flex";
//     }

//     const container = document.getElementById("map_div");

//     container.addEventListener("click", function(event) {
//         if (event.target && event.target.classList.contains("edificio")) {
//             var clickedDiv = event.target;
//             var divId = clickedDiv.id;

//             carta_name.textContent = "Edificio " + divId;
//             carta_subtitle.textContent = "subtitle";
//             carta_subtitle.classList.remove("d-none");
//             carta_parrafo.textContent = "lorem20";
//         }
//     });

// });

edificio_1.addEventListener("touchstart", function() {
    console.log("touch");

    if (window.innerWidth < 576) {
        console.log("si");
        // carta.style.position = "absolute";
        carta.style.display = "flex";
    } else {
        // carta.style.position = "";
        carta.style.display = "flex";
    }

    const container = document.getElementById("map_div");

    container.addEventListener("touchstart", function(event) {
        if (event.target && event.target.classList.contains("edificio")) {
            var clickedDiv = event.target;
            var divId = clickedDiv.id;

            carta_name.textContent = "Edificio " + divId;
            carta_subtitle.textContent = "subtitle";
            carta_subtitle.classList.remove("d-none");
            carta_parrafo.textContent = "lorem20";
        }
    });


});