# pucetec-dev-challenge
Examen parcial Desarrollo Web
Andrés Ricardo Romero Castillo
1.	¿Qué es una etiqueta semántica en HTML? Da dos ejemplos. (4 pts)
Una etiqueta semántica en HTML es un elemento que indica el tipo de contenido está en la página. Esto ayuda a organizar mejor la página y a que los navegadores y buscadores entiendan de qué se trata cada sección.
Ejemplos:
•	<header> que es el encabezado de la página o una sección.
•	<footer> que es el pie de página, donde se pone información como contactos o derechos de autor.
2.	¿Para qué sirve una clase (class) en HTML y cómo se usa desde CSS? (4 pts)
Una clase en HTML sirve para identificar uno o varios elementos y así poder aplicarles estilos específicos o seleccionarlos con JavaScript. Se usa poniendo el atributo class="nombreDeClase" en el elemento HTML.
En CSS, se selecciona con un punto antes del nombre, así: .nombreDeClase { /* estilos */ } y ahí pones los estilos que quieres que tengan todos los elementos con esa clase.
Por ejemplo, si en HTML tenemos <div class="caja">, en CSS hacemos .caja { background-color: red; } para que esa caja sea roja.

3.	¿Qué hace el siguiente código? (4 pts)
button:hover {
background-color: blue;
}

	Cambia el color de fondo del botón a color azul, cuando el cursor esta encima (hover).



4.	Explica qué es el DOM y cómo podemos usar JavaScript para modificarlo. (4 pts)
El DOM es una representación en forma de árbol que tiene el navegador de toda la estructura del documento HTML de una página WEB. 
Cada etiqueta HTML es un nodo y se puede acceder a esas etiquetas usando JavaScript.
Con JavaScript, podemos modificar el DOM para cambiar el contenido, los estilos o la estructura de la página mientras el usuario la está viendo, sin necesidad de recargarla. Por ejemplo, podemos crear, eliminar o cambiar textos, imágenes o clases de elementos para hacer la página interactiva.
5.	¿Cuál es la función de GitHub Pages en un proyecto web? (4 pts)
Su función principal es que puedo subir mis archivos del proyecto web (HTML, CSS, JavaScript) a GitHub y GitHub Pages los convierte en una página web pública en internet. Así, cualquier persona puede ver mi proyecto sin necesidad de un servidor o hosting externo.

6.	Ordena los siguientes selectores según su especificidad (del más bajo al más alto):
a { ... }
#menu a { ... }
.menu a:hover { ... }
html body .menu li a { ... }

1.	a { ... }
2.	html body .menu li a { ... }
3.	.menu a:hover { ... }
4.	#menu a { ... }

Parte Práctica – Sitio Web Dev Challenge
Crea una página web informativa para el evento PUCETEC Dev Challenge. El sitio debe ser visualmente ordenado, funcional y con interacciones básicas en JavaScript.
1. Estructura HTML (25 puntos)
Usa etiquetas semánticas como <header>, <main>, <section>, <footer>.

Incluye:

•	Un título del evento.
•	Una breve descripción.
•	Un formulario con nombre, correo y carrera.
•	Una lista de ediciones anteriores o categorías.
•	Enlaces a redes sociales o sitio web externo.

2. Estilos con CSS (20 puntos)
Crear un archivo style.css y enlazarlo correctamente.
•	Aplicar estilos: colores, márgenes, tipografías, fondo.
•	Usar Flexbox o Grid para organizar contenido.
•	Incluir una pseudoclase como :hover en botones o enlaces.

3. JavaScript (20 puntos)
•	Agregar un botón que diga “Cambiar tema”.
•	Al hacer clic, cambiar entre tema claro y oscuro usando classList.toggle() o modificando estilos.
•	Validar el formulario: que los campos no estén vacíos antes de enviar.
4. API: Participantes aleatorios (15 puntos)
•	Conéctate a esta API: https://randomuser.me/api/?results=5
•	Al cargar la página, muestra los nombres e imágenes de 5 personas como si fueran participantes de otros hackatones.
•	Inserta el contenido dentro de una sección con id="participantes".
5. Despliegue y entrega (5 puntos)
•	Sube el proyecto a GitHub.
•	Activa GitHub Pages.
•	Envía el link desplegado por Aula Virtual o correo.
