//select gallery,nextbtn,backbtn
var gallery=document.querySelector(".gallery")
var backbtn=document.getElementById("backbtn")
var nextbtn=document.getElementById("nextbtn")

gallery.addEventListener('wheel',(event)=>{
    event.preventDefault(); 
    gallery.scrollLeft=event.deltaY;
    gallery.style.scrollBehavior='auto'
})
nextbtn.addEventListener('click',function(){
    gallery.scrollLeft+=900;
    gallery.style.scrollBehavior='smooth'
})
backbtn.addEventListener('click',function(){
    gallery.scrollLeft-=900;
    gallery.style.scrollBehavior='smooth'
})