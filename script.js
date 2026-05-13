gsap.registerPlugin(ScrollTrigger);

/* LENIS SMOOTH SCROLL */

const lenis = new Lenis();

function raf(time){
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

/* PAGE LOAD */

gsap.to(".page-transition",{
  y:"-100%",
  duration:1.5,
  ease:"power4.inOut"
});

/* CURSOR */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{

  gsap.to(cursor,{
    x:e.clientX,
    y:e.clientY,
    duration:0.1
  });

});

/* SPLIT TEXT */

const splitTypes = document.querySelectorAll(".split");

splitTypes.forEach((char,i)=>{

  const text = new SplitType(char,{types:"chars"});

  gsap.from(text.chars,{
    opacity:0,
    y:80,
    rotateX:-90,
    stagger:0.02,
    duration:1,
    ease:"power4.out",
    scrollTrigger:{
      trigger:char,
      start:"top 90%"
    }
  });

});

/* MAGNETIC */

document.querySelectorAll(".magnetic-btn").forEach(btn=>{

  btn.addEventListener("mousemove",(e)=>{

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    gsap.to(btn,{
      x:x*0.3,
      y:y*0.3
    });

  });

  btn.addEventListener("mouseleave",()=>{

    gsap.to(btn,{
      x:0,
      y:0
    });

  });

});

/* MENU */

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-overlay");

let open = false;

menuBtn.addEventListener("click",()=>{

  if(!open){

    gsap.to(menu,{
      y:"100%",
      duration:1,
      ease:"power4.inOut"
    });

    open = true;

  }else{

    gsap.to(menu,{
      y:"-100%",
      duration:1,
      ease:"power4.inOut"
    });

    open = false;

  }

});

/* 3D TILT */

document.querySelectorAll(".tilt").forEach(card=>{

  card.addEventListener("mousemove",(e)=>{

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateY = ((x / rect.width)-0.5)*20;
    const rotateX = ((y / rect.height)-0.5)*-20;

    gsap.to(card,{
      rotateX,
      rotateY,
      duration:0.5
    });

  });

  card.addEventListener("mouseleave",()=>{

    gsap.to(card,{
      rotateX:0,
      rotateY:0,
      duration:0.5
    });

  });

});

/* SCROLL BAR */

window.addEventListener("scroll",()=>{

  const totalHeight =
    document.body.scrollHeight - window.innerHeight;

  const progress =
    (window.pageYOffset / totalHeight) * 100;

  document.querySelector(".scroll-progress").style.width =
    progress + "%";

});
