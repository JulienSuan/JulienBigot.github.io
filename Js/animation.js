const pic = document.querySelector(".picture");

pic.addEventListener("mouseover", () => { 
    document.querySelector('.flood').style.opacity = "80%";
 })
 pic.addEventListener("mouseout", () => { 
    document.querySelector('.flood').style.opacity = "0%";
 })
 