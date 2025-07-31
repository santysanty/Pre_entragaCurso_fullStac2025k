document.addEventListener('DOMContentLoaded', () => {
  const carritoFlotante = document.getElementById('carrito-flotante');
  const abrirCarritoBtn = document.getElementById('abrir-carrito'); // Este es el botón en el header
  const cerrarCarritoBtn = document.getElementById('cerrar-carrito'); // Este es el botón dentro del carrito
  const listaCarrito = document.getElementById('lista-carrito');
  const totalCarritoSpan = document.getElementById('total-carrito');
  const cantidadCarritoSpan = document.getElementById('cantidad-carrito');
  const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
  const botonPagar = document.getElementById('boton-pagar');

  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  // Función para guardar el carrito en Local Storage
  const guardarCarrito = () => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  };

  // Función para actualizar la interfaz del carrito
  const actualizarCarritoUI = () => {
    listaCarrito.innerHTML = ''; // Limpiar la lista actual
    let total = 0;
    let cantidadTotal = 0;

    if (carrito.length === 0) {
      listaCarrito.innerHTML = '<li>El carrito está vacío.</li>';
      vaciarCarritoBtn.disabled = true; // Deshabilitar botones si el carrito está vacío
      botonPagar.disabled = true;
    } else {
      vaciarCarritoBtn.disabled = false; // Habilitar botones
      botonPagar.disabled = false;
      carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="item-nombre">${item.nombre} x ${item.cantidad}</span>
          <span class="item-precio">$${(item.precio * item.cantidad).toFixed(2)}</span>
          <button class="btn-eliminar-item" data-id="${item.id}">X</button>
        `;
        listaCarrito.appendChild(li);

        total += item.precio * item.cantidad;
        cantidadTotal += item.cantidad;
      });
    }

    totalCarritoSpan.textContent = total.toFixed(2);
    cantidadCarritoSpan.textContent = cantidadTotal;
    guardarCarrito(); // Guardar el carrito después de cada actualización
  };

  // Función para agregar un producto al carrito
  const agregarProductoAlCarrito = (id, nombre, precio) => {
    const productoExistente = carrito.find(item => item.id === id);

    if (productoExistente) {
      productoExistente.cantidad++;
    } else {
      carrito.push({ id, nombre, precio, cantidad: 1 });
    }
    actualizarCarritoUI();
  };

  // Función para eliminar un producto del carrito
  const eliminarProductoDelCarrito = (id) => {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarritoUI();
  };

  // Event Listeners para los botones "Agregar al carrito"
  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-agregar')) {
      const id = event.target.dataset.id;
      const nombre = event.target.dataset.nombre;
      const precio = parseFloat(event.target.dataset.precio);
      agregarProductoAlCarrito(id, nombre, precio);
    }
  });

  // Event Listener para eliminar un item del carrito
  listaCarrito.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar-item')) {
      const id = event.target.dataset.id;
      eliminarProductoDelCarrito(id);
    }
  });

  // Event Listeners para abrir/cerrar/vaciar/pagar carrito
  abrirCarritoBtn.addEventListener('click', () => {
    carritoFlotante.classList.add('visible');
  });

  cerrarCarritoBtn.addEventListener('click', () => {
    carritoFlotante.classList.remove('visible');
  });

  vaciarCarritoBtn.addEventListener('click', () => {
    const confirmar = confirm('¿Estás seguro de que quieres vaciar el carrito?');
    if (confirmar) {
      carrito = [];
      actualizarCarritoUI();
      alert('Carrito vaciado.');
    }
  });

  // Event Listener para el botón "Pagar"
  botonPagar.addEventListener('click', () => {
    if (carrito.length > 0) {
      alert(`Procediendo al pago por un total de $${totalCarritoSpan.textContent}. ¡Gracias por tu compra!`);
      // Aquí se podría integrar la lógica de pasarela de pago real,
      // como redirigir a una página de checkout o abrir un modal de pago.
      carrito = []; // Opcional: vaciar el carrito después de un "pago" simulado
      actualizarCarritoUI();
      carritoFlotante.classList.remove('visible'); // Cerrar el carrito
    } else {
      alert('Tu carrito está vacío. Agrega productos antes de pagar.');
    }
  });

  // Inicializar el carrito al cargar la página
  actualizarCarritoUI();
});