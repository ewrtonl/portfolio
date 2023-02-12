const btnMobile = document.getElementById('btn-mobile');

const motionText = document.getElementById('motion-text')

function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) => {
    setTimeout(() => elemento.innerHTML += letra, 100 * i);
  });
}

typeWriter(motionText);

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function closeMenu() {
  nav.classList.toggle('active');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 1200
}).reveal(`
#home, 
#home .texts, 
#home .social-buttons,
#about,
#about .about-content,
#about .about-div1
`,{ delay: 300 })

ScrollReveal({
  origin: 'right',
  distance: '50px',
  duration: 2500
}).reveal(`
#about #wpp,
#about #insta,
#about #email,
#about #cv
`,{ delay: 500 })

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills,
#skills #html
`, { delay: 600 });

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills #css
`, { delay: 800 });

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills #js
`, { delay: 1000 });

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills #react
`, { delay: 1200 });

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills #node
`, { delay: 1400 });

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills #styled
`, { delay: 1600 });

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills #git
`, { delay: 1800 });

ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 2000
}).reveal(`
#skills #figma
`, { delay: 2000 });

ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 2000
}).reveal(`
#projects,
#projects .project,
#projects .see-more
`, { delay: 300 });