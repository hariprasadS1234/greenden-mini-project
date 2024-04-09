var sidenav_main=document.getElementById("sidenav_main")
var sidenav_close=document.getElementById("sidenav_close")
sidenav_main.addEventListener("click",function(){
    sidenav.style.right=0
})
sidenav_close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})