let t=0;const s=Math.PI,i=t=>t<0?-t:t,e=(t,s)=>t<s?t:s,h=(t,s)=>t>s?t:s,n=t=>t<0?-1:1,r=(t,s=0,i=1)=>t<s?s:t>i?i:t,o=(t,s=0,i=1)=>i-s?r((t-s)/(i-s)):0,u=(t=1,s=0)=>s+(t-s)*Math.random();const c=(t=0,s)=>null==t.x?new a(t,s??t):new a(t.x,t.y);class a{constructor(t=0,s=0){this.x=t,this.y=s}t(){return new a(this.x,this.y)}add(t){return t.x,new a(this.x+t.x,this.y+t.y)}i(t){return t.x,new a(this.x-t.x,this.y-t.y)}multiply(t){return t.x,new a(this.x*t.x,this.y*t.y)}h(t){return t.x,new a(this.x/t.x,this.y/t.y)}scale(t){return t.x,new a(this.x*t,this.y*t)}length(){return this.o()**.5}o(){return this.x**2+this.y**2}u(t){return this.l(t)**.5}l(t){return(this.x-t.x)**2+(this.y-t.y)**2}normalize(t=1){const s=this.length();return s?this.scale(t/s):new a(0,t)}p(t=1){const s=this.length();return s>t?this.scale(t/s):this}m(t){return t.x,this.x*t.x+this.y*t.y}g(t){return t.x,this.x*t.y-this.y*t.x}angle(){return Math.atan2(this.x,this.y)}v(t=0,s=1){return this.x=s*Math.sin(t),this.y=s*Math.cos(t),this}rotate(t){const s=Math.cos(t),i=Math.sin(t);return new a(this.x*s-this.y*i,this.x*i+this.y*s)}direction(){return i(this.x)>i(this.y)?this.x<0?3:1:this.y<0?2:0}M(){return new a(this.y,-this.x)}floor(){return new a(Math.floor(this.x),Math.floor(this.y))}A(){return i(this.x*this.y)}k(t,s){return t.x,this.add(t.i(this).scale(r(s)))}T(t){return this.x>=0&&this.y>=0&&this.x<t.x&&this.y<t.y}toString(t=3){return`(${(this.x<0?"":" ")+this.x.toFixed(t)},${(this.y<0?"":" ")+this.y.toFixed(t)} )`}}class l{constructor(t=1,s=1,i=1,e=1){this.r=t,this.S=s,this.b=i,this.a=e}t(){return new l(this.r,this.S,this.b,this.a)}add(t){return new l(this.r+t.r,this.S+t.S,this.b+t.b,this.a+t.a)}i(t){return new l(this.r-t.r,this.S-t.S,this.b-t.b,this.a-t.a)}multiply(t){return new l(this.r*t.r,this.S*t.S,this.b*t.b,this.a*t.a)}h(t){return new l(this.r/t.r,this.S/t.S,this.b/t.b,this.a/t.a)}scale(t,s=t){return new l(this.r*t,this.S*t,this.b*t,this.a*s)}H(){return new l(r(this.r),r(this.S),r(this.b),r(this.a))}k(t,s){return this.add(t.i(this).scale(r(s)))}$(t=0,s=0,i=1,e=1){const h=i<.5?i*(1+s):i+s-i*s,n=2*i-h,r=(t,s,i)=>(i=(i%1+1)%1)<1/6?t+6*(s-t)*i:i<.5?s:i<2/3?t+(s-t)*(2/3-i)*6:t;return this.r=r(n,h,t+1/3),this.S=r(n,h,t),this.b=r(n,h,t-1/3),this.a=e,this}C(){const t=this.r,s=this.S,i=this.b,e=this.a,h=Math.max(t,s,i),n=Math.min(t,s,i),r=(h+n)/2;let o=0,u=0;if(h!=n){let e=h-n;u=r>.5?e/(2-h-n):e/(h+n),t==h?o=(s-i)/e+(s<i?6:0):s==h?o=(i-t)/e+2:i==h&&(o=(t-s)/e+4)}return[o/6,u,r,e]}F(t=.05,s=0){return new l(this.r+u(t,-t),this.S+u(t,-t),this.b+u(t,-t),this.a+u(s,-s)).H()}toString(){return this.r>=0&&this.r<=1&&this.S>=0&&this.S<=1&&this.b>=0&&this.b<=1&&this.a>=0&&this.a,`rgb(${255*this.r|0},${255*this.S|0},${255*this.b|0},${this.a})`}N(){return this.r>=0&&this.r<=1&&this.S>=0&&this.S<=1&&this.b>=0&&this.b<=1&&this.a>=0&&this.a,(255*this.r|0)+(255*this.S<<8)+(255*this.b<<16)+(255*this.a<<24)}O(t){const s=s=>parseInt(t.slice(s,s+2),16)/255;return this.r=s(1),this.S=s(3),this.b=s(5),this.a=1,this.r>=0&&this.r<=1&&this.S>=0&&this.S<=1&&this.b>=0&&this.b,this}P(){const t=t=>((t=255*t|0)<16?"0":"")+t.toString(16);return"#"+t(this.r)+t(this.S)+t(this.b)}}class d{constructor(t){this.time=null==t?void 0:S+t,this.setTime=t}set(t=0){this.time=S+t,this.setTime=t}_(){this.time=void 0}D(){return null!=this.time}active(){return S<=this.time}I(){return S>this.time}get(){return this.D()?S-this.time:0}L(){return this.D()?o(this.time-S,this.setTime,0):0}toString(){0}}let f=c(1920,1200),p=c(),w=c(16),m=c(1),g=c(),v=h(w.x,w.y);let y,b,x,M,A=[],k=[],T=0,S=0,H=0,$=0,C=0,F=0;const N="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)";function O(s,i,h,n,o,u){D.onerror=D.onload=()=>{b=c(.3).h(y=c(D.width,D.height)),document.body.style="margin:0;overflow:hidden;background:#000;touch-action:none;user-select:none;-webkit-user-select:none;-moz-user-select:none",document.body.appendChild(I=document.createElement("canvas")),L=I.getContext("2d"),I.style=N,function(){0;lt=document.createElement("canvas"),dt=lt.getContext("webgl",{antialias:!1}),lt.style=N,ft=function(t){if(!t||!t.width)return;const s=dt.createTexture();return dt.bindTexture(Ft,s),dt.texImage2D(Ft,0,Pt,Pt,Nt,t),dt.texParameteri(Ft,It,_t),dt.texParameteri(Ft,Dt,_t),dt.texParameteri(Ft,Lt,Rt),dt.texParameteri(Ft,zt,Rt),s}(D),document.body.appendChild(lt),wt=function(t,s){0;const i=dt.createProgram();dt.attachShader(i,Mt(t,Gt)),dt.attachShader(i,Mt(s,Et)),dt.linkProgram(i),0;return i}("precision highp float;uniform mat4 m;attribute vec2 p,t;attribute vec4 c,a;varying vec2 v;varying vec4 d,e;void main(){gl_Position=m*vec4(p,1,1);v=t;d=c;e=a;}","precision highp float;varying vec2 v;varying vec4 d,e;uniform sampler2D s;void main(){gl_FragColor=texture2D(s,v)*d+e;}");const t=new ArrayBuffer(Jt*jt*Vt);(function(t,s,i){0;const e=dt.createBuffer();dt.bindBuffer(t,e),dt.bufferData(t,s,i)})(Wt,t.byteLength,qt),mt=new Float32Array(t),gt=new Uint32Array(t);let s=vt=0;const i=(t,i,e,h,n=0)=>{const r=dt.getAttribLocation(wt,t);dt.enableVertexAttribArray(r),dt.vertexAttribPointer(r,h,i,n,Vt,s),s+=h*e};i("p",Ot,4,2),i("t",Ot,4,2),i("c",Nt,1,4,1),i("a",Nt,1,4,1)}(),document.body.appendChild(z=document.createElement("canvas")),B=z.getContext("2d"),z.style=N,s(),a()};const a=(s=0)=>{let u=s-C;if(C=s,t&&(x=((t,s=0,i=1)=>s+r(t)*(i-s))(.05,x||0,1e3/(u||1))),H+=u/1e3,F=e(F+!$*u,50),p.x){z.width=I.width=p.x,z.height=I.height=p.y;const t=innerWidth/innerHeight,s=I.width/I.height;I.style.width=z.style.width=t<s?"100%":"",I.style.height=z.style.height=t<s?"":"100%",lt&&(lt.style.width=I.style.width,lt.style.height=I.style.height)}else z.width=I.width=e(innerWidth,f.x),z.height=I.height=e(innerHeight,f.y);if(R=c(I.width,I.height),$)tt(),h(),st();else{let t=0;for(F<0&&F>-9&&(t=F,F=0);F>=0;F-=1e3/60)tt(),i(),P(),h(),st();F+=t}R=c(I.width,I.height),L.imageSmoothingEnabled=!1,function(t,s,i,e,h){dt.viewport(0,0,lt.width=t,lt.height=s),dt.clear(Bt),dt.bindTexture(Ft,pt=ft),dt.useProgram(wt),xt();const n=2*h/t,r=2*h/s;dt.uniformMatrix4fv(dt.getUniformLocation(wt,"m"),0,new Float32Array([n,0,0,0,0,r,0,0,1,1,-1,1,-1-n*i,-1-r*e,0,0]))}(I.width,I.height,g.x,g.y,v),n(),A.sort(((t,s)=>t.B-s.B));for(const t of A)t.R||t.W();if(o(),function(t,s){if(!vt&&!s)return;At(),s&&t.drawImage(lt,0,0)}(L),t){B.textAlign="right",B.textBaseline="top",B.font="1em monospace",B.fillStyle="#000";const t="LittleJS v1.3.8 / "+M+" / "+A.length+" / "+x.toFixed(1)+" GL";B.fillText(t,I.width-3,3),B.fillStyle="#fff",B.fillText(t,I.width-2,2),M=0}requestAnimationFrame(a)};u?D.src=u:D.onload()}function P(){k=A.filter((t=>t.q));const t=s=>{if(!s.R){s.update();for(const i of s.children)t(i)}};for(const s of A)s.parent||t(s);A=A.filter((t=>!t.R)),S=++T/60}class _{constructor(t=c(),s=m,i=-1,e=w,h=0,n,r=0){t&&null!=t.x&&s.x,this.G=t.t(),this.size=s,this.j,this.U=i,this.J=e,this.angle=h,this.color=n,this.V,this.B=r,this.K=S,this.children=[],A.push(this)}update(){const t=this.parent;t&&(this.G=this.X.multiply(c(t.Y(),1)).rotate(-t.angle).add(t.G),this.angle=t.Y()*this.Z+t.angle)}W(){E(this.G,this.j||this.size,this.U,this.J,this.color,this.angle,this.tt,this.V)}st(){if(!this.R){this.R=1,this.parent&&this.parent.removeChild(this);for(const t of this.children)t.st(t.parent=0)}}it(){return S-this.K}Y(){return this.tt?-1:1}et(t,s=c(),i=0){!t.parent&&this.children.includes(t),this.children.push(t),t.parent=this,t.X=s.t(),t.Z=i}removeChild(t){t.parent==this&&this.children.includes(t),this.children.splice(this.children.indexOf(t),1),t.parent=0}}const D=new Image;let I,L,z,B,R=c();const W=t=>(R.x&&R.y,t.add(c(.5)).i(R.scale(.5)).multiply(c(1/v,-1/v)).add(g)),q=t=>(R.x&&R.y,t.i(g).multiply(c(v,-v)).add(R.scale(.5)).i(c(.5)));function E(s,i=c(1),e=-1,h=w,n=new l,r=0,o,u=new l(0,0,0,0),a=1){if(t&&++M,a)if(e<0||!D.width)kt(s.x,s.y,i.x,i.y,r,0,0,0,0,0,n.N());else{const t=y.x/h.x|0,c=h.x/y.x,a=h.y/y.y,l=e%t*c,d=(e/t|0)*a;kt(s.x,s.y,o?-i.x:i.x,i.y,r,l+b.x,d+b.y,l-b.x+c,d-b.y+a,n.N(),u.N())}else!function(t,s,i,e,h,n=L){t=q(t),s=s.scale(v),n.save(),n.translate(t.x+.5|0,t.y-.5|0),n.rotate(i),n.scale(e?-s.x:s.x,s.y),h(n),n.restore()}(s,i,r,o,(t=>{if(e<0)t.fillStyle=n,t.fillRect(-.5,-.5,1,1);else{const s=y.x/h.x|0,i=e%s*h.x+.3,r=(e/s|0)*h.y+.3,o=h.x-.6,u=h.y-.6;t.globalAlpha=n.a,t.drawImage(D,i,r,o,u,-.5,-.5,1,1)}}))}function G(t,s,i,e,h){E(t,s,-1,w,i,e,0,0,h)}const j=(t,s=0)=>Z[s]&&1&Z[s][t]?1:0,U=(t,s=0)=>Z[s]&&2&Z[s][t]?1:0,J=U;let V=c(),K=c(),Q=0,X=0;const Y=(t,s=0)=>j(t,s+1);let Z=[[]];function tt(){document.hasFocus()||(Z=[[]]),V=W(K),function(){0;if(!navigator.getGamepads||!document.hasFocus())return;const t=navigator.getGamepads();for(let s=t.length;s--;){const i=t[s],e=Z[s+1]||(Z[s+1]=[]),h=ht[s]||(ht[s]=[]);if(i){const t=.3,n=.8,r=s=>s>t?o(s,t,n):s<-t?-o(-s,t,n):0;for(let t=0;t<i.axes.length-1;t+=2)h[t>>1]=c(r(i.axes[t]),r(-i.axes[t+1])).p();for(let t=i.buttons.length;t--;){const h=i.buttons[t];e[t]=h.pressed?1+2*!Y(t,s):4*Y(t,s),X|=!s&&h.pressed}{const t=c(Y(15,s)-Y(14,s),Y(12,s)-Y(13,s));t.o()&&(h[0]=t.p())}}}}()}function st(){for(const t of Z)for(const s in t)t[s]&=1;Q=0}onkeydown=t=>{t.repeat||(Z[X=0][it(t.keyCode)]=3)},onkeyup=t=>{Z[0][it(t.keyCode)]=4};const it=t=>87==t?38:83==t?40:65==t?37:68==t?39:t;onmousedown=t=>{Z[X=0][t.button]=3,onmousemove(t),t.button&&t.preventDefault()},onmouseup=t=>Z[0][t.button]=2&Z[0][t.button]|4,onmousemove=t=>K=et(t),onwheel=t=>t.ctrlKey||(Q=n(t.deltaY)),oncontextmenu=t=>!1;const et=t=>{if(!I)return c();const s=I.getBoundingClientRect();return c(I.width,I.height).multiply(c(o(t.x,s.left,s.right),o(t.y,s.top,s.bottom)))},ht=[];const nt=void 0!==window.ontouchstart;if(nt){let t,s;ontouchstart=ontouchmove=ontouchend=i=>{i.button=0;const e=i.touches.length;return e?(s||ut(0,s=1),i.x=i.touches[0].clientX,i.y=i.touches[0].clientY,t?onmousemove(i):onmousedown(i)):t&&onmouseup(i),t=e,!i.cancelable}}new d,c();let rt;function ot(t,s=1,i=1,e=0,h=0){if(rt||(rt=new(window.AudioContext||webkitAudioContext)),rt.resume(),"running"!=rt.state)return;const n=rt.createBuffer(t.length,t[0].length,ct),o=rt.createBufferSource();t.forEach(((t,s)=>n.getChannelData(s).set(t))),o.buffer=n,o.playbackRate.value=i,o.loop=h;const u=rt.createGain();return u.gain.value=.5*s,u.connect(rt.destination),(window.StereoPannerNode?o.connect(new StereoPannerNode(rt,{pan:r(e,-1,1)})):o).connect(u),o.start(),o}const ut=(...t)=>ot([at(...t)]),ct=44100;function at(t=1,r=.05,o=220,c=0,a=0,l=.1,d=0,f=1,p=0,w=0,m=0,g=0,v=0,y=0,b=0,x=0,M=0,A=1,k=0,T=0){let S,H,$=2*s,C=p*=500*$/ct/ct,F=[],N=o*=(1+r*u(-1,1))*$/ct,O=0,P=0,_=0,D=1,I=0,L=0,z=0;for(w*=500*$/ct**3,b*=$/ct,m*=$/ct,g*=ct,v=v*ct|0,H=(c=c*ct+9)+(k*=ct)+(a*=ct)+(l*=ct)+(M*=ct)|0;_<H;F[_++]=z)++L%(100*x|0)||(z=d?d>1?d>2?d>3?Math.sin((O%$)**3):h(e(Math.tan(O),1),-1):1-(2*O/$%2+2)%2:1-4*i(Math.round(O/$)-O/$):Math.sin(O),z=(v?1-T+T*Math.sin($*_/v):1)*n(z)*i(z)**f*t*.5*(_<c?_/c:_<c+k?1-(_-c)/k*(1-A):_<c+k+a?A:_<H-M?(H-_-M)/l*A:0),z=M?z/2+(M>_?0:(_<H-M?1:(H-_)/M)*F[_-M|0]/2):z),S=(o+=p+=w)*Math.cos(b*P++),O+=S-S*y*(1-1e9*(Math.sin(_)+1)%2),D&&++D>g&&(o+=m,N+=m,D=0),!v||++I%v||(o=N,p=C,D=D||1);return F}let lt,dt,ft,pt,wt,mt,gt,vt,yt,bt;function xt(t){bt=t}function Mt(t,s){const i=dt.createShader(s);return dt.shaderSource(i,t),dt.compileShader(i),i}function At(){if(!vt)return;const t=yt?Tt:$t;dt.blendFuncSeparate(Ht,t,Tt,t),dt.enable(Ct),dt.bufferSubData(Wt,0,mt.subarray(0,vt*jt*Ut)),dt.drawArrays(St,0,vt*jt),vt=0,yt=bt}function kt(t,s,i,e,h,n,r,o,u,c=4294967295,a=0){vt!=Jt&&yt==bt||At();const l=Math.cos(h)/2,d=Math.sin(h)/2,f=l*i,p=l*e,w=d*i,m=d*e;let g=vt++*jt*Ut;mt[g++]=t-f-m,mt[g++]=s-p+w,mt[g++]=n,mt[g++]=u,gt[g++]=c,gt[g++]=a,mt[g++]=t+f+m,mt[g++]=s+p-w,mt[g++]=o,mt[g++]=r,gt[g++]=c,gt[g++]=a,mt[g++]=t-f+m,mt[g++]=s+p+w,mt[g++]=n,mt[g++]=r,gt[g++]=c,gt[g++]=a,mt[g++]=t-f-m,mt[g++]=s-p+w,mt[g++]=n,mt[g++]=u,gt[g++]=c,gt[g++]=a,mt[g++]=t+f-m,mt[g++]=s-p-w,mt[g++]=o,mt[g++]=u,gt[g++]=c,gt[g++]=a,mt[g++]=t+f+m,mt[g++]=s+p-w,mt[g++]=o,mt[g++]=r,gt[g++]=c,gt[g++]=a}const Tt=1,St=4,Ht=770,$t=771,Ct=3042,Ft=3553,Nt=5121,Ot=5126,Pt=6408,_t=9728,Dt=10240,It=10241,Lt=10242,zt=10243,Bt=16384,Rt=33071,Wt=34962,qt=35048,Et=35632,Gt=35633,jt=6,Ut=6,Jt=65536,Vt=24;const Kt={ht:null,nt:!1};window.addEventListener("load",(()=>{v=128,f=c(1600,900),t=!0,w=c(32),O((()=>{Kt.ht=new Kt.ot.rt,Kt.ut=Kt.ct.get()}),(()=>{if(Kt.nt)return;const t=Kt.ht.lt;t&&t.dt<=0&&(Kt.nt=!0,Kt.wt.ft())}),(()=>{Kt.nt||(U(27)&&($=!$),$||Kt.ht.update())}),(()=>{}),(()=>{Kt.nt||(Kt.ht.gt(),Kt.wt.vt())}),"tiles.png")})),Kt.yt=class extends _{constructor(t,s,i,e,h){super(s,i,e,h||w,0),this.bt=new d(((t=1,s=0)=>0|u(t,s))(5,1)),this.name=t,this.dt=1,this.xt=1,this.Mt=5,this.At=1,this.kt=this.At,this.Tt=1,this.St=1.5}Ht(){let t=null;const s=Kt.ht,i=s.lt,h=this.G.u(i.G);if(h<=this.Mt)if(h<=this.St)t=this.$t(i);else{let n=i.G.i(this.G).normalize(),o=e(this.xt,h),u=null;for(;o>=1&&(u=this.G.add(n.scale(o)),u.x=Math.round(r(u.x,0,s.size.x-1)),u.y=Math.round(r(u.y,0,s.size.y-1)),!s.Ct(u));)o--;o<1&&(u=this.G),t=this.Ft(u.x,u.y)}else{let i=this.G;const e=s.Nt(this.G);e.length>0&&(i=e[Math.round(u(e.length-1,0))]),t=this.Ft(i.x,i.y)}return t}Ot(){this.Pt&&this.Pt.remove(),Kt.ct._t(this),Kt.ht.Dt(this.G),this.st()}$t(t){const s=new d(.5);let i=!1;return e=>{i?s.I()&&e():(t.dt-=this.Tt,t.dt<=0&&t.Ot(),i=!0)}}Ft(t,s){const i=.25*this.G.u(c(t,s)),e=new d(i),h=this.G.t();let n=h;return this.angle=.1,this.tt=t<this.G.x,i=>{this.It=!0;const r=Math.sin(Math.PI/2*e.L());this.G.x=h.x*(1-r)+t*r,this.G.y=h.y*(1-r)+s*r;n.u(this.G)>=.5&&(this.angle*=-1,n=this.G.t()),this.B=this.G.y,e.I()&&(this.angle=0,this.It=!1,i())}}W(){if(!$&&this!==Kt.ht.lt)if(i(V.x-this.G.x)<this.size.x/2&&i(V.y-this.G.y)<this.size.y/2){const t=q(this.G);t.x+=(window.innerWidth-parseInt(I.width,10))/2,t.y+=(window.innerHeight-parseInt(I.height,10))/2,this.Pt?(this.Pt.hidden=!1,Kt.wt.Lt(this.Pt,{G:t})):this.Pt=Kt.wt.zt(this.name,t)}else this.Pt&&(this.Pt.hidden=!0);super.W()}update(){this.It?this.U=16:this.dt>0&&(this.U=16,this.bt.I()?this.bt.set(3):this.bt.get()>=-1&&(this.U=17)),super.update()}},Kt.Bt=class extends _{constructor(t,s){super(s),this.type=t,this.type===Kt.Bt.Rt?(this.G.x+=u(.1,-.1),this.G.y+=u(.1,-.1)):this.type===Kt.Bt.Wt&&(this.B=s.y)}W(){if(this.type===Kt.Bt.Rt)E(this.G,c(.5),10,c(16));else if(this.type===Kt.Bt.Wt){let t=this.G.t();t.x+=.1*Math.sin(S),E(t,c(1),3)}}},Kt.Bt.Rt=1,Kt.Bt.Wt=2,Kt.qt=class extends Kt.yt{constructor(t){super("Player",t,c(.5),16,c(16)),this.dt=3,this.xt=3}$t(t){const s=new d(.5),i=new d;let e=!1,h=this.G,n=t.G,r=0;return o=>{if(r=s.I()?Math.sqrt(i.L()):Math.sqrt(s.L()),s.I()&&!e)i.set(.5),h=t.G.t(),n=this.G.t(),t.dt-=this.Tt,t.dt<=0&&t.Ot(),e=!0;else if(i.I())return void o();g.x=h.x*(1-r)+n.x*r,g.y=h.y*(1-r)+n.y*r}}},Kt.ot=class{constructor(t){this.size=t,this.step=0,Kt.ct.reset(),this.Et=[...Array(this.size.x)].map((t=>[])),this.Gt=[],this.jt=[],this.Ut=[],this.Jt={}}Dt(t){this.Gt.push(new Kt.Bt(Kt.Bt.Rt,t))}Vt(t){this.Et[t.G.x][t.G.y]=t}Kt(t,s){const i=new _(t,c(1),s);return i.B=t.y+.5,i}Ct(t){return!this.Qt(t)}Nt(t){const s=[];for(let t=-1;t<=1;t++)for(let i=-1;i<=1;i++)0!==t&&0!==i&&s.push(c(t,i));const i=[];return s.forEach((s=>{const e=t.add(s);if(e.x<0||e.x>=this.size.x||e.y<0||e.y>=this.size.y)return;const h=this.Jt[e.toString(0)];(!h||h instanceof Kt.yt&&h.dt<=0)&&i.push(e)})),i}Qt(t){return this.Jt[t.toString(0)]}gt(){}update(){g=this.lt.G.t(),Kt.ct.Xt()}Yt(){this.Jt={};const t=t=>{if(t.R)return;const s=t.G.toString(0);this.Jt[s]=this.Jt[s]||[],this.Jt[s].push(t)};this.Ut.forEach((s=>t(s))),this.jt.forEach((s=>t(s))),t(this.lt)}},Kt.ot.rt=class extends Kt.ot{constructor(){super(c(9,15));for(let t=0;t<this.size.x;t++)for(let s=0;s<this.size.y;s++){let i=new l(.2,.2,.25);if(s>=this.size.y-2){if(t<3||t>5)continue;s===this.size.y-1&&(i=new l(.22,.22,.27))}const e=new Kt.Zt(c(t,s),i,6);this.Vt(e)}[c(5,6),c(3,7)].forEach((t=>{const s=new Kt.yt("Warrior",t,c(.5),16,c(16));this.jt.push(s),Kt.ct.ts(s)})),this.Ut.push(this.Kt(c(0,14),2),this.Kt(c(1,14),2),this.Kt(c(2,14),2),this.Kt(c(0,13),2),this.Kt(c(1,13),2),this.Kt(c(2,13),2),this.Kt(c(6,14),2),this.Kt(c(7,14),2),this.Kt(c(8,14),2),this.Kt(c(6,13),2),this.Kt(c(7,13),2),this.Kt(c(8,13),2),this.Kt(c(2,10.25),0),this.Kt(c(6,10.25),0),this.Kt(c(2,7.25),0),this.Kt(c(6,7.25),0),this.Kt(c(2,4.25),0),this.Kt(c(6,4.25),0),this.Kt(c(2,1.25),0),this.Kt(c(6,1.25),0)),this.lt=new Kt.qt(c(4,4)),Kt.ct.ts(this.lt),this.Yt(),g=this.lt.G}ss(){return this.lt.G.y>=this.size.y-1&&(this.st(),Kt.ht=new Kt.ot.es(this.lt),!0)}st(){this.Gt.forEach((t=>t.st())),this.jt.forEach((t=>t.st())),this.Ut.forEach((t=>t.st())),this.Et.forEach((t=>t.forEach((t=>t.st()))))}gt(){this.step<3&&E(c(1,2.4),c(4),5)}update(){0==this.step?Kt.wt.hs("h1","Hel, Ruler of Niflheim","Pitiful souls! Once proud warriors that unfortunately passed of sickness or old age and where thus cast into my Niflheim! Rejoice, for you are granted a chance to die <s>horrib…</s> honorably and ascend into the ranks of Valhalla!",(()=>this.step=1)):1==this.step?Kt.wt.hs("h2","Hel, Ruler of Niflheim","I have granted you a brittle body and weapon, so that you may fight and absorb the soul power of those slayed. Only a strong enough soul can be counted as killed in battle.",(()=>this.step=2)):2==this.step&&Kt.wt.hs("h3","Hel, Ruler of Niflheim","The battle begins! First fight your way out of my hall!",(()=>this.step=3)),this.step<3||super.update()}},Kt.ot.es=class extends Kt.ot{constructor(t){super(c(10,10));for(let t=0;t<this.size.x;t++)for(let s=0;s<this.size.y;s++){const i=new l(.2,.5,.3),e=new Kt.Zt(c(t,s),i,-1);this.Vt(e)}this.lt=t,t.G=c(5,0),t.kt=t.At,Kt.ct.reset(),Kt.ct.ts(t),this.Yt(),g=t.G}ss(){return!1}},Kt.Zt=class extends _{constructor(t,s,i=-1){super(t,m,i,w,0,s),this.ns=!1,this.rs=!1}W(){G(this.G,this.size,this.color),super.W(),this.ns?E(this.G,c(1),11,c(16)):this.rs&&E(this.G,c(1),3,c(16))}update(){this.rs=!1,this.ns=!1,super.update()}},Kt.ct={os:[],us:0,cs:null,ts(t){this.os.push(t)},ls:t=>t.find((t=>t instanceof Kt.yt)),Xt(){if(this.cs)this.cs(this.ds.bind(this));else if(this.fs()){const t=Math.round(V.x),s=Math.round(V.y),i=Kt.ht.Et[t]?.[s];if(i){const e=c(t,s).u(Kt.ut.G),h=Kt.ht.Qt(c(t,s));let n=null;h?(n=this.ls(h))&&n!==Kt.ut&&e<=Kt.ut.St&&(i.ns=!0,J(0)&&(this.cs=Kt.ut.$t(n))):e<=Kt.ut.xt&&(i.rs=!0,J(0)&&(this.cs=Kt.ut.Ft(t,s)))}}else Kt.ut&&(this.cs=Kt.ut.Ht())},ds(){Kt.ht.Yt(),this.fs()&&Kt.ht.ss()||(this.cs=null,--Kt.ut.kt<=0&&(Kt.ut.kt=Kt.ut.At,Kt.ut=this.next()))},get(){return this.os[this.us]},fs(){return this.get()===Kt.ht.lt},next(){return++this.us>=this.os.length&&(this.us=0),this.get()},_t(t){for(let s=0;s<this.os.length;s++){if(this.os[s]===t){this.os.splice(s,1);break}}},reset(){this.os=[],this.us=0,this.cs=null}},Kt.wt={ps:new DOMParser,ws:null,gs:{},vt(){B.imageSmoothingEnabled=!1;const t=Kt.ht.lt;if(t)for(let s=0;s<t.dt;s++)B.drawImage(D,32,0,16,16,16+42*s,16,32,32)},zt(t,s){const i=this.ps.parseFromString(`<div style="background:#000a;border:2px solid #fff;padding:10px;position:absolute;text-transform:uppercase;z-index:1">${t}</div>`,"text/html").body.firstChild;return document.body.append(i),this.Lt(i,{G:s}),i},ft(){if(this.ws)return;const t=this.ps.parseFromString('<div style="background:#000a;color:#c7e;font-size:32px;font-style:italic;font-weight:600;height:100vh;padding-top:45%;position:absolute;text-align:center;width:100%">With your body prematurely destroyed,<br>your soul’s home remains Niflheim.<br><br>END</div>',"text/html").body.firstChild;document.body.append(t),this.ws=t},hs(t,s,i,h){let n=this.gs[t];if(!n){const r=e(800,I.width),o=20+(window.innerHeight-I.height)/2,u=(window.innerWidth-r-20)/2;n=this.ps.parseFromString(`<div style="background:#000c;border:4px solid #fff;bottom:${o}px;display:flex;flex-direction:column;left:${u}px;min-height:200px;padding:10px;position:absolute;width:${r}px"><div style="color:#c7e;font-style:italic;font-weight:600;margin:0 0 10px">${s}</div><div style="flex: 1 1">${i}</div><div class="n" style="background:#fff;color:#000;font-weight:600;margin:10px 0 0;padding:10px;text-align:center">Continue</div></div>`,"text/html").body.firstChild,document.body.append(n),n.querySelector(".n").onclick=()=>{n.remove(),delete this.gs[t],h()},this.gs[t]=n}},Lt(t,s){if(s.G){const i=t.getBoundingClientRect();t.style.left=Math.round(s.G.x-i.width/2)+"px",t.style.top=Math.round(s.G.y-i.height-48)+"px"}}},Kt.vs=class extends _{constructor(t){super(t?t.G:c(0),c(1)),this.Tt=1,this.St=1,this.name=null,this.ys=t}W(){this.ys&&super.W()}update(){this.ys&&super.update()}};