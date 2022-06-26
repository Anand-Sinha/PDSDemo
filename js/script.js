const goToTopBtn = document.getElementById('goToTop')
const navbar = document.getElementById('navbar')
const ammunitionItem = document.getElementById('ammunitionItem')
const ammunitionItemHeader = document.getElementById('ammunitionItemHeader')
const componentsItem = document.getElementById('componentsItem')
const componentsItemHidden = document.getElementById('componentsItemHidden')

ammunitionItem.onmouseover = function(){
  document.getElementById('ammunitionItemHidden').style.display = "block";
};

componentsItem.onmouseover = function(){
  document.getElementById('componentsItemHidden').style.display = "block";
};

ammunitionItemHeader.onmouseleave = function(){

  document.getElementById('ammunitionItemHidden').style.display = "none";
  document.getElementById('componentsItemHidden').style.display = "none";
};

window.addEventListener('scroll',()=>{
    if(window.scrollY==0){
        goToTopBtn.classList.add('gototop__hide');
      }
    else{
        goToTopBtn.classList.remove('gototop__hide')
    }
    navbar.classList.toggle('header__sticky',window.scrollY > 0)
})
