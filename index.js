
let btn = document.getElementById("btnn") ; 
let header = document.getElementById("header") ;
let scrollbtn = document.getElementById("Top") ;
 let footer = document.querySelector('.black');







window.onscroll =  function () {
 if (scrollY >= 270) {
   scrollbtn.style.display = "block";
 }else {
    scrollbtn.style.display = "none";
 }
};
scrollbtn.onclick = function () {
scroll ({
    top :0,
    behavior : "smooth"
    
});

};
 btn.onclick = function () {
 header.style.backgroundColor = "black " ;
 btn.style.backgroundColor = "black" ;
 btn.style.color = "white" ;

};

/* motion */

document.footer.addEventListener("pointermove", (e)=>{
  const { currentTarget: el, clientX: x, clientY: y } = e;
  const { top: t, left: l, width: w, height: h } = el.getBoundingClientRect();
  el.style.setProperty('--posX',  x-l-w/2);
  el.style.setProperty('--posY',  y-t-h/2);
})



