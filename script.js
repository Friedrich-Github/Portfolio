gsap.registerPlugin(ScrollTrigger);

/* LOADER */

window.addEventListener("load", ()=>{

  gsap.to(".loader",{
    opacity:0,
    duration:1,
    delay:1,
    onComplete:()=>{
      document.querySelector(".loader").style.display="none";
    }
  });

});

/* HERO ANIMATION */

gsap.from(".hero-sub",{
  y:30,
  opacity:0,
  duration:1
});

gsap.from(".hero-title",{
  y:100,
  opacity:0,
  duration:1.4,
  delay:0.2
});

gsap.from(".magnetic-btn",{
  opacity:0,
  y:30,
  duration:1,
  delay:0.6
});

/* CUSTOM CURSOR */

const cursor = document.querySelector(".cursor");

window.addEventListener("mousemove",(e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* MAGNETIC BUTTON */

document.querySelectorAll(".magnetic-btn").forEach(btn=>{

  btn.addEventListener("mousemove",(e)=>{

    const rect = btn.getBoundingClientRect();

    const x = e.clientX - rect.left - rect.width/2;
    const y = e.clientY - rect.top - rect.height/2;

    gsap.to(btn,{
      x:x*0.3,
      y:y*0.3,
      duration:0.3
    });

  });

  btn.addEventListener("mouseleave",()=>{

    gsap.to(btn,{
      x:0,
      y:0,
      duration:0.5
    });

  });

});

/* PARALLAX */

gsap.to(".hero-title",{
  y:150,
  scrollTrigger:{
    trigger:".hero",
    start:"top top",
    scrub:true
  }
});

/* PROJECT CMS */

const projects = [

  {
    title:"Luxury Brand",
    category:"Brand Identity",
    image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200"
  },

  {
    title:"Architecture Studio",
    category:"Web Design",
    image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
  },

  {
    title:"Fashion Campaign",
    category:"Creative Direction",
    image:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200"
  }

];

const grid = document.getElementById("projects-grid");

projects.forEach(project=>{

  grid.innerHTML += `
  
    <div class="project-card">

      <img src="${project.image}" alt="">

      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.category}</p>
      </div>

    </div>
  
  `;

});

/* SCROLL ANIMATION */

gsap.utils.toArray(".project-card").forEach(card=>{

  gsap.from(card,{
    opacity:0,
    y:80,
    duration:1,
    scrollTrigger:{
      trigger:card,
      start:"top 85%"
    }
  });

});

/* DARK MODE */

const toggle = document.getElementById("theme-toggle");

toggle.addEventListener("click",()=>{

  document.body.classList.toggle("light-mode");

});
