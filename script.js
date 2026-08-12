window.addEventListener("load",()=>setTimeout(()=>document.getElementById("loader").remove(),850));
const nav=document.querySelector("nav"),hamb=document.querySelector(".hamb");hamb.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll("nav a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll(".reveal").forEach(e=>io.observe(e));
document.getElementById("year").textContent=new Date().getFullYear();
