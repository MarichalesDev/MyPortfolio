const d = document;

export default function mousePos(add, remove, output) {
    
    const $add = d.querySelector(add),
    $remove = d.querySelector(remove),
    $output = d.querySelector(output);


 d.addEventListener("click", e => {

    if (e.target === $add) {
        d.addEventListener('mousemove', handleEvent);
    }

})

 d.addEventListener("click", e => {

    if (e.target === $remove) {
        d.removeEventListener('mousemove', handleEvent);  
    }
    
})

function handleEvent(e) {
    $output.innerText = `X: ${e.pageX} - Y: ${e.pageY}`;
    
}

}