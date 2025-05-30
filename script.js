const select = document.getElementById('nombre');
const mensaje = document.getElementById('mainMessage');
const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const body = document.body;
const cover = document.getElementById('cover');
const containerLetter = document.querySelector('.container-letter');

const saludos = {
  'Vicenta': 'Querida Suegra',
  'Esperanza': 'Querida Doña Esperanza',
  'Lenny': 'Querida Cuñada Lenny',
  'Rocio': 'Querida Cuñada Rocio',
  'Karina': 'Querida Cuñada Karina',
  'Menly': 'Querida Cuñada Karina',
  'Vilma': 'Querida Cuñada Karina',
  'Carla': 'Querida Carla',
  'Lina': 'Querida Lina',
  'Grisel': 'Querida Sobrina Grisel',
  'Ceci': 'Querida Sobrina Ceci',
  'Belén': 'Querida Sobrina Belén',
  'Niche': 'Querida Sobrina Niche',
  'Gaby': 'Querida Sobrina Gaby'
};

select.addEventListener('change', () => {
  const nombre = select.value;

  if (saludos[nombre]) {
    openBtn.disabled = false;

    const fondos = {
      'Vicenta': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Esperanza': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Lenny': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Rocio': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Karina': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Menly': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Vilma': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Carla': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Lina': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Grisel': 'linear-gradient(to bottom, #e6ffe6, #b3ffb3)',
      'Ceci': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Belén': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)',
      'Niche': 'linear-gradient(to bottom, #ffe6e6, #ffb3b3)',
      'Gaby': 'linear-gradient(to bottom, #e6f7ff, #b3ecff)'
    };

    body.style.background = fondos[nombre] || '#ffe4ec';

    mensaje.innerHTML = `
      ${saludos[nombre]},<br><br>
      "Hoy celebro tu amor transformador, ese que con manos de alma teje los hilos invisibles de nuestra familia. En ti late la fuerza que nutre, el cuidado que sana y la alegría que convierte lo simple en eterno."
      Feliz dia de la Madre.

      De parte de Roberto.
    `;
  } else {
    mensaje.innerHTML = `
      "Hoy celebro tu amor transformador, ese que con manos de alma teje los hilos invisibles de nuestra familia. En ti late la fuerza que nutre, el cuidado que sana y la alegría que convierte lo simple en eterno."
      Feliz dia de la Madre.

      De parte de Roberto.
    `;
    openBtn.disabled = true;
    body.style.background = '#ffe4ec';
  }
});

openBtn.addEventListener('click', () => {
  cover.classList.add('opened');
  containerLetter.classList.add('opened'); // Aquí para mostrar el mensaje
  openBtn.disabled = true;
  closeBtn.disabled = false;
  select.disabled = true;
});

closeBtn.addEventListener('click', () => {
  cover.classList.remove('opened');
  containerLetter.classList.remove('opened'); // Aquí para ocultar el mensaje
  closeBtn.disabled = true;
  select.disabled = false;

  if (select.value) {
    openBtn.disabled = false;
  }
});
