const nuevoProducto = document.getElementById('producto');
const nuevaCantidad = document.getElementById('cantidad');
const agrega = document.getElementById('agregar');
const resultado = document.getElementById('resultado');
const listaProductos = document.getElementById('listaProductos');


class EnviaProducto {
            constructor(producto, cantidad) {
                this.producto = producto;
                this.cantidad = cantidad;
            }
            
            datosProducto() {
                return `Producto: ${this.producto} - Cantidad: ${this.cantidad}`;
            }
        }

        agrega.addEventListener('click', () => {
            const producto = nuevoProducto.value;
            const cantidad = nuevaCantidad.value;
            
            if(producto && cantidad) {
                const objAgregarProducto = new EnviaProducto(producto, cantidad);
                const mensaje = objAgregarProducto.datosProducto();
                console.log(mensaje);
                resultado.textContent = mensaje;
            } else {
                alert('Por favor completa ambos campos');
            }

            if ( resultado!= 0 || null ){
                guardaResultado += resultado;
            }

        });


const bdProductos = [];
const bdCantidad = [];


function guardaResultado(){
    let gProducto = nuevoProducto.value;
    let gCantidad = nuevaCantidad.value;

    
    if(gProducto === "" || gCantidad ===""){
        alert("Complete todos los campos");
        return;
    }


    //agregamos los datos al array

    bdProductos.push(gProducto);
    bdCantidad.push(gCantidad);

//limpia los input
    nuevoProducto.value = "";
    nuevaCantidad.value = "";

    console.log("Producto:", gProducto,  "Cantidad: ", gCantidad);
    console.log("Todos los productos", bdProducto);
    console.lod("Todas las cantidades", bdCantidad);

    //mostarar los valores de los arrays

    mostrarLista();

}

function mostrarLista(){
    listaProductos.innerHTML = "";
    let i = 0;
    for(i = 0; i<bdProductos,length; i++){
        const li = document.createElement('li');
        li.textContent = `${bdProductos[i]} - Cantidad: ${bdCantidad[i]}`;
        listaProductos.appendChild(li);
      }
}