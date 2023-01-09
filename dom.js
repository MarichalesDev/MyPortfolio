 /*let texto = "Como podria yo vivir sin ella"
 const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));
 hablar(texto)*/
 
 //DOM: Introduccion
 /*console.log("********** Elementos del Documento **********");
 console.log(window.document);
 console.log(document);
 console.log(document.head);
 console.log(document.body);
 console.log(document.documentElement);
 console.log(document.doctype);
 console.log(document.charset);
 console.log(document.title);
 console.log(document.links);
 console.log(document.images);
 console.log(document.forms);
 console.log(document.styleSheets);
 console.log(document.scripts);
 setTimeout(() => {
 console.log(document.getSelection().toString());
 }, 3000);
 document.write("<h2>Hola Mundo desde el DOM </h2>")*/

 /*DOM: Nodos, Elementos y Selectores
 console.log(document.getElementsByTagName("li"));
 console.log(document.getElementsByClassName("card"));
 console.log(document.getElementById("menu"));
 console.log(document.querySelector("#menu"));
 console.log(document.querySelector("a"));
 console.log(document.querySelectorAll("a"));
 console.log(document.querySelectorAll("a").length);
 document.querySelectorAll("a").forEach((el) => console.log(el));
 console.log(document.querySelector(".card"));
 console.log(document.querySelectorAll(".card"));
 console.log(document.querySelectorAll(".card")[2]);
 console.log(document.querySelectorAll("#menu li"));
 console.log(document.querySelector("#menu li"));*/

 /*DOM: Atributos y Data-Attributes

 console.log(document.documentElement.lang);
 console.log(document.documentElement.getAttribute("lang"));
 console.log(document.querySelector(".link-dom").href);
 console.log(document.querySelector(".link-dom").getAttribute("href"));
 document.documentElement.lang = "en";
 console.log(document.documentElement.lang);
 document.documentElement.setAttribute("lang", "es-MX");
 console.log(document.documentElement.lang);

 const $linkDOM = document.querySelector(".link-dom");
 $linkDOM.setAttribute("target", "_blank");
 $linkDOM.setAttribute("rel", "noopener");
 $linkDOM.setAttribute("href", "https://youtube.com/jonmircha");
 console.log($linkDOM.hasAttribute("rel"));
 $linkDOM.removeAttribute("rel");
 console.log($linkDOM.hasAttribute("rel"));

 //Data Attributes
 console.log($linkDOM.getAttribute("data-description"));
 console.log($linkDOM.dataset);
 console.log($linkDOM.dataset.description);
 $linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
 console.log($linkDOM.dataset.description);
 //$linkDOM.dataset.description = "Soy el lindo"
 console.log($linkDOM.dataset.description);
 console.log($linkDOM.hasAttribute("data-id"));
 console.log($linkDOM.removeAttribute("data-id"));
 console.log($linkDOM.hasAttribute("data-id"));*/

 //DOM: Estilos y Variables CSS

 /*const $linkDOM = document.querySelector(".link-dom");

 console.log($linkDOM.style);
 console.log($linkDOM.getAttribute("style"));
 console.log($linkDOM.style.backgroundColor);
 console.log($linkDOM.style.color);
 //console.log(window.getComputedStyle($linkDOM));
 console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
 $linkDOM.style.setProperty("text-decoration", "none");
 $linkDOM.style.setProperty("display", "block");
 $linkDOM.style.width = "50%";
 $linkDOM.style.textAlign = "center";
 $linkDOM.style.marginLeft = "auto";
 $linkDOM.style.marginRight = "auto";
 $linkDOM.style.padding = "1rem";
 $linkDOM.style.borderRadius = ".5rem";
 //$linkDOM.style.textAlign = "center";
 console.log($linkDOM.style);
 console.log($linkDOM.getAttribute("style"));
 console.log(getComputedStyle($linkDOM));

 //Variables CSS - Custom Propeties CSS

 const $html = document.documentElement,
  $body = document.body;

  let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
   varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")

 console.log(varDarkColor, varYellowColor)

 $body.style.backgroundColor = varDarkColor;
 $body.style.color = varYellowColor;

 $html.style.setProperty("--dark-color", "#222");
 varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

 $body.style.setProperty("background-color", varDarkColor);*/

 //DOM: Clases CSS

 /*const $card = document.querySelector(".card");

 console.log($card);
 console.log($card.className);
 console.log($card.classList);
 console.log($card.classList.contains("rotate-45"));
 console.log($card.classList.add("rotate-45"));
 console.log($card.className);
 console.log($card.classList);
 console.log($card.classList.remove("rotate-45"));
 console.log($card.classList.contains("rotate-45"));
 console.log($card.classList.toggle("rotate-45"));
 console.log($card.classList.contains("rotate-45")),
 console.log($card.classList.toggle("rotate-45"));
 console.log($card.classList.contains("rotate-45"));
 console.log($card.classList.toggle("rotate-45"));
 console.log($card.classList.replace("rotate-45","rotate-135"));
 $card.classList.add("opacity-80", "sepia");
 $card.classList.remove("opacity-80", "sepia");
 $card.classList.toggle("opacity-80", "sepia");*/

 //DOM: Texto y HTML

 /*const $whatIsDOM = document.getElementById("que-es");

 let text = `
    
   <p>
    El Modelo de Objetos del Documento (<b><i>DOM - Documet Object Model</i></b>)
    es una API para documentos HTML y XML.
   </p>
   <p>
   Éste proveé una representación estructural del documento, permitiendo modificar su
   contenido y presentación visual mediante código JS.
   </p>
   <p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.
    </mark>
   </p>
 `;

 //$whatIsDOM.innerText = text;
 $whatIsDOM.textContent = text;
 $whatIsDOM.innerHTML = text;
 $whatIsDOM.outerHTML = text;*/

 //DOM Traversing: Recorriendo el DOM

 /*const $cards = document.querySelector(".cards");

 console.log($cards);
 console.log($cards.children); // los hijos de "cards" "elementos"
 console.log($cards.children[2]); // hijo 3
 console.log($cards.parentElement); // retorna el elemento "body"
 console.log($cards.firstChild); // hace referencia al espacio "enter", por lo tanto no es muy útil.
 console.log($cards.firstElementChild); // obtiene el primer elemento de "cards"
 console.log($cards.lastElementChild); // obtiene el último "Elemento" hijo
 console.log($cards.previousElementSibling); // el "Elemento" hermano antes del "card"
 console.log($cards.nextElementSibling); // el siguiente "Elemento" hermano de "card"
 console.log($cards.closest("div")); // es un método que busca el ancestro, el padre más cercano
 console.log($cards.closest("body"));
 console.log($cards.children[3].closest("section")); // el padre mas cercano del elemento n°3*/

  //DOM: Creando Elementos y Fragmentos 
  /*const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"), 
  $figcaptionText = document.createTextNode("Animals"), // nodo de texto dentro del nodo "figcaption"
  $cards = document.querySelector(".cards");

  const $figure2 = document.createElement("figure");


 $img.setAttribute("src", "https://placeimg.com/200/200/animals");
 $img.setAttribute("alt", "Animals");
 $figure.classList.add("card");


 // agregarlas al árbol
 $figcaption.appendChild($figcaptionText);
 $figure.appendChild($img);
 $figure.appendChild($figcaption)
 $cards.appendChild($figure); // <figure></figure>

 // otra forma de agregar un elemento hijo (no recomendada porque no esta creando un NODO html)
 $figure2.innerHTML = `
 <img src="https://placeimg.com/200/200/people" alt="People">
 <figcaption>People</figcaption>
 `;

 $figure2.classList.add("card");
 $cards.appendChild($figure2);

 // otra forma
 const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");


 // no es una buena practica "write"
 document.write("<h3>Estaciones del Año</h3>");
 document.body.appendChild($ul);

 estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

// otra forma
 const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");

 document.write("<h3>Continentes del Mundo</h3>");
 document.body.appendChild($ul2);
 $ul2.innerHTML = "";
 continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

 // otra forma (ESTA ES LA MEJOR FORMA)
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],
  $ul3 = document.createElement("ul"),
  $fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);*/

