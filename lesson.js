/* Questions 7–10: understanding check from the lesson "FRIENDSHIP – From an Islamic lens" */
window.QUESTIONS.push(
  { id:7, tag:"Mirror", color:"#9fd4c1", art:"mirror", deep:true,
    q:"The Holy Prophet (s) said a believer is the mirror of his brother. What does that mean?",
    hint:"Would you want a friend who tells you your faults? How should a good friend tell you?",
    ph:"It means…" },
  { id:8, tag:"Two kinds of friends", color:"#e2bf6e", art:"circles", deep:true,
    q:"Imam Ali (as) divides friends into two kinds. What is the difference between them?",
    hint:"Friends whose company you enjoy — and ‘brothers of trust’. How many real brothers of trust do you think a person has?",
    ph:"The first kind are…" },
  { id:9, tag:"Taqwa", color:"#ecd08a", art:"lantern", deep:true,
    q:"We should love our friends according to their Taqwa. What does Taqwa look like in a friend your age?",
    hint:"Think about Wajib and Haram — and why Imam Sadiq (as) said: “Do not rush to trust your brother quickly.”",
    ph:"A friend with Taqwa…" },
  { id:10, tag:"For the sake of Allah", color:"#7fd8ad", art:"brothers", deep:true,
    q:"“Close friends will be enemies to one another on that Day, except the righteous.” (43:67) Why do friendships for the sake of Allah last when others break?",
    hint:"Compare friendships built only on fun or benefit with the companions on the day of Ashura.",
    ph:"Because…" }
);

window.ART.mirror = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A boy looking into a golden mirror">
<style>
.mr-sheen{animation:mrS 3.6s ease-in-out infinite}
.mr-me{animation:mrB 3s ease-in-out infinite;transform-box:fill-box;transform-origin:center bottom}
.mr-tw{animation:mrT 2.4s ease-in-out infinite}
@keyframes mrS{0%,55%{transform:translateX(-140px)}100%{transform:translateX(140px)}}
@keyframes mrB{50%{transform:translateY(-3px)}}
@keyframes mrT{0%,100%{opacity:.2}50%{opacity:1}}
</style>
<defs>
<linearGradient id="mrBg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#0a2721"/><stop offset="1" stop-color="#1d5a48"/></linearGradient>
<linearGradient id="mrGl" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#e3f2ea"/><stop offset="1" stop-color="#6f9a8a"/></linearGradient>
<radialGradient id="mrHalo"><stop offset="0" stop-color="#ffd36b" stop-opacity=".35"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/></radialGradient>
<clipPath id="mrClip"><ellipse cx="240" cy="100" rx="52" ry="66"/></clipPath>
<symbol id="mrP" viewBox="-20 -34 40 74" overflow="visible"><circle cy="-20" r="12"/><path d="M-19 40 V8 q0-16 19-16 q19 0 19 16 V40z"/></symbol>
</defs>
<rect width="400" height="220" fill="url(#mrBg)"/>
<g fill="#fff" opacity=".35"><circle cx="40" cy="24" r="1.2"/><circle cx="150" cy="16" r="1"/><circle cx="370" cy="40" r="1.3"/><circle cx="330" cy="190" r="1"/></g>
<rect y="196" width="400" height="24" fill="#06191a"/>
<circle cx="240" cy="104" r="100" fill="url(#mrHalo)"/>
<rect x="234" y="166" width="12" height="34" rx="5" fill="#a8853d"/>
<ellipse cx="240" cy="100" rx="60" ry="74" fill="#d4af63"/>
<ellipse cx="240" cy="100" rx="55" ry="69" fill="none" stroke="#a8853d" stroke-width="2"/>
<ellipse cx="240" cy="100" rx="52" ry="66" fill="url(#mrGl)"/>
<g clip-path="url(#mrClip)">
 <use href="#mrP" x="220" y="96" width="40" height="74" fill="#2a5643" opacity=".7"/>
 <g transform="skewX(-20)"><rect class="mr-sheen" x="250" y="20" width="24" height="170" fill="#fff" opacity=".4"/></g>
</g>
<g class="mr-me"><use href="#mrP" x="110" y="124" width="40" height="74" fill="#ffd36b"/><path d="M117.5 133 q12.5-17 25 0z" fill="#fff"/></g>
<g fill="#ffe7a8">
 <path class="mr-tw" d="M318 44 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3z"/>
 <path class="mr-tw" d="M168 60 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" style="animation-delay:-1.2s"/>
 <path class="mr-tw" d="M300 160 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2z" style="animation-delay:-.6s"/>
