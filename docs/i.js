let t=0;const s=Math.PI,i=t=>t<0?-t:t,h=(t,s)=>t<s?t:s,e=(t,s)=>t>s?t:s,n=t=>t<0?-1:1,o=(t,s=0,i=1)=>t<s?s:t>i?i:t,r=(t,s=0,i=1)=>i-s?o((t-s)/(i-s)):0,c=(t=1,s=0)=>s+(t-s)*Math.random();const u=(t=0,s)=>null==t.x?new a(t,s??t):new a(t.x,t.y);class a{constructor(t=0,s=0){this.x=t,this.y=s}t(){return new a(this.x,this.y)}add(t){return new a(this.x+t.x,this.y+t.y)}i(t){return new a(this.x-t.x,this.y-t.y)}multiply(t){return new a(this.x*t.x,this.y*t.y)}h(t){return new a(this.x/t.x,this.y/t.y)}scale(t){return new a(this.x*t,this.y*t)}length(){return this.o()**.5}o(){return this.x**2+this.y**2}u(t){return this.l(t)**.5}l(t){return(this.x-t.x)**2+(this.y-t.y)**2}normalize(t=1){const s=this.length();return s?this.scale(t/s):new a(0,t)}p(t=1){const s=this.length();return s>t?this.scale(t/s):this}m(t){return this.x*t.x+this.y*t.y}g(t){return this.x*t.y-this.y*t.x}angle(){return Math.atan2(this.x,this.y)}v(t=0,s=1){return this.x=s*Math.sin(t),this.y=s*Math.cos(t),this}rotate(t){const s=Math.cos(t),i=Math.sin(t);return new a(this.x*s-this.y*i,this.x*i+this.y*s)}direction(){return i(this.x)>i(this.y)?this.x<0?3:1:this.y<0?2:0}M(){return new a(this.y,-this.x)}floor(){return new a(Math.floor(this.x),Math.floor(this.y))}A(){return i(this.x*this.y)}S(t,s){return this.add(t.i(this).scale(o(s)))}T(t){return this.x>=0&&this.y>=0&&this.x<t.x&&this.y<t.y}toString(){return`(${(this.x<0?"":" ")+this.x.toFixed()},${(this.y<0?"":" ")+this.y.toFixed()} )`}}class l{constructor(t=1,s=1,i=1,h=1){this.r=t,this.k=s,this.b=i,this.a=h}t(){return new l(this.r,this.k,this.b,this.a)}add(t){return new l(this.r+t.r,this.k+t.k,this.b+t.b,this.a+t.a)}i(t){return new l(this.r-t.r,this.k-t.k,this.b-t.b,this.a-t.a)}multiply(t){return new l(this.r*t.r,this.k*t.k,this.b*t.b,this.a*t.a)}scale(t,s=t){return new l(this.r*t,this.k*t,this.b*t,this.a*s)}S(t,s){return this.add(t.i(this).scale(o(s)))}P(){return(255*this.r|0)+(255*this.k<<8)+(255*this.b<<16)+(255*this.a<<24)}toString(){return`rgba(${255*this.r|0},${255*this.k|0},${255*this.b|0},${this.a.toFixed(3)})`}}class f{constructor(t){this.time=null==t?void 0:k+t,this.setTime=t}set(t=0){this.time=k+t,this.setTime=t}N(){this.time=void 0}_(){return null!=this.time}active(){return k<=this.time}C(){return k>this.time}get(){return this._()?k-this.time:0}D(){return this._()?r(this.time-k,this.setTime,0):0}}let w=u(1920,1200),d=u(),p=u(32),m=u(1),b=u(),g=128;let v,y,M,x,A=[],S=[],T=0,k=0,P=0,N=0,_=0,C=0;const D="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)";function $(s,i,e,n,r,c){B.onerror=B.onload=()=>{y=u(.3).h(v=u(B.width,B.height)),document.body.style="touch-action:none;-webkit-user-select:none;-moz-user-select:none",document.body.appendChild(O=document.createElement("canvas")),z=O.getContext("2d"),O.style=D,function(){0;ft=document.createElement("canvas"),wt=ft.getContext("webgl",{antialias:!1}),ft.style=D,dt=function(t){if(!t||!t.width)return;const s=wt.createTexture();return wt.bindTexture(Dt,s),wt.texImage2D(Dt,0,Ft,Ft,$t,t),wt.texParameteri(Dt,zt,Bt),wt.texParameteri(Dt,Ot,Bt),wt.texParameteri(Dt,Et,qt),wt.texParameteri(Dt,It,qt),s}(B),document.body.appendChild(ft),mt=function(t,s){0;const i=wt.createProgram();return wt.attachShader(i,At(t,jt)),wt.attachShader(i,At(s,Ut)),wt.linkProgram(i),i}("precision highp float;uniform mat4 m;attribute vec2 p,t;attribute vec4 c,a;varying vec2 v;varying vec4 d,e;void main(){gl_Position=m*vec4(p,1,1);v=t;d=c;e=a;}","precision highp float;varying vec2 v;varying vec4 d,e;uniform sampler2D s;void main(){gl_FragColor=texture2D(s,v)*d+e;}");const t=new ArrayBuffer(Yt*Gt*Jt);(function(t,s,i){0;const h=wt.createBuffer();wt.bindBuffer(t,h),wt.bufferData(t,s,i)})(Lt,t.byteLength,Rt),bt=new Float32Array(t),gt=new Uint32Array(t);let s=vt=0;const i=(t,i,h,e,n=0)=>{const o=wt.getAttribLocation(mt,t);wt.enableVertexAttribArray(o),wt.vertexAttribPointer(o,e,i,n,Jt,s),s+=e*h};i("p",Ht,4,2),i("t",Ht,4,2),i("c",$t,1,4,1),i("a",$t,1,4,1)}(),document.body.appendChild(E=document.createElement("canvas")),I=E.getContext("2d"),E.style=D,s(),a()};const a=(s=0)=>{let c=s-_;if(_=s,t&&(M=((t,s=0,i=1)=>s+o(t)*(i-s))(.05,M||0,1e3/(c||1))),P+=c/1e3,C=h(C+!N*c,50),d.x){E.width=O.width=d.x,E.height=O.height=d.y;const t=innerWidth/innerHeight,s=O.width/O.height;O.style.width=E.style.width=t<s?"100%":"",O.style.height=E.style.height=t<s?"":"100%",ft&&(ft.style.width=O.style.width,ft.style.height=O.style.height)}else E.width=O.width=h(innerWidth,w.x),E.height=O.height=h(innerHeight,w.y);if(V=u(O.width,O.height),N)tt(),e(),st();else{let t=0;for(C<0&&C>-9&&(t=C,C=0);C>=0;C-=1e3/60)tt(),i(),H(),e(),st();C+=t}V=u(O.width,O.height),z.imageSmoothingEnabled=!1,function(t,s,i,h,e){wt.viewport(0,0,ft.width=t,ft.height=s),wt.clear(Vt),wt.bindTexture(Dt,pt=dt),wt.useProgram(mt),xt();const n=2*e/t,o=2*e/s;wt.uniformMatrix4fv(wt.getUniformLocation(mt,"m"),0,new Float32Array([n,0,0,0,0,o,0,0,1,1,-1,1,-1-n*i,-1-o*h,0,0]))}(O.width,O.height,b.x,b.y,g),n(),A.sort(((t,s)=>t.$-s.$));for(const t of A)t.H||t.F();if(r(),function(t,s){if(!vt&&!s)return;St(),s&&t.drawImage(ft,0,0)}(z),t){I.textAlign="right",I.textBaseline="top",I.font="1em monospace",I.fillStyle="#000";const t="LittleJS v1.3.8 / "+x+" / "+A.length+" / "+M.toFixed(1)+" GL";I.fillText(t,O.width-3,3),I.fillStyle="#fff",I.fillText(t,O.width-2,2),x=0}requestAnimationFrame(a)};c?B.src=c:B.onload()}function H(){S=A.filter((t=>t.B));const t=s=>{if(!s.H){s.update();for(const i of s.children)t(i)}};for(const s of A)s.parent||t(s);A=A.filter((t=>!t.H)),k=++T/60}class F{constructor(t=u(),s=m,i=-1,h=p,e=0,n,o=0){this.O=t.t(),this.size=s,this.I,this.V=i,this.q=h,this.angle=e,this.color=n,this.L,this.$=o,this.R=k,this.children=[],A.push(this)}update(){const t=this.parent;t&&(this.O=this.U.multiply(u(t.j(),1)).rotate(-t.angle).add(t.O),this.angle=t.j()*this.G+t.angle)}F(){R(this.O,this.I||this.size,this.V,this.q,this.color,this.angle,this.W,this.L)}Y(){if(!this.H){this.H=1,this.parent&&this.parent.removeChild(this);for(const t of this.children)t.Y(t.parent=0)}}J(){return k-this.R}j(){return this.W?-1:1}K(t,s=u(),i=0){this.children.push(t),t.parent=this,t.U=s.t(),t.G=i}removeChild(t){this.children.splice(this.children.indexOf(t),1),t.parent=0}}const B=new Image;let O,z,E,I,V=u();const q=t=>t.add(u(.5)).i(V.scale(.5)).multiply(u(1/g,-1/g)).add(b),L=t=>t.i(b).multiply(u(g,-g)).add(V.scale(.5)).i(u(.5));function R(s,i=u(1),h=-1,e=p,n=new l,o=0,r,c=new l(0,0,0,0),a=1){if(t&&++x,a)if(h<0||!B.width)Tt(s.x,s.y,i.x,i.y,o,0,0,0,0,0,n.P());else{const t=v.x/e.x|0,u=e.x/v.x,a=e.y/v.y,l=h%t*u,f=(h/t|0)*a;Tt(s.x,s.y,r?-i.x:i.x,i.y,o,l+y.x,f+y.y,l-y.x+u,f-y.y+a,n.P(),c.P())}else!function(t,s,i,h,e,n=z){t=L(t),s=s.scale(g),n.save(),n.translate(t.x+.5|0,t.y-.5|0),n.rotate(i),n.scale(h?-s.x:s.x,s.y),e(n),n.restore()}(s,i,o,r,(t=>{if(h<0)t.fillStyle=n,t.fillRect(-.5,-.5,1,1);else{const s=v.x/e.x|0,i=h%s*e.x+.3,o=(h/s|0)*e.y+.3,r=e.x-.6,c=e.y-.6;t.globalAlpha=n.a,t.drawImage(B,i,o,r,c,-.5,-.5,1,1)}}))}function U(t,s,i,h,e){R(t,s,-1,p,i,h,0,0,e)}const j=(t,s=0)=>Z[s]&&1&Z[s][t]?1:0,G=(t,s=0)=>Z[s]&&2&Z[s][t]?1:0,W=G;let Y=u(),J=u(),K=0,Q=0;const X=(t,s=0)=>j(t,s+1);let Z=[[]];function tt(){document.hasFocus()||(Z=[[]]),Y=q(J),function(){0;if(!navigator.getGamepads||!document.hasFocus())return;const t=navigator.getGamepads();for(let s=t.length;s--;){const i=t[s],h=Z[s+1]||(Z[s+1]=[]),e=et[s]||(et[s]=[]);if(i){const t=.3,n=.8,o=s=>s>t?r(s,t,n):s<-t?-r(-s,t,n):0;for(let t=0;t<i.axes.length-1;t+=2)e[t>>1]=u(o(i.axes[t]),o(-i.axes[t+1])).p();for(let t=i.buttons.length;t--;){const e=i.buttons[t];h[t]=e.pressed?1+2*!X(t,s):4*X(t,s),Q|=!s&&e.pressed}{const t=u(X(15,s)-X(14,s),X(12,s)-X(13,s));t.o()&&(e[0]=t.p())}}}}()}function st(){for(const t of Z)for(const s in t)t[s]&=1;K=0}onkeydown=t=>{t.repeat||(Z[Q=0][it(t.keyCode)]=3)},onkeyup=t=>{Z[0][it(t.keyCode)]=4};const it=t=>87==t?38:83==t?40:65==t?37:68==t?39:t;onmousedown=t=>{Z[Q=0][t.button]=3,onmousemove(t),t.button&&t.preventDefault()},onmouseup=t=>Z[0][t.button]=2&Z[0][t.button]|4,onmousemove=t=>J=ht(t),onwheel=t=>t.ctrlKey||(K=n(t.deltaY)),oncontextmenu=t=>!1;const ht=t=>{if(!O)return u();const s=O.getBoundingClientRect();return u(O.width,O.height).multiply(u(r(t.x,s.left,s.right),r(t.y,s.top,s.bottom)))},et=[];const nt=void 0!==window.ontouchstart;if(nt){let t,s;ontouchstart=ontouchmove=ontouchend=i=>{i.button=0;const h=i.touches.length;return h?(s||ut(0,s=1),i.x=i.touches[0].clientX,i.y=i.touches[0].clientY,t?onmousemove(i):onmousedown(i)):t&&onmouseup(i),t=h,!i.cancelable}}new f,u();class ot{constructor(t,s=30,i=.7){this.range=s,this.X=i,this.Z=t[1]||0,t[1]=0,this.tt=lt(...t)}play(t,s=1,i=1,h=1){let e=0;if(t){const i=this.range;if(i){const h=b.l(t);if(h>i*i)return;s*=r(h**.5,i,i*this.X)}e=2*L(t).x/O.width-1}const n=i+i*this.Z*h*c(-1,1);return ct([this.tt],s,n,e)}st(t,s,i=1){return this.play(s,i,2**(t/12),0)}}let rt;function ct(t,s=1,i=1,h=0,e=0){if(rt||(rt=new(window.AudioContext||webkitAudioContext)),rt.resume(),"running"!=rt.state)return;const n=rt.createBuffer(t.length,t[0].length,at),r=rt.createBufferSource();t.forEach(((t,s)=>n.getChannelData(s).set(t))),r.buffer=n,r.playbackRate.value=i,r.loop=e;const c=rt.createGain();return c.gain.value=.5*s,c.connect(rt.destination),(window.StereoPannerNode?r.connect(new StereoPannerNode(rt,{pan:o(h,-1,1)})):r).connect(c),r.start(),r}const ut=(...t)=>ct([lt(...t)]),at=44100;function lt(t=1,o=.05,r=220,u=0,a=0,l=.1,f=0,w=1,d=0,p=0,m=0,b=0,g=0,v=0,y=0,M=0,x=0,A=1,S=0,T=0){let k,P,N=2*s,_=d*=500*N/at/at,C=[],D=r*=(1+o*c(-1,1))*N/at,$=0,H=0,F=0,B=1,O=0,z=0,E=0;for(p*=500*N/at**3,y*=N/at,m*=N/at,b*=at,g=g*at|0,P=(u=u*at+9)+(S*=at)+(a*=at)+(l*=at)+(x*=at)|0;F<P;C[F++]=E)++z%(100*M|0)||(E=f?f>1?f>2?f>3?Math.sin(($%N)**3):e(h(Math.tan($),1),-1):1-(2*$/N%2+2)%2:1-4*i(Math.round($/N)-$/N):Math.sin($),E=(g?1-T+T*Math.sin(N*F/g):1)*n(E)*i(E)**w*t*.5*(F<u?F/u:F<u+S?1-(F-u)/S*(1-A):F<u+S+a?A:F<P-x?(P-F-x)/l*A:0),E=x?E/2+(x>F?0:(F<P-x?1:(P-F)/x)*C[F-x|0]/2):E),k=(r+=d+=p)*Math.cos(y*H++),$+=k-k*v*(1-1e9*(Math.sin(F)+1)%2),B&&++B>b&&(r+=m,D+=m,B=0),!g||++O%g||(r=D,d=_,B=B||1);return C}let ft,wt,dt,pt,mt,bt,gt,vt,yt,Mt;function xt(t){Mt=t}function At(t,s){const i=wt.createShader(s);return wt.shaderSource(i,t),wt.compileShader(i),i}function St(){if(!vt)return;const t=yt?kt:_t;wt.blendFuncSeparate(Nt,t,kt,t),wt.enable(Ct),wt.bufferSubData(Lt,0,bt.subarray(0,vt*Gt*Wt)),wt.drawArrays(Pt,0,vt*Gt),vt=0,yt=Mt}function Tt(t,s,i,h,e,n,o,r,c,u=4294967295,a=0){vt!=Yt&&yt==Mt||St();const l=Math.cos(e)/2,f=Math.sin(e)/2,w=l*i,d=l*h,p=f*i,m=f*h;let b=vt++*Gt*Wt;bt[b++]=t-w-m,bt[b++]=s-d+p,bt[b++]=n,bt[b++]=c,gt[b++]=u,gt[b++]=a,bt[b++]=t+w+m,bt[b++]=s+d-p,bt[b++]=r,bt[b++]=o,gt[b++]=u,gt[b++]=a,bt[b++]=t-w+m,bt[b++]=s+d+p,bt[b++]=n,bt[b++]=o,gt[b++]=u,gt[b++]=a,bt[b++]=t-w-m,bt[b++]=s-d+p,bt[b++]=n,bt[b++]=c,gt[b++]=u,gt[b++]=a,bt[b++]=t+w-m,bt[b++]=s-d-p,bt[b++]=r,bt[b++]=c,gt[b++]=u,gt[b++]=a,bt[b++]=t+w+m,bt[b++]=s+d-p,bt[b++]=r,bt[b++]=o,gt[b++]=u,gt[b++]=a}const kt=1,Pt=4,Nt=770,_t=771,Ct=3042,Dt=3553,$t=5121,Ht=5126,Ft=6408,Bt=9728,Ot=10240,zt=10241,Et=10242,It=10243,Vt=16384,qt=33071,Lt=34962,Rt=35048,Ut=35632,jt=35633,Gt=6,Wt=6,Yt=65536,Jt=24,Kt={};window.addEventListener("load",(()=>{t=!0,$((()=>{Kt.it=new ot([1.22,.05,507,.01,.21,.36,1,3.99,0,.1,0,0,.19,1.7,0,.9,0,.35,.16,.34]),Kt.ht=new ot([,,305,.01,.03,.09,3,1.27,2.7,,,,,.5,,.5,,.85,.02,.24]),Kt.et=new ot([1.1,.05,257,.01,.01,.14,1,2.2,-8.6,.1,0,0,0,1.4,0,.1,0,.8,.02,0]),Kt.nt=new Kt.ot,Kt.rt=Kt.ct.get(),setTimeout((()=>Kt.ut.init()),10)}),(()=>{if(Kt.lt)return;if(Kt.nt.ft)return;K<0?g-=32:K>0&&(g+=32),g=o(g,96,256);const t=Kt.nt.wt;t&&(G(69)?Kt.ct.dt()&&Kt.ut.bt.click():G(49)||G(97)?t.gt(0):G(50)||G(98)?t.gt(1):(G(51)||G(99))&&t.gt(2))}),(()=>{Kt.lt||(G(27)&&(N=!N),Kt.nt.update())}),(()=>{}),(()=>{N&&(I.fillStyle="#0007",I.fillRect(0,0,E.width,E.height),I.font="600 italic 72px monospace",I.textAlign="center",I.textBaseline="bottom",Kt.ut.writeText("PAUSED",.5*E.width,.5*E.height,"#d0a","#0ac",u(3,0))),Kt.lt||(Kt.nt.vt(),Kt.nt.ft||Kt.ut.yt())}),"tiles.png")})),Kt.Mt=class extends F{constructor(t,s,i,h,e){super(s,i,h,e||p,0),this.xt=((t=1,s=0)=>0|c(t,s))(5,1),this.At=new f(this.xt),this.type=t;const n=[];n[Kt.Mt.St]=[8,2,6,5,1,24,0],n[Kt.Mt.Tt]=[8,1,5,5,1,25,0],n[Kt.Mt.kt]=[20,1,5,10,1,8,p],n[Kt.Mt.Pt]=[12,1,20,2,1,36,0];const o=n[t];o&&(this.Nt=o[0],this._t=o[1],this.Ct=o[2],this.Dt=o[3],this.$t=o[4]+.5,this.Ht=o[5],this.V=o[5],this.q=o[6]||u(16)),this.Ft=this.Nt,this.Bt=this._t,this.Ot=1,this.zt=0}Et(t){const s=new f(.4),i=new f;this.angle=.1,this.W=t.O.x<this.O.x;const h=this.O.t();let e=this.O.t(),n=this.O.t(),o=t.O,r=!1,c=0;const u=this===Kt.nt.wt;return this.Nt-=this.zt,a=>{if(this.It=!0,s.C()?(c=i.D(),this.W=t.O.x>h.x):(c=s.D(),this.W=t.O.x<h.x),s.C()&&!r)i.set(.3),o=n.t(),n=t.O,t.Nt-=this.Dt,u?Kt.ht.play():Kt.et.play(),t.Nt<=0&&(t.Vt(),u&&(this.Nt+=5,Kt.ut.qt(this,5))),r=!0;else if(i.C())return this.angle=0,this.It=!1,this.W=t.O.x<h.x,this.O=h,Kt.ut.qt(t,-this.Dt),void a();this.O.x=n.x*(1-c)+o.x*c,this.O.y=n.y*(1-c)+o.y*c;e.u(this.O)>=.5&&(this.angle*=-1,e=this.O.t()),u&&(b=h)}}Lt(){let t=null;const s=Kt.nt.wt,i=this.O.u(s.O);if(i<=this.Ct)if(this.Ot&&i<=this.$t)t=this.Rt(s),this.Ot--;else if(this.Bt){const e=s.O.i(this.O).normalize(),n=h(this.Bt,i);let r=1,c=null;for(;r<=n;){const t=this.O.add(e.scale(r));if(t.x=Math.round(o(t.x,0,Kt.nt.size.x-1)),t.y=Math.round(o(t.y,0,Kt.nt.size.y-1)),!Kt.nt.Ut[t.x]?.[t.y])break;if(Kt.nt.jt(t))break;c=t,r++}c&&(t=this.Gt(c.x,c.y)),this.Bt=0}return t}Vt(){Kt.ct.Wt(this),Kt.nt.Yt(this.O),this.Y()}Rt(t){return this.Et(t)}Gt(t,s){const i=.25*this.O.u(u(t,s)),h=new f(i),e=this.O.t();let n=e;return this.angle=.1,this.W=t<this.O.x,i=>{this.It=!0;const o=Math.sin(Math.PI/2*h.D());this.O.x=e.x*(1-o)+t*o,this.O.y=e.y*(1-o)+s*o;n.u(this.O)>=.5&&(this.angle*=-1,n=this.O.t()),this.$=this.O.y,h.C()&&(this.angle=0,this.It=!1,i())}}F(){const t=this.O.t();if(!N){if(I.font="600 16px monospace",I.textAlign="center",i(Y.x-this.O.x)<this.size.x/2&&i(Y.y-this.O.y)<this.size.y/2){const s=L(u(t.x,t.y+.5));I.textBaseline="top",Kt.ut.writeText("SP "+this.Nt,s.x,s.y+8,"#fff","#000",u(1,-1))}if(this.Jt){const s=L(u(t.x,t.y-.5));I.textBaseline="bottom",Kt.ut.writeText(-this.Jt+" SP",s.x,s.y,"#f00","#000",u(1,-1))}this.type===Kt.Mt.Pt&&(this.O.y+=.05*Math.sin(this.xt+k))}super.F(),this.O=t}update(){this.Jt=0,this.type>0&&(this.It?this.V=this.Ht:this.Nt>0&&(this.V=this.Ht,this.type!==Kt.Mt.Pt&&(this.At.C()?this.At.set(2.5):this.At.get()>=-.5&&(this.V=this.Ht+1)))),super.update()}},Kt.Mt.St=1,Kt.Mt.Tt=2,Kt.Mt.kt=3,Kt.Mt.Pt=4,Kt.Kt=class extends Kt.Mt{constructor(t){super(0,t,u(.5),16,u(16)),this.Nt=50,this._t=3,this.Bt=this._t,this.gt(0)}Qt(t){const s=new f(.75),i=new F(this.O,u(1),11);return i.$=A.length,this.Nt-=this.zt,h=>{if(s.C()){let s=0;t.forEach((t=>{t.Nt-=this.Dt,Kt.ut.qt(t,-this.Dt),t.Nt<=0&&(t.Vt(),this.Nt+=5,s+=5)})),s>0&&Kt.ut.qt(this,s),Kt.ht.play(),i.Y(),h()}else{const t=s.D();i.size=u(1+2.5*t),i.angle=t*Math.PI*4}}}Xt(t){const s=t[t.length-1],i=.2*this.O.u(s.O),h=new f(i),n=new F(u(0),u(.5),2,u(16));return n.W=t[0].O.x<this.O.x,this.Nt-=this.zt,i=>{if(h.C()){let s=0;t.forEach(((t,i)=>{const h=e(this.Dt-2*i,0);t.Nt-=h,Kt.ut.qt(t,-h),t.Nt<=0&&(t.Vt(),this.Nt+=5,s+=5)})),s>0&&Kt.ut.qt(this,s),Kt.ht.play(),n.Y(),i()}else{const t=h.D();n.angle=t*Math.PI*4,n.O.x=s.O.x*t+this.O.x*(1-t),n.O.y=s.O.y*t+this.O.y*(1-t)}}}Vt(){}Rt(t){return 1==this.Zt?this.Qt(t):2==this.Zt?this.Xt(t):this.Et(t)}gt(t){const s=[[10,1.5,0],[10,1.5,20],[8,4.5,20]][t];this.Zt=t,this.Dt=s[0],this.$t=s[1],this.zt=s[2]}update(){this.It?this.V=16:this.Nt>0&&(this.V=16,this.At.C()?this.At.set(3):this.At.get()>=-1&&(this.V=17)),super.update()}},Kt.ot=class{constructor(){this.size=u(15),this.step=0,Kt.ct.reset(),this.Ut=[...Array(this.size.x)].map((t=>[])),this.ts=[],this.ss=[],this.hs=[],this.es={};for(let t=0;t<this.size.y;t++)for(let s=0;s<this.size.x;s++){const i="       ,              ,       wwwwwww,wwwwwwwp,,,,,p,p,,,,,p,,,,,,,,,,,,,,,,,           ,,,,wwwwwwwwwww,,,,,,,p,,,p,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,    ,p,,,p,        ,,,,,,,        ,,,,,,,        ,p,,,p,        ,,,,,,,    "[(this.size.y-1-t)*this.size.x+s];if(" "!=i){if(","==i||"p"==i){const i=c(.005,-.005),h=new l(.2+i,.2+i,.25+i),e=new Kt.ns(u(s,t),h,6);this.Ut[e.O.x][e.O.y]=e}if("w"==i)this.hs.push(this.os(u(s,t),2));else if("p"==i){const i=this.os(u(s,t+.25),0);i.$=i.O.y+1.5,this.hs.push(i)}}}this.wt=new Kt.Kt(u(7,1)),Kt.ct.rs(this.wt),this.ts.push(new F(this.wt.O,u(1),3));for(let t=0;t<this.size.y;t++)for(let s=0;s<this.size.x;s++){const i="       ,              ,       wwwwwww,wwwwwwwpb,,g,p,ps,,b,p,,sb,,bsb,,g,sbbb           s,,bwwwwwwwwwww,bss,b,p,,,p,b,s,,,b,b,,g,bb,,,ss,b,,,b,,,s,,b,    ,pbb,p,        s,,,bb,        ,b,,,,s        ,p,,,p,        ,,,,,,,    "[(this.size.y-1-t)*this.size.x+s];let h=null;"b"==i?h=new Kt.Mt(Kt.Mt.St,u(s,t),u(.5)):"g"==i?h=new Kt.Mt(Kt.Mt.kt,u(s,t),u(1)):"s"==i&&(h=new Kt.Mt(Kt.Mt.Pt,u(s,t),u(.5))),h&&(this.ss.push(h),Kt.ct.rs(h))}this.cs(),b=this.wt.O}us(t,s,i){I.drawImage(B,96,32,32,32,t.x-2*i,t.y-2*i,2*s,2*s)}Yt(t){const s=new F(t,u(.5),10,u(16));s.O.x+=c(.1,-.1),s.O.y+=c(.1,-.1),s.ls=!0,this.ts.push(s)}os(t,s){const i=new F(t,m,s);return i.$=t.y+.5,i}fs(){return!!this.ft||this.wt.O.y>=this.size.y-1&&(this.ft=new f(3),this.ws=g,!0)}Y(){this.ts.forEach((t=>t.Y())),this.ss.forEach((t=>t.Y())),this.hs.forEach((t=>t.Y())),this.Ut.forEach((t=>t.forEach((t=>t.Y()))))}jt(t){return this.es[t.toString()]}vt(){if(I.imageSmoothingEnabled=!1,this.ft){Kt.ut.ds(""),Kt.ut.bt.hidden=!0,this.wt.It=!0;let t=this.step<10?this.ft.D():1,s=new l(.7,.8,.8,t).toString();I.fillStyle=s,I.fillRect(0,0,E.width,E.height),document.body.style.background=s,g=128*t+this.ws*(1-t);const i=16*(g/32),h=.5*i,e=L(this.wt.O);I.font="600 19px monospace",I.fillStyle="#000",I.textAlign="center",I.textBaseline="bottom",this.ft.C()&&(this.step<10?(this.step=10,this.ft.set(2)):10==this.step?(this.step=11,this.ft.set(3)):11==this.step?(this.step=12,this.ft.set(4)):12==this.step?(this.step=13,this.ft.set(5)):13==this.step?(this.step=14,this.ft.set(.3)):14==this.step?(this.step=15,this.ft.set(.3),Kt.it.play()):15==this.step?(this.step=16,this.ft.set(1)):16==this.step?(this.step=17,this.ft.set(5)):N=!0),t=this.ft.D();const n=u(0,1);12==this.step?n.y=1-.5*t:this.step>12&&(n.y=.5);const o=L(this.wt.O.add(n));if(10==this.step)I.globalAlpha=t,this.us(o,i,h);else if(11==this.step)this.us(o,i,h),I.globalAlpha=1-t*t,I.fillText("You have done well, warrior.",o.x,o.y-76);else if(12==this.step)this.us(o,i,h),I.globalAlpha=1-t*t,I.fillText("Now it is my turn.",o.x,o.y-76);else if(13==this.step)this.us(o,i,h),I.globalAlpha=1-t*t,I.fillText("Fall a second time...",Math.round(o.x-8*t),o.y-100),I.fillText("...and ascend for the first.",Math.round(o.x+8*t),o.y-76);else if(14==this.step){const s=3*i;this.us(o,i,h),I.fillStyle="#f00",I.fillRect(e.x+32,e.y,-s*t,3)}else if(15==this.step){const s=3*i;this.us(o,i,h),I.fillStyle="#f00",I.fillRect(e.x+32-s*t,e.y,-s*(1-t),3)}else if(16==this.step)this.us(o,i,h);else if(17==this.step){this.us(o,i,h);const e=s;document.documentElement.style.background=e,s=new l(.1,.1,.1,t).toString(),I.fillStyle=s,I.fillRect(0,0,E.width,E.height),document.body.style.background=s,I.globalAlpha=t,I.font="600 128px monospace",I.fillStyle=e,I.fillText("Hel's Trial",E.width/2,E.height/2),I.globalAlpha=Math.sqrt(t),I.font="600 32px monospace",I.fillText("...is over",E.width/2,E.height/2+32)}this.step<17&&(I.globalAlpha=16==this.step?1-t:1,I.drawImage(B,0,32,16,16,e.x-h,e.y-h,i,i)),I.globalAlpha=1}else this.step<2&&!N&&I.drawImage(B,32,32,32,32,e(Math.round(.5*E.width-700),0),Math.round(.5*E.height),512,512);const t=new l(1,1,1,.02);U(u(7,13.25),u(1,2.5),t),U(u(7,13.5),u(1,2),t),U(u(7,13.75),u(1,1.5),t),U(u(7,14),u(1,1),t),U(u(7,14.25),u(1,.5),t)}update(){N||(0==this.step?Kt.ut.ps("h1","Hel, Ruler of Niflheim","Pitiful soul! Once proud warrior that unfortunately passed of old age and where thus cast into my Niflheim! Rejoice, for I give you a chance to die honorably and ascend into the ranks of Valhalla!",(()=>this.step=1)):1==this.step&&Kt.ut.ps("h2","Hel, Ruler of Niflheim","I have granted you a body and weapon, so that you may grow your soul power (SP) through the death of those you slay.<br><br>The trial begins! Fight your way out of my hall!",(()=>this.step=2))),this.step<2||N?N&&Kt.ut.bs():(b=this.wt.O.t(),Kt.ct.gs())}cs(){this.es={};const t=t=>{if(t.H)return;const s=t.O.toString();this.es[s]=this.es[s]||[],this.es[s].push(t)};this.hs.forEach((s=>t(s))),this.ss.forEach((s=>t(s))),t(this.wt)}},Kt.ns=class extends F{constructor(t,s,i=-1){super(t,m,i,p,0,s),this.vs=!1,this.ys=!1,this.$=-1}F(){if(U(this.O,this.size,this.color),super.F(),this.vs)R(this.O,u(1),11,u(16));else if(this.ys){R(this.O,u(1),3,u(16));const t=Kt.nt.wt,s=Math.round(2*this.O.u(t.O))/2,i=L(u(this.O.x,this.O.y));I.font="600 16px monospace",I.textAlign="center",I.textBaseline="middle",Kt.ut.writeText(-s+" MV",i.x,i.y,"#fff7","#0007",u(1,-1))}}update(){this.ys=!1,this.vs=!1,super.update()}},Kt.ct={Ms:[],xs:0,As(){let t="";const s=Math.round(Y.x),i=Math.round(Y.y),h=Kt.nt.Ut[s]?.[i];if(h&&Kt.ut.Ss){const e=Kt.rt,n=u(s,i).u(e.O),o=Kt.nt.jt(u(s,i));let r=null;if(e.Bt&&this.Ts(e,h,o))n<=e.Bt&&(h.ys=!0,t="pointer",W(0)&&(this.ks=e.Gt(s,i),e.Bt-=Math.round(2*n)/2));else if(e.Ot&&(r=this.Ps(o))&&r!==e&&n<=e.$t){let s=null;(s=this.Ns(h,e,r))&&(t="pointer",W(0)&&(this.ks=e.Rt(s),e.Ot--))}}Kt.ut.ds(t)},Ns(t,s,i){let h=[i];const n=s.O.t();if(n.x=Math.round(n.x),n.y=Math.round(n.y),1==s.Zt){const t=[u(n.x+1,n.y+1),u(n.x+1,n.y-1),u(n.x+1,n.y),u(n.x-1,n.y+1),u(n.x-1,n.y-1),u(n.x-1,n.y),u(n.x,n.y+1),u(n.x,n.y-1)];h[0].Jt=s.Dt,t.forEach((t=>{const i=Kt.nt.Ut[t.x]?.[t.y];if(i){i.vs=!0;const e=Kt.nt.jt(t);if(e){const t=e.find((t=>t instanceof Kt.Mt));t&&!h.includes(t)&&(t.Jt=s.Dt,h.push(t))}}}))}else if(2==s.Zt){const i=[],o=t.O.i(s.O).normalize();let r=s.O.u(t.O);const c=t=>!(t instanceof Kt.Mt||t.ls);for(;r>=1;){const t=n.add(o.scale(r));t.x=Math.round(t.x),t.y=Math.round(t.y);const s=Kt.nt.Ut[t.x]?.[t.y];if(!s)return null;{const e=Kt.nt.jt(t);if(e){if(e.find(c))return null;const t=e.find((t=>t instanceof Kt.Mt));t&&!h.includes(t)&&h.push(t)}i.push(s)}r--}h.sort(((t,i)=>t.O.u(s.O)-i.O.u(s.O))),h.forEach(((t,i)=>{t.Jt=e(s.Dt-2*i,0)})),i.forEach((t=>t.vs=!0))}else h=i,i.Jt=s.Dt;return t.vs=!0,h},rs(t){this.Ms.push(t)},Ps:t=>t&&t.find((t=>t instanceof Kt.Mt)),Ts(t,s,i){const h=t.O.i(s.O).normalize();let e=s.O.u(t.O);for(;e>=1;){const i=s.O.add(h.scale(e));if(i.x=Math.round(i.x),i.y=Math.round(i.y),(i.x!==t.O.x||i.y!==t.O.y)&&Kt.nt.jt(i))return!1;e--}return!i},gs(){Kt.nt.ft||(this.ks?this.ks((t=>this._s())):this.dt()?this.As():Kt.rt&&(this.ks=Kt.rt.Lt(),this.ks||(Kt.rt.Ot=0,Kt.rt.Bt=0,this._s())))},_s(){if(Kt.nt.cs(),!this.dt()||!Kt.nt.fs()){if(Kt.nt.wt.Nt<=0)return Kt.lt=!0,Kt.ut.Cs(),void Kt.it.play();this.ks=null,Kt.rt.Bt<1&&!Kt.rt.Ot&&(Kt.rt.Bt=Kt.rt._t,Kt.rt.Ot=1,Kt.rt=this.next())}},get(){return this.Ms[this.xs]},dt(){return this.get()===Kt.nt.wt},next(){return++this.xs>=this.Ms.length&&(this.xs=0),this.get()},Wt(t){for(let s=0;s<this.Ms.length;s++){if(this.Ms[s]===t){this.Ms.splice(s,1),s<=this.xs&&this.xs--;break}}},reset(){this.Ms=[],this.xs=0,this.ks=null}},Kt.ut={Ds:[],$s:{},Hs:t=>(new DOMParser).parseFromString(t,"text/html").body.firstChild,yt(){const t=Kt.nt.wt;t&&!N&&(I.font="600 16px monospace",I.textAlign="left",I.textBaseline="top",this.writeText("SP "+t.Nt.toFixed(),16,28,"#fff","#000"),this.writeText("MV "+t.Bt.toFixed(1),16,50,"#fff","#000"),this.writeText("[1] Direct Attack,   0 SP",16,94,0==t.Zt?"#c7e":"#fff","#000"),this.writeText("[2] Sweeping Blow, -20 SP",16,116,1==t.Zt?"#c7e":"#fff","#000"),this.writeText("[3] Throw Hatchet, -20 SP",16,138,2==t.Zt?"#c7e":"#fff","#000"),this.bt&&(this.bt.hidden=!Kt.ct.dt())),N&&this.bt&&(this.bt.hidden=!0);for(let t=this.Ds.length-1;t>=0;t--){(0,this.Ds[t])()&&this.Ds.splice(t,1)}},qt(t,s){const i=new f(2),h=L(t.O.add(u(0,.25))),e=s>0?"#0f0":"#f00",n=s>0?"+":"";this.Ds.push((()=>{if(i.C())return!0;const t=i.D();return I.font="600 16px monospace",I.textAlign="center",I.textBaseline="top",I.globalAlpha=1-t,this.writeText(n+s+" SP",h.x,Math.round(h.y-16*t),e,"#000"),I.globalAlpha=1,!1}))},bs(){for(const t in this.$s)this.$s[t].style.display="none"},init(){document.onmouseover=t=>{this.Ss="CANVAS"===t.target.tagName};const t=this.Hs("<button>[E]nd Turn</button>"),s=this.Hs('<div class="b"><button style="top:0">[1] Direct Attack,   0 SP</button><button style="top:22px">[2] Sweeping Blow, -20 SP</button><button style="top:44px">[3] Throw Hatchet, -20 SP</button></div>');document.body.append(t,s),t.style.left=.5*(window.innerWidth-t.getBoundingClientRect().width)+"px",t.style.top=16+.5*(window.innerHeight-O.height)+"px",s.style.left=16+.5*(window.innerWidth-O.width)+"px",s.style.top=92+.5*(window.innerHeight-O.height)+"px",t.onclick=()=>{Kt.rt.Bt=0,Kt.rt.Ot=0,Kt.ct._s()},s.querySelectorAll("button").forEach((t=>{t.onclick=s=>Kt.rt.gt(Number(t.textContent.substring(1,2))-1)})),this.bt=t},ds(t){document.body.style.cursor=t},Cs(){if(this.Fs)return;const t=this.Hs('<div style="background:#000a;color:#c7e;font-size:32px;font-style:italic;font-weight:600;height:100vh;padding-top:45%;position:absolute;text-align:center;width:100%">Since your body was destroyed,<br>you have failed the trial.<br>Your soul remains in Niflheim.<br><br>END</div>');document.body.append(t),this.Fs=t},ps(t,s,i,e){let n=this.$s[t];if(n)n.style.display="flex";else{const o=h(800,O.width),r=20+(window.innerHeight-O.height)/2,c=(window.innerWidth-o-20)/2;n=this.Hs(`<div style="background:#000c;border:4px solid #fff;bottom:${r}px;display:flex;flex-direction:column;left:${c}px;min-height:200px;padding:10px;position:absolute;width:${o}px"><div style="color:#c7e;font-style:italic;font-weight:600;margin:0 0 10px">${s}</div><div style="flex: 1 1">${i}</div><button style="display:block;font-size:21px;margin:10px 0 0;padding:10px;position:static">Continue</button></div>`),document.body.append(n),n.querySelector("button").onclick=s=>{n.remove(),delete this.$s[t],e()},this.$s[t]=n}},writeText(t,s,i,h,e,n=u(1)){I.fillStyle=e,I.fillText(t,s-n.x,i-n.y),I.fillStyle=h,I.fillText(t,s,i)}};