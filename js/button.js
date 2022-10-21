const imgBtn = document.querySelector(".img-btn")
const annList = document.querySelector(".annonce")

imgBtn.addEventListener('click',()=>{
annList.classList.toggle('mobile-menu')
})