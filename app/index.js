
/*const $cards = [...document.querySelectorAll(".card")];
const $fragment = document.createDocumentFragment();


$cards.forEach(() => {
    const $figcaption = document.createElement("figcaption")
     $figcaption.textContent = "elmio"
     $fragment.appendChild($figcaption)
    });

$cards.appendChild($fragment)

    console.log($cards)*/

/*const $cards = [...document.querySelectorAll(".card")];
const $fragment = document.createDocumentFragment();

for (let i = 0; i < $cards.length; i++) {
    $cards[i].style.backgroundColor = "blue" 
    

}*/

const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),

  cardContent = [
   {
    title:"Manny Pacquiao",
    img:  "img/manny-pacquiao.jpg",
   },
   {
    title:"De la Hoya",
    img:  "img/NINTCHDBPICT000003144864.jpg",
   },
   {
    title:"Arturo Gatti",
    img:  "img/s-l500.jpg",
   },
  ]

  cardContent.forEach(el => {
   $template.querySelector("img").setAttribute("src",el.img);
   $template.querySelector("img").setAttribute("alt",el.title);
   $template.querySelector("figcaption").textContent = el.title;

   let $clone = document.importNode($template, true);
   $fragment.appendChild($clone);
  })
 
 $cards.appendChild($fragment);

 const $evento = document.querySelectorAll(".card")

 function flujoEventos(e) {
 console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);

}

   document.addEventListener("click", (e) => {
    console.log("Click en",e.target);
   
    
    
if (e.target.matches(".cards img")) {
    flujoEventos(e);
    }
})



   
  






      



      






    












 





 
 
 






