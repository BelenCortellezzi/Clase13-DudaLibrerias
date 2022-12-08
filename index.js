//LIBRERIA SWEETALERT

Swal.fire('Bienvenido a JS')
//alert("Bienvendio a JS")


const inputNombre = document.getElementById("nombre")
const botonSweet = document.getElementById("sweetAlert")
const botonToastify = document.getElementById("Toastify")

//ALERTA PERSONALIZADA CUANDO HACEMOS CLICK EN EL BOTON

//botonSweet.onclick = () => alert("Hola")
botonSweet.onclick = () => { 
swal.fire({
    title: "BIENVENIDOS",
    text: `Bienvenido, ${inputNombre.value} como estas?`,
    icon: "warning", //SI VEMOS EN LA PAGINA DE SWEET ESTA PALABRA TE DARA UN ICONO DE PELIGRO EN EL CARTEL
    confirmButtonText: "Ingresar",
    showCancelButton: true,
    cancelButtonText: "Salir",
    background: "red",
    position:'bottom-end',
    showConfirmButton: false, //sacar el boton de confirmar
    timer: 3000, //en 3 segundos desaparecera el cartel solo. Se trabaja con milisegundos
})

}

//LIBRERIA TOASTIFY JS, SIRVE PARA MOSTRAR NOTIFICACIONES PERSONALIZADAS

botonToastify.onclick = () => {
    Toastify({
        text: `hola ${inputNombre.value}`,
        duration: 3000,
        position: "center",
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        gravity: "bottom"
    }).showToast()
}

//LIBRERIA LUXON fecha y hora

//const DateTime = luxon.DateTime
const {DateTime} = luxon

const ahora = DateTime.now().toLocaleString(DateTime.DATETIME_MED)
console.log(ahora)


