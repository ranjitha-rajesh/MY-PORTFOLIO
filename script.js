// small, dependency-free interactions
document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',e=>{
    document.querySelectorAll('.nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});
document.querySelector('.cta')?.addEventListener('click',()=>{
  document.getElementById('projects').scrollIntoView({behavior:'smooth',block:'center'});
});
