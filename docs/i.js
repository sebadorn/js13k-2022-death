let t=0;const s=Math.PI,i=t=>t<0?-t:t,h=(t,s)=>t<s?t:s,e=(t,s)=>t>s?t:s,n=t=>t<0?-1:1,o=(t,s=0,i=1)=>t<s?s:t>i?i:t,r=(t,s=0,i=1)=>i-s?o((t-s)/(i-s)):0,c=(t=1,s=0)=>s+(t-s)*Math.random();const u=(t=0,s)=>null==t.x?new a(t,s??t):new a(t.x,t.y);class a{constructor(t=0,s=0){this.x=t,this.y=s}t(){return new a(this.x,this.y)}add(t){return new a(this.x+t.x,this.y+t.y)}i(t){return new a(this.x-t.x,this.y-t.y)}multiply(t){return new a(this.x*t.x,this.y*t.y)}h(t){return new a(this.x/t.x,this.y/t.y)}scale(t){return new a(this.x*t,this.y*t)}length(){return this.o()**.5}o(){return this.x**2+this.y**2}u(t){return this.l(t)**.5}l(t){return(this.x-t.x)**2+(this.y-t.y)**2}normalize(t=1){const s=this.length();return s?this.scale(t/s):new a(0,t)}p(t=1){const s=this.length();return s>t?this.scale(t/s):this}m(t){return this.x*t.x+this.y*t.y}g(t){return this.x*t.y-this.y*t.x}angle(){return Math.atan2(this.x,this.y)}v(t=0,s=1){return this.x=s*Math.sin(t),this.y=s*Math.cos(t),this}rotate(t){const s=Math.cos(t),i=Math.sin(t);return new a(this.x*s-this.y*i,this.x*i+this.y*s)}direction(){return i(this.x)>i(this.y)?this.x<0?3:1:this.y<0?2:0}M(){return new a(this.y,-this.x)}floor(){return new a(Math.floor(this.x),Math.floor(this.y))}A(){return i(this.x*this.y)}k(t,s){return this.add(t.i(this).scale(o(s)))}T(t){return this.x>=0&&this.y>=0&&this.x<t.x&&this.y<t.y}toString(){return`(${(this.x<0?"":" ")+this.x.toFixed()},${(this.y<0?"":" ")+this.y.toFixed()} )`}}class l{constructor(t=1,s=1,i=1,h=1){this.r=t,this.S=s,this.b=i,this.a=h}t(){return new l(this.r,this.S,this.b,this.a)}add(t){return new l(this.r+t.r,this.S+t.S,this.b+t.b,this.a+t.a)}i(t){return new l(this.r-t.r,this.S-t.S,this.b-t.b,this.a-t.a)}multiply(t){return new l(this.r*t.r,this.S*t.S,this.b*t.b,this.a*t.a)}scale(t,s=t){return new l(this.r*t,this.S*t,this.b*t,this.a*s)}k(t,s){return this.add(t.i(this).scale(o(s)))}P(){return(255*this.r|0)+(255*this.S<<8)+(255*this.b<<16)+(255*this.a<<24)}toString(){return`rgba(${255*this.r|0},${255*this.S|0},${255*this.b|0},${this.a.toFixed(3)})`}}class f{constructor(t){this.time=null==t?void 0:T+t,this.setTime=t}set(t=0){this.time=T+t,this.setTime=t}_(){this.time=void 0}C(){return null!=this.time}active(){return T<=this.time}D(){return T>this.time}get(){return this.C()?T-this.time:0}N(){return this.C()?r(this.time-T,this.setTime,0):0}}let w=u(1920,1200),d=(u(),u(32)),p=u(1),m=u(),b=128;let g,v,y,M,x=[],A=[],k=0,T=0,S=0,P=0,_=0,C=0;const D="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)";function N(s,i,e,n,r,c){F.onerror=F.onload=()=>{v=u(.3).h(g=u(F.width,F.height)),document.body.style="touch-action:none;-webkit-user-select:none;-moz-user-select:none",document.body.appendChild(B=document.createElement("canvas")),I=B.getContext("2d"),B.style=D,function(){0;at=document.createElement("canvas"),lt=at.getContext("webgl",{antialias:!1}),at.style=D,ft=function(t){if(!t||!t.width)return;const s=lt.createTexture();return lt.bindTexture(Ct,s),lt.texImage2D(Ct,0,$t,$t,Dt,t),lt.texParameteri(Ct,Bt,Ht),lt.texParameteri(Ct,Ft,Ht),lt.texParameteri(Ct,It,zt),lt.texParameteri(Ct,Ot,zt),s}(F),document.body.appendChild(at),dt=function(t,s){0;const i=lt.createProgram();return lt.attachShader(i,Mt(t,Lt)),lt.attachShader(i,Mt(s,qt)),lt.linkProgram(i),i}("precision highp float;uniform mat4 m;attribute vec2 p,t;attribute vec4 c,a;varying vec2 v;varying vec4 d,e;void main(){gl_Position=m*vec4(p,1,1);v=t;d=c;e=a;}","precision highp float;varying vec2 v;varying vec4 d,e;uniform sampler2D s;void main(){gl_FragColor=texture2D(s,v)*d+e;}");const t=new ArrayBuffer(jt*Ut*Gt);(function(t,s,i){0;const h=lt.createBuffer();lt.bindBuffer(t,h),lt.bufferData(t,s,i)})(Et,t.byteLength,Rt),pt=new Float32Array(t),mt=new Uint32Array(t);let s=bt=0;const i=(t,i,h,e,n=0)=>{const o=lt.getAttribLocation(dt,t);lt.enableVertexAttribArray(o),lt.vertexAttribPointer(o,e,i,n,Gt,s),s+=e*h};i("p",Nt,4,2),i("t",Nt,4,2),i("c",Dt,1,4,1),i("a",Dt,1,4,1)}(),document.body.appendChild(O=document.createElement("canvas")),V=O.getContext("2d"),O.style=D,s(),a()};const a=(s=0)=>{let c=s-_;_=s,t&&(y=((t,s=0,i=1)=>s+o(t)*(i-s))(.05,y||0,1e3/(c||1))),S+=c/1e3,C=h(C+!P*c,50);let l=h(innerWidth,w.x),f=h(innerHeight,w.y);if(l-=l%2,f-=f%2,O.width=B.width=l,O.height=B.height=f,z=u(B.width,B.height),P)Z(),e(),tt();else{let t=0;for(C<0&&C>-9&&(t=C,C=0);C>=0;C-=1e3/60)Z(),i(),$(),e(),tt();C+=t}z=u(B.width,B.height),I.imageSmoothingEnabled=!1,function(t,s,i,h,e){lt.viewport(0,0,at.width=t,at.height=s),lt.clear(Vt),lt.bindTexture(Ct,wt=ft),lt.useProgram(dt),yt();const n=2*e/t,o=2*e/s;lt.uniformMatrix4fv(lt.getUniformLocation(dt,"m"),0,new Float32Array([n,0,0,0,0,o,0,0,1,1,-1,1,-1-n*i,-1-o*h,0,0]))}(B.width,B.height,m.x,m.y,b),n(),x.sort(((t,s)=>t.$-s.$));for(const t of x)t.H||t.F();if(r(),function(t,s){if(!bt&&!s)return;xt(),s&&t.drawImage(at,0,0)}(I),t){V.textAlign="right",V.textBaseline="top",V.font="1em monospace",V.fillStyle="#000";const t="LittleJS v1.3.8 / "+M+" / "+x.length+" / "+y.toFixed(1)+" GL";V.fillText(t,B.width-3,3),V.fillStyle="#fff",V.fillText(t,B.width-2,2),M=0}requestAnimationFrame(a)};c?F.src=c:F.onload()}function $(){A=x.filter((t=>t.B));const t=s=>{if(!s.H){s.update();for(const i of s.children)t(i)}};for(const s of x)s.parent||t(s);x=x.filter((t=>!t.H)),T=++k/60}class H{constructor(t=u(),s=p,i=-1,h=d,e=0,n,o=0){this.I=t.t(),this.size=s,this.O,this.V=i,this.R=h,this.angle=e,this.color=n,this.q,this.$=o,this.L=T,this.children=[],x.push(this)}update(){const t=this.parent;t&&(this.I=this.U.multiply(u(t.Y(),1)).rotate(-t.angle).add(t.I),this.angle=t.Y()*this.j+t.angle)}F(){q(this.I,this.O||this.size,this.V,this.R,this.color,this.angle,this.G,this.q)}J(){if(!this.H){this.H=1,this.parent&&this.parent.removeChild(this);for(const t of this.children)t.J(t.parent=0)}}W(){return T-this.L}Y(){return this.G?-1:1}K(t,s=u(),i=0){this.children.push(t),t.parent=this,t.U=s.t(),t.j=i}removeChild(t){this.children.splice(this.children.indexOf(t),1),t.parent=0}}const F=new Image;let B,I,O,V,z=u();const E=t=>t.add(u(.5)).i(z.scale(.5)).multiply(u(1/b,-1/b)).add(m),R=t=>t.i(m).multiply(u(b,-b)).add(z.scale(.5)).i(u(.5));function q(s,i=u(1),h=-1,e=d,n=new l,o=0,r,c=new l(0,0,0,0),a=1){if(t&&++M,a)if(h<0||!F.width)At(s.x,s.y,i.x,i.y,o,0,0,0,0,0,n.P());else{const t=g.x/e.x|0,u=e.x/g.x,a=e.y/g.y,l=h%t*u,f=(h/t|0)*a;At(s.x,s.y,r?-i.x:i.x,i.y,o,l+v.x,f+v.y,l-v.x+u,f-v.y+a,n.P(),c.P())}else!function(t,s,i,h,e,n=I){t=R(t),s=s.scale(b),n.save(),n.translate(t.x+.5|0,t.y-.5|0),n.rotate(i),n.scale(h?-s.x:s.x,s.y),e(n),n.restore()}(s,i,o,r,(t=>{if(h<0)t.fillStyle=n,t.fillRect(-.5,-.5,1,1);else{const s=g.x/e.x|0,i=h%s*e.x+.3,o=(h/s|0)*e.y+.3,r=e.x-.6,c=e.y-.6;t.globalAlpha=n.a,t.drawImage(F,i,o,r,c,-.5,-.5,1,1)}}))}function L(t,s,i,h,e){q(t,s,-1,d,i,h,0,0,e)}const U=(t,s=0)=>X[s]&&1&X[s][t]?1:0,Y=(t,s=0)=>X[s]&&2&X[s][t]?1:0,j=Y;let G=u(),J=u(),W=0,K=0;const Q=(t,s=0)=>U(t,s+1);let X=[[]];function Z(){document.hasFocus()||(X=[[]]),G=E(J),function(){if(!navigator.getGamepads||!document.hasFocus())return;const t=navigator.getGamepads();for(let s=t.length;s--;){const i=t[s],h=X[s+1]||(X[s+1]=[]),e=ht[s]||(ht[s]=[]);if(i){const t=.3,n=.8,o=s=>s>t?r(s,t,n):s<-t?-r(-s,t,n):0;for(let t=0;t<i.axes.length-1;t+=2)e[t>>1]=u(o(i.axes[t]),o(-i.axes[t+1])).p();for(let t=i.buttons.length;t--;){const e=i.buttons[t];h[t]=e.pressed?1+2*!Q(t,s):4*Q(t,s),K|=!s&&e.pressed}{const t=u(Q(15,s)-Q(14,s),Q(12,s)-Q(13,s));t.o()&&(e[0]=t.p())}}}}()}function tt(){for(const t of X)for(const s in t)t[s]&=1;W=0}onkeydown=t=>{t.repeat||(X[K=0][st(t.keyCode)]=3)},onkeyup=t=>{X[0][st(t.keyCode)]=4};const st=t=>87==t?38:83==t?40:65==t?37:68==t?39:t;onmousedown=t=>{X[K=0][t.button]=3,onmousemove(t),t.button&&t.preventDefault()},onmouseup=t=>X[0][t.button]=2&X[0][t.button]|4,onmousemove=t=>J=it(t),onwheel=t=>t.ctrlKey||(W=n(t.deltaY)),oncontextmenu=t=>!1;const it=t=>{if(!B)return u();const s=B.getBoundingClientRect();return u(B.width,B.height).multiply(u(r(t.x,s.left,s.right),r(t.y,s.top,s.bottom)))},ht=[];if(void 0!==window.ontouchstart){let t,s;ontouchstart=ontouchmove=ontouchend=i=>{i.button=0;const h=i.touches.length;return h?(s||rt(0,s=1),i.x=i.touches[0].clientX,i.y=i.touches[0].clientY,t?onmousemove(i):onmousedown(i)):t&&onmouseup(i),t=h,!i.cancelable}}class et{constructor(t,s=30,i=.7){this.range=s,this.X=i,this.Z=t[1]||0,t[1]=0,this.tt=ut(...t)}play(t,s=1,i=1,h=1){let e=0;if(t){const i=this.range;if(i){const h=m.l(t);if(h>i*i)return;s*=r(h**.5,i,i*this.X)}e=2*R(t).x/B.width-1}const n=i+i*this.Z*h*c(-1,1);return ot([this.tt],s,n,e)}st(t,s,i=1){return this.play(s,i,2**(t/12),0)}}let nt;function ot(t,s=1,i=1,h=0,e=0){if(nt||(nt=new(window.AudioContext||webkitAudioContext)),nt.resume(),"running"!=nt.state)return;const n=nt.createBuffer(t.length,t[0].length,ct),r=nt.createBufferSource();t.forEach(((t,s)=>n.getChannelData(s).set(t))),r.buffer=n,r.playbackRate.value=i,r.loop=e;const c=nt.createGain();return c.gain.value=.5*s,c.connect(nt.destination),(window.StereoPannerNode?r.connect(new StereoPannerNode(nt,{pan:o(h,-1,1)})):r).connect(c),r.start(),r}const rt=(...t)=>ot([ut(...t)]),ct=44100;function ut(t=1,o=.05,r=220,u=0,a=0,l=.1,f=0,w=1,d=0,p=0,m=0,b=0,g=0,v=0,y=0,M=0,x=0,A=1,k=0,T=0){let S,P,_=2*s,C=d*=500*_/ct/ct,D=[],N=r*=(1+o*c(-1,1))*_/ct,$=0,H=0,F=0,B=1,I=0,O=0,V=0;for(p*=500*_/ct**3,y*=_/ct,m*=_/ct,b*=ct,g=g*ct|0,P=(u=u*ct+9)+(k*=ct)+(a*=ct)+(l*=ct)+(x*=ct)|0;F<P;D[F++]=V)++O%(100*M|0)||(V=f?f>1?f>2?f>3?Math.sin(($%_)**3):e(h(Math.tan($),1),-1):1-(2*$/_%2+2)%2:1-4*i(Math.round($/_)-$/_):Math.sin($),V=(g?1-T+T*Math.sin(_*F/g):1)*n(V)*i(V)**w*t*.5*(F<u?F/u:F<u+k?1-(F-u)/k*(1-A):F<u+k+a?A:F<P-x?(P-F-x)/l*A:0),V=x?V/2+(x>F?0:(F<P-x?1:(P-F)/x)*D[F-x|0]/2):V),S=(r+=d+=p)*Math.cos(y*H++),$+=S-S*v*(1-1e9*(Math.sin(F)+1)%2),B&&++B>b&&(r+=m,N+=m,B=0),!g||++I%g||(r=N,d=C,B=B||1);return D}let at,lt,ft,wt,dt,pt,mt,bt,gt,vt;function yt(t){vt=t}function Mt(t,s){const i=lt.createShader(s);return lt.shaderSource(i,t),lt.compileShader(i),i}function xt(){if(!bt)return;const t=gt?kt:Pt;lt.blendFuncSeparate(St,t,kt,t),lt.enable(_t),lt.bufferSubData(Et,0,pt.subarray(0,bt*Ut*Yt)),lt.drawArrays(Tt,0,bt*Ut),bt=0,gt=vt}function At(t,s,i,h,e,n,o,r,c,u=4294967295,a=0){bt!=jt&&gt==vt||xt();const l=Math.cos(e)/2,f=Math.sin(e)/2,w=l*i,d=l*h,p=f*i,m=f*h;let b=bt++*Ut*Yt;pt[b++]=t-w-m,pt[b++]=s-d+p,pt[b++]=n,pt[b++]=c,mt[b++]=u,mt[b++]=a,pt[b++]=t+w+m,pt[b++]=s+d-p,pt[b++]=r,pt[b++]=o,mt[b++]=u,mt[b++]=a,pt[b++]=t-w+m,pt[b++]=s+d+p,pt[b++]=n,pt[b++]=o,mt[b++]=u,mt[b++]=a,pt[b++]=t-w-m,pt[b++]=s-d+p,pt[b++]=n,pt[b++]=c,mt[b++]=u,mt[b++]=a,pt[b++]=t+w-m,pt[b++]=s-d-p,pt[b++]=r,pt[b++]=c,mt[b++]=u,mt[b++]=a,pt[b++]=t+w+m,pt[b++]=s+d-p,pt[b++]=r,pt[b++]=o,mt[b++]=u,mt[b++]=a}const kt=1,Tt=4,St=770,Pt=771,_t=3042,Ct=3553,Dt=5121,Nt=5126,$t=6408,Ht=9728,Ft=10240,Bt=10241,It=10242,Ot=10243,Vt=16384,zt=33071,Et=34962,Rt=35048,qt=35632,Lt=35633,Ut=6,Yt=6,jt=65536,Gt=24,Jt={};window.addEventListener("load",(()=>{t=!0,N((()=>{Jt.it=new et([1.22,.05,507,.01,.21,.36,1,3.99,0,.1,0,0,.19,1.7,0,.9,0,.35,.16,.34]),Jt.ht=new et([,,305,.01,.03,.09,3,1.27,2.7,,,,,.5,,.5,,.85,.02,.24]),Jt.et=new et([1.1,.05,257,.01,.01,.14,1,2.2,-8.6,.1,0,0,0,1.4,0,.1,0,.8,.02,0]),Jt.nt=new Jt.ot,Jt.rt=Jt.ct.get(),setTimeout((()=>Jt.ut.init()),10)}),(()=>{if(Jt.lt)return;if(Jt.nt.ft)return;W<0?b-=32:W>0&&(b+=32),b=o(b,96,256);const t=Jt.nt.wt;t&&(Y(69)?Jt.ct.dt()&&Jt.ut.bt.click():Y(49)||Y(97)?t.gt(0):Y(50)||Y(98)?t.gt(1):(Y(51)||Y(99))&&t.gt(2))}),(()=>{Jt.lt||(Y(27)&&(P=!P),Jt.nt.update())}),(()=>{}),(()=>{P&&(V.fillStyle="#0007",V.fillRect(0,0,O.width,O.height),V.font="600 italic 72px monospace",V.textAlign="center",V.textBaseline="bottom",Jt.ut.writeText("PAUSED",.5*O.width,.5*O.height,"#d0a","#0ac",u(3,0))),Jt.lt||(Jt.nt.vt(),Jt.nt.ft||Jt.ut.yt())}),"tiles.png")})),Jt.Mt=class extends H{constructor(t,s,i,h,e){super(s,i,h,e||d,0),this.xt=((t=1,s=0)=>0|c(t,s))(5,1),this.At=new f(this.xt),this.G=0,this.type=t,t==Jt.Mt.kt&&(this.I.y+=.25);const n=[];n[Jt.Mt.Tt]=[8,2,6,3,1,24,0],n[Jt.Mt.St]=[6,1,5,10,1,37,0],n[Jt.Mt.kt]=[20,1,5,12,1,8,d],n[Jt.Mt.Pt]=[14,1,20,2,1,36,0];const o=n[t];o&&(this._t=o[0],this.Ct=o[1],this.Dt=o[2],this.Nt=o[3],this.$t=o[4]+.5,this.Ht=o[5],this.V=o[5],this.R=o[6]||u(16)),this.Ft=this._t,this.Bt=this.Ct,this.It=1,this.Ot=0}Vt(t){const s=new f(.4),i=new f;this.angle=.1,this.G=t.I.x<this.I.x;const h=this.I.t();let e=this.I.t(),n=this.I.t(),o=t.I,r=!1,c=0;const u=this===Jt.nt.wt;return this._t-=this.Ot,a=>{if(u&&(m=h),this.zt=!0,s.D()?(c=i.N(),this.G=t.I.x>h.x):(c=s.N(),this.G=t.I.x<h.x),s.D()&&!r)i.set(.3),o=n.t(),n=t.I,t._t-=this.Nt,u?Jt.ht.play():Jt.et.play(),Jt.ut.Et(t,-this.Nt),Jt.ut.Rt(t,{I:h}),u||Jt.ut.qt(),t._t<=0&&(t.Lt(),u&&(this._t+=5,Jt.ut.Et({I:h},5))),r=!0;else if(i.D())return this.angle=0,this.zt=!1,this.G=t.I.x<h.x,this.I=h,void a();this.I.x=n.x*(1-c)+o.x*c,this.I.y=n.y*(1-c)+o.y*c;e.u(this.I)>=.5&&(this.angle*=-1,e=this.I.t())}}Ut(){let t=null;const s=Jt.nt.wt,i=this.I.floor(),e=i.u(s.I);if(e<=this.Dt)if(this.It&&e<=this.$t)t=this.Yt(s),this.It--;else if(this.Bt){const n=s.I.i(i).normalize(),r=h(this.Bt,e);let c=1,u=null;for(;c<=r;){const t=i.add(n.scale(c));if(t.x=Math.round(o(t.x,0,Jt.nt.size.x-1)),t.y=Math.round(o(t.y,0,Jt.nt.size.y-1)),!Jt.nt.jt[t.x]?.[t.y])break;if(this.type==Jt.Mt.kt){if((Jt.nt.Gt(t)||[]).find((t=>!(t instanceof Jt.Mt)||t.type==Jt.Mt.kt||t===s)))break}else if(Jt.nt.Gt(t))break;u=t,c++}u&&(t=this.Jt(u.x,u.y)),this.Bt=0}return t}Lt(){Jt.ct.Wt(this),Jt.nt.Kt(this.I),this.J()}Yt(t){return this.Vt(t)}Jt(t,s){const i=.25*this.I.u(u(t,s)),h=new f(i),e=this.I.t();let n=e;return this.angle=.1,this.G=t<this.I.x,i=>{this.zt=!0;const o=Math.sin(Math.PI/2*h.N());this.I.x=e.x*(1-o)+t*o,this.I.y=e.y*(1-o)+s*o;n.u(this.I)>=.5&&(this.angle*=-1,n=this.I.t()),this.$=this.I.y,this.type==Jt.Mt.kt&&(this.I.y+=.25,this.$-=.75),h.D()&&(this.angle=0,this.zt=!1,i())}}F(){const t=this.I.t();if(!P){if(V.font="600 16px monospace",V.textAlign="center",i(G.x-this.I.x)<this.size.x/2&&i(G.y-this.I.y)<this.size.y/2){const s=R(u(t.x,t.y+.5));V.textBaseline="top",Jt.ut.writeText("SP "+this._t,s.x,s.y+8,"#fff","#000",u(1,-1))}if(this.Qt){const s=R(u(t.x,t.y-.5));V.textBaseline="bottom",Jt.ut.writeText(-this.Qt+" SP",s.x,s.y,"#f00","#000",u(1,-1))}this.type===Jt.Mt.Pt&&(this.I.y+=.05*Math.sin(this.xt+T))}super.F(),this.I=t}update(){this.Qt=0,this.type>0&&(this.zt?this.V=this.Ht:this._t>0&&(this.V=this.Ht,this.type==Jt.Mt.St?this.At.D()&&(this.G=this.G?0:1,this.At.set(5)):this.type!==Jt.Mt.Pt&&(this.At.D()?this.At.set(2.5):this.At.get()>=-.5&&(this.V=this.Ht+1)))),super.update()}},Jt.Mt.Tt=1,Jt.Mt.St=2,Jt.Mt.kt=3,Jt.Mt.Pt=4,Jt.Xt=class extends Jt.Mt{constructor(t){super(0,t,u(.5),16,u(16)),this._t=100,this.Ct=3,this.Bt=this.Ct,this.gt(0)}Zt(t){const s=new f(.75),i=new H(this.I,u(1),11);return i.$=x.length,this._t-=this.Ot,h=>{if(s.D()){let s=0;t.forEach((t=>{t._t-=this.Nt,Jt.ut.Et(t,-this.Nt),Jt.ut.Rt(t,this),t._t<=0&&(t.Lt(),this._t+=5,s+=5)})),s>0&&Jt.ut.Et(this,s),Jt.ht.play(),i.J(),h()}else{const t=s.N();i.size=u(1+2.5*t),i.angle=t*Math.PI*4}}}ts(t){const s=t[t.length-1],i=.2*this.I.u(s.I),h=new f(i),n=new H(u(0),u(.5),2,u(16));return n.G=t[0].I.x<this.I.x,this._t-=this.Ot,i=>{if(h.D()){let s=0;t.forEach(((t,i)=>{const h=e(this.Nt-2*i,0);t._t-=h,Jt.ut.Et(t,-h),Jt.ut.Rt(t,this),t._t<=0&&(t.Lt(),this._t+=5,s+=5)})),s>0&&Jt.ut.Et(this,s),Jt.ht.play(),n.J(),i()}else{const t=h.N();n.angle=t*Math.PI*4,n.I.x=s.I.x*t+this.I.x*(1-t),n.I.y=s.I.y*t+this.I.y*(1-t)}}}Lt(){}Yt(t){return 1==this.ss?this.Zt(t):2==this.ss?this.ts(t):this.Vt(t)}gt(t){const s=[[10,1.5,0],[10,1.5,20],[8,4.5,20]][t];this.ss=t,this.Nt=s[0],this.$t=s[1],this.Ot=s[2]}update(){this.zt?this.V=16:this._t>0&&(this.V=16,this.At.D()?this.At.set(3):this.At.get()>=-1&&(this.V=17)),super.update()}},Jt.ot=class{constructor(){this.size=u(15),this.step=0,this.offset=u(),Jt.ct.reset(),this.jt=[...Array(this.size.x)].map((t=>[])),this.hs=[],this.es=[],this.ns=[],this.os={};for(let t=0;t<this.size.y;t++)for(let s=0;s<this.size.x;s++){const i="       ,              ,       wwwwwww,wwwwwwwp,,,,,p,p,,,,,p,,,,,,,,,,,,,,,,,           ,,,,wwwwwwwwwww,,,,,,,p,,,p,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,    ,p,,,p,        ,,,,,,,        ,,,,,,,        ,p,,,p,        ,,,,,,,    "[(this.size.y-1-t)*this.size.x+s];if(" "!=i){if(","==i||"p"==i){const i=c(.005,-.005),h=new l(.2+i,.2+i,.25+i),e=new Jt.rs(u(s,t),h,6);this.jt[e.I.x][e.I.y]=e}if("w"==i)this.ns.push(this.cs(u(s,t),2));else if("p"==i){const i=this.cs(u(s,t+.3),0);i.$=i.I.y+1.5,this.ns.push(i)}}}this.wt=new Jt.Xt(u(7,1)),Jt.ct.us(this.wt),this.hs.push(new H(this.wt.I,u(1),3));for(let t=0;t<this.size.y;t++)for(let s=0;s<this.size.x;s++){const i="       ,              ,       wwwwwww,wwwwwwwpb,,g,p,psk,b,p,ksb,,bsb,,g,sbbb           s,,bwwwwwwwwwww,bss,b,pk,,p,b,s,,kb,b,,g,bb,k,ss,b,,,b,,,s,,b,    ,pbbkp,        s,,,bb,        ,b,,,,s        ,p,,,p,        ,,,,,,,    "[(this.size.y-1-t)*this.size.x+s],h=u(s,t);let e=null;"b"==i?e=new Jt.Mt(Jt.Mt.Tt,h,u(.5)):"g"==i?e=new Jt.Mt(Jt.Mt.kt,h,u(1)):"k"==i?e=new Jt.Mt(Jt.Mt.St,h,u(.5)):"s"==i&&(e=new Jt.Mt(Jt.Mt.Pt,h,u(.5))),e&&(this.es.push(e),Jt.ct.us(e))}this.ls(),m=this.wt.I}fs(t,s,i){V.drawImage(F,96,32,32,32,t.x-2*i,t.y-2*i,2*s,2*s)}Kt(t){const s=new H(t,u(.5),10,u(16));s.I.x+=c(.1,-.1),s.I.y+=c(.1,-.1),s.ws=!0,this.hs.push(s)}cs(t,s){const i=new H(t,p,s);return i.$=t.y+.5,i}ds(){return!!this.ft||this.wt.I.y>=this.size.y-1&&(this.ft=new f(3),this.ps=b,!0)}J(){this.hs.forEach((t=>t.J())),this.es.forEach((t=>t.J())),this.ns.forEach((t=>t.J())),this.jt.forEach((t=>t.forEach((t=>t.J()))))}Gt(t){return this.os[t.toString()]}vt(){if(V.imageSmoothingEnabled=!1,this.ft){Jt.ut.bs(""),Jt.ut.bt.hidden=!0,this.wt.zt=!0;let t=this.step<10?this.ft.N():1,s=new l(.7,.8,.8,t).toString();V.fillStyle=s,V.fillRect(0,0,O.width,O.height),document.body.style.background=s,b=128*t+this.ps*(1-t);const i=16*(b/32),h=.5*i,e=R(this.wt.I);V.font="600 19px monospace",V.fillStyle="#000",V.textAlign="center",V.textBaseline="bottom",this.ft.D()&&(this.step<10?(this.step=10,this.ft.set(2)):10==this.step?(this.step=11,this.ft.set(4.5)):11==this.step?(this.step=12,this.ft.set(4.5)):12==this.step?(this.step=13,this.ft.set(5.5)):13==this.step?(this.step=14,this.ft.set(.3)):14==this.step?(this.step=15,this.ft.set(.3),Jt.it.play()):15==this.step?(this.step=16,this.ft.set(2)):16==this.step?(this.step=17,this.ft.set(5.5)):P=!0),t=this.ft.N();const n=u(0,1);12==this.step?n.y=1-.5*t:this.step>12&&(n.y=.5);const o=R(this.wt.I.add(n)),r=Math.round(o.x+8*t);if(10==this.step)V.globalAlpha=t,this.fs(o,i,h);else if(11==this.step)this.fs(o,i,h),V.globalAlpha=1-t*t,V.fillText("You have done well, warrior.",r,o.y-76);else if(12==this.step)this.fs(o,i,h),V.globalAlpha=1-t*t,V.fillText("I will send you off to Valhalla.",r,o.y-76);else if(13==this.step)this.fs(o,i,h),V.globalAlpha=1-t*t,V.fillText("You may die in honor now.",r,o.y-76);else if(14==this.step){const s=2*i;this.fs(o,i,h),V.fillStyle="#f00",V.fillRect(e.x+i,e.y,-s*t,3)}else if(15==this.step){const s=2*i;this.fs(o,i,h),V.fillStyle="#f00",V.fillRect(e.x+i-s*t,e.y,-s*(1-t),3)}else if(16==this.step)this.fs(o,i,h);else if(17==this.step){this.fs(o,i,h);const e=s;document.documentElement.style.background=e,s=new l(.1,.1,.1,t).toString(),V.fillStyle=s,V.fillRect(0,0,O.width,O.height),document.body.style.background=s,V.globalAlpha=t,V.font="600 128px monospace",V.fillStyle=e,V.fillText("Hel's Trial",O.width/2,O.height/2),V.globalAlpha=Math.sqrt(t),V.font="600 32px monospace",V.fillText("...is over",O.width/2,O.height/2+32)}this.step<17&&(V.globalAlpha=16==this.step?1-t:1,V.drawImage(F,0,32,16,16,e.x-h,e.y-h,i,i)),V.globalAlpha=1}else this.step<2&&!P&&V.drawImage(F,32,32,32,32,e(Math.round(.5*O.width-700),0),O.height-512,512,512);const t=new l(1,1,1,.02);L(u(7,13.25),u(1,2.5),t),L(u(7,13.5),u(1,2),t),L(u(7,13.75),u(1,1.5),t),L(u(7,14),u(1,1),t),L(u(7,14.25),u(1,.5),t)}update(){P||(0==this.step?Jt.ut.gs("h1","Hel, Ruler of Niflheim","Pitiful soul! Once proud warrior that unfortunately passed of old age and where thus cast into my Niflheim! Rejoice, for I give you a chance to die honorably and ascend into the ranks of Valhalla!",(()=>this.step=1)):1==this.step&&Jt.ut.gs("h2","Hel, Ruler of Niflheim","I have granted you a body and weapon, so that you may grow your soul power (SP) through the death of those you slay.<br><br>The trial begins! Fight your way out of my hall!",(()=>this.step=2))),this.step<2||P?P&&Jt.ut.vs():(m=this.wt.I.add(this.offset),Jt.ct.ys())}ls(){this.os={};const t=t=>{if(t.H)return;const s=t.I.toString();this.os[s]=this.os[s]||[],this.os[s].push(t)};this.ns.forEach((s=>t(s))),this.es.forEach((s=>t(s))),t(this.wt)}},Jt.rs=class extends H{constructor(t,s,i=-1){super(t,p,i,d,0,s),this.Ms=!1,this.xs=!1,this.$=-1}F(){if(L(this.I,this.size,this.color),super.F(),this.Ms)q(this.I,u(1),11,u(16));else if(this.xs){q(this.I,u(1),3,u(16));const t=Jt.nt.wt,s=Math.round(2*this.I.u(t.I))/2,i=R(u(this.I.x,this.I.y));V.font="600 16px monospace",V.textAlign="center",V.textBaseline="middle",Jt.ut.writeText(-s+" MV",i.x,i.y,"#fff7","#0007",u(1,-1))}}update(){this.xs=!1,this.Ms=!1,super.update()}},Jt.ct={As:[],ks:0,Ts(){let t="";const s=Math.round(G.x),i=Math.round(G.y),h=Jt.nt.jt[s]?.[i];if(h&&Jt.ut.Ss){const e=Jt.rt,n=u(s,i).u(e.I),o=Jt.nt.Gt(u(s,i));let r=null;if(e.Bt&&this.Ps(e,h,o))n<=e.Bt&&(h.xs=!0,t="pointer",j(0)&&(this._s=e.Jt(s,i),e.Bt-=Math.round(2*n)/2));else if(e.It&&(r=this.Cs(o))&&r!==e&&n<=e.$t){let s=null;(s=this.Ds(h,e,r))&&(t="pointer",j(0)&&(this._s=e.Yt(s),e.It--))}}Jt.ut.bs(t)},Ds(t,s,i){let h=[i];const n=s.I.t();if(n.x=Math.round(n.x),n.y=Math.round(n.y),1==s.ss){const t=[u(n.x+1,n.y+1),u(n.x+1,n.y-1),u(n.x+1,n.y),u(n.x-1,n.y+1),u(n.x-1,n.y-1),u(n.x-1,n.y),u(n.x,n.y+1),u(n.x,n.y-1)];h[0].Qt=s.Nt,t.forEach((t=>{const i=Jt.nt.jt[t.x]?.[t.y];if(i){i.Ms=!0;const e=Jt.nt.Gt(t);if(e){const t=e.find((t=>t instanceof Jt.Mt));t&&!h.includes(t)&&(t.Qt=s.Nt,h.push(t))}}}))}else if(2==s.ss){const i=[],o=t.I.i(s.I).normalize();let r=s.I.u(t.I);const c=t=>!(t instanceof Jt.Mt||t.ws);for(;r>=1;){const t=n.add(o.scale(r));t.x=Math.round(t.x),t.y=Math.round(t.y);const s=Jt.nt.jt[t.x]?.[t.y];if(!s)return null;{const e=Jt.nt.Gt(t);if(e){if(e.find(c))return null;const t=e.find((t=>t instanceof Jt.Mt));t&&!h.includes(t)&&h.push(t)}i.push(s)}r--}h.sort(((t,i)=>t.I.u(s.I)-i.I.u(s.I))),h.forEach(((t,i)=>{t.Qt=e(s.Nt-2*i,0)})),i.forEach((t=>t.Ms=!0))}else h=i,i.Qt=s.Nt;return t.Ms=!0,h},us(t){this.As.push(t)},Cs:t=>t&&t.find((t=>t instanceof Jt.Mt)),Ps(t,s,i){const h=t.I.i(s.I).normalize();let e=s.I.u(t.I);for(;e>=1;){const i=s.I.add(h.scale(e));if(i.x=Math.round(i.x),i.y=Math.round(i.y),(i.x!==t.I.x||i.y!==t.I.y)&&Jt.nt.Gt(i))return!1;e--}return!i},ys(){Jt.nt.ft||(this._s?this._s((t=>this.Ns())):this.dt()?this.Ts():Jt.rt&&(this._s=Jt.rt.Ut(),this._s||(Jt.rt.It=0,Jt.rt.Bt=0,this.Ns())))},Ns(){if(Jt.nt.ls(),!this.dt()||!Jt.nt.ds()){if(Jt.nt.wt._t<=0)return Jt.lt=!0,Jt.ut.$s(),void Jt.it.play();this._s=null,Jt.rt.Bt<1&&!Jt.rt.It&&(Jt.rt.Bt=Jt.rt.Ct,Jt.rt.It=1,Jt.rt=this.next())}},get(){return this.As[this.ks]},dt(){return this.get()===Jt.nt.wt},next(){return++this.ks>=this.As.length&&(this.ks=0),this.get()},Wt(t){for(let s=0;s<this.As.length;s++){if(this.As[s]===t){this.As.splice(s,1),s<=this.ks&&this.ks--;break}}},reset(){this.As=[],this.ks=0,this._s=null}},Jt.ut={Hs:[],Fs:{},Bs:t=>(new DOMParser).parseFromString(t,"text/html").body.firstChild,yt(){const t=Jt.nt.wt;t&&!P&&(V.font="600 16px monospace",V.textAlign="left",V.textBaseline="top",this.writeText("SP "+t._t.toFixed(),16,28,"#fff","#000"),this.writeText("MV "+t.Bt.toFixed(1),16,50,"#fff","#000"),this.writeText("[1] Direct Attack,   0 SP",16,94,0==t.ss?"#c7e":"#fff","#000"),this.writeText("[2] Sweeping Blow, -10 SP",16,116,1==t.ss?"#c7e":"#fff","#000"),this.writeText("[3] Throw Hatchet, -10 SP",16,138,2==t.ss?"#c7e":"#fff","#000"),this.bt&&(this.bt.hidden=!Jt.ct.dt())),P&&this.bt&&(this.bt.hidden=!0);for(let t=this.Hs.length-1;t>=0;t--){(0,this.Hs[t])()&&this.Hs.splice(t,1)}},Rt(t,s){const i=new f(.5),h=R(t.I),e=s.I.i(t.I).normalize();this.Hs.push((()=>{if(i.D())return!0;const t=Math.sqrt(i.N()),s=Math.round(h.x-e.x*t*48),n=Math.round(h.y+e.y*t*48);return V.globalAlpha=1-t*t,V.fillStyle="#f00",V.fillRect(s,n,8,8),V.fillStyle="#a00",V.fillRect(s+4,n+5,6,6),V.fillStyle="#600",V.fillRect(s+6,n+3,9,9),V.globalAlpha=1,!1}))},qt(){const t=new f(.2);this.Hs.push((()=>t.D()?(Jt.nt.offset=u(),!0):(Jt.nt.offset=u(c(.025,-.025),c(.025,-.025)),!1)))},Et(t,s){const i=new f(2),h=R(t.I.add(u(0,.25))),e=s>0?"#0f0":"#f00",n=s>0?"+":"";this.Hs.push((()=>{if(i.D())return!0;const t=i.N();return V.font="600 16px monospace",V.textAlign="center",V.textBaseline="top",V.globalAlpha=1-t,this.writeText(n+s+" SP",h.x,h.y-16*t,e,"#000"),V.globalAlpha=1,!1}))},vs(){for(const t in this.Fs)this.Fs[t].style.display="none"},init(){let t=0;window.onresize=e=>{clearTimeout(t),t=setTimeout((()=>{const t=.5*(window.innerHeight-B.height);s.style.left=.5*(window.innerWidth-s.getBoundingClientRect().width)+"px",s.style.top=16+t+"px",i.style.left=16+.5*(window.innerWidth-B.width)+"px",i.style.top=92+t+"px";const e=h(800,B.width);for(const s in this.Fs){const i=this.Fs[s];i.style.bottom=20+t+"px",i.style.left=.5*(window.innerWidth-e-20)+"px",i.style.width=e+"px"}}),100)},document.onmouseover=t=>{this.Ss="CANVAS"===t.target.tagName};const s=this.Bs("<button>[E]nd Turn</button>"),i=this.Bs('<div class="b"><button style="top:0">[1] Direct Attack,   0 SP</button><button style="top:22px">[2] Sweeping Blow, -10 SP</button><button style="top:44px">[3] Throw Hatchet, -10 SP</button></div>');document.body.append(s,i),window.onresize(),s.onclick=()=>{Jt.rt.Bt=0,Jt.rt.It=0,Jt.ct.Ns()},i.querySelectorAll("button").forEach((t=>{t.onclick=s=>Jt.rt.gt(Number(t.textContent.substring(1,2))-1)})),this.bt=s},bs(t){document.body.style.cursor=t},$s(){if(this.Is)return;const t=this.Bs('<div style="background:#000a;color:#c7e;font-size:32px;font-style:italic;font-weight:600;height:100vh;padding-top:45%;position:absolute;text-align:center;width:100%">Since your body was destroyed,<br>you have failed the trial.<br>Your soul remains in Niflheim.<br><br>END</div>');document.body.append(t),this.Is=t},gs(t,s,i,e){let n=this.Fs[t];if(n)n.style.display="flex";else{const o=h(800,B.width),r=20+(window.innerHeight-B.height)/2,c=(window.innerWidth-o-20)/2;n=this.Bs(`<div style="background:#000c;border:4px solid #fff;bottom:${r}px;display:flex;flex-direction:column;left:${c}px;min-height:200px;padding:10px;position:absolute;width:${o}px"><div style="color:#c7e;font-style:italic;font-weight:600;margin:0 0 10px">${s}</div><div style="flex: 1 1">${i}</div><button style="display:block;font-size:21px;margin:10px 0 0;padding:10px;position:static">Continue</button></div>`),document.body.append(n),n.querySelector("button").onclick=s=>{n.remove(),delete this.Fs[t],e()},this.Fs[t]=n}},writeText(t,s,i,h,e,n=u(1)){s=Math.round(s),i=Math.round(i),V.fillStyle=e,V.fillText(t,s-n.x,i-n.y),V.fillStyle=h,V.fillText(t,s,i)}};