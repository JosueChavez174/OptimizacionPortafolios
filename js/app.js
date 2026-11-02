// Control dinámico de la animación del Header y efecto Blur por Scroll
document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('main-header');

  if (header) {
    window.addEventListener('scroll', () => {
      // Si el scroll vertical supera los 15 píxeles, aplicamos la clase con blur y sombra
      if (window.scrollY > 15) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  }
});