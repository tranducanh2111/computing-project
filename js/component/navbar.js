/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-component-menu'),
      navToggle = document.getElementById('nav-component-toggle'),
      navClose = document.getElementById('nav-component-close')

/* Menu show */
navToggle.addEventListener('click', () =>{
   navMenu.classList.add('show-menu')
})

/* Menu hidden */
navClose.addEventListener('click', () =>{
   navMenu.classList.remove('show-menu')
})

/*=============== SEARCH ===============*/
const search = document.getElementById('search'),
      searchBtn = document.getElementById('search-btn'),
      searchClose = document.getElementById('search-close')

/* Search show */
searchBtn.addEventListener('click', () =>{
   search.classList.add('show-search')
})

/* Search hidden */
searchClose.addEventListener('click', () =>{
   search.classList.remove('show-search')
})

window.addEventListener('scroll', function() {
   if (window.scrollY > 50) {
     document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.95)";
   } else {
      document.getElementById("header").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
   }
 });