let productoAgre = document.getElementById("producto");
let cantidadAgre = document.getElementById("cantidad");
let params = [];

class agregaProducto {
    constructor (producto, cantidad){
        this.producto = producto;
        this.cantidad = cantidad;
    }
    datosProducto(){
        return "Producto: " + this.producto + " cantidad: " + this.cantidad;
    }
}

let objAgregarProducto = new agregaProducto();

console.log(objAgregarProducto.datosProducto());