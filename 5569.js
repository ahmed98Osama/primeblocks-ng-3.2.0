"use strict";(self.webpackChunkprimeblocks=self.webpackChunkprimeblocks||[]).push([[5569],{5569:(le,f,c)=>{c.d(f,{dz:()=>_,kT:()=>ne});var e=c(8256),r=c(6895),m=c(805),g=c(982),h=c(9592),u=c(1795),d=c(7340);const I=["mask"],x=function(i,s){return{showTransitionParams:i,hideTransitionParams:s}},b=function(i){return{value:"visible",params:i}};function w(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"p-galleriaContent",6),e.NdJ("@animation.start",function(n){e.CHM(t);const l=e.oxw(3);return e.KtG(l.onAnimationStart(n))})("@animation.done",function(n){e.CHM(t);const l=e.oxw(3);return e.KtG(l.onAnimationEnd(n))})("maskHide",function(){e.CHM(t);const n=e.oxw(3);return e.KtG(n.onMaskHide())})("activeItemChange",function(n){e.CHM(t);const l=e.oxw(3);return e.KtG(l.onActiveItemChange(n))}),e.qZA()}if(2&i){const t=e.oxw(3);e.Q6J("@animation",e.VKq(8,b,e.WLB(5,x,t.showTransitionOptions,t.hideTransitionOptions)))("value",t.value)("activeIndex",t.activeIndex)("numVisible",t.numVisible)("ngStyle",t.containerStyle)}}const C=function(i){return{"p-galleria-mask p-component-overlay p-component-overlay-enter":!0,"p-galleria-visible":i}};function T(i,s){if(1&i&&(e.TgZ(0,"div",3,4),e.YNc(2,w,1,10,"p-galleriaContent",5),e.qZA()),2&i){const t=e.oxw(2);e.Tol(t.maskClass),e.Q6J("ngClass",e.VKq(4,C,t.visible)),e.xp6(2),e.Q6J("ngIf",t.visible)}}function S(i,s){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,T,3,6,"div",2),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.maskVisible)}}function y(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"p-galleriaContent",7),e.NdJ("activeItemChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onActiveItemChange(n))}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("value",t.value)("activeIndex",t.activeIndex)("numVisible",t.numVisible)}}function k(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",8),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.maskHide.emit())}),e._UZ(1,"span",9),e.qZA()}}function A(i,s){if(1&i&&(e.TgZ(0,"div",10),e._UZ(1,"p-galleriaItemSlot",11),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("templates",t.galleria.templates)}}function V(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"p-galleriaThumbnails",12),e.NdJ("onActiveIndexChange",function(n){e.CHM(t);const l=e.oxw(2);return e.KtG(l.onActiveIndexChange(n))})("stopSlideShow",function(){e.CHM(t);const n=e.oxw(2);return e.KtG(n.stopSlideShow())}),e.qZA()}if(2&i){const t=e.oxw(2);e.Q6J("containerId",t.id)("value",t.value)("activeIndex",t.activeIndex)("templates",t.galleria.templates)("numVisible",t.numVisible)("responsiveOptions",t.galleria.responsiveOptions)("circular",t.galleria.circular)("isVertical",t.isVertical())("contentHeight",t.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators",t.galleria.showThumbnailNavigators)("slideShowActive",t.slideShowActive)}}function G(i,s){if(1&i&&(e.TgZ(0,"div",13),e._UZ(1,"p-galleriaItemSlot",14),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("templates",t.galleria.templates)}}const O=function(i,s,t){return{"p-galleria p-component":!0,"p-galleria-fullscreen":i,"p-galleria-indicator-onitem":s,"p-galleria-item-nav-onhover":t}},N=function(){return{}};function M(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",1),e.YNc(1,k,2,0,"button",2),e.YNc(2,A,2,1,"div",3),e.TgZ(3,"div",4)(4,"p-galleriaItem",5),e.NdJ("onActiveIndexChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.onActiveIndexChange(n))})("startSlideShow",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.startSlideShow())})("stopSlideShow",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.stopSlideShow())}),e.qZA(),e.YNc(5,V,1,11,"p-galleriaThumbnails",6),e.qZA(),e.YNc(6,G,2,1,"div",7),e.qZA()}if(2&i){const t=e.oxw();e.Tol(t.galleriaClass()),e.Q6J("ngClass",e.kEZ(20,O,t.galleria.fullScreen,t.galleria.showIndicatorsOnItem,t.galleria.showItemNavigatorsOnHover&&!t.galleria.fullScreen))("ngStyle",t.galleria.fullScreen?e.DdM(24,N):t.galleria.containerStyle),e.uIk("id",t.id),e.xp6(1),e.Q6J("ngIf",t.galleria.fullScreen),e.xp6(1),e.Q6J("ngIf",t.galleria.templates&&t.galleria.headerFacet),e.xp6(2),e.Q6J("value",t.value)("activeIndex",t.activeIndex)("circular",t.galleria.circular)("templates",t.galleria.templates)("showIndicators",t.galleria.showIndicators)("changeItemOnIndicatorHover",t.galleria.changeItemOnIndicatorHover)("indicatorFacet",t.galleria.indicatorFacet)("captionFacet",t.galleria.captionFacet)("showItemNavigators",t.galleria.showItemNavigators)("autoPlay",t.galleria.autoPlay)("slideShowActive",t.slideShowActive),e.xp6(1),e.Q6J("ngIf",t.galleria.showThumbnails),e.xp6(1),e.Q6J("ngIf",t.galleria.templates&&t.galleria.footerFacet)}}function P(i,s){1&i&&e.GkF(0)}function H(i,s){if(1&i&&(e.ynx(0),e.YNc(1,P,1,0,"ng-container",1),e.BQk()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngTemplateOutlet",t.contentTemplate)("ngTemplateOutletContext",t.context)}}const E=function(i){return{"p-galleria-item-prev p-galleria-item-nav p-link":!0,"p-disabled":i}};function Z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.navBackward(n))}),e._UZ(1,"span",7),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(2,E,t.isNavBackwardDisabled()))("disabled",t.isNavBackwardDisabled())}}const D=function(i){return{"p-galleria-item-next p-galleria-item-nav p-link":!0,"p-disabled":i}};function F(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",6),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.navForward(n))}),e._UZ(1,"span",8),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(2,D,t.isNavForwardDisabled()))("disabled",t.isNavForwardDisabled())}}function J(i,s){if(1&i&&(e.TgZ(0,"div",9),e._UZ(1,"p-galleriaItemSlot",10),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("item",t.activeItem)("templates",t.templates)}}function Q(i,s){1&i&&e._UZ(0,"button",16)}const K=function(i){return{"p-galleria-indicator":!0,"p-highlight":i}};function R(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"li",13),e.NdJ("click",function(){const l=e.CHM(t).index,o=e.oxw(2);return e.KtG(o.onIndicatorClick(l))})("mouseenter",function(){const l=e.CHM(t).index,o=e.oxw(2);return e.KtG(o.onIndicatorMouseEnter(l))})("keydown.enter",function(){const l=e.CHM(t).index,o=e.oxw(2);return e.KtG(o.onIndicatorKeyDown(l))}),e.YNc(1,Q,1,0,"button",14),e._UZ(2,"p-galleriaItemSlot",15),e.qZA()}if(2&i){const t=s.index,a=e.oxw(2);e.Q6J("ngClass",e.VKq(4,K,a.isIndicatorItemActive(t))),e.xp6(1),e.Q6J("ngIf",!a.indicatorFacet),e.xp6(1),e.Q6J("index",t)("templates",a.templates)}}function B(i,s){if(1&i&&(e.TgZ(0,"ul",11),e.YNc(1,R,3,6,"li",12),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.value)}}const Y=["itemsContainer"],q=function(i){return{"p-galleria-thumbnail-prev p-link":!0,"p-disabled":i}},L=function(i,s){return{"p-galleria-thumbnail-prev-icon pi":!0,"pi-chevron-left":i,"pi-chevron-up":s}};function U(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.navBackward(n))}),e._UZ(1,"span",8),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(3,q,t.isNavBackwardDisabled()))("disabled",t.isNavBackwardDisabled()),e.xp6(1),e.Q6J("ngClass",e.WLB(5,L,!t.isVertical,t.isVertical))}}const $=function(i,s,t,a){return{"p-galleria-thumbnail-item":!0,"p-galleria-thumbnail-item-current":i,"p-galleria-thumbnail-item-active":s,"p-galleria-thumbnail-item-start":t,"p-galleria-thumbnail-item-end":a}};function z(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",8)(1,"div",9),e.NdJ("click",function(){const l=e.CHM(t).index,o=e.oxw();return e.KtG(o.onItemClick(l))})("keydown.enter",function(){const l=e.CHM(t).index,o=e.oxw();return e.KtG(o.onItemClick(l))}),e._UZ(2,"p-galleriaItemSlot",10),e.qZA()()}if(2&i){const t=s.$implicit,a=s.index,n=e.oxw();e.Q6J("ngClass",e.l5B(4,$,n.activeIndex===a,n.isItemActive(a),n.firstItemAciveIndex()===a,n.lastItemActiveIndex()===a)),e.xp6(1),e.uIk("tabindex",n.getTabIndex(a)),e.xp6(1),e.Q6J("item",t)("templates",n.templates)}}const j=function(i){return{"p-galleria-thumbnail-next p-link":!0,"p-disabled":i}},W=function(i,s){return{"p-galleria-thumbnail-next-icon pi":!0,"pi-chevron-right":i,"pi-chevron-down":s}};function X(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.navForward(n))}),e._UZ(1,"span",8),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("ngClass",e.VKq(3,j,t.isNavForwardDisabled()))("disabled",t.isNavForwardDisabled()),e.xp6(1),e.Q6J("ngClass",e.WLB(5,W,!t.isVertical,t.isVertical))}}const ee=function(i){return{height:i}};let _=(()=>{class i{constructor(t,a,n){this.element=t,this.cd=a,this.config=n,this.fullScreen=!1,this.numVisible=3,this.showItemNavigators=!1,this.showThumbnailNavigators=!0,this.showItemNavigatorsOnHover=!1,this.changeItemOnIndicatorHover=!1,this.circular=!1,this.autoPlay=!1,this.transitionInterval=4e3,this.showThumbnails=!0,this.thumbnailsPosition="bottom",this.verticalThumbnailViewPortHeight="300px",this.showIndicators=!1,this.showIndicatorsOnItem=!1,this.indicatorsPosition="bottom",this.baseZIndex=0,this.showTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.hideTransitionOptions="150ms cubic-bezier(0, 0, 0.2, 1)",this.activeIndexChange=new e.vpe,this.visibleChange=new e.vpe,this._visible=!1,this._activeIndex=0,this.maskVisible=!1}get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}get visible(){return this._visible}set visible(t){this._visible=t,this._visible&&!this.maskVisible&&(this.maskVisible=!0)}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this.headerFacet=t.template;break;case"footer":this.footerFacet=t.template;break;case"indicator":this.indicatorFacet=t.template;break;case"caption":this.captionFacet=t.template}})}ngOnChanges(t){t.value&&t.value.currentValue?.length<this.numVisible&&(this.numVisible=t.value.currentValue.length)}onMaskHide(){this.visible=!1,this.visibleChange.emit(!1)}onActiveItemChange(t){this.activeIndex!==t&&(this.activeIndex=t,this.activeIndexChange.emit(t))}onAnimationStart(t){switch(t.toState){case"visible":this.enableModality();break;case"void":h.p.addClass(this.mask.nativeElement,"p-component-overlay-leave")}}onAnimationEnd(t){"void"===t.toState&&this.disableModality()}enableModality(){h.p.addClass(document.body,"p-overflow-hidden"),this.cd.markForCheck(),this.mask&&g.P9.set("modal",this.mask.nativeElement,this.baseZIndex||this.config.zIndex.modal)}disableModality(){h.p.removeClass(document.body,"p-overflow-hidden"),this.maskVisible=!1,this.cd.markForCheck(),this.mask&&g.P9.clear(this.mask.nativeElement)}ngOnDestroy(){this.fullScreen&&h.p.removeClass(document.body,"p-overflow-hidden"),this.mask&&this.disableModality()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.SBq),e.Y36(e.sBO),e.Y36(m.b4))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-galleria"]],contentQueries:function(t,a,n){if(1&t&&e.Suo(n,m.jx,4),2&t){let l;e.iGM(l=e.CRH())&&(a.templates=l)}},viewQuery:function(t,a){if(1&t&&e.Gf(I,5),2&t){let n;e.iGM(n=e.CRH())&&(a.mask=n.first)}},hostAttrs:[1,"p-element"],inputs:{activeIndex:"activeIndex",fullScreen:"fullScreen",id:"id",value:"value",numVisible:"numVisible",responsiveOptions:"responsiveOptions",showItemNavigators:"showItemNavigators",showThumbnailNavigators:"showThumbnailNavigators",showItemNavigatorsOnHover:"showItemNavigatorsOnHover",changeItemOnIndicatorHover:"changeItemOnIndicatorHover",circular:"circular",autoPlay:"autoPlay",transitionInterval:"transitionInterval",showThumbnails:"showThumbnails",thumbnailsPosition:"thumbnailsPosition",verticalThumbnailViewPortHeight:"verticalThumbnailViewPortHeight",showIndicators:"showIndicators",showIndicatorsOnItem:"showIndicatorsOnItem",indicatorsPosition:"indicatorsPosition",baseZIndex:"baseZIndex",maskClass:"maskClass",containerClass:"containerClass",containerStyle:"containerStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",visible:"visible"},outputs:{activeIndexChange:"activeIndexChange",visibleChange:"visibleChange"},features:[e.TTD],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["windowed",""],[3,"ngClass","class",4,"ngIf"],[3,"ngClass"],["mask",""],[3,"value","activeIndex","numVisible","ngStyle","maskHide","activeItemChange",4,"ngIf"],[3,"value","activeIndex","numVisible","ngStyle","maskHide","activeItemChange"],[3,"value","activeIndex","numVisible","activeItemChange"]],template:function(t,a){if(1&t&&(e.YNc(0,S,2,1,"div",0),e.YNc(1,y,1,3,"ng-template",null,1,e.W1O)),2&t){const n=e.MAs(2);e.Q6J("ngIf",a.fullScreen)("ngIfElse",n)}},dependencies:function(){return[r.mk,r.O5,r.PC,te]},styles:[".p-galleria-content{display:flex;flex-direction:column}.p-galleria-item-wrapper{display:flex;flex-direction:column;position:relative}.p-galleria-item-container{position:relative;display:flex;height:100%}.p-galleria-item-nav{position:absolute;top:50%;margin-top:-.5rem;display:inline-flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-item-prev{left:0;border-top-left-radius:0;border-bottom-left-radius:0}.p-galleria-item-next{right:0;border-top-right-radius:0;border-bottom-right-radius:0}.p-galleria-item{display:flex;justify-content:center;align-items:center;height:100%;width:100%}.p-galleria-item-nav-onhover .p-galleria-item-nav{pointer-events:none;opacity:0;transition:opacity .2s ease-in-out}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav{pointer-events:all;opacity:1}.p-galleria-item-nav-onhover .p-galleria-item-wrapper:hover .p-galleria-item-nav.p-disabled{pointer-events:none}.p-galleria-caption{position:absolute;bottom:0;left:0;width:100%}.p-galleria-thumbnail-wrapper{display:flex;flex-direction:column;overflow:auto;flex-shrink:0}.p-galleria-thumbnail-prev,.p-galleria-thumbnail-next{align-self:center;flex:0 0 auto;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative}.p-galleria-thumbnail-prev span,.p-galleria-thumbnail-next span{display:flex;justify-content:center;align-items:center}.p-galleria-thumbnail-container{display:flex;flex-direction:row}.p-galleria-thumbnail-items-container{overflow:hidden;width:100%}.p-galleria-thumbnail-items{display:flex}.p-galleria-thumbnail-item{overflow:auto;display:flex;align-items:center;justify-content:center;cursor:pointer;opacity:.5}.p-galleria-thumbnail-item:hover{opacity:1;transition:opacity .3s}.p-galleria-thumbnail-item-current{opacity:1}.p-galleria-thumbnails-left .p-galleria-content,.p-galleria-thumbnails-right .p-galleria-content,.p-galleria-thumbnails-left .p-galleria-item-wrapper,.p-galleria-thumbnails-right .p-galleria-item-wrapper{flex-direction:row}.p-galleria-thumbnails-left p-galleriaitem,.p-galleria-thumbnails-top p-galleriaitem{order:2}.p-galleria-thumbnails-left p-galleriathumbnails,.p-galleria-thumbnails-top p-galleriathumbnails{order:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-container,.p-galleria-thumbnails-right .p-galleria-thumbnail-container{flex-direction:column;flex-grow:1}.p-galleria-thumbnails-left .p-galleria-thumbnail-items,.p-galleria-thumbnails-right .p-galleria-thumbnail-items{flex-direction:column;height:100%}.p-galleria-thumbnails-left .p-galleria-thumbnail-wrapper,.p-galleria-thumbnails-right .p-galleria-thumbnail-wrapper{height:100%}.p-galleria-indicators{display:flex;align-items:center;justify-content:center}.p-galleria-indicator>button{display:inline-flex;align-items:center}.p-galleria-indicators-left .p-galleria-item-wrapper,.p-galleria-indicators-right .p-galleria-item-wrapper{flex-direction:row;align-items:center}.p-galleria-indicators-left .p-galleria-item-container,.p-galleria-indicators-top .p-galleria-item-container{order:2}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-top .p-galleria-indicators{order:1}.p-galleria-indicators-left .p-galleria-indicators,.p-galleria-indicators-right .p-galleria-indicators{flex-direction:column}.p-galleria-indicator-onitem .p-galleria-indicators{position:absolute;display:flex;z-index:1}.p-galleria-indicator-onitem.p-galleria-indicators-top .p-galleria-indicators{top:0;left:0;width:100%;align-items:flex-start}.p-galleria-indicator-onitem.p-galleria-indicators-right .p-galleria-indicators{right:0;top:0;height:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-bottom .p-galleria-indicators{bottom:0;left:0;width:100%;align-items:flex-end}.p-galleria-indicator-onitem.p-galleria-indicators-left .p-galleria-indicators{left:0;top:0;height:100%;align-items:flex-start}.p-galleria-mask{position:fixed;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;background-color:transparent;transition-property:background-color}.p-galleria-close{position:absolute;top:0;right:0;display:flex;justify-content:center;align-items:center;overflow:hidden}.p-galleria-mask .p-galleria-item-nav{position:fixed;top:50%;margin-top:-.5rem}.p-galleria-mask.p-galleria-mask-leave{background-color:transparent}.p-items-hidden .p-galleria-thumbnail-item{visibility:hidden}.p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active{visibility:visible}\n"],encapsulation:2,data:{animation:[(0,d.X$)("animation",[(0,d.eR)("void => visible",[(0,d.oB)({transform:"scale(0.7)",opacity:0}),(0,d.jt)("{{showTransitionParams}}")]),(0,d.eR)("visible => void",[(0,d.jt)("{{hideTransitionParams}}",(0,d.oB)({transform:"scale(0.7)",opacity:0}))])])]},changeDetection:0}),i})(),te=(()=>{class i{constructor(t,a){this.galleria=t,this.cd=a,this.value=[],this.maskHide=new e.vpe,this.activeItemChange=new e.vpe,this.id=this.galleria.id||(0,g.Th)(),this.slideShowActicve=!1,this._activeIndex=0,this.slideShowActive=!0}get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}galleriaClass(){const t=this.galleria.showThumbnails&&this.getPositionClass("p-galleria-thumbnails",this.galleria.thumbnailsPosition),a=this.galleria.showIndicators&&this.getPositionClass("p-galleria-indicators",this.galleria.indicatorsPosition);return(this.galleria.containerClass?this.galleria.containerClass+" ":"")+(t?t+" ":"")+(a?a+" ":"")}startSlideShow(){this.interval=setInterval(()=>{let t=this.galleria.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1;this.onActiveIndexChange(t),this.activeIndex=t},this.galleria.transitionInterval),this.slideShowActive=!0}stopSlideShow(){this.interval&&clearInterval(this.interval),this.slideShowActive=!1}getPositionClass(t,a){const l=["top","left","bottom","right"].find(o=>o===a);return l?`${t}-${l}`:""}isVertical(){return"left"===this.galleria.thumbnailsPosition||"right"===this.galleria.thumbnailsPosition}onActiveIndexChange(t){this.activeIndex!==t&&(this.activeIndex=t,this.activeItemChange.emit(this.activeIndex))}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(_),e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaContent"]],inputs:{activeIndex:"activeIndex",value:"value",numVisible:"numVisible"},outputs:{maskHide:"maskHide",activeItemChange:"activeItemChange"},decls:1,vars:1,consts:[[3,"ngClass","ngStyle","class",4,"ngIf"],[3,"ngClass","ngStyle"],["type","button","class","p-galleria-close p-link","pRipple","",3,"click",4,"ngIf"],["class","p-galleria-header",4,"ngIf"],[1,"p-galleria-content"],[3,"value","activeIndex","circular","templates","showIndicators","changeItemOnIndicatorHover","indicatorFacet","captionFacet","showItemNavigators","autoPlay","slideShowActive","onActiveIndexChange","startSlideShow","stopSlideShow"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow",4,"ngIf"],["class","p-galleria-footer",4,"ngIf"],["type","button","pRipple","",1,"p-galleria-close","p-link",3,"click"],[1,"p-galleria-close-icon","pi","pi-times"],[1,"p-galleria-header"],["type","header",3,"templates"],[3,"containerId","value","activeIndex","templates","numVisible","responsiveOptions","circular","isVertical","contentHeight","showThumbnailNavigators","slideShowActive","onActiveIndexChange","stopSlideShow"],[1,"p-galleria-footer"],["type","footer",3,"templates"]],template:function(t,a){1&t&&e.YNc(0,M,7,25,"div",0),2&t&&e.Q6J("ngIf",a.value&&a.value.length>0)},dependencies:function(){return[r.mk,r.O5,r.PC,u.H,v,ie,ae]},encapsulation:2,changeDetection:0}),i})(),v=(()=>{class i{get item(){return this._item}set item(t){this._item=t,this.templates&&this.templates.forEach(a=>{if(a.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=a.template}})}ngAfterContentInit(){this.templates.forEach(t=>{if(t.getType()===this.type)switch(this.type){case"item":case"caption":case"thumbnail":this.context={$implicit:this.item},this.contentTemplate=t.template;break;case"indicator":this.context={$implicit:this.index},this.contentTemplate=t.template;break;default:this.context={},this.contentTemplate=t.template}})}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaItemSlot"]],inputs:{templates:"templates",index:"index",item:"item",type:"type"},decls:1,vars:1,consts:[[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,a){1&t&&e.YNc(0,H,2,2,"ng-container",0),2&t&&e.Q6J("ngIf",a.contentTemplate)},dependencies:[r.O5,r.tP],encapsulation:2,changeDetection:0}),i})(),ie=(()=>{class i{constructor(){this.circular=!1,this.showItemNavigators=!1,this.showIndicators=!0,this.slideShowActive=!0,this.changeItemOnIndicatorHover=!0,this.autoPlay=!1,this.startSlideShow=new e.vpe,this.stopSlideShow=new e.vpe,this.onActiveIndexChange=new e.vpe,this._activeIndex=0}get activeIndex(){return this._activeIndex}set activeIndex(t){this._activeIndex=t}get activeItem(){return this.value[this._activeIndex]}ngOnInit(){this.autoPlay&&this.startSlideShow.emit()}next(){this.onActiveIndexChange.emit(this.circular&&this.value.length-1===this.activeIndex?0:this.activeIndex+1)}prev(){this.onActiveIndexChange.emit(this.circular&&0===this.activeIndex?this.value.length-1:0!==this.activeIndex?this.activeIndex-1:0)}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}navForward(t){this.stopTheSlideShow(),this.next(),t&&t.cancelable&&t.preventDefault()}navBackward(t){this.stopTheSlideShow(),this.prev(),t&&t.cancelable&&t.preventDefault()}onIndicatorClick(t){this.stopTheSlideShow(),this.onActiveIndexChange.emit(t)}onIndicatorMouseEnter(t){this.changeItemOnIndicatorHover&&(this.stopTheSlideShow(),this.onActiveIndexChange.emit(t))}onIndicatorKeyDown(t){this.stopTheSlideShow(),this.onActiveIndexChange.emit(t)}isNavForwardDisabled(){return!this.circular&&this.activeIndex===this.value.length-1}isNavBackwardDisabled(){return!this.circular&&0===this.activeIndex}isIndicatorItemActive(t){return this.activeIndex===t}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaItem"]],inputs:{circular:"circular",value:"value",showItemNavigators:"showItemNavigators",showIndicators:"showIndicators",slideShowActive:"slideShowActive",changeItemOnIndicatorHover:"changeItemOnIndicatorHover",autoPlay:"autoPlay",templates:"templates",indicatorFacet:"indicatorFacet",captionFacet:"captionFacet",activeIndex:"activeIndex"},outputs:{startSlideShow:"startSlideShow",stopSlideShow:"stopSlideShow",onActiveIndexChange:"onActiveIndexChange"},decls:7,vars:6,consts:[[1,"p-galleria-item-wrapper"],[1,"p-galleria-item-container"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],["type","item",1,"p-galleria-item",3,"item","templates"],["class","p-galleria-caption",4,"ngIf"],["class","p-galleria-indicators p-reset",4,"ngIf"],["type","button","pRipple","",3,"ngClass","disabled","click"],[1,"p-galleria-item-prev-icon","pi","pi-chevron-left"],[1,"p-galleria-item-next-icon","pi","pi-chevron-right"],[1,"p-galleria-caption"],["type","caption",3,"item","templates"],[1,"p-galleria-indicators","p-reset"],["tabindex","0",3,"ngClass","click","mouseenter","keydown.enter",4,"ngFor","ngForOf"],["tabindex","0",3,"ngClass","click","mouseenter","keydown.enter"],["type","button","tabIndex","-1","class","p-link",4,"ngIf"],["type","indicator",3,"index","templates"],["type","button","tabIndex","-1",1,"p-link"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,Z,2,4,"button",2),e._UZ(3,"p-galleriaItemSlot",3),e.YNc(4,F,2,4,"button",2),e.YNc(5,J,2,2,"div",4),e.qZA(),e.YNc(6,B,2,1,"ul",5),e.qZA()),2&t&&(e.xp6(2),e.Q6J("ngIf",a.showItemNavigators),e.xp6(1),e.Q6J("item",a.activeItem)("templates",a.templates),e.xp6(1),e.Q6J("ngIf",a.showItemNavigators),e.xp6(1),e.Q6J("ngIf",a.captionFacet),e.xp6(1),e.Q6J("ngIf",a.showIndicators))},dependencies:[r.mk,r.sg,r.O5,u.H,v],encapsulation:2,changeDetection:0}),i})(),ae=(()=>{class i{constructor(t){this.cd=t,this.isVertical=!1,this.slideShowActive=!1,this.circular=!1,this.contentHeight="300px",this.showThumbnailNavigators=!0,this.onActiveIndexChange=new e.vpe,this.stopSlideShow=new e.vpe,this.startPos=null,this.thumbnailsStyle=null,this.sortedResponsiveOptions=null,this.totalShiftedItems=0,this.page=0,this._numVisible=0,this.d_numVisible=0,this._oldNumVisible=0,this._activeIndex=0,this._oldactiveIndex=0}get numVisible(){return this._numVisible}set numVisible(t){this._numVisible=t,this._oldNumVisible=this.d_numVisible,this.d_numVisible=t}get activeIndex(){return this._activeIndex}set activeIndex(t){this._oldactiveIndex=this._activeIndex,this._activeIndex=t}ngOnInit(){this.createStyle(),this.responsiveOptions&&this.bindDocumentListeners()}ngAfterContentChecked(){let t=this.totalShiftedItems;(this._oldNumVisible!==this.d_numVisible||this._oldactiveIndex!==this._activeIndex)&&this.itemsContainer&&(t=this._activeIndex<=this.getMedianItemIndex()?0:this.value.length-this.d_numVisible+this.getMedianItemIndex()<this._activeIndex?this.d_numVisible-this.value.length:this.value.length-this.d_numVisible<this._activeIndex&&this.d_numVisible%2==0?-1*this._activeIndex+this.getMedianItemIndex()+1:-1*this._activeIndex+this.getMedianItemIndex(),t!==this.totalShiftedItems&&(this.totalShiftedItems=t),this.itemsContainer&&this.itemsContainer.nativeElement&&(this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${t*(100/this.d_numVisible)}%, 0)`:`translate3d(${t*(100/this.d_numVisible)}%, 0, 0)`),this._oldactiveIndex!==this._activeIndex&&(h.p.removeClass(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this._oldactiveIndex=this._activeIndex,this._oldNumVisible=this.d_numVisible)}ngAfterViewInit(){this.calculatePosition()}createStyle(){this.thumbnailsStyle||(this.thumbnailsStyle=document.createElement("style"),this.thumbnailsStyle.type="text/css",document.body.appendChild(this.thumbnailsStyle));let t=`\n            #${this.containerId} .p-galleria-thumbnail-item {\n                flex: 1 0 ${100/this.d_numVisible}%\n            }\n        `;if(this.responsiveOptions){this.sortedResponsiveOptions=[...this.responsiveOptions],this.sortedResponsiveOptions.sort((a,n)=>{const l=a.breakpoint,o=n.breakpoint;let p=null;return p=null==l&&null!=o?-1:null!=l&&null==o?1:null==l&&null==o?0:"string"==typeof l&&"string"==typeof o?l.localeCompare(o,void 0,{numeric:!0}):l<o?-1:l>o?1:0,-1*p});for(let a=0;a<this.sortedResponsiveOptions.length;a++){let n=this.sortedResponsiveOptions[a];t+=`\n                    @media screen and (max-width: ${n.breakpoint}) {\n                        #${this.containerId} .p-galleria-thumbnail-item {\n                            flex: 1 0 ${100/n.numVisible}%\n                        }\n                    }\n                `}}this.thumbnailsStyle.innerHTML=t}calculatePosition(){if(this.itemsContainer&&this.sortedResponsiveOptions){let t=window.innerWidth,a={numVisible:this._numVisible};for(let n=0;n<this.sortedResponsiveOptions.length;n++){let l=this.sortedResponsiveOptions[n];parseInt(l.breakpoint,10)>=t&&(a=l)}this.d_numVisible!==a.numVisible&&(this.d_numVisible=a.numVisible,this.cd.markForCheck())}}getTabIndex(t){return this.isItemActive(t)?0:null}navForward(t){this.stopTheSlideShow();let a=this._activeIndex+1;a+this.totalShiftedItems>this.getMedianItemIndex()&&(-1*this.totalShiftedItems<this.getTotalPageNumber()-1||this.circular)&&this.step(-1),this.onActiveIndexChange.emit(this.circular&&this.value.length-1===this._activeIndex?0:a),t.cancelable&&t.preventDefault()}navBackward(t){this.stopTheSlideShow();let a=0!==this._activeIndex?this._activeIndex-1:0;this.d_numVisible-(a+this.totalShiftedItems)-1>this.getMedianItemIndex()&&(-1*this.totalShiftedItems!=0||this.circular)&&this.step(1),this.onActiveIndexChange.emit(this.circular&&0===this._activeIndex?this.value.length-1:a),t.cancelable&&t.preventDefault()}onItemClick(t){this.stopTheSlideShow();let a=t;if(a!==this._activeIndex){const n=a+this.totalShiftedItems;let l=0;a<this._activeIndex?(l=this.d_numVisible-n-1-this.getMedianItemIndex(),l>0&&-1*this.totalShiftedItems!=0&&this.step(l)):(l=this.getMedianItemIndex()-n,l<0&&-1*this.totalShiftedItems<this.getTotalPageNumber()-1&&this.step(l)),this.activeIndex=a,this.onActiveIndexChange.emit(this.activeIndex)}}step(t){let a=this.totalShiftedItems+t;t<0&&-1*a+this.d_numVisible>this.value.length-1?a=this.d_numVisible-this.value.length:t>0&&a>0&&(a=0),this.circular&&(t<0&&this.value.length-1===this._activeIndex?a=0:t>0&&0===this._activeIndex&&(a=this.d_numVisible-this.value.length)),this.itemsContainer&&(h.p.removeClass(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transform=this.isVertical?`translate3d(0, ${a*(100/this.d_numVisible)}%, 0)`:`translate3d(${a*(100/this.d_numVisible)}%, 0, 0)`,this.itemsContainer.nativeElement.style.transition="transform 500ms ease 0s"),this.totalShiftedItems=a}stopTheSlideShow(){this.slideShowActive&&this.stopSlideShow&&this.stopSlideShow.emit()}changePageOnTouch(t,a){a<0?this.navForward(t):this.navBackward(t)}getTotalPageNumber(){return this.value.length>this.d_numVisible?this.value.length-this.d_numVisible+1:0}getMedianItemIndex(){let t=Math.floor(this.d_numVisible/2);return this.d_numVisible%2?t:t-1}onTransitionEnd(){this.itemsContainer&&this.itemsContainer.nativeElement&&(h.p.addClass(this.itemsContainer.nativeElement,"p-items-hidden"),this.itemsContainer.nativeElement.style.transition="")}onTouchEnd(t){let a=t.changedTouches[0];this.changePageOnTouch(t,this.isVertical?a.pageY-this.startPos.y:a.pageX-this.startPos.x)}onTouchMove(t){t.cancelable&&t.preventDefault()}onTouchStart(t){let a=t.changedTouches[0];this.startPos={x:a.pageX,y:a.pageY}}isNavBackwardDisabled(){return!this.circular&&0===this._activeIndex||this.value.length<=this.d_numVisible}isNavForwardDisabled(){return!this.circular&&this._activeIndex===this.value.length-1||this.value.length<=this.d_numVisible}firstItemAciveIndex(){return-1*this.totalShiftedItems}lastItemActiveIndex(){return this.firstItemAciveIndex()+this.d_numVisible-1}isItemActive(t){return this.firstItemAciveIndex()<=t&&this.lastItemActiveIndex()>=t}bindDocumentListeners(){this.documentResizeListener||(this.documentResizeListener=()=>{this.calculatePosition()},window.addEventListener("resize",this.documentResizeListener))}unbindDocumentListeners(){this.documentResizeListener&&(window.removeEventListener("resize",this.documentResizeListener),this.documentResizeListener=null)}ngOnDestroy(){this.responsiveOptions&&this.unbindDocumentListeners(),this.thumbnailsStyle&&this.thumbnailsStyle.parentNode.removeChild(this.thumbnailsStyle)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(e.sBO))},i.\u0275cmp=e.Xpm({type:i,selectors:[["p-galleriaThumbnails"]],viewQuery:function(t,a){if(1&t&&e.Gf(Y,5),2&t){let n;e.iGM(n=e.CRH())&&(a.itemsContainer=n.first)}},inputs:{containerId:"containerId",value:"value",isVertical:"isVertical",slideShowActive:"slideShowActive",circular:"circular",responsiveOptions:"responsiveOptions",contentHeight:"contentHeight",showThumbnailNavigators:"showThumbnailNavigators",templates:"templates",numVisible:"numVisible",activeIndex:"activeIndex"},outputs:{onActiveIndexChange:"onActiveIndexChange",stopSlideShow:"stopSlideShow"},decls:8,vars:6,consts:[[1,"p-galleria-thumbnail-wrapper"],[1,"p-galleria-thumbnail-container"],["type","button","pRipple","",3,"ngClass","disabled","click",4,"ngIf"],[1,"p-galleria-thumbnail-items-container",3,"ngStyle"],[1,"p-galleria-thumbnail-items",3,"transitionend","touchstart","touchmove","touchend"],["itemsContainer",""],[3,"ngClass",4,"ngFor","ngForOf"],["type","button","pRipple","",3,"ngClass","disabled","click"],[3,"ngClass"],[1,"p-galleria-thumbnail-item-content",3,"click","keydown.enter"],["type","thumbnail",3,"item","templates"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e.YNc(2,U,2,8,"button",2),e.TgZ(3,"div",3)(4,"div",4,5),e.NdJ("transitionend",function(){return a.onTransitionEnd()})("touchstart",function(l){return a.onTouchStart(l)})("touchmove",function(l){return a.onTouchMove(l)})("touchend",function(l){return a.onTouchEnd(l)}),e.YNc(6,z,3,9,"div",6),e.qZA()(),e.YNc(7,X,2,8,"button",2),e.qZA()()),2&t&&(e.xp6(2),e.Q6J("ngIf",a.showThumbnailNavigators),e.xp6(1),e.Q6J("ngStyle",e.VKq(4,ee,a.isVertical?a.contentHeight:"")),e.xp6(3),e.Q6J("ngForOf",a.value),e.xp6(1),e.Q6J("ngIf",a.showThumbnailNavigators))},dependencies:[r.mk,r.sg,r.O5,r.PC,u.H,v],encapsulation:2,changeDetection:0}),i})(),ne=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[r.ez,m.m8,u.T,r.ez,m.m8]}),i})()}}]);