const d = document,
w = window;


export default function botonScroll (botonScroll) {
    const $scrollBtn = d.querySelector(botonScroll)

    w.addEventListener("scroll", (e) => {
     let scrollTop = w.scrollY   
     
     if (scrollTop > 1600) {
        $scrollBtn.classList.remove("hidden");
     }else{
        $scrollBtn.classList.add("hidden");
     }
    });
    
    d.addEventListener("click", (e) => {
     if (e.target.matches(botonScroll) || e.target.matches(`${botonScroll} *`)) {
        w.scrollTo({
            behavior:"smooth",
            top:0
        });
        
     }
})
}