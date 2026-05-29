const nuevoProducto = document.getElementById("producto");
const nuevaCantidad = document.getElementById("cantidad");
const agrega = document.getElementById("agregar");
const resultado = document.getElementById("resultado");
const listaProductos = document.getElementById("listaProductos");
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


agrega.addEventListener("click", () => {
  const producto = nuevoProducto.value;
  const cantidad = nuevaCantidad.value;

  if (producto != "" && cantidad != 0) {

    const objAgregarProducto = new agregaProducto(producto, cantidad);

    const mensaje = objAgregarProducto.datosProducto();
    
    console.log(mensaje);

    resultado.textContent = mensaje;
  
  } else {

    console.log("Campos incompletos");
  }

  if (resultado != 0 || null) {

    agregaResultado += resultado;
  
  }

});


//


const bdProductos = [];
const bdCantidad = [];

//Funcion principal para guardar

function agregaResultado() {
  let gProducto = nuevoProducto.value;
  let gCantidad = nuevaCantidad.value;

  
  if (gProducto === "" || gCantidad === "") {
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

  
}

function mostrarLista() {
  
  if (listaProductos.style.display === "none"  || listaProductos.style.display === "" ){
      //mostrar lista

      listaProductos.style.display = "block";

      // limpia y llena la lista
      listaProductos.innerHTML = "";

      //en caso de no existir productos agrega
      if (bdProductos.length === 0) {
        listaProductos.innerHTML = "<li>No hay productos agregados</li>";
        return;
      }

      for (let i = 0; i < bdProductos.length; i++) {
        const li = document.createElement("li");
        li.textContent = `| Producto: ${bdProductos[i]} | Cantidad: ${bdCantidad[i]} |`;
        listaProductos.appendChild(li);
      }
    }else{

      //Ocultar lista
      listaProductos.style.display = "none";
    }  
}

function crearListaCompra(){

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

mostrarLista();
