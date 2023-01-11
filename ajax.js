const d = document;
(() => {
    const xhr = new XMLHttpRequest(),
    $xhr = d.getElementById("xhr"),
    $fragment = d.createDocumentFragment();

    xhr.addEventListener("readystatechange", (e) => {
        if(xhr.readyState !== 4) return;

        //console.log(xhr);

        if (xhr.status >= 200 && xhr.status < 300) {
            //console.log("éxito");
            //console.log(xhr.responseText)
            let json = JSON.parse(xhr.responseText);
            //console.log(json);

            json.forEach((el) => {
                const $li = d.createElement("li");
                $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
                $fragment.appendChild($li);
            });

            $xhr.appendChild($fragment);
        }else {
            //console.log("error");
            let message = xhr.statusText || "Ocurrio un error";
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`
        }

    });

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");

    xhr.send()
})();

(() => {
   const $fetch = d.getElementById("fetch"),
    $fragment = d.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.ok ?response.json():Promise.reject(response))
    .then(json => {
        //console.log(json);
        json.forEach((el) => {
        const $li = d.createElement("li");
        $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
        $fragment.appendChild($li);
        });

        $fetch.append($fragment);
    })

    .catch((error) => {
        //console.log("Estamos en el catch",error);
        let message = error.statusText || "Ocurrio un error";
        $fetch.innerHTML = `Error ${error.status}: ${message}`
        
    })
    
    //.finally(() => console.log("Esto se ejecutará independientemente del resultado de la promesa Fetch"))
})();

(() => {
    const $fetchAsync = d.getElementById("fetch-async"),
    $fragment = d.createDocumentFragment();

    async function getData() {
    try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users")
    json = await res.json();

    //if (!res.ok) throw new Error("Ocurrio un Erro al solicitar los Datos");
    if (!res.ok) throw { status: res.status, statusText: res.statusText }

    json.forEach((el) => {
    const $li = d.createElement("li");
    $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
    $fragment.appendChild($li);
    });
    
    $fetchAsync.appendChild($fragment);
       
    } catch (error) {
    let message = error.statusText || "Ocurrio un error";
    $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;
    }};

    getData();
    
})();

(() => {
   const $axios = d.getElementById("axios"),
    $fragment = d.createDocumentFragment();

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        //console.log(response);
        let json = response.data;
        
        json.forEach((el) => {
         const $li = d.createElement("li");
         $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
         $fragment.appendChild($li);
        });

        $axios.appendChild($fragment);
    })
    .catch((error) =>{
        //console.log(error.response);
        let message = error.response.statusText || "Ocurrio un error";
        $axios.innerHTML = `Error ${error.response.status}: ${message}`;
    })
    /*.finally(() => {
        console.log("Esto se ejecutará independientemente del resultado Axios")
    })*/
})();

(() => {
    const $axiosAsync = d.getElementById("axios-async"),
    $fragment = d.createDocumentFragment();
    
    async function getData() {
        try { 
        let res = await axios.get("https://jsonplaceholder.typicode.com/users")
        json = await res.data
            
        json.forEach((el) => {
         const $li = d.createElement("li");
         $li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`;
         $fragment.appendChild($li);
        });

        $axiosAsync.appendChild($fragment);
        } catch (error) {
            let message = error.response.statusText || "Ocurrio un error";
            $axiosAsync.innerHTML = `Error ${error.response.status}: ${message}`;
            console.log(error.response)
        } finally {
        console.log("Esto se ejecutará independientemente del resultado Axios")
        }
    }

    getData();
    
})();



