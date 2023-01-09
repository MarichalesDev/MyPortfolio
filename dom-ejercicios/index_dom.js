import btnDarkLight from "./boton_darklight.js";
import botonScroll from "./boton_scroll.js";
import slider from "./carrusel.js";
import countdown from "./cuenta_regresiva.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webCam from "./deteccion_webcam.js";
import dragnDrop from "./drag_drop.js";
import searchFilters from "./filtro_busqueda.js";
import getGeolocation from "./geolocalizacion.js";
import hamburguerMenu from "./menu_hamburguesa.js";
import mousePos from "./mouse_position.js";
import speechReader from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_spy.js";
import draw from "./sorteo.js";
import { moveBall ,shortcuts } from "./teclado.js";
import contactFromValidations from "./validacion_formulario.js";
import smartVideo from "./video_inteligente.js";


const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/17.wav", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Dec 6, 2023 13:28:19", "Feliz cumpleaños");
    botonScroll(".bt-scroll"),
    responsiveMedia(
    "youtube", 
    "(min-width: 972px)", 
    `<a href="https://youtu.be/Y-HIJFxM264" target="_blank"
    rel="noopener">Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/Y-HIJFxM264"
     title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
     clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
    );

    responsiveMedia(
    "gmaps", 
    "(min-width: 972px)",
    `<a href="https://goo.gl/maps/uTVq7hyor2eJiEqu8" target="_blank"
    rel="noopener">Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126345.3062712146!2d-62.845663111733764!3d8.273825794602203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dcbf930957dda3f%3A0xa7be18a2d7cc3d22!2sPuerto%20Ordaz%2C%20Ciudad%20Guayana%208050%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sve!4v1672766012632!5m2!1ses!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
)
responsiveTester("responsive-tester");
userDeviceInfo("user-device");
webCam("webcam")
getGeolocation("geolocation");
searchFilters(".card-filter", ".card");
draw("#winner-btn", ".player");
slider();
mousePos("#add","#remove", "#output");
scrollSpy();
smartVideo();
contactFromValidations();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");

});

btnDarkLight(".bt-dark-light", "dark-mode");
networkStatus();
speechReader();
dragnDrop();

