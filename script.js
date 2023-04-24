
// document.addEventListener("DOMContentLoaded", () => {
//     const burgerMenu = document.querySelector('.burger-menu');
//     const navList = document.querySelector('.header__nav-list');
//
//     burgerMenu.addEventListener('click', () => {
//         navList.classList.toggle('open');
//     });
// });



const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.header__nav-list');

burgerMenu.addEventListener('click', () => {
    navList.classList.toggle('open');
});
