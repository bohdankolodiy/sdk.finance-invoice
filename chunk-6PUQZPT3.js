import{A as at,a as tt,b as fe,c as X,d as K,f as he,l as rt,m as B,n as Y,s as nt,t as Q,v as it}from"./chunk-U6O6IKUS.js";import{a as Ge,b as ze,c as We,d as Xe,e as Ke,f as Ye,g as Qe,h as Ze,i as W,k as $e,l as Je,p as et}from"./chunk-XC525HBN.js";import{$ as c,$a as ae,$b as Oe,Aa as Le,Bb as xe,Bc as ue,Cb as F,Da as x,Eb as p,Fa as L,Ic as Ue,Jc as je,Kc as Ve,Mb as E,Ob as S,Pa as ke,Qa as ie,R as Ce,S as j,T as ee,Ta as o,Tb as le,Ua as w,V as l,Va as Ie,Xa as G,Y as V,Ya as Me,Za as z,_ as u,_b as Re,ab as N,bc as He,c as ye,db as k,dc as P,ea as te,f as g,g as we,ia as D,jb as R,kb as O,l as Ne,lb as h,ma as De,mb as H,mc as qe,nc as Fe,oa as re,ob as v,pa as ne,qc as b,rc as Pe,ua as A,ub as m,uc as Be,vb as _,wa as Ae,wb as q,xb as se,yb as oe,z as Se,zb as ce}from"./chunk-VBMR5KX7.js";import{a as d,b as C,g as Te}from"./chunk-DM275RSA.js";function Ct(i){i||(De(Ct),i=c(Ae));let r=new ye(e=>i.onDestroy(e.next.bind(e)));return e=>e.pipe(Ce(r))}var At=(()=>{let r=class r extends Q{constructor(t,n,a){super(t,n,a,c(G,{optional:!0}))}ngOnDestroy(){this.flush()}};r.\u0275fac=function(n){return new(n||r)(u(b),u(B),u(Y))},r.\u0275prov=l({token:r,factory:r.\u0275fac});let i=r;return i})();function Lt(){return new nt}function kt(i,r,e){return new at(i,r,e)}var ct=[{provide:Y,useFactory:Lt},{provide:Q,useClass:At},{provide:z,useFactory:kt,deps:[W,Q,N]}],kr=[{provide:B,useFactory:()=>new it},{provide:x,useValue:"BrowserAnimations"},...ct],It=[{provide:B,useClass:rt},{provide:x,useValue:"NoopAnimations"},...ct];function lt(){return[...It]}var Mt=(()=>{let r=class r{\u0275loadImpl(){return Te(this,null,function*(){if(!this.xhrImpl){let{default:t}=yield import("./chunk-XNQN2BLX.js");this.xhrImpl=t}})}build(){let t=this.xhrImpl;if(!t)throw new Error("Unexpected state in ServerXhr: XHR implementation is not loaded.");return new t.XMLHttpRequest}};r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=l({token:r,factory:r.\u0275fac});let i=r;return i})();function xt(i,r){let e=c(Pe),{href:t,protocol:n,hostname:a,port:s}=e;if(!n.startsWith("http"))return r(i);let f=`${n}//${a}`;s&&(f+=`:${s}`);let T=e.getBaseHrefFromDOM()||t,U=new URL(T,f),y=new URL(i.url,U).toString();return r(i.clone({url:y}))}var Rt=[{provide:Ve,useClass:Mt},{provide:We,useValue:xt,multi:!0}];var Ot=new V("Server.RENDER_MODULE_HOOK");var Ht=(()=>{let r=class r extends Ze{constructor(t){super(t),this.doc=t}supports(t){return!0}addEventListener(t,n,a){return Fe().onAndCancel(t,n,a)}};r.\u0275fac=function(n){return new(n||r)(u(b))},r.\u0275prov=l({token:r,factory:r.\u0275fac});let i=r;return i})(),qt=[{provide:Ot,useFactory:Ft,deps:[b,Le,L],multi:!0}];function Ft(i,r,e){return()=>{let t=e.toJson();if(e.isEmpty)return;let n=i.createElement("script");n.id=r+"-state",n.setAttribute("type","application/json"),n.textContent=t,i.body.appendChild(n)}}var Pt=[{provide:Qe,multi:!0,useClass:Ht}],Bt=[qt,Pt,Rt,{provide:Oe,useValue:null},{provide:Re,useValue:null},{provide:Ue,useClass:je}];function ut(){return D([lt(),...Bt])}var ft=[{path:"front-office",loadChildren:()=>import("./chunk-EFBHUFYJ.js").then(i=>i.routes)},{path:"**",redirectTo:"front-office"},{path:"",pathMatch:"full",redirectTo:"front-office"}];var Ut="@",jt=(()=>{let r=class r{constructor(t,n,a,s,f){this.doc=t,this.delegate=n,this.zone=a,this.animationType=s,this.moduleImpl=f,this._rendererFactoryPromise=null,this.scheduler=c(G,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-MDO7PSGD.js")).catch(n=>{throw new ee(5300,!1)}).then(({\u0275createEngine:n,\u0275AnimationRendererFactory:a})=>{this._engine=n(this.animationType,this.doc,this.scheduler);let s=new a(this.delegate,this._engine,this.zone);return this.delegate=s,s})}createRenderer(t,n){let a=this.delegate.createRenderer(t,n);if(a.\u0275type===0)return a;typeof a.throwOnSyntheticProps=="boolean"&&(a.throwOnSyntheticProps=!1);let s=new pe(a);return n?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(f=>{let T=f.createRenderer(t,n);s.use(T)}).catch(f=>{s.use(a)}),s}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};r.\u0275fac=function(n){Ie()},r.\u0275prov=l({token:r,factory:r.\u0275fac});let i=r;return i})(),pe=class{constructor(r){this.delegate=r,this.replay=[],this.\u0275type=1}use(r){if(this.delegate=r,this.replay!==null){for(let e of this.replay)e(r);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(r,e){return this.delegate.createElement(r,e)}createComment(r){return this.delegate.createComment(r)}createText(r){return this.delegate.createText(r)}get destroyNode(){return this.delegate.destroyNode}appendChild(r,e){this.delegate.appendChild(r,e)}insertBefore(r,e,t,n){this.delegate.insertBefore(r,e,t,n)}removeChild(r,e,t){this.delegate.removeChild(r,e,t)}selectRootElement(r,e){return this.delegate.selectRootElement(r,e)}parentNode(r){return this.delegate.parentNode(r)}nextSibling(r){return this.delegate.nextSibling(r)}setAttribute(r,e,t,n){this.delegate.setAttribute(r,e,t,n)}removeAttribute(r,e,t){this.delegate.removeAttribute(r,e,t)}addClass(r,e){this.delegate.addClass(r,e)}removeClass(r,e){this.delegate.removeClass(r,e)}setStyle(r,e,t,n){this.delegate.setStyle(r,e,t,n)}removeStyle(r,e,t){this.delegate.removeStyle(r,e,t)}setProperty(r,e,t){this.shouldReplay(e)&&this.replay.push(n=>n.setProperty(r,e,t)),this.delegate.setProperty(r,e,t)}setValue(r,e){this.delegate.setValue(r,e)}listen(r,e,t){return this.shouldReplay(e)&&this.replay.push(n=>n.listen(r,e,t)),this.delegate.listen(r,e,t)}shouldReplay(r){return this.replay!==null&&r.startsWith(Ut)}};function ht(i="animations"){return ae("NgAsyncAnimations"),D([{provide:z,useFactory:(r,e,t)=>new jt(r,e,t,i),deps:[b,W,N]},{provide:x,useValue:i==="noop"?"NoopAnimations":"BrowserAnimations"}])}var pt=(()=>{let r=class r{constructor(){this.loadingSub=new we(!1),this.loadingMap=new Map}setLoading(t,n){if(!n)throw new Error("The request URL must be provided to the LoadingService.setLoading function");t===!0?(this.loadingMap.set(n,t),this.loadingSub.next(!0)):t===!1&&this.loadingMap.has(n)&&this.loadingMap.delete(n),this.loadingMap.size===0&&this.loadingSub.next(!1)}};r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var dt=i=>{let r="";switch(i.status){case 400:r=`${i.status} - ${i.error}`;break;case 401:r=`${i.status} - Unauthorized User`;break;case 404:r=`${i.status} - ${i.error||"Something went wrong"}`;break;case 405:r=`${i.status} - ${i.error||"Method Not Allowed"}`;break;case 429:r=`${i.status} - Too many requests`;break;default:r="Something went wrong. Please try again later";break}return r};var Z=(()=>{let r=class r{constructor(){this.notifySub=new g}};r.\u0275fac=function(n){return new(n||r)},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();var gt=(i,r)=>{let e=c(Z),t=c(pt),n=c(mt).apiPath;return t.setLoading(!0,i.url),r(i).pipe(j(a=>(i.url.includes(n)&&a instanceof Ge&&t.setLoading(!1,i.url),a)),Se(a=>{let s=dt(a);return t.setLoading(!1,i.url),e.notifySub.next({type:"error",message:s}),Ne(()=>a)}))};var bt=["toast-component",""];function Gt(i,r){if(i&1){let e=ce();m(0,"button",5),F("click",function(){re(e);let n=p();return ne(n.remove())}),m(1,"span",6),E(2,"\xD7"),_()()}}function zt(i,r){if(i&1&&(se(0),E(1),oe()),i&2){let e=p(2);o(),S("[",e.duplicatesCount+1,"]")}}function Wt(i,r){if(i&1&&(m(0,"div"),E(1),R(2,zt,2,1,"ng-container",4),_()),i&2){let e=p();v(e.options.titleClass),O("aria-label",e.title),o(),S(" ",e.title," "),o(),h("ngIf",e.duplicatesCount)}}function Xt(i,r){if(i&1&&q(0,"div",7),i&2){let e=p();v(e.options.messageClass),h("innerHTML",e.message,ie)}}function Kt(i,r){if(i&1&&(m(0,"div",8),E(1),_()),i&2){let e=p();v(e.options.messageClass),O("aria-label",e.message),o(),S(" ",e.message," ")}}function Yt(i,r){if(i&1&&(m(0,"div"),q(1,"div",9),_()),i&2){let e=p();o(),H("width",e.width()+"%")}}function Qt(i,r){if(i&1){let e=ce();m(0,"button",5),F("click",function(){re(e);let n=p();return ne(n.remove())}),m(1,"span",6),E(2,"\xD7"),_()()}}function Zt(i,r){if(i&1&&(se(0),E(1),oe()),i&2){let e=p(2);o(),S("[",e.duplicatesCount+1,"]")}}function $t(i,r){if(i&1&&(m(0,"div"),E(1),R(2,Zt,2,1,"ng-container",4),_()),i&2){let e=p();v(e.options.titleClass),O("aria-label",e.title),o(),S(" ",e.title," "),o(),h("ngIf",e.duplicatesCount)}}function Jt(i,r){if(i&1&&q(0,"div",7),i&2){let e=p();v(e.options.messageClass),h("innerHTML",e.message,ie)}}function er(i,r){if(i&1&&(m(0,"div",8),E(1),_()),i&2){let e=p();v(e.options.messageClass),O("aria-label",e.message),o(),S(" ",e.message," ")}}function tr(i,r){if(i&1&&(m(0,"div"),q(1,"div",9),_()),i&2){let e=p();o(),H("width",e.width()+"%")}}var de=class{_attachedHost;component;viewContainerRef;injector;constructor(r,e){this.component=r,this.injector=e}attach(r,e){return this._attachedHost=r,r.attach(this,e)}detach(){let r=this._attachedHost;if(r)return this._attachedHost=void 0,r.detach()}get isAttached(){return this._attachedHost!=null}setAttachedHost(r){this._attachedHost=r}},me=class{_attachedPortal;_disposeFn;attach(r,e){return this._attachedPortal=r,this.attachComponentPortal(r,e)}detach(){this._attachedPortal&&this._attachedPortal.setAttachedHost(),this._attachedPortal=void 0,this._disposeFn&&(this._disposeFn(),this._disposeFn=void 0)}setDisposeFn(r){this._disposeFn=r}},ge=class{_overlayRef;componentInstance;duplicatesCount=0;_afterClosed=new g;_activate=new g;_manualClose=new g;_resetTimeout=new g;_countDuplicate=new g;constructor(r){this._overlayRef=r}manualClose(){this._manualClose.next(),this._manualClose.complete()}manualClosed(){return this._manualClose.asObservable()}timeoutReset(){return this._resetTimeout.asObservable()}countDuplicate(){return this._countDuplicate.asObservable()}close(){this._overlayRef.detach(),this._afterClosed.next(),this._manualClose.next(),this._afterClosed.complete(),this._manualClose.complete(),this._activate.complete(),this._resetTimeout.complete(),this._countDuplicate.complete()}afterClosed(){return this._afterClosed.asObservable()}isInactive(){return this._activate.isStopped}activate(){this._activate.next(),this._activate.complete()}afterActivate(){return this._activate.asObservable()}onDuplicate(r,e){r&&this._resetTimeout.next(),e&&this._countDuplicate.next(++this.duplicatesCount)}},M=class{toastId;config;message;title;toastType;toastRef;_onTap=new g;_onAction=new g;constructor(r,e,t,n,a,s){this.toastId=r,this.config=e,this.message=t,this.title=n,this.toastType=a,this.toastRef=s,this.toastRef.afterClosed().subscribe(()=>{this._onAction.complete(),this._onTap.complete()})}triggerTap(){this._onTap.next(),this.config.tapToDismiss&&this._onTap.complete()}onTap(){return this._onTap.asObservable()}triggerAction(r){this._onAction.next(r)}onAction(){return this._onAction.asObservable()}},vt={maxOpened:0,autoDismiss:!1,newestOnTop:!0,preventDuplicates:!1,countDuplicates:!1,resetTimeoutOnDuplicate:!1,includeTitleDuplicates:!1,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},closeButton:!1,disableTimeOut:!1,timeOut:5e3,extendedTimeOut:1e3,enableHtml:!1,progressBar:!1,toastClass:"ngx-toastr",positionClass:"toast-top-right",titleClass:"toast-title",messageClass:"toast-message",easing:"ease-in",easeTime:300,tapToDismiss:!0,onActivateTick:!1,progressAnimation:"decreasing"},_t=new V("ToastConfig"),be=class extends me{_hostDomElement;_componentFactoryResolver;_appRef;constructor(r,e,t){super(),this._hostDomElement=r,this._componentFactoryResolver=e,this._appRef=t}attachComponentPortal(r,e){let t=this._componentFactoryResolver.resolveComponentFactory(r.component),n;return n=t.create(r.injector),this._appRef.attachView(n.hostView),this.setDisposeFn(()=>{this._appRef.detachView(n.hostView),n.destroy()}),e?this._hostDomElement.insertBefore(this._getComponentRootNode(n),this._hostDomElement.firstChild):this._hostDomElement.appendChild(this._getComponentRootNode(n)),n}_getComponentRootNode(r){return r.hostView.rootNodes[0]}},rr=(()=>{class i{_document=c(b);_containerElement;ngOnDestroy(){this._containerElement&&this._containerElement.parentNode&&this._containerElement.parentNode.removeChild(this._containerElement)}getContainerElement(){return this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=this._document.createElement("div");e.classList.add("overlay-container"),e.setAttribute("aria-live","polite"),this._document.body.appendChild(e),this._containerElement=e}static \u0275fac=function(t){return new(t||i)};static \u0275prov=l({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ve=class{_portalHost;constructor(r){this._portalHost=r}attach(r,e=!0){return this._portalHost.attach(r,e)}detach(){return this._portalHost.detach()}},nr=(()=>{class i{_overlayContainer=c(rr);_componentFactoryResolver=c(Me);_appRef=c(P);_document=c(b);_paneElements=new Map;create(e,t){return this._createOverlayRef(this.getPaneElement(e,t))}getPaneElement(e="",t){return this._paneElements.get(t)||this._paneElements.set(t,{}),this._paneElements.get(t)[e]||(this._paneElements.get(t)[e]=this._createPaneElement(e,t)),this._paneElements.get(t)[e]}_createPaneElement(e,t){let n=this._document.createElement("div");return n.id="toast-container",n.classList.add(e),n.classList.add("toast-container"),t?t.getContainerElement().appendChild(n):this._overlayContainer.getContainerElement().appendChild(n),n}_createPortalHost(e){return new be(e,this._componentFactoryResolver,this._appRef)}_createOverlayRef(e){return new ve(this._createPortalHost(e))}static \u0275fac=function(t){return new(t||i)};static \u0275prov=l({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),Et=(()=>{class i{overlay;_injector;sanitizer;ngZone;toastrConfig;currentlyActive=0;toasts=[];overlayContainer;previousToastMessage;index=0;constructor(e,t,n,a,s){this.overlay=t,this._injector=n,this.sanitizer=a,this.ngZone=s,this.toastrConfig=d(d({},e.default),e.config),e.config.iconClasses&&(this.toastrConfig.iconClasses=d(d({},e.default.iconClasses),e.config.iconClasses))}show(e,t,n={},a=""){return this._preBuildNotification(a,e,t,this.applyConfig(n))}success(e,t,n={}){let a=this.toastrConfig.iconClasses.success||"";return this._preBuildNotification(a,e,t,this.applyConfig(n))}error(e,t,n={}){let a=this.toastrConfig.iconClasses.error||"";return this._preBuildNotification(a,e,t,this.applyConfig(n))}info(e,t,n={}){let a=this.toastrConfig.iconClasses.info||"";return this._preBuildNotification(a,e,t,this.applyConfig(n))}warning(e,t,n={}){let a=this.toastrConfig.iconClasses.warning||"";return this._preBuildNotification(a,e,t,this.applyConfig(n))}clear(e){for(let t of this.toasts)if(e!==void 0){if(t.toastId===e){t.toastRef.manualClose();return}}else t.toastRef.manualClose()}remove(e){let t=this._findToast(e);if(!t||(t.activeToast.toastRef.close(),this.toasts.splice(t.index,1),this.currentlyActive=this.currentlyActive-1,!this.toastrConfig.maxOpened||!this.toasts.length))return!1;if(this.currentlyActive<this.toastrConfig.maxOpened&&this.toasts[this.currentlyActive]){let n=this.toasts[this.currentlyActive].toastRef;n.isInactive()||(this.currentlyActive=this.currentlyActive+1,n.activate())}return!0}findDuplicate(e="",t="",n,a){let{includeTitleDuplicates:s}=this.toastrConfig;for(let f of this.toasts){let T=s&&f.title===e;if((!s||T)&&f.message===t)return f.toastRef.onDuplicate(n,a),f}return null}applyConfig(e={}){return d(d({},this.toastrConfig),e)}_findToast(e){for(let t=0;t<this.toasts.length;t++)if(this.toasts[t].toastId===e)return{index:t,activeToast:this.toasts[t]};return null}_preBuildNotification(e,t,n,a){return a.onActivateTick?this.ngZone.run(()=>this._buildNotification(e,t,n,a)):this._buildNotification(e,t,n,a)}_buildNotification(e,t,n,a){if(!a.toastComponent)throw new Error("toastComponent required");let s=this.findDuplicate(n,t,this.toastrConfig.resetTimeoutOnDuplicate&&a.timeOut>0,this.toastrConfig.countDuplicates);if((this.toastrConfig.includeTitleDuplicates&&n||t)&&this.toastrConfig.preventDuplicates&&s!==null)return s;this.previousToastMessage=t;let f=!1;this.toastrConfig.maxOpened&&this.currentlyActive>=this.toastrConfig.maxOpened&&(f=!0,this.toastrConfig.autoDismiss&&this.clear(this.toasts[0].toastId));let T=this.overlay.create(a.positionClass,this.overlayContainer);this.index=this.index+1;let U=t;t&&a.enableHtml&&(U=this.sanitizer.sanitize(ke.HTML,t));let y=new ge(T),$=new M(this.index,a,U,n,e,y),wt=[{provide:M,useValue:$}],Nt=A.create({providers:wt,parent:this._injector}),St=new de(a.toastComponent,Nt),Ee=T.attach(St,a.newestOnTop);y.componentInstance=Ee.instance;let J={toastId:this.index,title:n||"",message:t||"",toastRef:y,onShown:y.afterActivate(),onHidden:y.afterClosed(),onTap:$.onTap(),onAction:$.onAction(),portal:Ee};return f||(this.currentlyActive=this.currentlyActive+1,setTimeout(()=>{J.toastRef.activate()})),this.toasts.push(J),J}static \u0275fac=function(t){return new(t||i)(u(_t),u(nr),u(A),u($e),u(N))};static \u0275prov=l({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})(),ir=(()=>{class i{toastrService;toastPackage;ngZone;message;title;options;duplicatesCount;originalTimeout;width=k(-1);toastClasses="";state;get _state(){return this.state()}get displayStyle(){if(this.state().value==="inactive")return"none"}timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,n){this.toastrService=e,this.toastPackage=t,this.ngZone=n,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(a=>{this.duplicatesCount=a}),this.state=k({value:"inactive",params:{easeTime:this.toastPackage.config.easeTime,easing:"ease-in"}})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.update(e=>C(d({},e),{value:"active"})),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.outsideTimeout(()=>this.remove(),this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width.set(t/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.update(e=>C(d({},e),{value:"active"})),this.outsideTimeout(()=>this.remove(),this.originalTimeout),this.options.timeOut=this.originalTimeout,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10)}remove(){this.state().value!=="removed"&&(clearTimeout(this.timeout),this.state.update(e=>C(d({},e),{value:"removed"})),this.outsideTimeout(()=>this.toastrService.remove(this.toastPackage.toastId),+this.toastPackage.config.easeTime))}tapToast(){this.state().value!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state().value!=="removed"&&this.options.disableTimeOut!=="extendedTimeOut"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state().value==="removed"||(this.outsideTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&this.outsideInterval(()=>this.updateProgress(),10))}outsideTimeout(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.timeout=setTimeout(()=>this.runInsideAngular(e),t)):this.timeout=setTimeout(()=>e(),t)}outsideInterval(e,t){this.ngZone?this.ngZone.runOutsideAngular(()=>this.intervalId=setInterval(()=>this.runInsideAngular(e),t)):this.intervalId=setInterval(()=>e(),t)}runInsideAngular(e){this.ngZone?this.ngZone.run(()=>e()):e()}static \u0275fac=function(t){return new(t||i)(w(Et),w(M),w(N))};static \u0275cmp=te({type:i,selectors:[["","toast-component",""]],hostVars:5,hostBindings:function(t,n){t&1&&F("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),t&2&&(xe("@flyInOut",n._state),v(n.toastClasses),H("display",n.displayStyle))},standalone:!0,features:[le],attrs:bt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,n){t&1&&R(0,Gt,3,0,"button",0)(1,Wt,3,5,"div",1)(2,Xt,1,3,"div",2)(3,Kt,2,4,"div",3)(4,Yt,2,2,"div",4),t&2&&(h("ngIf",n.options.closeButton),o(),h("ngIf",n.title),o(),h("ngIf",n.message&&n.options.enableHtml),o(),h("ngIf",n.message&&!n.options.enableHtml),o(),h("ngIf",n.options.progressBar))},dependencies:[ue],encapsulation:2,data:{animation:[tt("flyInOut",[K("inactive",X({opacity:0})),K("active",X({opacity:1})),K("removed",X({opacity:0})),he("inactive => active",fe("{{ easeTime }}ms {{ easing }}")),he("active => removed",fe("{{ easeTime }}ms {{ easing }}"))])]},changeDetection:0})}return i})(),ar=C(d({},vt),{toastComponent:ir}),Tt=(i={})=>D([{provide:_t,useValue:{default:ar,config:i}}]);var sr=(()=>{class i{toastrService;toastPackage;appRef;message;title;options;duplicatesCount;originalTimeout;width=k(-1);toastClasses="";get displayStyle(){return this.state()==="inactive"?"none":null}state=k("inactive");timeout;intervalId;hideTime;sub;sub1;sub2;sub3;constructor(e,t,n){this.toastrService=e,this.toastPackage=t,this.appRef=n,this.message=t.message,this.title=t.title,this.options=t.config,this.originalTimeout=t.config.timeOut,this.toastClasses=`${t.toastType} ${t.config.toastClass}`,this.sub=t.toastRef.afterActivate().subscribe(()=>{this.activateToast()}),this.sub1=t.toastRef.manualClosed().subscribe(()=>{this.remove()}),this.sub2=t.toastRef.timeoutReset().subscribe(()=>{this.resetTimeout()}),this.sub3=t.toastRef.countDuplicate().subscribe(a=>{this.duplicatesCount=a})}ngOnDestroy(){this.sub.unsubscribe(),this.sub1.unsubscribe(),this.sub2.unsubscribe(),this.sub3.unsubscribe(),clearInterval(this.intervalId),clearTimeout(this.timeout)}activateToast(){this.state.set("active"),!(this.options.disableTimeOut===!0||this.options.disableTimeOut==="timeOut")&&this.options.timeOut&&(this.timeout=setTimeout(()=>{this.remove()},this.options.timeOut),this.hideTime=new Date().getTime()+this.options.timeOut,this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))),this.options.onActivateTick&&this.appRef.tick()}updateProgress(){if(this.width()===0||this.width()===100||!this.options.timeOut)return;let e=new Date().getTime(),t=this.hideTime-e;this.width.set(t/this.options.timeOut*100),this.options.progressAnimation==="increasing"&&this.width.update(n=>100-n),this.width()<=0&&this.width.set(0),this.width()>=100&&this.width.set(100)}resetTimeout(){clearTimeout(this.timeout),clearInterval(this.intervalId),this.state.set("active"),this.options.timeOut=this.originalTimeout,this.timeout=setTimeout(()=>this.remove(),this.originalTimeout),this.hideTime=new Date().getTime()+(this.originalTimeout||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10))}remove(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.state.set("removed"),this.timeout=setTimeout(()=>this.toastrService.remove(this.toastPackage.toastId)))}tapToast(){this.state()!=="removed"&&(this.toastPackage.triggerTap(),this.options.tapToDismiss&&this.remove())}stickAround(){this.state()!=="removed"&&(clearTimeout(this.timeout),this.options.timeOut=0,this.hideTime=0,clearInterval(this.intervalId),this.width.set(0))}delayedHideToast(){this.options.disableTimeOut===!0||this.options.disableTimeOut==="extendedTimeOut"||this.options.extendedTimeOut===0||this.state()==="removed"||(this.timeout=setTimeout(()=>this.remove(),this.options.extendedTimeOut),this.options.timeOut=this.options.extendedTimeOut,this.hideTime=new Date().getTime()+(this.options.timeOut||0),this.width.set(-1),this.options.progressBar&&(this.intervalId=setInterval(()=>this.updateProgress(),10)))}static \u0275fac=function(t){return new(t||i)(w(Et),w(M),w(P))};static \u0275cmp=te({type:i,selectors:[["","toast-component",""]],hostVars:4,hostBindings:function(t,n){t&1&&F("click",function(){return n.tapToast()})("mouseenter",function(){return n.stickAround()})("mouseleave",function(){return n.delayedHideToast()}),t&2&&(v(n.toastClasses),H("display",n.displayStyle))},standalone:!0,features:[le],attrs:bt,decls:5,vars:5,consts:[["type","button","class","toast-close-button","aria-label","Close",3,"click",4,"ngIf"],[3,"class",4,"ngIf"],["role","alert",3,"class","innerHTML",4,"ngIf"],["role","alert",3,"class",4,"ngIf"],[4,"ngIf"],["type","button","aria-label","Close",1,"toast-close-button",3,"click"],["aria-hidden","true"],["role","alert",3,"innerHTML"],["role","alert"],[1,"toast-progress"]],template:function(t,n){t&1&&R(0,Qt,3,0,"button",0)(1,$t,3,5,"div",1)(2,Jt,1,3,"div",2)(3,er,2,4,"div",3)(4,tr,2,2,"div",4),t&2&&(h("ngIf",n.options.closeButton),o(),h("ngIf",n.title),o(),h("ngIf",n.message&&n.options.enableHtml),o(),h("ngIf",n.message&&!n.options.enableHtml),o(),h("ngIf",n.options.progressBar))},dependencies:[ue],encapsulation:2,changeDetection:0})}return i})(),Un=C(d({},vt),{toastComponent:sr});function or(){return"production"}var cr=or(),lr=cr==="production"?"https://bohdankolodiy.github.io/sdk-finance-invoice/":"/",yt={providers:[et(ft),Je(),Xe(Ye(),Ke([gt])),ht(),Tt({timeOut:1e4,positionClass:"toast-bottom-left",preventDuplicates:!0,progressBar:!0,newestOnTop:!0,closeButton:!0}),{provide:Be,useValue:lr}]};var _e="env";function ur(i){return()=>{let r={API_URL:"https://apimtt.binariks.net"};i.set(_e,r)}}var fr={providers:[ut(),{provide:He,useFactory:ur,deps:[L],multi:!0}]},ni=qe(yt,fr);var mt=(()=>{let r=class r{constructor(t,n,a){this.http=t,this.transferState=n,this.notifier=a}getInvoices(){return this.http.get(`${this.apiPath}/sdk-finance/invoice`)}createInvoices(t){return this.http.post(`${this.apiPath}/sdk-finance/invoice?customerId=${t.customerId}&end=${t.endDate}&start=${t.startDate}`,t).pipe(j(()=>this.notifier.notifySub.next({type:"success",message:"Invoice was created"})))}get apiPath(){return this.transferState.get(_e,{API_URL:""}).API_URL}};r.\u0275fac=function(n){return new(n||r)(u(ze),u(L),u(Z))},r.\u0275prov=l({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{Ct as a,Z as b,mt as c,pt as d,Et as e,yt as f};