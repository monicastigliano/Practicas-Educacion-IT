/*
Ejercicio 1:

Es importante, cuando programamos, intentar separar la lógica de nuestra
aplicación de sus entradas y salidas. Disociar la lógica de la presentación permite
tener código altamente testeable y escalable. Por eso, en esta primera parte, te
proponemos diseñar la lógica de un carrito de compra, sin codificar la interfaz
HTML.
Ejercicio 1
1. Realizar una función llamada Producto.
2. Esta función debe recibir el id, nombre, precio y stock del producto, y
retornar un objeto con esos campos.
Nota: Esto nos servirá para volver a los productos de nuestro carrito muchos más predecibles y
fáciles de manejar en código.*/ 

let producto = function(id, nombre, precio, stock){
    let nuevoProducto = {
        id: id,
        nombre: nombre,
        precio: precio,
        stock: stock
    }

    return nuevoProducto;

}



/**
 * Ejercicio 2:
 * Una vez que tenemos nuestro Producto, vamos a diseñar una función llamada Carrito, que
nos permita diseñar un carrito de compra, independientemente de su presentación. ¿Qué
significa esto? Esto significa que su código no debe gestionar nada de HTML ni de eventos ni
nada por el estilo. Los requisitos del carrito son:
1. Incrementar la cantidad de un producto ya existente en el carrito.
2. Agregar un nuevo producto al carrito.
3. Quitar un producto ya existente.
4. Obtener un reporte con el precio total y el detalle. Cada fila de del detalle debe tener
el nombre del producto, el precio del producto, la cantidad pedida y el total por fila.
 */

let carrito = function(nuevoProducto, quitarProducto){
    let productoCarrito = function(nombreProducto, precioProducto){
        nombreProducto = nombreProducto,
        precioProducto = precioProducto,
        cantidadPedida = 0,
        total = 0
    }
    let carrito = [];

    if (!(carrito.includes(nuevoProducto))) {
        let pc = new productoCarrito(nuevoProducto.nombre, nuevoProducto.precio)
        carrito.push(pc);
    }
    
    carrito['pc'].cantidadPedida++
    carrito['pc'].total += nuevoProducto.precio
    
    if (carrito.includes(quitarProducto)) {
        for (let i = 0; i < carrito.length; i++) {
            if (carrito[i] === quitarProducto)
                carrito.splice(1, i)
        }
    }
    const reporte = Handlebars.compile(`<tr><th>Nombre</th></tr> <tr><th>Precio</th></tr> <tr><th>Cantidad</th></tr> <tr><th>Total</th></tr> {{#each carrito}}
                                            <tr><td>{{nombre}}</td></tr>
                                            <tr><td>{{precio}}</td></tr>
                                            <tr><td>{{cantidadPedida}}</td></tr>
                                            <tr><td>{{total}}</td></tr>
                                    {{/each}}`)
    return reporte;
    
}