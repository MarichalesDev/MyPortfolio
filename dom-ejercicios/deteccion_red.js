const d = document,
w = window,
n = navigator;

export default function networkStatus() {
    const isOnLine = () => {
        const $div = d.createElement("div");

        if(n.onLine) {
            Swal.fire(
                'Conexión Establecida!',
                '',
                'success'
              )
        }

        else {
            Swal.fire({
                icon: 'error',
                title: 'No hay Conexión',
                text: '',
                footer: ''
              })
        }

        d.body.insertAdjacentElement("afterbegin", $div);
        setTimeout(()=> d.body.removeChild($div), 2000);
    };

    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());


    
}