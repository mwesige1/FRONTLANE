(function(){var K='fl_consent';
function get(){try{return localStorage.getItem(K)}catch(e){return null}}
function set(v){try{localStorage.setItem(K,v)}catch(e){}}
function upd(v){if(window.gtag){gtag('consent','update',{analytics_storage:v,ad_storage:v})}}
function bar(){if(document.getElementById('cookie-bar'))return;var d=document.createElement('div');d.id='cookie-bar';d.setAttribute('role','dialog');d.setAttribute('aria-label','Cookie notice');
d.innerHTML='<p>We use cookies to see how the site is used and to measure our ads. We do not use them to build advertising profiles. <a href="/privacy-policy.html">Privacy policy</a></p><div><button type="button" class="btn btn-primary" data-c="granted">Accept</button><button type="button" class="btn btn-outline" data-c="denied">Decline</button></div>';
d.addEventListener('click',function(e){var b=e.target.closest('button[data-c]');if(!b)return;var v=b.getAttribute('data-c');set(v);upd(v);d.remove();});document.body.appendChild(d);}
document.addEventListener('click',function(e){if(e.target.closest('[data-cookie-settings]')){e.preventDefault();bar();}});
if(!get())bar();})();
