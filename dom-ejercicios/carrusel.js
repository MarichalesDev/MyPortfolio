const d = document;

export default function slider() {
    const $nextBtn = d.querySelector(".slider-btns .next"),
    $prevBtn = d.querySelector(".slider-btns .prev"),
    $tprevBtn = d.querySelector(".translate-btns .t-prev"),
    $tnextBtn = d.querySelector(".translate-btns .t-next"),
    $translateBtn = d.querySelector(".option-btns .translate-option"),
    $fadeBtn = d.querySelector(".option-btns .fade-option"),
    $slides = d.querySelectorAll(".slider-slide");

    let i = 0;
   let AutoFade;
   let AutoTranslate;
    
    $tprevBtn.style.display = "none";
    $tnextBtn.style.display = "none";
    $prevBtn.style.display = "none";
    $nextBtn.style.display = "none";

    d.addEventListener("click", e => {

        if (e.target === $fadeBtn) {
            $slides[0].classList = ['slider-slide'.concat(" ","active")]
            $slides[1].classList = ['slider-slide']
            $slides[2].classList = ['slider-slide']
            $slides[3].classList = ['slider-slide']
            $slides[4].classList = ['slider-slide']
            $slides[5].classList = ['slider-slide']
        }

        if (e.target === $prevBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i--;

            if(i < 0) {
                i = $slides.length -1;
            }

            $slides[i].classList.add("active");
        }

        if (e.target === $nextBtn) {
            e.preventDefault();
            $slides[i].classList.remove("active");
            i++;

            if(i >= $slides.length) {
                i = 0;
            }

            $slides[i].classList.add("active");
        } 
        
       if (e.target === $translateBtn) {
        $slides[0].classList = ['translate-slide'+" actived"];
        $slides[1].classList = ['translate-slide'];
        $slides[2].classList = ['translate-slide'];
        $slides[3].classList = ['translate-slide'];
        $slides[4].classList = ['translate-slide'];
        $slides[5].classList = ['translate-slide'];
    }
        
        if (e.target === $tprevBtn) {
            e.preventDefault();
            $slides[i].classList.remove("actived");
            i--;
    
            if(i < 0) {
                i = $slides.length -1;
            }
    
            $slides[i].classList.add("actived");
        }

       if (e.target === $tnextBtn) {
        e.preventDefault();
           $slides[i].classList.remove("actived");
            i++;

            if(i >= $slides.length) {
                i = 0;
            }

            $slides[i].classList.add("actived");
        }

    if (e.target === $fadeBtn) {
        $prevBtn.style.display = "block";
        $nextBtn.style.display = "block";
    }

    if (e.target === $translateBtn) {
        $prevBtn.style.display = "none";
        $nextBtn.style.display = "none";
        }
  
        if (e.target === $translateBtn) {
        $tprevBtn.style.display = "block";
        $tnextBtn.style.display = "block";
        }
        
        if (e.target === $fadeBtn) {
            $tprevBtn.style.display = "none";
            $tnextBtn.style.display = "none";
            }

    
   /*if (e.target === $fadeBtn) {
   AutoFade = setInterval(() => {
        if ($slides[0]) {
         $slides[i].classList.remove("active");
         i++;
     
         if(i >= $slides.length) {
             i = 0;
         }
     
         $slides[i].classList.add("active");
             }}, 6000)
             
        }

    
    if (e.target === $translateBtn) {
        clearInterval(AutoFade)
        }

        if (e.target === $translateBtn) {
            AutoTranslate = setInterval(() => {
                if ($slides[0]) {
                 $slides[i].classList.remove("actived");
                 i++;
             
                 if(i >= $slides.length) {
                     i = 0;
                 }
             
                 $slides[i].classList.add("actived");
                     }}, 6000)

        }

        if (e.target === $fadeBtn) {
            clearInterval(AutoTranslate)
            }*/

           
})

   
        
}
