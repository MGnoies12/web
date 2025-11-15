document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll('.hero, .glass-section');
  const header = document.querySelector('.glass-header');

  // Fade-in sections on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); });
  }, { threshold:0.2 });
  sections.forEach(sec => observer.observe(sec));

  // Header background scroll effect
  window.addEventListener('scroll', () => {
    if(window.scrollY>50) header.classList.add('scrolled'); else header.classList.remove('scrolled');
  });

  // Contact form
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('✅ سفارش شما ارسال شد! تیم زنتوس به زودی با شما تماس می‌گیرد.');
    form.reset();
  });

  // Particle background
  const canvas = document.getElementById('bgCanvas');
  const ctx = canvas.getContext('2d');
  let w = canvas.width = window.innerWidth;
  let h = canvas.height = window.innerHeight;
  const particles = [];
  for(let i=0;i<100;i++){
    particles.push({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*2+1,
      dx: (Math.random()-0.5)*1.5,
      dy: (Math.random()-0.5)*1.5
    });
  }
  function animate(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle='rgba(124,58,237,0.5)';
      ctx.fill();
      p.x+=p.dx; p.y+=p.dy;
      if(p.x<0||p.x>w)p.dx*=-1;
      if(p.y<0||p.y>h)p.dy*=-1;
    });
    requestAnimationFrame(animate);
  }
  animate();
  window.addEventListener('resize', ()=>{w=canvas.width=window.innerWidth; h=canvas.height=window.innerHeight;});
});