const   menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        deli = document.querySelector('.deli');

deli.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

