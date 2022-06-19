const goToTopBtn = document.getElementById('goToTop')
const navbar = document.getElementById('navbar')

window.addEventListener('scroll',()=>{
    if(window.scrollY==0){
        goToTopBtn.classList.add('gototop__hide')
      }
    else{
        goToTopBtn.classList.remove('gototop__hide')
    }
    navbar.classList.toggle('header__sticky',window.scrollY > 0)
})