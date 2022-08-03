const misProductos = [
    {
      id: 1,
      nombre: 'intel i5 9600k',
      marca: 'intel',
      tipo: 'procesador',
      precio: 35000
    },
    {
      id: 2,
      nombre: 'AMD Ryzen 3600X',
      marca: 'AMD',
      tipo: 'procesador',
      precio: 47000
    },
    {
      id: 3,
      nombre: 'Aorus ultra gaming 2.0',
      marca: 'Aorus',
      tipo: 'motherboard',
      precio: 42000
    },
    {
      id: 4,
      nombre: 'intel i7 9700k',
      marca: 'intel',
      tipo: 'procesador',
      precio: 45000
    },
    {
      id: 5,
      nombre: 'intel i9 9900k',
      marca: 'intel',
      tipo: 'procesador',
      precio: 55000
    },
    {
      id: 6,
      nombre: 'SSD Kingstone 250GB',
      marca: 'Kingstone',
      tipo: 'almacenamiento',
      precio: 20000
    },
    {
      id: 7,
      nombre: 'HDD 1TB',
      marca: 'Wester Digital',
      tipo: 'almacenamiento',
      precio: 10000
    },
    {
      id: 8,
      nombre: 'HDD 2TB',
      marca: 'Wester Digital',
      tipo: 'almacenamiento',
      precio: 17000
    },
    {
      id: 9,
      nombre: 'aorus b450 pro wifi',
      marca: 'Aorus',
      tipo: 'motherboard',
      precio: 55000
    },
    {
      id: 10,
      nombre: 'asus tuf gaming b450m plus 2',
      marca: 'Asus',
      tipo: 'motherboard',
      precio: 65000
    },
  ]

  class Carrito {
    constructor() {
      this.productosEnElCarrito = []
      this.total = 0
    }
    agregarAlCarrito(producto) {
      this.productosEnElCarrito.push(producto)
      this.calcularPrecioTotalMasIva()
    }
    mostrarCarrito() {
      return this.productosEnElCarrito
    }
    calcularPrecioTotalMasIva() {
      this.total = this.productosEnElCarrito.reduce((acc, val) => acc + val.precio * 1.21, 0)
      return this.total
    }
  }
  
  class Productos {
    constructor() {
      this.productos = []
    }
    cargarProducto(producto) {
      // validar si el producto ya existe
      this.productos.push(producto)
    }
  
    mostrarProductos() {
      return this.productos
    }
  }
  
  class Producto {
    constructor(id, nombre, marca, tipo, precio, cantidad) {
      this.id = id
      this.nombre = nombre
      this.marca = marca
      this.tipo = tipo
      this.precio = precio
      this.cantidad = 1
    }
  }
  
  const carrito = new Carrito()
  
  const productos = new Productos()
  
  misProductos.forEach((producto) => {
    const nuevoProducto = new Producto(
      producto.id,
      producto.nombre,
      producto.marca,
      producto.tipo,
      producto.precio,
      producto.cantidad
    )
  
    productos.cargarProducto(nuevoProducto)
  })

//FUNCION QUE AGREGA CARDS
const mostrarCardProducto = (productoPorTipo) =>{
    const div = document.createElement ('div');
    for (const producto of productoPorTipo) {
    const h5 = document.createElement ('h5');
    h5.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src=  class="img-fluid rounded-start" alt="">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title"> ${producto.nombre} </h5>
            <p class="card-text">Breve descripcion del producto a comprar</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <h3> ${producto.precio} </h3>
            <button id="productoElegido" type="button" class="btn btn-primary">Comprar</button>
          </div>
        </div>
      </div>
    </div>
    `;
    div.append(h5);
    }
    document.getElementById('container').append(div);
}

//Filtra PROCESADORES
const procesadores = document.getElementById('seleccion1');
procesadores.addEventListener('click', () => {
  console.log('Alguien hizo click - addEventListener');
  const productosPorProcesador = productos.mostrarProductos().filter((producto) => {
    return '\n', producto.tipo === 'procesador'
  });
  mostrarCardProducto(productosPorProcesador);
   

});
//Filtra MOTHERBOARDS
const motherboard = document.getElementById('seleccion2');
motherboard.addEventListener('click', () => {
    console.log('Alguien hizo click - addEventListener');
    const productosPorMotherboard = productos.mostrarProductos().filter((producto) => {
      return '\n', producto.tipo === 'motherboard'
    })
    mostrarCardProducto(productosPorMotherboard);
     
});
//Filtra ALMACENAMIENTO
const almacenamiento = document.getElementById('seleccion3');
almacenamiento.addEventListener('click', () => {
    console.log('Alguien hizo click - addEventListener');
    const productosPorAlmacenamiento = productos.mostrarProductos().filter((producto) => {
      return '\n', producto.tipo === 'almacenamiento'
    })
    mostrarCardProducto(productosPorAlmacenamiento);
     
});


