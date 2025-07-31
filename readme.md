🛍 Proyecto : Tienda Feria Virtual
📚 Descripción General
Este proyecto forma parte de la Pre-Entrega del Proyecto Integrador de la Ruta de Avance. Se trata de una tienda interactiva para una Feria Virtual Regional, en la que se muestran productos artesanales, puestos participantes, reseñas de clientes y un formulario de contacto.

El objetivo es aplicar los conocimientos adquiridos en HTML, CSS y JavaScript, asegurando una estructura semántica, un diseño responsivo avanzado, navegación interna y el uso de multimedia, además de implementar funcionalidades dinámicas con JavaScript modular.

✅ Requisitos Cumplidos y Mejoras Implementadas
1. 📁 Estructura Básica de HTML
Uso correcto de etiquetas semánticas: header, nav, main, section, footer.

Navegación interna funcional con anclas (<a href="#seccion">).

2. 📬 Formulario de Contacto
Incluye campos: Nombre, Correo electrónico y Mensaje.

Conexión a Formspree simulada (pendiente de ID final del formulario).

3. 🎨 Estilos CSS y Estética
Archivo externo styles.css enlazado correctamente.

CSS Mejorado: Estilos aplicados al header, footer, nav, cards, formularios, etc., con un enfoque en la coherencia y la experiencia de usuario.

Uso de fuente Google Fonts (Roboto).

Aplicación de background con degradado en sección principal.

4. 📱 Diseño Responsivo con Flexbox y Grid
Sección Productos: organizada en una grilla de cards responsivas con flex-wrap.

Sección Reseñas: implementada con CSS Grid.

Media Queries Optimizadas: Aplicadas para adaptar la navegación, el diseño del carrito y el contenido en pantallas de diferentes tamaños (escritorio, tablet y móvil), asegurando una visualización adecuada y una experiencia de usuario fluida en modo responsive, incluyendo el ajuste del carrito para ocupar la mitad de la pantalla en dispositivos móviles.

5. 🎥 Multimedia y Navegación
Video de YouTube embebido correctamente en la sección multimedia.

Navegación funcional en la barra de menú (Inicio, Productos, Reseñas, Contacto).

6. 🚀 Funcionalidades Dinámicas (JavaScript)
Modularización de Código: El JavaScript está organizado en módulos (producto.js, carrito.js) para una mejor gestión y escalabilidad del código.

Carga Dinámica de Productos: Utilización de la API fetch para extraer y mostrar productos desde un archivo JSON (productos.json), permitiendo añadir nuevos productos sin modificar el HTML directamente.

API de Carrito de Compras:

Gestión de Estado: El carrito utiliza localStorage para persistir los productos añadidos entre sesiones del navegador.

Funcionalidades Completas: Permite agregar, eliminar y vaciar productos del carrito.

Actualización Dinámica de UI: El carrito se actualiza en tiempo real para reflejar la cantidad de productos y el total a pagar.

Interfaz Flotante: Un carrito flotante se muestra u oculta al hacer clic en el botón correspondiente en el header.

7. 📤 Subida del Proyecto
Hosting en GitHub Pages / Netlify: (incluir el link cuando esté publicado)

Carpeta Drive: contiene HTML, CSS, JavaScript, imágenes y README.

📁 Estructura del Proyecto
📁 proyecto-feria/
│
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── producto.js      # Módulo para la carga y gestión de productos
│   └── carrito.js       # Módulo para la lógica del carrito de compras
├── data/
│   └── productos.json   # Archivo JSON con los datos de los productos
├── img/
│   ├── logo.jpeg
│   ├── mate.jpg
│   ├── cuadroMano.jpg
│   └── javones.jpeg
└── README.md