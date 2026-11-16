(()=>{
const P=[
['Місіонерська',1,'Класика: вона лежить на спині, він зверху. Подушка під поперек змінює кут і відчуття.','Дивіться одне одному в очі й не поспішайте.'],
['Ложечки',1,'Лежите на боці в один бік, він позаду й обіймає її. Повільно, близько й по-домашньому.','Хай вона шепоче, що їй подобається.'],
['Лотос',1,'Він сидить, вона влаштовується на колінах обличчям до нього й обіймає ногами за талію. Максимум близькості й поцілунків.','Дихайте в одному ритмі.'],
['Шезлонг',1,'Вона напівлежачи на подушках, він навпроти на колінах. Їй зручно, а він бачить усю її красу.','Підбери подушки, поки не стане ідеально.'],
['Лежачи на животі',1,'Вона на животі, ноги разом, він зверху й позаду. Його руки вільні для пестощів її спини.','Почніть із масажу спини.'],
['Ножиці',2,'Лежите на боках навпроти, ноги схрещені, як ножиці. Темп задаєте разом, і можна цілуватися.','Якщо незручно, наблизьтесь одне до одного.'],
['Наїзниця',2,'Він лежить на спині, вона зверху обличчям до нього. Вона керує темпом і кутом.','Спробуй колові рухи замість «вгору-вниз».'],
['Зворотна наїзниця',2,'Те саме, але вона спиною до нього. Нахиляється вперед або відкидається назад, шукаючи свій кут.','Хай вона обіпреться руками на його ноги.'],
['Догі',2,'Вона на колінах і ліктях, він позаду. Класика для швидкого ритму.','Опусти плечі на подушку, і стане зручніше.'],
['Стілець',2,'Він сидить на міцному стільці, вона зверху обличчям до нього. Руки вільні для обіймів.','Обійми його за шию й тримай ритм повільним.'],
['Метелик',2,'Вона лежить на краю ліжка чи столу, він стоїть, її ноги на його плечах чи талії.','Підкладіть подушку під спину.'],
['Йога',2,'Вона на спині, ноги підняті й зведені, він на колінах навпроти. Глибоко й гнучко.','Не перенапружуйся, головне зручність.'],
['На краю ліжка',2,'Вона на краю ліжка, він стоїть чи стоїть на колінах перед нею. Висота ідеальна, рухи легкі.','Підкладіть подушку під п’яти.'],
['Біля стіни',2,'Стоїте обличчям одне до одного, вона спирається спиною на стіну й обіймає ногою його стегно.','Взуйтеся, щоб не ковзати.'],
['Стоячи ззаду',2,'Вона спирається руками на стіну чи стіл, він позаду й обіймає її за талію.','Притисніться ближче, а він хай цілує її шию.'],
['Ніжка на плечі',2,'Вона лежить на спині й кладе одну ногу йому на плече. Змінюється кут, і поза проста.','Змінюй ноги по ходу.'],
['Танцівниця',3,'Стоячи: одна її нога спирається на його плече чи стегно. Вузький і гнучкий варіант, потрібна розтяжка.','Попередньо розімніться.'],
['Підйом',3,'Він тримає її на руках, вона обіймає за шию й ногами за пояс. Для тих, у кого вистачає сил.','Біля стіни ще легше й безпечніше.'],
['У душі',3,'Тепла вода, піна, поцілунки. Обіймайтеся, притискайтеся до плитки й не поспішайте.','Поклади килимок проти ковзання.'],
['Тачка',3,'Вона на руках, він тримає її за стегна. Експериментальна, лише якщо вона почувається впевнено.','Підкладіть подушки під руки чи килимок.'],
['Обійми на колінах',1,'Обоє на колінах обличчям одне до одного, тісно притиснуті. Багато поцілунків і дотиків.','Нехай руки гуляють по спині.'],
['Ніжні обійми',1,'Лежите обличчям одне до одного, ноги переплетені. Повільний ритм і довгі погляди.','Не поспішайте, нікуди не треба.'],
['Гойдалка',1,'Він напівсидить, спираючись на узголів’я, вона спиною до його грудей. Рухи маленькі й плавні, його руки вільні.','Хай він пестить її шию й плечі.'],
['Трон',1,'Вона сидить у кріслі, він на колінах перед нею. Вона бачить усе й керує настроєм.','Підкладіть подушку під спину.'],
['Розслаблена',1,'Вона на спині, подушка під стегнами, він поруч напівповернутий до неї. Повільно й без зусиль.','Ідеально після довгого дня.'],
['Книга',2,'Вона на спині, коліна підтягнуті до грудей, він зверху. Глибше й тісніше, ніж у класиці.','Слідкуй, щоб їй було комфортно.'],
['Кобра',2,'Вона на животі, піднімається на ліктях і вигинає спину, він позаду. Красива лінія спини.','Він може обіймати її за плечі.'],
['Кішка',2,'Вона на колінах і ліктях, плавно вигинає спину, він позаду. Повільніший варіант догі.','Грайте з ритмом: то швидше, то повільніше.'],
['На столі',2,'Вона сидить на краю столу чи тумби, він стоїть перед нею. Зручна висота й обійми ногами.','Підстав щось тепле під сідниці.'],
['Нахил',2,'Вона стоїть, нахилившись і спираючись руками на ліжко, він позаду. Просто й швидко.','Тримайтесь за поцілунки зі спини.'],
['Вузол',2,'Лежите на боці, вона закидає ногу йому на талію. Близько й комфортно для обох.','Змінюйте ногу, коли втомиться.'],
['Сидячи на дивані',2,'Він сидить на дивані, вона на колінах обличчям до нього, спираючись на спинку. Легко міняти темп.','Прибери зайві подушки з дороги.'],
['Хрест',2,'Лежите під прямим кутом одне до одного, ніби хрест. Незвичний кут і свобода рухів.','Підтримуйте одне одного за руки.'],
['Піраміда',2,'Він на колінах, вона лежить на спині, її ноги на його стегнах. Він бачить її, а вона розслаблена.','Додайте подушку під її поперек.'],
['Равлик',2,'Лежите на боках у протилежні боки, ноги переплітаються. Незвично, але зручно.','Дивіться, щоб нікому не затерпла нога.'],
['Міст',3,'Вона на лопатках піднімає таз, спираючись на ступні, він на колінах позаду. Вимагає сили й розтяжки.','Спочатку розімніть спину.'],
['Свічка',3,'Вона на спині, ноги підняті вгору на його плечах, таз трохи піднятий. Інтенсивна поза.','Підкладіть подушку під поперек.'],
['Гімнастка',3,'Вона на спині, ноги вгору, він тримає її за щиколотки. Дуже гнучка, лише для підготовлених.','Не доводьте до болю, зручність головніше.']];
const B=['зав’яжи йому очі','тільки шепіт, без гучних слів','запаліть свічки замість світла','повільно, без поспіху 15 хвилин','почніть із масажу з олією','вона вирішує темп, він слухняний','без слів, лише дотики','грайте улюблений плейлист','телефони на беззвучний, світ почекає','цілуйтеся без зупинки'];
const css=`#night{position:fixed;inset:0;z-index:50;display:none;color:#fff;background:#0b0206;overflow:hidden;padding-top:env(safe-area-inset-top)}
#night.on{display:block;animation:ntIn .6s cubic-bezier(.2,.9,.3,1)}@keyframes ntIn{from{opacity:0;transform:scale(1.06);filter:blur(10px)}}
.nt-bg{position:absolute;inset:0;background:radial-gradient(60% 40% at 50% 0,#5c0a24,transparent 70%),radial-gradient(70% 50% at 50% 110%,#7a0f2b,transparent 70%),#0b0206;animation:ntB 5s ease-in-out infinite}@keyframes ntB{50%{opacity:.65;transform:scale(1.07)}}
.nt-e{position:absolute;bottom:-20px;border-radius:50%;background:#ff7a3d;box-shadow:0 0 12px 3px #ff3d3d;opacity:0;animation:ntU linear infinite}@keyframes ntU{10%{opacity:.9}100%{transform:translate(var(--dx),-105vh) scale(.3);opacity:0}}
.nt-w{position:relative;height:100%;max-width:520px;margin:auto;display:flex;flex-direction:column}
.nt-h{display:flex;justify-content:space-between;align-items:center;padding:14px 20px}.nt-h h2{margin:0;font-size:26px;background:linear-gradient(90deg,#fff,#ff6b8b,#ffb347);-webkit-background-clip:text;color:transparent}
.nt-h button{border:0;border-radius:20px;padding:8px 14px;color:#fff;background:rgba(255,255,255,.12);font-size:13px}
.nt-m{flex:1;overflow-y:auto;padding:0 18px 20px}.nt-t{display:none}.nt-t.on{display:block;animation:in .5s cubic-bezier(.2,.9,.3,1.2)}
.nt-c{display:flex;gap:8px;overflow-x:auto;padding:4px 0 14px}.nt-c button{flex:none;border:1px solid rgba(255,255,255,.2);background:rgba(255,255,255,.06);color:#fff;border-radius:18px;padding:9px 14px;font-size:14px;transition:.3s}
.nt-c button.on{background:linear-gradient(110deg,#ff2d55,#ff7a3d);border-color:transparent;box-shadow:0 4px 18px rgba(255,45,85,.5)}
.nt-card{text-align:center;padding:26px 20px;border-radius:28px;background:linear-gradient(160deg,rgba(255,45,85,.22),rgba(120,10,40,.35));border:1px solid rgba(255,90,120,.35);box-shadow:0 0 40px rgba(255,45,85,.25),inset 0 0 30px rgba(255,45,85,.12);min-height:250px;display:flex;flex-direction:column;justify-content:center}
.nt-card.shuf h3{filter:blur(2px)}.nt-card.flip{animation:ntF .8s,ntG 1.5s}@keyframes ntF{0%{transform:rotateY(90deg) scale(.9)}60%{transform:rotateY(-12deg) scale(1.04)}}@keyframes ntG{40%{box-shadow:0 0 80px 10px rgba(255,45,85,.7)}}
.nt-card h3{margin:8px 0;font-size:32px}.nt-card p{margin:0 0 10px;opacity:.88;line-height:1.45}.nt-card small{color:#ffb347}.nt-fl{font-size:22px;min-height:26px}
.nt-b{margin-top:12px;padding:14px 16px;border-radius:20px;background:rgba(255,179,71,.12);border:1px dashed rgba(255,179,71,.5);font-size:14px;opacity:0;transition:.6s;min-height:48px}.nt-b.on{opacity:1}
.nt-fav{display:none;margin:14px auto 0;border:0;border-radius:20px;padding:11px 20px;font-size:15px;color:#fff;background:rgba(255,255,255,.14)}.nt-fav.show{display:block;animation:in .4s}.nt-fav.on{background:linear-gradient(110deg,#ff2d55,#ff6fa5)}
.nt-go{width:100%;margin-top:16px;padding:18px;border:0;border-radius:22px;font-size:19px;font-weight:700;color:#fff;background:linear-gradient(110deg,#ff2d55,#ff7a3d,#ff2d55);background-size:200%;animation:sh 3s linear infinite,ntP 2s infinite;transition:transform .15s}.nt-go:active{transform:scale(.95)}@keyframes ntP{50%{box-shadow:0 0 36px rgba(255,45,85,.75)}}
.nt-i{display:flex;align-items:center;gap:12px;padding:14px;margin-bottom:8px;border-radius:18px;background:rgba(255,255,255,.07);border:1px solid rgba(255,90,120,.18)}.nt-i span{flex:1}.nt-i button{border:0;background:none;color:#fff;opacity:.6;font-size:20px}
.nt-n{flex:none;display:flex;gap:2px;padding:8px 6px calc(8px + env(safe-area-inset-bottom));background:rgba(20,3,10,.8);border-top:1px solid rgba(255,90,120,.25)}
.nt-n button{flex:1;border:0;background:none;color:#fff;padding:7px 2px;border-radius:16px;display:flex;flex-direction:column;align-items:center;gap:3px;opacity:.6;transition:.3s}.nt-n button i{font-style:normal;font-size:22px}.nt-n button span{font-size:11px;font-weight:600}
.nt-n button.on{background:linear-gradient(110deg,#ff2d55,#8b1038);opacity:1}.nt-em{text-align:center;opacity:.7;padding:30px 0}`;
const stl=document.createElement('style');stl.textContent=css;document.head.appendChild(stl);
const o=document.createElement('div');o.id='night';
o.innerHTML=`<div class="nt-bg"></div><div id="nt-e"></div><div class="nt-w"><div class="nt-h"><h2>🔥 Night</h2><button id="nt-back">☀️ Назад</button></div><div class="nt-m">
<section class="nt-t on"><div class="nt-c"><button class="on" data-l="0">Усі</button><button data-l="1">🌸 Ніжно</button><button data-l="2">🔥 Пристрасно</button><button data-l="3">⚡ Сміливо</button></div>
<div class="nt-card" id="nt-card"><div class="nt-fl" id="nt-fl">🔥</div><h3 id="nt-n">Готова?</h3><p id="nt-d">Натисни кнопку, і доля обере позу</p><small id="nt-tp"></small></div>
<div class="nt-b" id="nt-b"></div><button class="nt-fav" id="nt-fav">🤍 Зберегти</button><button class="nt-go" id="nt-go">🔥 Крутити</button></section>
<section class="nt-t"><div id="nt-l1"></div></section><section class="nt-t"><div id="nt-l2"></div></section></div>
<div class="nt-n"><button class="on" data-t="0"><i>🎲</i><span>Рандом</span></button><button data-t="1"><i>❤️‍🔥</i><span>Улюблені</span></button><button data-t="2"><i>📖</i><span>Усі пози</span></button></div></div>`;
document.body.appendChild(o);
const q=s=>o.querySelector(s),qa=s=>[...o.querySelectorAll(s)],fl=n=>'🔥'.repeat(n),id=i=>'p'+(i+1),pk=a=>a[Math.floor(Math.random()*a.length)];
let lv=0,cur=null,busy=false,last=-1;
for(let i=0;i<22;i++){const e=document.createElement('i');e.className='nt-e';const s=3+Math.random()*5;e.style.cssText=`left:${Math.random()*100}%;width:${s}px;height:${s}px;--dx:${(Math.random()-.5)*80}px;animation-duration:${6+Math.random()*8}s;animation-delay:${-Math.random()*12}s`;q('#nt-e').appendChild(e)}
const isF=i=>(D.night||[]).includes(id(i));
function heart(){const b=q('#nt-fav'),on=cur!==null&&isF(cur);b.classList.toggle('show',cur!==null);b.classList.toggle('on',on);b.textContent=on?'❤️‍🔥 В улюблених':'🤍 Зберегти'}
function show(i){cur=i;const p=P[i];q('#nt-fl').textContent=fl(p[1]);q('#nt-n').textContent=p[0];q('#nt-d').textContent=p[2];q('#nt-tp').textContent='💡 '+p[3];heart()}
const row=(i,x)=>`<div class="nt-i" data-i="${i}"><span>${esc(P[i][0])}<br><small>${fl(P[i][1])}</small></span>${x?`<button data-x="${i}">✕</button>`:'<b>›</b>'}</div>`;
function lists(){const f=(D.night||[]).map(k=>+k.slice(1)-1).filter(i=>P[i]);q('#nt-l1').innerHTML=f.length?f.map(i=>row(i,1)).join(''):'<div class="nt-em">Поки нічого 🔥<br>Збережи позу після прокрутки</div>';q('#nt-l2').innerHTML=P.map((p,i)=>row(i,0)).join('')}
function burst(){const r=q('#nt-card').getBoundingClientRect();for(let i=0;i<34;i++){const p=document.createElement('i');p.className='p';p.style.cssText=`left:${r.left+r.width/2}px;top:${r.top+r.height/2}px;z-index:60;background:${pk(['#ff2d55','#ff7a3d','#ffb347','#fff'])}`;document.body.appendChild(p);const a=Math.random()*6.28,d=90+Math.random()*150;p.animate([{transform:'translate(0,0) scale(1)',opacity:1},{transform:`translate(${Math.cos(a)*d}px,${Math.sin(a)*d}px) scale(.2)`,opacity:0}],{duration:900+Math.random()*500,easing:'cubic-bezier(.2,.8,.3,1)'}).onfinish=()=>p.remove()}}
q('#nt-go').onclick=()=>{if(busy)return;busy=true;cur=null;heart();const pool=P.map((p,i)=>i).filter(i=>!lv||P[i][1]==lv),fin=pk(pool.filter(i=>pool.length<2||i!=last)),card=q('#nt-card'),b=q('#nt-b');card.classList.remove('flip');card.classList.add('shuf');b.classList.remove('on');q('#nt-d').textContent='';q('#nt-tp').textContent='';
let t=0,d=45;const step=()=>{t+=d;const i=t>1800?fin:pk(pool);q('#nt-n').textContent=P[i][0];q('#nt-fl').textContent=fl(P[i][1]);navigator.vibrate&&navigator.vibrate(4);d*=1.08;
if(t<2300)setTimeout(step,d);else{card.classList.remove('shuf');void card.offsetWidth;card.classList.add('flip');show(fin);last=fin;b.textContent='🎲 Бонус: '+pk(B);b.classList.add('on');burst();navigator.vibrate&&navigator.vibrate([40,40,40]);busy=false}};step()};
q('#nt-fav').onclick=()=>{if(cur===null)return;D.night=D.night||[];const k=id(cur),j=D.night.indexOf(k);j>=0?D.night.splice(j,1):D.night.push(k);heart();lists();save()};
o.addEventListener('click',e=>{const c=e.target.closest('.nt-c button');if(c){lv=+c.dataset.l;qa('.nt-c button').forEach(x=>x.classList.toggle('on',x==c));return}
const x=e.target.closest('[data-x]');if(x){D.night=(D.night||[]).filter(k=>k!=id(+x.dataset.x));lists();heart();save();return}
const it=e.target.closest('.nt-i');if(it){show(+it.dataset.i);q('#nt-b').classList.remove('on');qa('.nt-n button')[0].click();return}
const n=e.target.closest('.nt-n button');if(n){qa('.nt-n button').forEach(z=>z.classList.toggle('on',z==n));qa('.nt-t').forEach((t,i)=>t.classList.toggle('on',i==n.dataset.t));q('.nt-m').scrollTop=0}});
const meta=document.querySelector('meta[name=theme-color]'),stb=document.getElementById('st'),w=document.createElement('div'),mb=document.createElement('button');
w.style.cssText='display:flex;gap:8px;align-items:center';mb.className='chip';mb.id='nbtn';mb.textContent='🌙';stb.parentNode.insertBefore(w,stb);w.append(mb,stb);
mb.onclick=()=>{D.night=D.night||[];lists();heart();o.classList.add('on');meta.content='#0b0206'};
q('#nt-back').onclick=()=>{o.classList.remove('on');meta.content='#2a0f24'};
})();
