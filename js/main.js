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
scrollPage.reveal(`.portfolio`, {delay: 100, origin: 'right'})
scrollPage.reveal(`.footer-logo`, {delay: 100, origin: 'bottom'})
scrollPage.reveal(`.footer-info`, {delay: 300, origin: 'bottom'})
scrollPage.reveal(`.footer-contact`, {delay: 500, origin: 'bottom'})