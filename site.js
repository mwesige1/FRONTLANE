function toggleSidebar(){document.querySelector('.sidebar').classList.add('active');document.querySelector('.sidebar-overlay').classList.add('active');document.body.style.overflow='hidden';}
function closeSidebar(){document.querySelector('.sidebar').classList.remove('active');document.querySelector('.sidebar-overlay').classList.remove('active');document.body.style.overflow='auto';}
document.addEventListener('keydown',function(e){if(e.key==='Escape')closeSidebar();});
document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a)return;var h=a.getAttribute('href'),n=null;
if(h.indexOf('tel:')===0)n='click_call';else if(h.indexOf('wa.me')>-1)n='click_whatsapp';
if(n&&window.gtag)gtag('event',n,{link_location:location.pathname});});
if(location.search.indexOf('sent=1')>-1){var m=document.getElementById('sentMsg'),f=document.getElementById('consultationForm');
if(m&&f){m.style.display='block';f.style.display='none';}if(window.gtag)gtag('event','generate_lead',{form_id:'consultation'});}
var cf=document.getElementById('consultationForm');if(cf)cf.addEventListener('submit',function(){var b=this.querySelector('.submit-btn');b.disabled=true;b.textContent='Sending...';});
