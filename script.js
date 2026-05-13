const fadeElements = document.querySelectorAll(
  ".project-card, .about, .contact"
);

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("active");
    }
  });
},{
  threshold:0.2
});

fadeElements.forEach((el)=>{
  el.classList.add("fade-up");
  observer.observe(el);
});
