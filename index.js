const aboutBtn=document.querySelector('#about')
aboutBtn.addEventListener("click",function(){
    var element = document.querySelector(".about");
    element.scrollIntoView();
    const area=document.querySelector('.about-area')
    
})
const homeBtn=document.querySelector('#home')
homeBtn.addEventListener("click",function(){
    var element = document.querySelector(".home");
    element.scrollIntoView();
    homeBtn.toggleAttribute('start-animation')
})
const projectBtn=document.querySelector('#projects')
projectBtn.addEventListener("click",function(){
    var element = document.querySelector(".projects");
    element.scrollIntoView();
    const area=document.querySelector('.about-area')
    
})