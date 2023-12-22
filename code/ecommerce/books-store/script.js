const nav = document.querySelector("nav");
window.addEventListener("scroll", function(){
    nav.classList.toggle("sticky",this.window.scrollY>0);
})

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

let currentSlide = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const newTransformValue = -index * 100 + '%';
    slides.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);
});