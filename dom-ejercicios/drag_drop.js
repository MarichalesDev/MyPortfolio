const d = document;

export default function dragnDrop() {

   const $leon = d.querySelector("#leon"),
   $container = d.querySelector(".container"),
   $jaguar = d.querySelector("#jaguar"),
   $tigre = d.querySelector("#tigre"),
   $caja_leon = d.querySelector("#uno"),
   $caja_jaguar = d.querySelector("#dos"),
   $caja_tigre = d.querySelector("#tres");

    d.addEventListener("dragstart", (e) => {
       if (e.target === $leon){
        e.dataTransfer.setData('text/plain', e.target.id);
       }

       if (e.target === $jaguar){
        e.dataTransfer.setData('text/plain', e.target.id);
       }

       if (e.target === $tigre){
        e.dataTransfer.setData('text/plain', e.target.id);
       }

    });

    d.addEventListener("drag", (e) => {
        
        if (e.target === $leon){
            $leon.classList.add('active')
        }
        
        if (e.target === $jaguar){
            $jaguar.classList.add('active')
        }

        if (e.target === $tigre){
            $tigre.classList.add('active')
        }
    });  

    d.addEventListener("dragend", (e) => {
        
        if (e.target === $leon){
            $leon.classList.remove('active')
        }

        if (e.target === $jaguar){
            $jaguar.classList.remove('active')
        }

        if (e.target === $tigre){
            $tigre.classList.remove('active')
        }

    })

    d.addEventListener("dragover", (e) => {
        
        if (e.target === $caja_leon){
            e.preventDefault() 
        }
        
        if (e.target === $caja_jaguar){
            e.preventDefault() 
        }

        if (e.target === $caja_tigre){
            e.preventDefault() 
        }
    })

    d.addEventListener("drop", (e) => {
        e.preventDefault()
        if (e.target === $caja_leon) {
        const element = d.getElementById(e.dataTransfer.getData('text'))
        $caja_leon.appendChild($container.removeChild(element))
        }

        if (e.target === $caja_jaguar) {
            const element = d.getElementById(e.dataTransfer.getData('text'))
            $caja_jaguar.appendChild($container.removeChild(element))
        }

        if (e.target === $caja_tigre) {
            const element = d.getElementById(e.dataTransfer.getData('text'))
            $caja_tigre.appendChild($container.removeChild(element))
            
            if (element) {
                $container.innerHTML = "<span style='font-size:2rem'>SUCCESS</span>"
         
            }
        }

            
    })
}