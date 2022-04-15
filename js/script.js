"use stict"

const menuBurgerIcon = document.querySelector('.header__icon');
const menuBurgerDisplay = document.querySelector('.menu');
const headerLogo = document.querySelector('.header')

menuBurgerIcon.addEventListener('click', openMenu);

function openMenu(){
    menuBurgerDisplay.classList.toggle('_active');
    menuBurgerIcon.classList.toggle('_cross');
    document.body.classList.toggle('_block');
    headerLogo.classList.toggle('_background')
}