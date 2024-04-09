var sidenav_main=document.getElementById("sidenav_main")
var sidenav_close=document.getElementById("sidenav_close")
sidenav_main.addEventListener("click",function(){
    sidenav.style.right=0
})
sidenav_close.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
var search=document.getElementById("search")
var product=document.getElementById("product-container")
var productlist=product.querySelectorAll("div")
search.addEventListener("keyup",function(){
    var enteredValue=event.target.value.toUpperCase()
    for(i=0;i<productlist.length;i=i+1){
var productName=productlist[i].querySelector("p").textContent
if(productName.toUpperCase().indexOf(enteredValue)<0)
{
    productlist[i].style.display="none"
}
else{
    productlist[i].style.display="block"

}
    }
    

})