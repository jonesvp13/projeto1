//Sintaxe para definição de uma function//
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
}

function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 400) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menuExpandido')
}
function closeMenu() {
  document.body.classList.remove('menuExpandido')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`#home, 
            #home img, 
            #home .stats, 
            #services,
            #services header,
            #services .card
            #about
            #about header
            about content`)
