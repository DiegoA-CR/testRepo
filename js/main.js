const nuevoProducto = document.getElementById("producto");
const nuevaCantidad = document.getElementById("cantidad");
const agrega = document.getElementById("agregar");
const resultado = document.getElementById("resultado");
const listaProductos = document.getElementById("listaProductos");
const verLista = document.getElementById("verLista");

class EnviaProducto {
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

  if (producto && cantidad) {
    const objAgregarProducto = new EnviaProducto(producto, cantidad);
    const mensaje = objAgregarProducto.datosProducto();
    console.log(mensaje);
    resultado.textContent = mensaje;
  } else {

    alert("Por favor completa ambos campos");
  
}

  if (resultado != 0 || null) {
    guardaResultado += resultado;
  }
});

const bdProductos = [];
const bdCantidad = [];

//Funcion principal para guardar

function guardaResultado() {
  let gProducto = nuevoProducto.value;
  let gCantidad = nuevaCantidad.value;

  
  if (gProducto === "" || gCantidad === "") {
    alert("Complete todos los campos");
    return;
  }

  const objProducto = new EnviaProducto(gProducto, gCantidad);
  const mensaje = objProducto.datosProducto();

  //Agregamos los datos al array

  bdProductos.push(gProducto);
  bdCantidad.push(gCantidad);

  //Mostrar mensaje en el div resultado

  resultado.textContent = `ok ${mensaje}`;

  //limpia los input
  nuevoProducto.value = "";
  nuevaCantidad.value = "";

  console.log("Producto:", gProducto, " Cantidad: ", gCantidad);
  console.log("Todos los productos", bdProductos);
  console.log("Todas las cantidades", bdCantidad);

  //mostarar los valores de los arrays

  mostrarLista();
}

function mostrarLista() {
  listaProductos.innerHTML = "";

  if (bdProductos.length === 0) {
    listaProductos.innerHTML = "<li>No hay productos guardados</li>";
    return;
  }

  for (let i = 0; i < bdProductos.length; i++) {
    const li = document.createElement("li");
    li.textContent = `| Producto: ${bdProductos[i]} | Cantidad: ${bdCantidad[i]} |`;
    listaProductos.appendChild(li);
  }
}

// Event Listener

agrega.addEventListener("click", guardaResultado);
verLista.addEventListener("click", mostrarLista);

//

nuevaCantidad.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    guardaResultado();
  }
});

mostrarLista();
