const toggleButton=document.getElementsByClassName('navlink-toggle')[0];
const navbarLinks=document.getElementsByClassName('navlink');
toggleButton.addEventListener('click',function(){
  for(var i=0;i<navbarLinks.length;i++)
  navbarLinks[i].classList.toggle('active');
});