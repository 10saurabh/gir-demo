const onscroll=document.getElementById("container")
window.addEventListener("scroll",function(){
    {
        let offset= window.pageYOffset;
        onscroll.style.backgroundPositionY=offset*0.2+"px";
    }
    
  })