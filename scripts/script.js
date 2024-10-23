const burgerMenu = document.querySelector('.burger-menu');
const navList = document.querySelector('.header__nav');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    navList.classList.toggle('active');
});
