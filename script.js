const menu=document.querySelector('.menu');const nav=document.querySelector('.desktop-nav');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!open));nav.classList.toggle('mobile-open',!open)});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const heroVideo=document.querySelector('.hero-media video');const sound=document.querySelector('.sound');
sound?.addEventListener('click',()=>{heroVideo.muted=!heroVideo.muted;sound.textContent=heroVideo.muted?'Sound on':'Sound off'});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{nav?.classList.remove('mobile-open');menu?.setAttribute('aria-expanded','false')}));