</g>
</svg>`;

window.ART.circles = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circles of friends: close brothers, friends and acquaintances">
<style>
.ci-r1{animation:ciR 40s linear infinite;transform-origin:200px 116px}
.ci-r2{animation:ciR 60s linear infinite reverse;transform-origin:200px 116px}
.ci-in{animation:ciG 3s ease-in-out infinite}
@keyframes ciR{to{transform:rotate(360deg)}}
@keyframes ciG{0%,100%{opacity:.55}50%{opacity:1}}
</style>
<defs>
<linearGradient id="ciBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#08221c"/><stop offset="1" stop-color="#173f34"/></linearGradient>
<radialGradient id="ciGlow"><stop offset="0" stop-color="#ffd36b" stop-opacity=".45"/><stop offset="1" stop-color="#ffd36b" stop-opacity="0"/></radialGradient>
<symbol id="ciP" viewBox="-10 -14 20 28" overflow="visible"><circle cy="-7" r="5"/><path d="M-8 14 V5 q0-6 8-6 q8 0 8 6 V14z"/></symbol>
</defs>
<rect width="400" height="220" fill="url(#ciBg)"/>
<circle class="ci-r2" cx="200" cy="116" r="98" fill="none" stroke="#5f8a7b" stroke-width="1.5" stroke-dasharray="2 8"/>
<circle class="ci-r1" cx="200" cy="116" r="66" fill="none" stroke="#8cc9a0" stroke-width="1.5" stroke-dasharray="6 6"/>
<circle class="ci-in" cx="200" cy="116" r="40" fill="url(#ciGlow)" stroke="#d4af63" stroke-width="2"/>
<g fill="#4f7a6b">
 <use href="#ciP" x="92" y="100" width="20" height="28"/><use href="#ciP" x="288" y="100" width="20" height="28"/>
 <use href="#ciP" x="118" y="30" width="20" height="28"/><use href="#ciP" x="262" y="30" width="20" height="28"/>
 <use href="#ciP" x="118" y="172" width="20" height="28"/><use href="#ciP" x="262" y="172" width="20" height="28"/>
 <use href="#ciP" x="190" y="6" width="20" height="28"/>
</g>
<g fill="#9fd4c1">
 <use href="#ciP" x="132" y="96" width="22" height="30"/><use href="#ciP" x="246" y="96" width="22" height="30"/>
 <use href="#ciP" x="189" y="44" width="22" height="30"/><use href="#ciP" x="189" y="160" width="22" height="30"/>
</g>
<g fill="#ffd36b">
 <use href="#ciP" x="174" y="100" width="24" height="34"/><use href="#ciP" x="202" y="100" width="24" height="34"/>
</g>
</svg>`;

window.ART.lantern = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A glowing lantern in the night">
<style>
.ln-glow{animation:lnF 2.8s ease-in-out infinite}
.ln-swing{animation:lnS 5s ease-in-out infinite;transform-origin:200px 0px}
.ln-st{animation:lnT 2.6s ease-in-out infinite}
@keyframes lnF{0%,100%{opacity:.75}40%{opacity:1}60%{opacity:.85}}
@keyframes lnS{0%,100%{transform:rotate(-3deg)}50%{transform:rotate(3deg)}}
@keyframes lnT{0%,100%{opacity:.25}50%{opacity:1}}
</style>
<defs>
<linearGradient id="lnBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#03130e"/><stop offset=".7" stop-color="#0f3a2f"/><stop offset="1" stop-color="#2a4a32"/></linearGradient>
<radialGradient id="lnHalo" cx=".5" cy=".42"><stop offset="0" stop-color="#ffe7a8" stop-opacity=".6"/><stop offset=".5" stop-color="#d4af63" stop-opacity=".15"/><stop offset="1" stop-color="#d4af63" stop-opacity="0"/></radialGradient>
<linearGradient id="lnLight" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6d6"/><stop offset="1" stop-color="#ffb347"/></linearGradient>
</defs>
<rect width="400" height="220" fill="url(#lnBg)"/>
<g fill="#fff">
 <circle class="ln-st" cx="40" cy="30" r="1.4"/><circle class="ln-st" cx="100" cy="70" r="1" style="animation-delay:-.8s"/>
 <circle class="ln-st" cx="330" cy="26" r="1.4" style="animation-delay:-1.4s"/><circle class="ln-st" cx="360" cy="90" r="1.1" style="animation-delay:-2s"/>
 <circle class="ln-st" cx="70" cy="150" r="1" style="animation-delay:-.4s"/><circle class="ln-st" cx="300" cy="140" r="1.2" style="animation-delay:-1.7s"/>
