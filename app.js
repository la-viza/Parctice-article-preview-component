function setClickEvent() {
const shareIcon = document.querySelector('.icon')
const cardShare = document.querySelector('.share')

  shareIcon.addEventListener('click', () => {
   cardShare.classList.toggle('disabled')
   })
}

window.addEventListener('DOMContentLoaded', () => {
  setClickEvent()
})