import { nodeName } from "jquery";

// import Scrollbar from 'smooth-scrollbar';
let media1000 = window.matchMedia("(min-width: 1000px)");
const glitch = document.querySelector(".glitch");
const contact = document.querySelectorAll(".contact");
const winBot = document.querySelector(".winBot")
let circle = document.querySelector(".circle");
let winTop = document.querySelector(".winTop");
const subcircle = document.querySelector(".subcircle");
const subLine = document.querySelector(".subLine");
let text = `Je m'appelle Julien Bigot, passionné de développement web depuis plus de 2 ans, j'ai constamenent l'envie dévorante d'en apprendre toujours plus, motivé, jeune et créatif je serais à votre écoute pour mettre en oeuvre vos projets les plus fous`
const mail = document.querySelector(".mail");
const num = document.querySelector(".num");
var music = new Audio("./ressources/on.mp3");
var on = new Audio("./ressources/on.mp3");
var off = new Audio("./ressources/off.mp3");
let textt = document.querySelector(".text");



circle.addEventListener("click", (e) => {
   setTimeout(() => {
      var lastScrollTop = 100;
const nav = document.querySelector(".nav")
window.addEventListener("scroll", function(){ 
   var st = window.pageYOffset || document.documentElement.scrollTop; 
   if (st > lastScrollTop){
      console.log("down")
      nav.style.transform = "translateY(0px)"
      nav.style.animation = "hidee 0.35s ease-in forwards"
   } else {
      console.log("top")
      nav.style.transform = "translateY(-100px)"
      nav.style.animation = "showw 0.35s ease-in forwards"
   }
   lastScrollTop = st <= 0 ? 0 : st;
}, false);
   }, 2000); 
   document.body.style.overflow = "auto"
   console.log(e)
   document.querySelector(".cont").style.overflow = "visible";
    var tl = gsap.timeline();
    tl.to(winTop, {delay: 0, y: -10, duration: 0.2})
    .to(winTop, {delay: 0.5, y: -700, duration: 0.7})
    .to($(".nav"), {delay: 0, y: 0, duration: 0.2})
    .to($(".c0"), {delay: 0, x: 0, duration: 0.2, opacity: 1})
    .to($(".c1"), {delay: 0, x: 0, duration: 0.2, opacity: 1})
    .to($(".c2"), {delay: 0, x: 0, duration: 0.2, opacity: 1})
    .to($(".c3"), {delay: 0, x: 0, duration: 0.2, opacity: 1})
    .to($(".c5"), {delay: 0, x: 0, duration: 0.2, opacity: 1})
    .to($(".c4"), {delay: 0, x: 0, duration: 0.2, opacity: 1})
   //  setTimeout(() => {
   //    $(function () {
   //       $(".text").textillate({
   //          loop: false,
   //          type: 'char',
   //          in: {
   //             effect: "flash",
   //             delay: 1,
   //             delayScale: 2,
   //             shuffle: true,
   //             sync: false,
   //          },
   //       });
   //     })
   //  }, 2000);
 })
 circle.addEventListener("mouseover", () => {
    subLine.classList.toggle("subLineAnim");
 })
document.querySelector(".text").innerHTML = text;
let media1400 = window.matchMedia("(min-width: 1400px)");
if (media1400.matches){
   $('.transi').parallaxie({
      speed: 0.8,
      offset: -250
   });
} else {
   $('.transi').parallaxie({
      speed: 1,
      offset: 0,
   });
}







// Animation for the circle 
const degreeToRadian = (angle) => {
   return angle * (Math.PI / 180);
 };
 
 const radius = 160;
 const diameter = radius * 2;
 
 const circlee = document.querySelector("#circular-text");
 circlee.style.width = `${diameter}px`;
 circlee.style.height = `${diameter}px`;
 
 const texttt = circlee.innerText;
 const characters = texttt.split("");
 circlee.innerText = null;
 
 const startAngle = -90;
 const endAngle = 100;
 const angleRange = endAngle - startAngle;
 
 const deltaAngle = angleRange / characters.length;
 let currentAngle = startAngle;
 
 characters.forEach((char, index) => {
   const charElement = document.createElement("span");
   charElement.innerText = char;
   const xPos = radius * (1 + Math.cos(degreeToRadian(currentAngle)));
   const yPos = radius * (1 + Math.sin(degreeToRadian(currentAngle)));
 
   const transform = `translate(${xPos}px, ${yPos}px)`;
   const rotate = `rotate(${index * deltaAngle}deg)`;
   charElement.style.transform = `${transform} ${rotate}`;
 
   currentAngle += deltaAngle;
   circlee.appendChild(charElement);
 });
 circle.addEventListener("mouseover", () => {
   
})
// Draggable.create(".circle", {
//    type: "rotation",
//     liveSnap: {
//         rotation: function(value) {
//             //snap to the closest increment of 10.
//             return Math.round(value / 10) * 10;
//         }
//     }
// });
window.addEventListener("mousemove", (e) => {
   document.querySelector(".glitch").style.top = e.clientY + "px";
   document.querySelector(".glitch").style.left = e.clientX + "px";
})