//DOM: Templates HTML

 /*const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),

  cardContent = [
   {
    title:"Tecnología",
    img:  "https://placeimg.com/200/200/tech",
   },
   {
    title:"Animales",
    img:  "https://placeimg.com/200/200/animals",
   },
   {
    title:"Arquitectura",
    img:  "https://placeimg.com/200/200/arch",
   },
   {
    title:"Gente",
    img:  "https://placeimg.com/200/200/people",
   },
   {
    title:"Naturaleza",
    img:  "https://placeimg.com/200/200/nature"
   },
  ];

  cardContent.forEach(el => {
   $template.querySelector("img").setAttribute("src",el.img);
   $template.querySelector("img").setAttribute("alt",el.title);
   $template.querySelector("figcaption").textContent = el.title;

   let $clone = document.importNode($template, true);
   $fragment.appendChild($clone);
  })
 
 $cards.appendChild($fragment);*/

 //DOM: Modificando Elementos (Old Style)

 /*const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
  $cloneCards = $cards.cloneNode(true)

 $newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
 `;

 $newCard.classList.add("card");

 //$cards.replaceChild($newCard, $cards.children[2]);
 //$cards.removeChild($cards.lastElementChild);
 //$cards.insertBefore($newCard, $cards.firstElementChild);
 document.body.appendChild($cloneCards);*/

 //DOM: Modificando Elementos (Cool Style)

 /*
 .insertAdjacent...
 .insertAdjacentElement(position, el)
 .insertAdjacentHTML(position, html)
 .insertAdjacentText(position, text)

  Posiciones:
   beforebegin(hermano anterior)
   afterbegin(primer hijo)
   beforeend(ultimo hijo)
   afterend(hermano siguiente)
 */

  /*const $cards = document.querySelector(".cards"),
  $newCard = document.createElement("figure");
  
 //$newCard.innerHTML = `
  let $contentCard = `
   <img src="https://placeimg.com/200/200/any" alt="Any">
   <figcaption></figcaption>
  `;
 
  $newCard.classList.add("card");

  $newCard.insertAdjacentHTML("beforeend", $contentCard);
  $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")
  //$cards.insertAdjacentElement("afterbegin", $newCard);
  
  $cards.prepend($newCard);
  $cards.append($newCard);
  $cards.before($newCard);
  $cards.adter($newCard);*/

 //DOM: Manejadores de Eventos

 /*Es aquel mecanismo que tenemos en JS para poder controlar las acciones 
 del usuario y definir ciertos comportamientos del documento que sucedan en 
 cierto momento o cuando se cumplan algunas condiciones.*/

 /*function holaMundo(){
  alert("Hola Mundo");
  console.log(event);
 }

 function saludar(nombre = "Desconocid@") {
  //alert(`Hola ${nombre} - ${event}`);
  alert(`Hola ${nombre}`);
  console.log(event);
 }

 const $eventoSemantico = document.getElementById("evento-semantico")
  $eventoMultiple = document.getElementById("evento-multiple");
  $eventoRemover = document.getElementById("evento-remover")

 $eventoSemantico.onclick = holaMundo;
 $eventoSemantico.onclick = function(e){
  alert("Hola Mundo Manejador de Eventos Semánticos");
  console.log(e)
 };

 $eventoMultiple.addEventListener("click", holaMundo);
 $eventoMultiple.addEventListener("click", (e) => {

 alert(`Hola Manejador de Evento Múltiple`)
 console.log(e)
 console.log(e.type)
 console.log(e.target)
});

//DOM: Eventos con Parámetros y Remover Eventos

 //$eventoMultiple.addEventListener("click", saludar)
 $eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("Julio");
 
});

 const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true
 }

 $eventoRemover.addEventListener("dblclick", removerDobleClick);*/

