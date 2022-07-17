function setClickEvent() {
  const cardFooter = document.querySelector('.arrow')
  const cardShare = document.querySelector('.share')

  const shareIcon = document.querySelector('.arrow')

  shareIcon.addEventListener('click', () => {
   cardShare.classList.toggle('disabled')
    cardFooter.classList.toggle('disabled')
  })
}

window.addEventListener('DOMContentLoaded', () => {
  setClickEvent()
})