
var total = 0;
window.addEventListener("load", function () {

    var JsonCarrito;

    var objeto = {};
    var productos = new Array();
    var precios = new Array();
    var subtotales = new Array();
    var i = 0;

    var objetos = document.querySelector(".btn btn-block btn-primary agregar-carrito");
    console.log(objetos);
    document.addEventListener("click", function (e) {
        if (e.target.getAttribute("class") == "btn btn-block btn-primary agregar-carrito") {
            var cadena = "";
            var descripcion = e.target.getAttribute("id");
            var Pventa = document.querySelector("." + e.target.getAttribute("id")).textContent;
            for (x = 2; x < Pventa.length; x++) {
                cadena += Pventa[x];
            }
            total += parseInt(cadena);
          
            productos[i] = descripcion; 
            precios[i] = Pventa; 
            subtotal = Pventa;
            subtotales[i] = subtotal; 
            var datos = []; 
            for (y = 0; y < productos.length; y++) 
            {
                datos.push({
                    "Producto": productos[y],
                    "Precio": precios[y],
                    "Subtotal": subtotales[y]
                });
            }
            i++;
            objeto.datos = datos;
            console.log(JSON.stringify(objeto));
            JsonCarrito = { "Producto": descripcion };
        }
    });
    document.getElementById("ventas").addEventListener("click", function () {

        localStorage.setItem('MisVentas', JSON.stringify((objeto)));
        alert("Productos agregados al Carrito");
    });

});