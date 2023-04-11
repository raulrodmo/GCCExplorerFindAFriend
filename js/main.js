const openMenu = document.querySelector(".buttonOpenMenu")
const closeMenu = document.querySelector(".buttonCloseMenu")
const navMenu = document.querySelector (".navMenuMobile")
const containerMenu =  document.querySelector(".containerSix")

const routeHome = document.querySelector("#Home")
const routeAboutApp = document.querySelector("#AboutApp")
const routeAnimalsAvailable = document.querySelector("#AnimalsAvailable")
const routeAboutPage = document.querySelector("#AboutPage")
const routeContact = document.querySelector("#Contact")

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

routeHome.addEventListener('click', function() {
  routeHome.classList.add("selected")
  routeAboutApp.classList.remove("selected")
  routeAnimalsAvailable.classList.remove("selected")
  routeAboutPage.classList.remove("selected")
  routeContact.classList.remove("selected")
})

routeHome.addEventListener('click', function() {
  routeHome.classList.add("selected")
  routeAboutApp.classList.remove("selected")
  routeAnimalsAvailable.classList.remove("selected")
  routeAboutPage.classList.remove("selected")
  routeContact.classList.remove("selected")
})

routeAboutApp.addEventListener('click', function() {
  routeAboutApp.classList.add("selected")
  routeHome.classList.remove("selected")
  routeAnimalsAvailable.classList.remove("selected")
  routeAboutPage.classList.remove("selected")
  routeContact.classList.remove("selected")
})

routeAnimalsAvailable.addEventListener('click', function() {
  routeAnimalsAvailable.classList.add("selected")
  routeAboutApp.classList.remove("selected")
  routeHome.classList.remove("selected")
  routeAboutPage.classList.remove("selected")
  routeContact.classList.remove("selected")
})

routeAboutPage.addEventListener('click', function() {
  routeAboutPage.classList.add("selected")
  routeAboutApp.classList.remove("selected")
  routeAnimalsAvailable.classList.remove("selected")
  routeHome.classList.remove("selected")
  routeContact.classList.remove("selected")
})

routeContact.addEventListener('click', function() {
  routeContact.classList.add("selected")
  routeAboutApp.classList.remove("selected")
  routeAnimalsAvailable.classList.remove("selected")
  routeAboutPage.classList.remove("selected")
  routeHome.classList.remove("selected")
})

const swiperOne = new Swiper('.containersAnimalsAvailable', {
  // Optional parameters
  slidesPerView: "auto",
  direction: 'horizontal',
  loop: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swipertwo = new Swiper('.team', {
  // Optional parameters
  slidesPerView: "auto",
  direction: 'horizontal',
  loop: true,
});