const stars=document.getElementById("stars");
const moon=document.getElementById("moon");
const mountains_behind=document.getElementById("mountains_behind");
const text=document.getElementById("text");
const sec=document.getElementById("sec");
const mountains_front=document.getElementById("mountains_front");
const btn=document.getElementById("btn");


window.addEventListener('scroll',function(){
    let value=this.window.scrollY;
    stars.style.left=value * 0.25 + 'px'
    moon.style.top=value * 1.05 + 'px'
    mountains_behind.style.top=value * 0.5 + 'px'
    mountains_front.style.left=value * 0 + 'px'
    text.style.left=value * .4 + 'px'
})