// document.querySelector(".nav").addEventListener("mouseenter", (e) => {
//    document.querySelector(".glitch").style.display = "block";
// })
// document.querySelector(".nav").addEventListener("mouseleave", (e) => {
//    document.querySelector(".glitch").style.display = "none";
// })

// $('.cont').parallaxie({
// 	speed: 0.2,
// });

// Scrollbar.init(document.querySelector('body'), {
//    damping : 0.01,
// }

// );

// document.querySelector(".winBot").addEventListener("mousemove", (e) => {
//    document.querySelector(".glitch2").style.top = e.clientY + "px";
//    console.log(e.clientY)
// })
// document.querySelector(".winBot").addEventListener("mouseenter", (e) => {
//    document.querySelector(".glitch2").style.display = "block";
// })
// document.querySelector(".winBot").addEventListener("mouseleave", (e) => {
//    document.querySelector(".glitch2").style.display = "none";
// })
gsap.registerPlugin(ScrollTrigger);

gsap.to(".ab-title", {
   scrollTrigger: {
      trigger: ".ab-title",
      start: "top bottom",
      end: "bottom 50%",
      scrub: 1.5,
      markers: false
   },
   x: 0,
})
gsap.to(".star", {
   scrollTrigger: {
      trigger: ".star",
      start: "top bottom",
      end: "bottom 50%",
      scrub: 1.5,
      markers: false
   },
   x: -450,
   rotation: 720,
   scale: 0.5
})
document.querySelector(".c0").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c0").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".mail").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".mail").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})

document.querySelector(".c1").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c1").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c2").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c2").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c3").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c3").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c4").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c4").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c5").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
document.querySelector(".c5").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})

circle.addEventListener("mouseenter", () => {
   glitch.style.display = "none"
})
circle.addEventListener("mouseleave", () => {
   glitch.style.display = "block"
})
let element = document.querySelector('.ab-title');
document.querySelector(".ab-title").addEventListener("mouseleave", () => {
   window.getComputedStyle(element, '::before').style.transform = "rotate(180deg)"
   console.log("yo")
})
if (media1000.matches) {
   gsap.to(".expp", {
      scrollTrigger: {
         trigger: ".expp",
         start: "top bottom",
         end: "bottom top",
         scrub: 1.5,
         markers: false
      },
      x: 0,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      translateZ: 0,
      perspective: 0
   })
   gsap.to(".exp1", {
      scrollTrigger: {
         trigger: ".exp1",
         start: "top bottom",
         end: "bottom top",
         scrub: 1.5,
         markers: false
      },
      x: -200,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      translateZ: 0,
      perspective: 0
   })
   gsap.to(".exp2", {
      scrollTrigger: {
         trigger: ".exp2",
         start: "top bottom",
         end: "bottom top",
         scrub: 1.5,
         markers: false
      },
      x: 100,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      translateZ: 0,
      perspective: 0
   })
   gsap.to(".exp3", {
      scrollTrigger: {
         trigger: ".exp3",
         start: "top bottom",
         end: "bottom top",
         scrub: 1.5,
         markers: false
      },
      x: -50,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      translateZ: 0,
      perspective: 0
   })
   gsap.to(".exp4", {
      scrollTrigger: {
         trigger: ".exp4",
         start: "top bottom",
         end: "bottom top",
         scrub: 1.5,
         markers: false
      },
      x: -300,
      rotateY: 0,
      rotateX: 0,
      translateZ: 0,
      scale: 1,
      perspective: 0
   })
   gsap.to(".exp5", {
      scrollTrigger: {
         trigger: ".exp5",
         start: "top bottom",
         end: "bottom top",
         scrub: 1.5,
         markers: false
      },
      x: 150,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      perspective: 0,
      translateZ: 0,
   })
   gsap.to(".exp6", {
      scrollTrigger: {
         trigger: ".exp6",
         start: "top bottom",
         end: "bottom top",
         scrub: 1.5,
         markers: false
      },
      x: -20,
      scale: 1,
      rotateY: 0,
      rotateX: 0,
      perspective: 0,
      translateZ: 0,
   })
   gsap.to(".p-title", {
      scrollTrigger: {
         trigger: ".p-title",
         start: "50% bottom",
         end: "bottom 50%",
         scrub: 1.5,
         markers: false
      },
      y: 0,
      scale: 1
   })
   gsap.to(".proj", {
      scrollTrigger: {
         trigger: ".proj",
         start: "50% 80%",
         end: "bottom 50%",
         markers: false
      },
      duration: 1,
      y: 0,
      scale: 1,
      ease: "bounce.out"
   })
}


document.querySelector("#expertises").addEventListener("mouseenter", () => {
   glitch.classList.toggle("conthoverr");
})
document.querySelector("#expertises").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthoverr");
})
document.querySelector("#expertises").addEventListener("mouseenter", () => {
   on.currentTime=0;
   on.play();
})
document.querySelector("#expertises").addEventListener("mouseleave", () => {
   off.currentTime=0;
   off.play();
})
document.querySelector(".exp1").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp1").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp2").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp2").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp3").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp3").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp4").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp4").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp5").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp5").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp6").addEventListener("mouseover", () => {
   glitch.classList.toggle("conthoverrr");
})
document.querySelector(".exp6").addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthoverrr");
})









