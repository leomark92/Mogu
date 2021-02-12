const   menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        deli = document.querySelector('.deli');

deli.addEventListener('click', () => {
    menu.classList.toggle('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const percent = document.querySelectorAll('.tools__percent');
var actual = document.querySelectorAll('.tools__actual-fill');

percent.forEach((item, i) => {
    actual[i].style.width = item.innerHTML;
});

