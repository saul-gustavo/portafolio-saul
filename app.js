const cuerpoBody = document.querySelector("body");
const icono = document.getElementById("icono");
let modoOscuro = false;
let esSol = true;

icono.addEventListener('click', () => {
    modoOscuro = !modoOscuro
    if (modoOscuro) {
        cuerpoBody.classList.add("oscuro");
    } else {
        cuerpoBody.classList.remove("oscuro");
    }
})

icono.addEventListener('click', () => {
    if (esSol) {
        icono.classList.remove('fa-sun');
        icono.classList.add('fa-moon');
        icono.style.color = "black";
    } else {
        icono.classList.remove('fa-moon');
        icono.classList.add('fa-sun');
        icono.style.color = "white";
    }
    esSol = !esSol;
});



// const cuerpo = document.querySelector("body");
// const icono = document.getElementById("icono");
// const copy = document.querySelector(".copy");
// let modoOscuro = false;
// let esSol = true;

// icono.addEventListener("click", () => {
//     modoOscuro = !modoOscuro;
//     if (modoOscuro) {
//         cuerpo.classList.add("oscuro");
//         copy.classList.add("copyB");
//     } else {
//         cuerpo.classList.remove("oscuro");
//         copy.classList.remove("copyB");
//     }
// });

// icono.addEventListener('click', () => {
//     if (esSol) {
//         icono.classList.remove('fa-sun');
//         icono.classList.add('fa-moon');
//         icono.style.color = "black";
//     } else {
//         icono.classList.remove('fa-moon');
//         icono.classList.add('fa-sun');
//         icono.style.color = "white";
//     }

//     esSol = !esSol;
// });

// // link boton
// const linkBtn = document.querySelector(".accion");
// linkBtn.addEventListener("click", function () {
//     window.location.href = "https://www.youtube.com";
// })






// // // Scroll de barra de navegacion, cambio de color

// // const miNav = document.getElementById("mi-nav");

// // window.addEventListener('scroll', () => {
// //     if(window.scrollY > 100) {
// //         miNav.classList.add("nav-scroll");
// //     } else {
// //         miNav.classList.remove("nav-scroll");
// //     }
// // });

// // // alerta de boton

// // function alerta() {
// //     alert("No hay nada viejo p**o");
// // }

// // // Enlace de un boton, sin uso
// // // const boton = document.querySelector(".btn");
// // // boton.addEventListener('click', () => {
// // //     window.location.href = "https://www.google.com";
// // // })

// // //  Menu de navegacion

// // document.addEventListener('DOMContentLoaded', function() {
// //     var navToggle = document.querySelector('.nav-toggle');
// //     var menu = document.getElementById('menu');

// //     navToggle.addEventListener('click', function() {
// //         menu.classList.toggle('show-menu');
// //     });
// // });