// carou

const carou = document.querySelector(".carou")
const tab = document.querySelectorAll(".box");
const moins = document.querySelector(".ar1");
const plus = document.querySelector(".ar2");

const vol = document.getElementById("vol")
const vola = window.getComputedStyle(vol,"::before"
);



// activer la musique ? 
var pod = new Audio("./ressources/music/pod.mp3");
var garden = new Audio("./ressources/music/garden.mp3");
var savan = new Audio("./ressources/music/savan.mp3");
var island = new Audio("./ressources/music/island.mp3");
var canyon = new Audio("./ressources/music/canyon.mp3");
var skel = new Audio("./ressources/music/skel.mp3");
var city = new Audio("./ressources/music/city.mp3");
var winter = new Audio("./ressources/music/winter.mp3");
const playlist = [pod, garden, savan, island, canyon, skel, city, winter]
const yes = document.querySelector(".yes");
const no = document.querySelector(".no");
let right = document.querySelector(".clickable");
const left = document.querySelector(".clickable1");
let id_music = 1;
let imgBox = ["pod", "gardens", "savan", "jap", "canyon", "skel", "city", "winter"];
const namelist = ["The Pod", "The Gardens", "The Savannah", "The Islands", "The Canyons", "The Wedding", "The Metropolis", "The Wilderness"]
const textbox = document.querySelector(".text-box")
let reponse = 0;
const imagebox = document.querySelector(".img-box")
const blasdf = document.querySelector(".blasdf")
console.log(right)
right.addEventListener("click", () => {
   console.log("etet");
})
const volumePercent = document.querySelector(".volumePercent")
yes.addEventListener("click", () => {
   document.querySelector(".music").style.display = "none";
   reponse = 1;
   if (reponse == 1) {
      vol.oninput = function(e) {
         for (let index = 0; index < playlist.length; index++) {  
            playlist[index].volume = this.value/100
            e.target.setAttribute('data-after', this.value + "%");
            // volumePercent.innerHTML = this.value + "%";  
         }
         // vola.style.setProperty("--volPercent", "100%")
         vol.style.setProperty("--volPercent",this.value+"%");
      }
      right.addEventListener("click", () => {
         playlist[id_music].pause();
         console.log(id_music);
         id_music = id_music + 1;
         textbox.innerHTML = namelist[id_music];
         imagebox.style.backgroundImage = "url('/ressources/music/music-back/"+imgBox[id_music]+".gif')"
         blasdf.style.backgroundImage = "url('/ressources/music/music-back/"+imgBox[id_music]+".gif')"
         if (id_music == playlist.length -1) {
            right.style.pointerEvents = "none";
            right.style.opacity = 0.5;
         }
         console.log(id_music)
         playlist[id_music].load();
         playlist[id_music].play();
         if (id_music != 0){
            left.style.pointerEvents = "auto";
            left.style.opacity = 1;
         }
      })
      left.addEventListener("click", () => {
         playlist[id_music].pause();
         id_music = id_music - 1;
         textbox.innerHTML = namelist[id_music];
         imagebox.style.backgroundImage = "url('/ressources/music/music-back/"+imgBox[id_music]+".gif')"
         blasdf.style.backgroundImage = "url('/ressources/music/music-back/"+imgBox[id_music]+".gif')"
         if (id_music == 0) {
            left.style.pointerEvents = "none";
            left.style.opacity = 0.5;
         }
         console.log(id_music)
         playlist[id_music].load();
         playlist[id_music].play();
         if (id_music != playlist.length -1){
            right.style.pointerEvents = "auto";
            right.style.opacity = 1;
         }
      })
      console.log("ça marche !")
      function musicBox() {
         playlist[id_music].load();
         playlist[id_music].play();
      }
      musicBox();
   }
})
no.addEventListener("click", () => {
   reponse = 0;
   document.querySelector(".music").style.display = "none";
})
console.log(reponse)






yes.addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
yes.addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})
no.addEventListener("mouseover", () => {
   glitch.classList.toggle("conthover");
})
no.addEventListener("mouseleave", () => {
   glitch.classList.toggle("conthover");
})

yes.addEventListener("click", () => {
   
})

const home = document.querySelector("#home")

// home.addEventListener("click", () => {
//    function scrollToTop(){
//       window.scrollTo(0,0);
//    }
// })





// QUERIIIEEES
const phonenav = document.querySelector(".phonenav")
const burger = document.querySelector(".burger")
const ark = document.querySelector(".menu-phone")
ark.style.display = "none";
phonenav.addEventListener("click", () => {
   phonenav.classList.toggle("burger-open");
   burger.classList.toggle("tada");
   if (ark.style.display === "none") {
      ark.style.display = "flex";
    } else {
      ark.style.display = "none";
    }
   console.log("boo");
})

