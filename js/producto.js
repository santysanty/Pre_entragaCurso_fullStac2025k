// Función para generar una fecha aleatoria de publicación (mock)
function getRandomPublishDate() {
  const now = new Date();
  const threeMonthsAgo = new Date(now.setMonth(now.getMonth() - 3));
  const randomDate = new Date(threeMonthsAgo.getTime() + Math.random() * (new Date().getTime() - threeMonthsAgo.getTime()));
  return randomDate;
}

// Cargar productos dinámicos de la API
fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => {
    const productosContainer = document.getElementById("productos-container");
    productosContainer.innerHTML = ""; // Limpiar el contenedor

    const fechaLimite = new Date('2024-01-01T00:00:00Z');

    data.forEach(p => {
      const productPublishDate = getRandomPublishDate();

      if (productPublishDate >= fechaLimite) {
        const card = document.createElement("article");
        card.classList.add("card");

        // Asegurarse de tener un ID único para cada producto para el carrito
        const productId = `api-product-${p.id}`;

        card.innerHTML = `
          <img src="${p.image}" alt="${p.title}" />
          <h3>${p.title}</h3>
          <p>$${p.price.toFixed(2)}</p>
          <button class="btn-agregar" data-id="${productId}" data-nombre="${p.title}" data-precio="${p.price}">Agregar al carrito</button>
        `;
        productosContainer.appendChild(card);
      }
    });

    // NOTA: Los listeners para los botones 'btn-agregar' ahora se inicializarán en carrito.js
    // Esto asegura que tanto los productos estáticos como los dinámicos sean manejados por el carrito.
  })
  .catch(error => {
    console.error("Error al cargar los productos de la API:", error);
    const productosContainer = document.getElementById("productos-container");
    productosContainer.innerHTML = "<p>Hubo un problema al cargar los productos. Por favor, inténtalo de nuevo más tarde.</p>";
  });