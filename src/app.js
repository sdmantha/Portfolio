// nav button for when screen gets smaller
const hamburgerButton = document.getElementById('hamburger')
const navList = document.getElementById('nav-list')


function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click', toggleButton)



// button to scroll back to the top
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}