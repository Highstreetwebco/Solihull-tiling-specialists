const header=document.querySelector('header'),menu=document.querySelector('.menu'),nav=document.querySelector('nav'),video=document.querySelector('.hero video'),sound=document.querySelector('.sound');
const sync=()=>header.classList.toggle('scrolled',scrollY>40);sync();addEventListener('scroll',sync,{passive:true});
menu.onclick=()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',!open);nav.classList.toggle('open',!open)};
document.querySelectorAll('a[href^="#"]').forEach(a=>a.onclick=()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')});
sound.onclick=()=>{video.muted=!video.muted;sound.textContent=video.muted?'Sound on':'Sound off'};
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
