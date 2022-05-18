//Sintaxe para definição de uma function//
function onScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menuExpandido')
}
function closeMenu() {
  document.body.classList.remove('menuExpandido')
}
