const productos = [
    {
      id: 1,
      nombre: 'Cartera Trendy 17642',
      precio: $ 38000,
      imagen: 'descarga (1).jpg', descarga (2).jpg, descarga (3).jpg
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 3200,
      imagen: 'imagenes/producto2.jpg'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 1800,
      imagen: 'imagenes/producto3.jpg'
    }
  ];
  
  let carrito = [];
  
  const listaProductos = document.getElementById('lista-productos');
  const carritoLista = document.getElementById('carrito-lista');
  const totalElemento = document.getElementById('total');
  
  function mostrarProductos() {
    productos.forEach(producto => {
      const div = document.createElement('div');
      div.classList.add('producto');
      div.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>$${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
      `;
      listaProductos.appendChild(div);
    });
  }
  
  function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    carrito.push(producto);
    actualizarCarrito();
  }
  
  function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    carritoLista.innerHTML = '';
    let total = 0;
  
    carrito.forEach((producto, index) => {
      total += producto.precio;
      const li = document.createElement('li');
      li.innerHTML = `
        ${producto.nombre} - $${producto.precio}
        <button onclick="eliminarDelCarrito(${index})">X</button>
      `;
      carritoLista.appendChild(li);
    });
  
    totalElemento.textContent = total;
  }
  
  mostrarProductos();