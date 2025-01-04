// icon to top
let button1 = document.getElementById("btn")
window.onscroll=function(){
        if (window.scrollY >= 100) {
                button1.style.display = "block"
                button1.style.opacity = "1"
        }
        else {
                button1.style.display = "none";
        }
    }
// animation of main heading 
// let mainHeading = document.getElementById("main-heading")
// window.onscroll = function() {
//     if (window.scrollY >= 160 ) {
//         mainHeading.style.opacity = "1"
//     }
// }
// if (mainHeading) {
//     window.onscroll = function () {
//         if (window.scrollY > 160) {
//             mainHeading.style.animationPlayState = "running";
//         }
//     };
// }
    
// script.js when scrolle
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
      // إغلاق جميع العناصر الأخرى
    document.querySelectorAll('.content').forEach(c => {
        if (c !== content) {
            c.classList.remove('show');
        }
    });
      // تبديل العرض للحالي
    content.classList.toggle('show');
    });
});

let msg = document.getElementById("sendmsg");
let appear = function () {
    msg.style.display = "block";
};
