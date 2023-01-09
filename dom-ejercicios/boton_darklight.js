const d = document;
const ls = localStorage;

export default function btnDarkLight (btnDark,classDark) {
    const $themeBtn = d.querySelector(btnDark),
     $selectors = d.querySelectorAll("[data-dark]"),
     $colorStage = d.querySelector(".stage"),
     $colorBall = d.querySelector(".ball");

     let moon = "🌙",  
      sun = "🌞";
      
      const lightMode = () => {
        $selectors.forEach((el) => el.classList.remove(classDark));
        $themeBtn.textContent = moon; 
        ls.setItem("theme", "light");
        $colorStage.style.backgroundColor = "var(--second-color)"
        $colorBall.style.backgroundColor = "var(--main-color)"
      };
      const darkMode = () => {
        $selectors.forEach((el) => el.classList.add(classDark));
        $themeBtn.textContent = sun;
        ls.setItem("theme", "dark");
        $colorStage.style.backgroundColor = "var(--main-color)"
        $colorBall.style.backgroundColor = "var(--second-color)"
      };

    d.addEventListener("click", (e) => {
       if (e.target.matches(btnDark)){
        if ($themeBtn.textContent === moon) {
          darkMode();
        } else {
          lightMode(); 
        }
       
      }
   });
   
   d.addEventListener("DOMContentLoaded", (e) => {

    if (ls.getItem("theme") === null) ls.setItem("theme", "light");

    if (ls.getItem("theme") === "light") lightMode();

    if (ls.getItem("theme") === "dark") darkMode();

   });
}