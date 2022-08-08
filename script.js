const joinBtn = document.querySelector('.btn')
const welcomeEl = document.querySelector('.container')
const joinEl = document.querySelector('.popup-container')
const closeBtn = document.querySelector('.close-icon')

joinBtn.addEventListener('click', () => {
    welcomeEl.classList.add('active')
    joinEl.classList.remove('active')
})

closeBtn.addEventListener('click', () => {
    welcomeEl.classList.remove('active')
    joinEl.classList.add('active')
})