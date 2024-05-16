document.addEventListener('DOMContentLoaded', function() {

    const productos = [
        {
          id: 1,
          nombre: "Producto 1",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 100,
          tiempoEntrega: "2 días",
        },
        {
          id: 2,
          nombre: "Producto 2",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 200,
          tiempoEntrega: "3 días",
        },
        {
          id: 3,
          nombre: "Producto 3",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 300,
          tiempoEntrega: "4 días",
        },
        {
          id: 4,
          nombre: "Producto 4",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 400,
          tiempoEntrega: "5 días",
        },
        {
          id: 5,
          nombre: "Producto 5",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 500,
          tiempoEntrega: "6 días",
        },
        {
          id: 6,
          nombre: "Producto 6",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 600,
          tiempoEntrega: "7 días",
        },
        {
          id: 7,
          nombre: "Producto 7",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 700,
          tiempoEntrega: "8 días",
        },
        {
          id: 8,
          nombre: "Producto 8",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 800,
          tiempoEntrega: "9 días",
        },
        {
          id: 9,
          nombre: "Producto 9",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 900,
          tiempoEntrega: "10 días",
        },
        {
          id: 10,
          nombre: "Producto 10",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1000,
          tiempoEntrega: "11 días",
        },
        {
          id: 11,
          nombre: "Producto 11",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1100,
          tiempoEntrega: "12 días",
        },
        {
          id: 12,
          nombre: "Producto 12",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1200,
          tiempoEntrega: "13 días",
        },
        {
          id: 13,
          nombre: "Producto 13",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1300,
          tiempoEntrega: "14 días",
        },
        {
          id: 14,
          nombre: "Producto 14",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1400,
          tiempoEntrega: "15 días",
        },
        {
          id: 15,
          nombre: "Producto 15",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1500,
          tiempoEntrega: "16 días",
        },
        {
          id: 16,
          nombre: "Producto 16",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1600,
          tiempoEntrega: "17 días",
        },
        {
          id: 17,
          nombre: "Producto 17",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1700,
          tiempoEntrega: "18 días",
        },
        {
          id: 18,
          nombre: "Producto 18",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1800,
          tiempoEntrega: "19 días",
        },
        {
          id: 19,
          nombre: "Producto 19",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 1900,
          tiempoEntrega: "20 días",
        },
        {
          id: 20,
          nombre: "Producto 20",
          descripcion: "Descripción",
          img: "https://definicion.de/wp-content/uploads/2009/06/producto.png",
          precio: 2000,
          tiempoEntrega: "21 días",
        },
      ];
      
  
  
    function mostrarProductos() {
      const productsContainer = document.getElementById('products');
      productos.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('box-col');
        productElement.innerHTML = `
          <img src="${product.img}" alt="${product.nombre}">
          <h3>${product.nombre}</h3>
          <p>${product.descripcion}</p>
          <p>$${product.precio}</p>
          <button class="buy-btn" data-id="${product.id}">Buy</button>
        `;
        productsContainer.appendChild(productElement);
      });
    }
  
    function agregarAlCarrito(id) {
      const cartList = document.getElementById('cart-list');
      const product = productos.find(product => product.id === id);
      const listItem = document.createElement('li');
      listItem.innerHTML = `
        <img src="${product.img}" alt="${product.nombre}">
        <h3>${product.nombre}</h3>
        <p>${product.descripcion}</p>
        <p>$${product.precio}</p>
        <button class="remove-btn">Eliminar</button>
      `;
      cartList.appendChild(listItem);
    }
  
  
    document.addEventListener('click', function(event) {
      if (event.target.classList.contains('buy-btn')) {
        const id = event.target.dataset.id;
        agregarAlCarrito(id);
      }
    });
  
    document.getElementById('checkout').addEventListener('click', function() {
      alert('Compra finalizada!');
    });
  
    mostrarProductos();
  });