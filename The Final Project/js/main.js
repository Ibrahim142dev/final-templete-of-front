// icon to top
let button1 = document.getElementById("btn")
window.onscroll=function(){
        if (window.scrollY >= 100) {
                button1.style.display = "block"
                button1.style.opacity = "1"
        }
        else {
                button1.style.opacity = "0";
        }
    }
    
//  when scrolle
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active');
});

document.querySelectorAll('.item').forEach(item => {
    const link = item.querySelector('.link');
    const content = item.querySelector('.content');

    link.addEventListener('click', () => {
          // close all elements
        document.querySelectorAll('.content').forEach(c => {
            if (c !== content) {
                c.classList.remove('show');
            }
    });
      // change the view 
    content.classList.toggle('show');
    });
});

let msg = document.getElementById("sendmsg");
let appear = function () {
    msg.style.display = "block";
};

// for scroll for main heading
// Function to trigger animations based on scroll position
function handleScroll() {
    const sections = document.querySelectorAll('#about-us , #services , #portfolio, #team , #price, #questions, #contact');
    const scrollPosition = window.scrollY + window.innerHeight; // Bottom of the viewport
    sections.forEach(section => {
        const sectionTop = section.offsetTop; // Section's top position relative to the document
        const sectionHeight = section.offsetHeight;
        // Check if the scroll position is within the section's range
        if (scrollPosition > sectionTop + sectionHeight / 10) {
            const animatedElements = section.querySelectorAll('#main-heading');
            animatedElements.forEach(element => element.classList.add('active'));
        } else {
            const animatedElements = section.querySelectorAll('#main-heading');
            animatedElements.forEach(element => element.classList.remove('active'));
        }
    });
}
window.addEventListener('scroll', handleScroll);
handleScroll();
// end scroll

// for scroll
// Function to trigger animations based on scroll position
function handleScroll2() {
    const sections2 = document.querySelectorAll('.about-us, #extra, #skill , #portfolio , #price , #questions , #contact');
    const scrollPosition2 = window.scrollY + window.innerHeight; // Bottom of the viewport
    sections2.forEach(section => {
        const sectionTop2 = section.offsetTop; // Section's top position relative to the document
        const sectionHeight = section.offsetHeight;
        // Check if the scroll position is within the section's range
        if (scrollPosition2 > sectionTop2 + sectionHeight / 4) {
            const animatedElements2 = section.querySelectorAll('#anime');
            animatedElements2.forEach(element => element.classList.add('show-up'));
        } else {
            const animatedElements2 = section.querySelectorAll('#anime');
            animatedElements2.forEach(element => element.classList.remove('show-up'));
        }
    });
}
window.addEventListener('scroll', handleScroll2);
handleScroll();
// end scroll
// for scroll
// Function to trigger animations based on scroll position
function handleScroll3() {
    const sections3 = document.querySelectorAll('#skill');
    const scrollPosition3 = window.scrollY + window.innerHeight; // Bottom of the viewport
    sections3.forEach(section => {
        const sectionTop3 = section.offsetTop; // Section's top position relative to the document
        const sectionHeight = section.offsetHeight;
        // Check if the scroll position is within the section's range
        if (scrollPosition3 > sectionTop3 + sectionHeight / 2) {
            const animatedElements3 = section.querySelectorAll('#anime2');
            animatedElements3.forEach(element => element.classList.add('show-up2'));
        } else {
            const animatedElements3 = section.querySelectorAll('#anime2');
            animatedElements3.forEach(element => element.classList.remove('show-up2'));
        }
    });
}
window.addEventListener('scroll', handleScroll3);
handleScroll();
// end scroll




