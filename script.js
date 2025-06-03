// Cambiar tema claro/oscuro
const botonTema = document.getElementById('temaBtn');
const body = document.body;

botonTema.addEventListener('click', () => {
  body.classList.toggle('oscuro');
});

// Validar formulario antes de enviar
const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
  const nombre = document.getElementById('nombre').value.trim();
  const correo = document.getElementById('correo').value.trim();
  const carrera = document.getElementById('carrera').value.trim();

  if (!nombre || !correo || !carrera) {
    alert('Por favor, completa todos los campos.');
    event.preventDefault();
  }
});

// Participantes aleatorios desde la API
window.addEventListener('DOMContentLoaded', () => {
  fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => {
      const participantes = data.results;
      const lista = document.getElementById('lista-participantes');
      if (!lista) return; // Si no existe el div, no hace nada

      lista.innerHTML = ''; // Limpia antes de agregar

      participantes.forEach(persona => {
        const div = document.createElement('div');
        div.style.display = 'flex';
        div.style.alignItems = 'center';
        div.style.gap = '12px';
        div.style.marginBottom = '16px';

        const img = document.createElement('img');
        img.src = persona.picture.medium;
        img.alt = persona.name.first + ' ' + persona.name.last;
        img.style.width = '56px';
        img.style.height = '56px';
        img.style.borderRadius = '50%';
        img.style.border = '2px solid var(--orange-500)';

        const nombre = document.createElement('span');
        nombre.textContent = persona.name.first + ' ' + persona.name.last;
        nombre.style.fontWeight = 'bold';

        div.appendChild(img);
        div.appendChild(nombre);
        lista.appendChild(div);
      });
    });
});
