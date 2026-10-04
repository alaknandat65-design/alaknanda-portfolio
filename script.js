const themeToggle=document.querySelector('#themeToggle');
themeToggle.addEventListener('click',()=>{document.body.classList.toggle('dark');themeToggle.textContent=document.body.classList.contains('dark')?'☀ Light':'◐ Theme';});
document.querySelectorAll('.filter-btn').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(btn=>btn.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.project-item').forEach(item=>{item.style.display=filter==='all'||item.dataset.category===filter?'block':'none';});}));
const form=document.querySelector('#contactForm');
form.addEventListener('submit',event=>{event.preventDefault();if(!form.checkValidity()){form.classList.add('was-validated');document.querySelector('#formStatus').textContent='Please correct the highlighted fields.';return;}document.querySelector('#formStatus').textContent='Thanks! Your message has been validated successfully.';form.reset();form.classList.remove('was-validated');});
document.querySelector('#year').textContent=new Date().getFullYear();
