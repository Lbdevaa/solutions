const burger = document.querySelector(`.burger`)
const navMobile = document.querySelector(`.nav__list`)
burger.addEventListener(`click`, function () {
    burger.classList.toggle(`burger--active`)
    navMobile.classList.toggle(`nav__list--opened`)
})
document.querySelectorAll(`.phone`).forEach((phone) => {
    phone.setAttribute(`href`, `tel:+${phone.innerHTML.match(/\d/g).join(``)}`)
})