/*DOM: Flujo de Eventos (Burbuja y Captura) 
y DOM:stopPropagation & preventDefault
y DOM: Delegación de Eventos*/

/*Esta variables no son necesarias porque los 
addeventlistener se ejecutan en el propio documento.
por medio de una condicion - ej: if (e.target.matches(".eventos-flujo div")
se "selecciona" el mismo "elemento" y eso hace que no haga falta el
stopPropagation().*/

 /*function flujoEventos(e) {
  console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);
  e.stopPropagation();
 }

 //console.log($divsEventos);

 document.addEventListener("click", (e) => {
  console.log("Click en",e.target);

  if (e.target.matches(".eventos-flujo div")) {
  flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert(`Hola soy tu amigo y docente digital... Jonathan MirCha`);
    e.preventDefault(); 
  }
});*/

/*$divsEventos.forEach(div => {
 //Fase de burbuja
 div.addEventListener("click", flujoEventos);})
 //div.addEventListener("click", flujoEventos, false);
 //Fase de captura
 //div.addEventListener("click", flujoEventos, true)
 /*div.addEventListener("click", flujoEventos, {
  capture: false,
  once: true,
 })


 $linkEventos.addEventListener("click", (e) => {
  alert(`Hola soy tu amigo y docente digital... Jonathan MirCha`);
  e.preventDefault();
  e.stopPropagation();
 });*/

