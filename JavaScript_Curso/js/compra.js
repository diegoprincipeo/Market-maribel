const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");
const carrito = document.getElementById('carrito');
const procesarCompraBtn = document.getElementById('procesar-compra');
const cliente = document.getElementById('cliente');
const correo = document.getElementById('correo');

cargarEventos();

function cargarEventos() {

    document.addEventListener('DOMContentLoaded', compra.leerLocalStorageCompra());

    carrito.addEventListener('click', (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    procesarCompraBtn.addEventListener('click', procesarCompra);
    carrito.addEventListener('change', (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener('keyup', (e) => { compra.obtenerEvento(e) });


}

function procesarCompra(e) {
    e.preventDefault();

    if(compra.obtenerProductosLocalStorage().length === 0){
        Swal.fire({
            title: 'Ops...',
            text: 'Parece que tu carrito está vacío',
            imageUrl: './img/base/vacio.png',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonColor: '#ffda00',
            imageHeight: '250px',
          }).then(function(){
        location.href = "index.html";
    })
    }
    else if (cliente.value === '' || correo.value === '') {
        Swal.fire({
            icon: 'error',
            title: 'Por favor inicie sesion',
            text: 'para proceder con la compra',
            confirmButtonColor: '#ffda00',
        })
    }
    else {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Su pedido ha sido enviado.',
            showConfirmButton: false,
            timer: 1500
          }).then(function(){
            location.href = "index.html";
        })
    }
}