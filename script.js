
const menu=document.getElementById('menu');
if(menu){
 menu.onclick=()=>{
   const box=document.createElement('div');
   box.style.cssText='position:fixed;inset:0;background:#050607;z-index:200;padding:90px 9vw;display:flex;flex-direction:column;gap:25px;font:22px Oswald;letter-spacing:.08em';
   box.innerHTML='<button style="position:absolute;right:8vw;top:25px;background:none;border:0;color:#888">CLOSE ×</button>'+
   [...document.querySelectorAll('nav a')].map(a=>`<a href="${a.getAttribute('href')}">${a.textContent}</a>`).join('');
   box.querySelector('button').onclick=()=>box.remove();
   box.querySelectorAll('a').forEach(a=>a.onclick=()=>box.remove());
   document.body.appendChild(box);
 };
}