//BOM: Propiedades y Eventos
/*window.addEventListener("resize", (e) => {
  console.clear()
  console.log("**********Evento Resize **********");
  console.log(window.innerWidth);
  console.log(window.innerHeight);
  console.log(window.outerWidth);
  console.log(window.outerHeight);
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e)
});

window.addEventListener("scroll", (e) => {
  console.clear()
  console.log("**********Evento Scroll**********");
  console.log(window.scrollX);
  console.log(window.scrollY);
  console.log(e)
});

window.addEventListener("load", (e) => {
  
  console.log("**********Evento Load**********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
});

document.addEventListener("DOMContentLoaded", e => {
  
  console.log("**********DOMContentLoaded**********");
  console.log(window.screenX);
  console.log(window.screenY);
  console.log(e);
})*/

//alert("Alerta")
//confirm("Confirmacion")
//prompt("Aviso")


//BOM: Métodos

//alert("Alerta")
//confirm("Confirmacion")
//prompt("Aviso")
/*
const $btnAbrir = document.getElementById("abrir-ventana"),
  $btnCerrar = document.getElementById("cerrar-ventana"),
  $btnImprimir = document.getElementById("imprimir-ventana");

  let ventana;

$btnAbrir.addEventListener("click", (e) => {
  ventana = window.open("https://jonmircha.com")
});

$btnCerrar.addEventListener("click", (e) => {
  ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
  window.print();
});

console.log("********** Objeto URL (location) **********");
console.log(location);
console.log(location.origin);
console.log(location.protocol);
console.log(location.host);
console.log(location.hostname);
console.log(location.port);
console.log(location.href);
console.log(location.hash);
console.log(location.search);
console.log(location.pathname);
//location.reload();

console.log("********** Objeto Historial (history) **********");
console.log(history);
//console.log(history.back(1))
//console.log(history.forward(1))
//console.log(history.go())

console.log("********** Objeto Navegador (navigator) **********");
console.log(navigator);

console.log(navigator.connection) //nos da informacion si estamos conectados e informacion de la conexion del usuario
console.log(navigator.geolocalizacion) //api de google para que nos muestre la ubicacion
console.log(navigator.mediaDevice) //Nos indica si hay camaras , microfonos , etc
console.log(navigator.mimeTipes) //Es el tipo de formato que acepta el navegador.
console.log(navigator.onLine) //Este es el indicador que detecta si el usuario pierde o vuelve a conectarse a la red
console.log(navigator.servirceWorker) //es una api que nos ayuda convertir en un sitio web , en una aplicacion instalable
console.log(navigator.storage) //api de almacenamiento 
console.log(navigator.usb) //este detecta dispositivos usb 
console.log(navigator.userAgent) //nos da informacion sobre la plataforma que se conecta a nuestra aplicacion.
*/






 






