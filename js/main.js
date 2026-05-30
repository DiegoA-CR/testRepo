const nuevoProducto = document.getElementById("producto");
const nuevaCantidad = document.getElementById("cantidad");
const agrega = document.getElementById("agregar");
const resultado = document.getElementById("resultado");
const listaProductos = document.getElementById("listaProductos");
const mostrar = document.getElementById("mostrar");
const verLista = document.getElementById("verLista");

class agregaProducto {
  constructor(producto, cantidad) {
    this.producto = producto;
    this.cantidad = cantidad;
  }

  datosProducto() {
    return `Producto: ${this.producto} - Cantidad: ${this.cantidad}`;
  }
}

//


const bdProductos = [];
const bdCantidad = [];

//Funcion principal para guardar

function agregaResultado() {
  let gProducto = nuevoProducto.value;
  let gCantidad = nuevaCantidad.value;

  
  if (gProducto === "" || gCantidad === 0 ) {
    alert("Complete todos los campos");
    return;
  }

  const objProducto = new agregaProducto(gProducto, gCantidad);
  const mensaje = objProducto.datosProducto();

  //Agregamos los datos al array

  bdProductos.push(gProducto);
  bdCantidad.push(gCantidad);

  //Mostrar mensaje en el div resultado

  resultado.textContent = `${mensaje}`;

  //limpia los input
  nuevoProducto.value = "";
  nuevaCantidad.value = "";

  console.log("Producto:", gProducto, " Cantidad: ", gCantidad);
  console.log("Todos los productos", bdProductos);
  console.log("Todas las cantidades", bdCantidad);

  if(mostrar.style.display === "block"){
    crearListaCompra();
  }

}

function mostrarLista() {
  
  const estadoVisible = mostrar.style.display === "block" ;

  if (estadoVisible){

    //Ocultar lista
      mostrar.style.display = "none";
    
    }else{

      //mostrar lista
      mostrar.style.display = "block";
      crearListaCompra();
      
    }  
}

function crearListaCompra(){

    // limpia y llena la lista
      listaProductos.innerHTML = "";
      listaProductos.style.display = "block";
      //en caso de no existir productos agrega
      if (bdProductos.length === 0) {
        const li = document.createElement("li");
        li.textContent = "No hay productos agregados";
        li.classList.add("ver-lista-productos");
        listaProductos.appendChild(li);
        return;
      }

      for (let i = 0; i < bdProductos.length; i++) {
        const li = document.createElement("li");
        li.classList.add("ver-lista-productos"); //agragar clase
        li.textContent = `| Producto: ${bdProductos[i]} | Cantidad: ${bdCantidad[i]} |`;
        listaProductos.appendChild(li);
      }

}

// Event Listener

agrega.addEventListener("click", agregaResultado);
verLista.addEventListener("click", mostrarLista);

//

nuevaCantidad.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    agregaResultado();
  }
});

mostrar.style.display = "none";