const procesadores = document.getElementById('procesadores');

procesadores.addEventListener('seleccion1', (e) => {
    e.preventDefault();


    
    const productosPorProcesador = productos.mostrarProductos().filter((producto) => {
        return '\n', producto.tipo === 'procesador'
    })
    const listado = productosPorProcesador.map(
        (producto) => 'Número: ' + producto.id + ' - ' + 'Producto' + producto.nombre + '\n'
    )

    let buscarSeleccion

    while (!buscarSeleccion) {
        seleccion = +prompt('Seleccione el número de producto que desea comprar: \n' + listado)

        buscarSeleccion = productosPorProcesador.find((producto) => producto.id === seleccion)
        if (!buscarSeleccion) {
        alert('Ingrese un número correcto por favor')
        }
    }

    carrito.agregarAlCarrito(buscarSeleccion)
    alert(
        'Producto agregado exitosamente, su carrito es \n' + JSON.stringify(carrito.mostrarCarrito())
    )
    alert('Total hasta el momento: $' + carrito.calcularPrecioTotalMasIva())
      

});