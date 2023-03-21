const openMenu = document.querySelector(".buttonOpenMenu")
const closeMenu = document.querySelector(".buttonCloseMenu")
const navMenu = document.querySelector (".navMenu")
const containerMenu =  document.querySelector(".containerSix")

openMenu.addEventListener('click', function() {
  openMenu.classList.add("hide")
  containerMenu.classList.remove("hide")
  closeMenu.classList.remove("hide")
  navMenu.classList.remove("hide")


})

closeMenu.addEventListener('click', function() {
  openMenu.classList.remove("hide")
  containerMenu.classList.add("hide")
  closeMenu.classList.add("hide")
  navMenu.classList.add("hide")
})


