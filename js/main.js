const menuOpen = document.querySelector('.menu-open')
const menuClose = document.querySelector('.menu-close')
const navigation = document.querySelector('.header-navigation')

menuOpen.addEventListener('click', () => {
    navigation.classList.add('active')
    menuOpen.style.display = 'none'
    menuClose.style.display = 'block'
})

const closeNavigation = () => {
    navigation.classList.remove('active')
    menuClose.style.display = 'none'
    menuOpen.style.display = 'block'
}

menuClose.addEventListener('click', closeNavigation)


if(window.innerWidth > 100) {
    document.querySelectorAll('.header-menu .menu-link').forEach(headerNavigation => {
        headerNavigation.addEventListener('click', () => {
            closeNavigation()
        })
    })
}



const scrollPage = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400
})

scrollPage.reveal(`.home-middle`)
scrollPage.reveal(`.home-left`, {delay: 500, origin: 'left'})
scrollPage.reveal(`.home-right`, {delay: 500, origin: 'right'})
scrollPage.reveal(`.language`, {delay: 100, origin: 'bottom'})
scrollPage.reveal(`.about`, {interval: 100, origin: 'top'})
scrollPage.reveal(`.portfolio`, {delay: 100, origin: 'top'})
scrollPage.reveal(`.footer-logo`, {delay: 100, origin: 'bottom'})
scrollPage.reveal(`.footer-info`, {delay: 300, origin: 'bottom'})
scrollPage.reveal(`.footer-contact`, {delay: 500, origin: 'bottom'})
scrollPage.reveal(`.p1`, {delay: 100, origin: 'bottom'})
scrollPage.reveal(`.p2`, {delay: 200, origin: 'top'})

