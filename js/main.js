const openMenu = document.querySelector(".buttonOpenMenu")
const closeMenu = document.querySelector(".buttonCloseMenu")
const navMenu = document.querySelector (".navMenu")

openMenu.addEventListener('click', function() {
  openMenu.classList.add(".hide")
  closeMenu.classList.remove(".hide")
  navMenu.classList.remove(".hide")

})

closeMenu.addEventListener('click', function() {
  openMenu.classList.remove(".hide")
  closeMenu.classList.add(".hide")
  navMenu.classList.add(".hide")
})


