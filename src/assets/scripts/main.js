/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

// Recupera la pàgina actual i normalitza el nom.
const currentPath = window.location.pathname;
const currentPage = currentPath === '/' ? 'index' : currentPath.split('/').pop().replace('.html', '');

// Seleccionem tots els enllaços del menú de navegació.
const navLinks = document.querySelectorAll('.site-header__link');

navLinks.forEach((link) => {
  // Recupera l'href del link i també el normalitza.
  const linkPage = link
    .getAttribute('href')
    .split('/')
    .pop()
    .replace('.html', '');

  // Modifiquem la classe "active" segons si l'enllaç coincideix amb la pàgina actual.
  link.classList.toggle('active', linkPage === currentPage);
});


