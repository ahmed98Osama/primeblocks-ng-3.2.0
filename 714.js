"use strict";(self.webpackChunkprimeblocks=self.webpackChunkprimeblocks||[]).push([[714],{3797:(D,v,s)=>{s.d(v,{a:()=>u,h:()=>h});var l=s(4942),O=s(6895),i=s(8256);const f=["code"];class h{constructor(c){(0,l.Z)(this,"el",void 0),(0,l.Z)(this,"lang","markup"),(0,l.Z)(this,"codeViewChild",void 0),this.el=c}ngAfterViewInit(){window.Prism&&this.codeViewChild&&this.codeViewChild.nativeElement&&window.Prism.highlightElement(this.codeViewChild.nativeElement)}}(0,l.Z)(h,"\u0275fac",function(c){return new(c||h)(i.Y36(i.SBq))}),(0,l.Z)(h,"\u0275cmp",i.Xpm({type:h,selectors:[["app-code"]],viewQuery:function(c,t){if(1&c&&i.Gf(f,5),2&c){let r;i.iGM(r=i.CRH())&&(t.codeViewChild=r.first)}},inputs:{lang:"lang"},ngContentSelectors:["*"],decls:5,vars:1,consts:[[3,"ngClass"],["code",""]],template:function(c,t){1&c&&(i.F$t(),i.TgZ(0,"pre",0)(1,"code",null,1),i.Hsn(3),i._uU(4,"\n"),i.qZA()()),2&c&&i.Q6J("ngClass","language-"+t.lang)},dependencies:[O.mk],encapsulation:2}));class u{}(0,l.Z)(u,"\u0275fac",function(c){return new(c||u)}),(0,l.Z)(u,"\u0275mod",i.oAB({type:u})),(0,l.Z)(u,"\u0275inj",i.cJS({imports:[O.ez]}))},6181:(D,v,s)=>{function l(n,p,o,_,g,L,w){try{var b=n[L](w),m=b.value}catch(P){return void o(P)}b.done?p(m):Promise.resolve(m).then(_,g)}s.d(v,{e:()=>E});var i=s(4942),f=s(2340),e=s(8256),h=s(6895),u=s(3797),a=s(3608);function c(n,p){1&n&&(e.TgZ(0,"span",15),e._uU(1,"Free"),e.qZA())}function t(n,p){1&n&&(e.TgZ(0,"span",16),e._uU(1,"New"),e.qZA())}function r(n,p){1&n&&e._UZ(0,"i",17)}function d(n,p){if(1&n&&(e.TgZ(0,"div",18),e.Hsn(1),e.qZA()),2&n){const o=e.oxw();e.Tol(o.containerClass),e.Q6J("ngStyle",o.previewStyle)}}function k(n,p){if(1&n&&(e.TgZ(0,"div")(1,"app-code",19),e._uU(2),e.qZA()()),2&n){const o=e.oxw();e.xp6(2),e.hij("",o.code,"\n")}}const V=function(n){return{"block-action-active":n}},y=function(n,p){return{"block-action-active":n,"block-action-disabled":p}},B=function(n){return{"block-action-disabled":n}};var T=(()=>{return(n=T||(T={}))[n.PREVIEW=0]="PREVIEW",n[n.CODE=1]="CODE",T;var n})();class E{constructor(){(0,i.Z)(this,"header",void 0),(0,i.Z)(this,"code",void 0),(0,i.Z)(this,"containerClass",void 0),(0,i.Z)(this,"previewStyle",void 0),(0,i.Z)(this,"free",!1),(0,i.Z)(this,"new",!1),(0,i.Z)(this,"BlockView",T),(0,i.Z)(this,"blockView",T.PREVIEW)}activateView(p,o){this.codeDisabled||(this.blockView=o),p.preventDefault()}copyCode(p){var o=this;return function O(n){return function(){var p=this,o=arguments;return new Promise(function(_,g){var L=n.apply(p,o);function w(m){l(L,_,g,w,b,"next",m)}function b(m){l(L,_,g,w,b,"throw",m)}w(void 0)})}}(function*(){o.codeDisabled||(yield navigator.clipboard.writeText(o.code)),p.preventDefault()})()}get codeDisabled(){return!this.free&&!!f.N&&f.N.production}}(0,i.Z)(E,"\u0275fac",function(p){return new(p||E)}),(0,i.Z)(E,"\u0275cmp",e.Xpm({type:E,selectors:[["block-viewer"]],inputs:{header:"header",code:"code",containerClass:"containerClass",previewStyle:"previewStyle",free:"free",new:"new"},ngContentSelectors:["*"],decls:20,vars:19,consts:[[1,"block-section"],[1,"block-header"],[1,"block-title"],[1,"text-900"],["class","badge-free text-white",4,"ngIf"],["class","badge-new text-white",4,"ngIf"],[1,"block-actions","text-900"],["tabindex","0",3,"ngClass","click"],[3,"ngClass","click"],["class","pi pi-lock",4,"ngIf"],["pTooltip","Copied to clipboard","tooltipEvent","focus","tooltipPosition","bottom",1,"block-action-copy",3,"ngClass","tooltipDisabled","click"],[1,"pi","pi-copy"],[1,"block-content"],[3,"class","ngStyle",4,"ngIf"],[4,"ngIf"],[1,"badge-free","text-white"],[1,"badge-new","text-white"],[1,"pi","pi-lock"],[3,"ngStyle"],["lang","markup"]],template:function(p,o){1&p&&(e.F$t(),e.TgZ(0,"div",0)(1,"div",1)(2,"span",2)(3,"span",3),e._uU(4),e.qZA(),e.YNc(5,c,2,0,"span",4),e.YNc(6,t,2,0,"span",5),e.qZA(),e.TgZ(7,"div",6)(8,"a",7),e.NdJ("click",function(g){return o.activateView(g,o.BlockView.PREVIEW)}),e.TgZ(9,"span"),e._uU(10,"Preview"),e.qZA()(),e.TgZ(11,"a",8),e.NdJ("click",function(g){return o.activateView(g,o.BlockView.CODE)}),e.YNc(12,r,1,0,"i",9),e.TgZ(13,"span"),e._uU(14,"Code"),e.qZA()(),e.TgZ(15,"a",10),e.NdJ("click",function(g){return o.copyCode(g)}),e._UZ(16,"i",11),e.qZA()()(),e.TgZ(17,"div",12),e.YNc(18,d,2,3,"div",13),e.YNc(19,k,3,1,"div",14),e.qZA()()),2&p&&(e.xp6(4),e.Oqu(o.header),e.xp6(1),e.Q6J("ngIf",o.free),e.xp6(1),e.Q6J("ngIf",o.new),e.xp6(2),e.Q6J("ngClass",e.VKq(12,V,o.blockView==o.BlockView.PREVIEW)),e.xp6(3),e.Q6J("ngClass",e.WLB(14,y,o.blockView==o.BlockView.CODE,o.codeDisabled)),e.uIk("tabindex",o.codeDisabled?null:"0"),e.xp6(1),e.Q6J("ngIf",o.codeDisabled),e.xp6(3),e.Q6J("ngClass",e.VKq(17,B,o.codeDisabled))("tooltipDisabled",o.codeDisabled),e.uIk("tabindex",o.codeDisabled?null:"0"),e.xp6(3),e.Q6J("ngIf",o.blockView==o.BlockView.PREVIEW),e.xp6(1),e.Q6J("ngIf",o.blockView==o.BlockView.CODE&&!o.codeDisabled))},dependencies:[h.mk,h.O5,h.PC,u.h,a.u],encapsulation:2}))},2380:(D,v,s)=>{s.d(v,{y:()=>h});var l=s(4942),O=s(6895),i=s(3797),f=s(3608),e=s(8256);class h{}(0,l.Z)(h,"\u0275fac",function(a){return new(a||h)}),(0,l.Z)(h,"\u0275mod",e.oAB({type:h})),(0,l.Z)(h,"\u0275inj",e.cJS({imports:[O.ez,i.a,f.z]}))},3608:(D,v,s)=>{s.d(v,{u:()=>h,z:()=>u});var l=s(8256),O=s(6895),i=s(9592),f=s(982),e=s(805);let h=(()=>{class a{constructor(t,r,d){this.el=t,this.zone=r,this.config=d,this.escape=!0,this.fitContent=!0,this._tooltipOptions={tooltipPosition:"right",tooltipEvent:"hover",appendTo:"body",tooltipZIndex:"auto",escape:!0,positionTop:0,positionLeft:0}}get disabled(){return this._disabled}set disabled(t){this._disabled=t,this.deactivate()}ngAfterViewInit(){this.zone.runOutsideAngular(()=>{if("hover"===this.getOption("tooltipEvent"))this.mouseEnterListener=this.onMouseEnter.bind(this),this.mouseLeaveListener=this.onMouseLeave.bind(this),this.clickListener=this.onClick.bind(this),this.el.nativeElement.addEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.addEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.addEventListener("click",this.clickListener);else if("focus"===this.getOption("tooltipEvent")){this.focusListener=this.onFocus.bind(this),this.blurListener=this.onBlur.bind(this);let t=this.getTarget(this.el.nativeElement);t.addEventListener("focus",this.focusListener),t.addEventListener("blur",this.blurListener)}})}ngOnChanges(t){t.tooltipPosition&&this.setOption({tooltipPosition:t.tooltipPosition.currentValue}),t.tooltipEvent&&this.setOption({tooltipEvent:t.tooltipEvent.currentValue}),t.appendTo&&this.setOption({appendTo:t.appendTo.currentValue}),t.positionStyle&&this.setOption({positionStyle:t.positionStyle.currentValue}),t.tooltipStyleClass&&this.setOption({tooltipStyleClass:t.tooltipStyleClass.currentValue}),t.tooltipZIndex&&this.setOption({tooltipZIndex:t.tooltipZIndex.currentValue}),t.escape&&this.setOption({escape:t.escape.currentValue}),t.showDelay&&this.setOption({showDelay:t.showDelay.currentValue}),t.hideDelay&&this.setOption({hideDelay:t.hideDelay.currentValue}),t.life&&this.setOption({life:t.life.currentValue}),t.positionTop&&this.setOption({positionTop:t.positionTop.currentValue}),t.positionLeft&&this.setOption({positionLeft:t.positionLeft.currentValue}),t.disabled&&this.setOption({disabled:t.disabled.currentValue}),t.text&&(this.setOption({tooltipLabel:t.text.currentValue}),this.active&&(t.text.currentValue?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide())),t.tooltipOptions&&(this._tooltipOptions={...this._tooltipOptions,...t.tooltipOptions.currentValue},this.deactivate(),this.active&&(this.getOption("tooltipLabel")?this.container&&this.container.offsetParent?(this.updateText(),this.align()):this.show():this.hide()))}onMouseEnter(t){!this.container&&!this.showTimeout&&this.activate()}onMouseLeave(t){this.deactivate()}onFocus(t){this.activate()}onBlur(t){this.deactivate()}onClick(t){this.deactivate()}activate(){if(this.active=!0,this.clearHideTimeout(),this.getOption("showDelay")?this.showTimeout=setTimeout(()=>{this.show()},this.getOption("showDelay")):this.show(),this.getOption("life")){let t=this.getOption("showDelay")?this.getOption("life")+this.getOption("showDelay"):this.getOption("life");this.hideTimeout=setTimeout(()=>{this.hide()},t)}}deactivate(){this.active=!1,this.clearShowTimeout(),this.getOption("hideDelay")?(this.clearHideTimeout(),this.hideTimeout=setTimeout(()=>{this.hide()},this.getOption("hideDelay"))):this.hide()}create(){this.container&&(this.clearHideTimeout(),this.remove()),this.container=document.createElement("div");let t=document.createElement("div");t.className="p-tooltip-arrow",this.container.appendChild(t),this.tooltipText=document.createElement("div"),this.tooltipText.className="p-tooltip-text",this.updateText(),this.getOption("positionStyle")&&(this.container.style.position=this.getOption("positionStyle")),this.container.appendChild(this.tooltipText),"body"===this.getOption("appendTo")?document.body.appendChild(this.container):"target"===this.getOption("appendTo")?i.p.appendChild(this.container,this.el.nativeElement):i.p.appendChild(this.container,this.getOption("appendTo")),this.container.style.display="inline-block",this.fitContent&&(this.container.style.width="fit-content")}show(){!this.getOption("tooltipLabel")||this.getOption("disabled")||(this.create(),this.align(),i.p.fadeIn(this.container,250),"auto"===this.getOption("tooltipZIndex")?f.P9.set("tooltip",this.container,this.config.zIndex.tooltip):this.container.style.zIndex=this.getOption("tooltipZIndex"),this.bindDocumentResizeListener(),this.bindScrollListener())}hide(){"auto"===this.getOption("tooltipZIndex")&&f.P9.clear(this.container),this.remove()}updateText(){this.getOption("escape")?(this.tooltipText.innerHTML="",this.tooltipText.appendChild(document.createTextNode(this.getOption("tooltipLabel")))):this.tooltipText.innerHTML=this.getOption("tooltipLabel")}align(){switch(this.getOption("tooltipPosition")){case"top":this.alignTop(),this.isOutOfBounds()&&(this.alignBottom(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"bottom":this.alignBottom(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&this.alignLeft()));break;case"left":this.alignLeft(),this.isOutOfBounds()&&(this.alignRight(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()));break;case"right":this.alignRight(),this.isOutOfBounds()&&(this.alignLeft(),this.isOutOfBounds()&&(this.alignTop(),this.isOutOfBounds()&&this.alignBottom()))}}getHostOffset(){if("body"===this.getOption("appendTo")||"target"===this.getOption("appendTo")){let t=this.el.nativeElement.getBoundingClientRect();return{left:t.left+i.p.getWindowScrollLeft(),top:t.top+i.p.getWindowScrollTop()}}return{left:0,top:0}}alignRight(){this.preAlign("right");let t=this.getHostOffset(),r=t.left+i.p.getOuterWidth(this.el.nativeElement),d=t.top+(i.p.getOuterHeight(this.el.nativeElement)-i.p.getOuterHeight(this.container))/2;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=d+this.getOption("positionTop")+"px"}alignLeft(){this.preAlign("left");let t=this.getHostOffset(),r=t.left-i.p.getOuterWidth(this.container),d=t.top+(i.p.getOuterHeight(this.el.nativeElement)-i.p.getOuterHeight(this.container))/2;this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=d+this.getOption("positionTop")+"px"}alignTop(){this.preAlign("top");let t=this.getHostOffset(),r=t.left+(i.p.getOuterWidth(this.el.nativeElement)-i.p.getOuterWidth(this.container))/2,d=t.top-i.p.getOuterHeight(this.container);this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=d+this.getOption("positionTop")+"px"}alignBottom(){this.preAlign("bottom");let t=this.getHostOffset(),r=t.left+(i.p.getOuterWidth(this.el.nativeElement)-i.p.getOuterWidth(this.container))/2,d=t.top+i.p.getOuterHeight(this.el.nativeElement);this.container.style.left=r+this.getOption("positionLeft")+"px",this.container.style.top=d+this.getOption("positionTop")+"px"}setOption(t){this._tooltipOptions={...this._tooltipOptions,...t}}getOption(t){return this._tooltipOptions[t]}getTarget(t){return i.p.hasClass(t,"p-inputwrapper")?i.p.findSingle(t,"input"):t}preAlign(t){this.container.style.left="-999px",this.container.style.top="-999px";let r="p-tooltip p-component p-tooltip-"+t;this.container.className=this.getOption("tooltipStyleClass")?r+" "+this.getOption("tooltipStyleClass"):r}isOutOfBounds(){let t=this.container.getBoundingClientRect(),r=t.top,d=t.left,k=i.p.getOuterWidth(this.container),V=i.p.getOuterHeight(this.container),y=i.p.getViewport();return d+k>y.width||d<0||r<0||r+V>y.height}onWindowResize(t){this.hide()}bindDocumentResizeListener(){this.zone.runOutsideAngular(()=>{this.resizeListener=this.onWindowResize.bind(this),window.addEventListener("resize",this.resizeListener)})}unbindDocumentResizeListener(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new i.V(this.el.nativeElement,()=>{this.container&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindEvents(){if("hover"===this.getOption("tooltipEvent"))this.el.nativeElement.removeEventListener("mouseenter",this.mouseEnterListener),this.el.nativeElement.removeEventListener("mouseleave",this.mouseLeaveListener),this.el.nativeElement.removeEventListener("click",this.clickListener);else if("focus"===this.getOption("tooltipEvent")){let t=this.getTarget(this.el.nativeElement);t.removeEventListener("focus",this.focusListener),t.removeEventListener("blur",this.blurListener)}this.unbindDocumentResizeListener()}remove(){this.container&&this.container.parentElement&&("body"===this.getOption("appendTo")?document.body.removeChild(this.container):"target"===this.getOption("appendTo")?this.el.nativeElement.removeChild(this.container):i.p.removeChild(this.container,this.getOption("appendTo"))),this.unbindDocumentResizeListener(),this.unbindScrollListener(),this.clearTimeouts(),this.container=null,this.scrollHandler=null}clearShowTimeout(){this.showTimeout&&(clearTimeout(this.showTimeout),this.showTimeout=null)}clearHideTimeout(){this.hideTimeout&&(clearTimeout(this.hideTimeout),this.hideTimeout=null)}clearTimeouts(){this.clearShowTimeout(),this.clearHideTimeout()}ngOnDestroy(){this.unbindEvents(),this.container&&f.P9.clear(this.container),this.remove(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null)}}return a.\u0275fac=function(t){return new(t||a)(l.Y36(l.SBq),l.Y36(l.R0b),l.Y36(e.b4))},a.\u0275dir=l.lG2({type:a,selectors:[["","pTooltip",""]],hostAttrs:[1,"p-element"],inputs:{tooltipPosition:"tooltipPosition",tooltipEvent:"tooltipEvent",appendTo:"appendTo",positionStyle:"positionStyle",tooltipStyleClass:"tooltipStyleClass",tooltipZIndex:"tooltipZIndex",escape:"escape",showDelay:"showDelay",hideDelay:"hideDelay",life:"life",positionTop:"positionTop",positionLeft:"positionLeft",fitContent:"fitContent",text:["pTooltip","text"],disabled:["tooltipDisabled","disabled"],tooltipOptions:"tooltipOptions"},features:[l.TTD]}),a})(),u=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=l.oAB({type:a}),a.\u0275inj=l.cJS({imports:[O.ez]}),a})()}}]);