</g>
<path d="M58 40 a12 12 0 1 1 -12 -14 a9 9 0 1 0 12 14z" fill="#ffe7a8"/>
<circle class="ln-glow" cx="200" cy="100" r="110" fill="url(#lnHalo)"/>
<g class="ln-swing">
 <path d="M200 0 V40" stroke="#a8853d" stroke-width="2"/>
 <circle cx="200" cy="36" r="4" fill="none" stroke="#d4af63" stroke-width="2"/>
 <path d="M184 54 L200 40 L216 54Z" fill="#d4af63"/>
 <rect x="180" y="54" width="40" height="6" rx="2" fill="#a8853d"/>
 <path d="M178 60 H222 L232 96 L222 146 H178 L168 96Z" fill="#d4af63"/>
 <path class="ln-glow" d="M185 66 H215 L223 96 L215 140 H185 L177 96Z" fill="url(#lnLight)"/>
 <g stroke="#a8853d" stroke-width="2.2" fill="none"><path d="M200 66 V140"/><path d="M177 96 H223"/><path d="M185 66 L200 96 L215 66 M185 140 L200 96 L215 140"/></g>
 <rect x="182" y="146" width="36" height="6" rx="2" fill="#a8853d"/>
 <path d="M190 152 L200 168 L210 152Z" fill="#d4af63"/>
</g>
<path d="M0 206 Q200 190 400 206 V220 H0Z" fill="#06191a"/>
</svg>`;

window.ART.brothers = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two brothers walking together towards a glowing doorway">
<style>
.br-a{animation:brB 1.6s ease-in-out infinite;transform-box:fill-box;transform-origin:center bottom}
.br-b{animation:brB 1.6s ease-in-out infinite;animation-delay:-.8s;transform-box:fill-box;transform-origin:center bottom}
.br-door{animation:brG 3.4s ease-in-out infinite}
.br-rope{stroke-dasharray:4 4;animation:brD 1.2s linear infinite}
@keyframes brB{50%{transform:translateY(-4px)}}
@keyframes brG{0%,100%{opacity:.75}50%{opacity:1}}
@keyframes brD{to{stroke-dashoffset:-16}}
</style>
<defs>
<linearGradient id="brBg" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#07201a"/><stop offset="1" stop-color="#1d4a3c"/></linearGradient>
<linearGradient id="brDoorG" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff6d6"/><stop offset="1" stop-color="#d4af63"/></linearGradient>
<radialGradient id="brHalo"><stop offset="0" stop-color="#ffe7a8" stop-opacity=".55"/><stop offset="1" stop-color="#ffe7a8" stop-opacity="0"/></radialGradient>
<symbol id="brP" viewBox="-20 -34 40 74" overflow="visible"><circle cy="-20" r="12"/><path d="M-19 40 V8 q0-16 19-16 q19 0 19 16 V40z"/></symbol>
</defs>
<rect width="400" height="220" fill="url(#brBg)"/>
<g fill="#fff" opacity=".4"><circle cx="30" cy="30" r="1.2"/><circle cx="120" cy="18" r="1"/><circle cx="210" cy="40" r="1.3"/><circle cx="90" cy="80" r="1"/></g>
<circle class="br-door" cx="320" cy="130" r="90" fill="url(#brHalo)"/>
<path class="br-door" d="M290 200 V120 Q290 78 320 66 Q350 78 350 120 V200Z" fill="url(#brDoorG)"/>
<path d="M282 200 V118 Q282 70 320 56 Q358 70 358 118 V200" fill="none" stroke="#d4af63" stroke-width="3"/>
<path d="M0 200 H400 V220 H0Z" fill="#06191a"/>
<path d="M60 200 Q180 196 290 200" stroke="#d4af63" stroke-opacity=".35" stroke-width="2" fill="none"/>
<g class="br-a"><use href="#brP" x="150" y="126" width="40" height="74" fill="#ffd36b"/><path d="M157.5 135 q12.5-17 25 0z" fill="#fff"/></g>
<g class="br-b"><use href="#brP" x="196" y="128" width="40" height="74" fill="#cfe8dc"/><path d="M203.5 137 q12.5-17 25 0z" fill="#fff"/></g>
<path class="br-rope" d="M186 172 Q194 164 202 172" stroke="#ffd36b" stroke-width="2.5" fill="none"/>
</svg>`;
