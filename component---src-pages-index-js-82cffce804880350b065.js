(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{211:function(A,e,t){"use strict";t.r(e);t(15);var a=t(0),s=t.n(a),n=t(215),o=t(218),i=t(216),r=t(429),l=t.n(r),c=function(A){var e=A.index,t=A.image,a=A.title,n=A.subSteps;return s.a.createElement("div",{id:"step"+(e+1),className:"container-fluid step"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-6 order-1"},s.a.createElement("img",{className:"img-fluid "+l.a.imgShadowed+" "+l.a.smoothCorners,src:t,alt:a})),s.a.createElement("div",{className:(e%2?"order-2 order-sm-0":"order-2")+" col-sm-6"},s.a.createElement("h2",null,s.a.createElement("span",{className:l.a.roundedNumber},e+1),a),n.map(function(A,e){return s.a.createElement("div",{key:e,className:l.a.subStep},s.a.createElement("h3",null,s.a.createElement("span",{className:"d-none d-md-inline-block"},A.icon),A.title),s.a.createElement("p",{className:"small",dangerouslySetInnerHTML:{__html:A.text}}))})))))},d=(t(217),t(430)),p=t.n(d),m=function(A){var e=A.title,t=A.description,a=A.link,o=A.linkLabel;return s.a.createElement("div",{className:"col-md-6"},s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("div",{className:""+p.a.item},s.a.createElement("h2",null,e),s.a.createElement("p",{className:"small"},t),s.a.createElement("p",{className:"small d-flex align-items-center"},s.a.createElement("span",{className:"mr-2"},o," "),s.a.createElement(n.b,null)))))},u=t(224),h=t(319),b=(t(11),t(144),t(139),t(73),t(32),t(31),t(17),t(52),t(291)),g=t(237),f=t(292),N=t(266),v=t(51),w=t.n(v),y=t(228),E=t.n(y),O=t(76),B=t.n(O),C=t(229),x={children:w.a.node.isRequired,node:w.a.any},k=function(A){function e(){return A.apply(this,arguments)||this}Object(N.a)(e,A);var t=e.prototype;return t.componentWillUnmount=function(){this.defaultNode&&document.body.removeChild(this.defaultNode),this.defaultNode=null},t.render=function(){return C.d?(this.props.node||this.defaultNode||(this.defaultNode=document.createElement("div"),document.body.appendChild(this.defaultNode)),B.a.createPortal(this.props.children,this.props.node||this.defaultNode)):null},e}(s.a.Component);k.propTypes=x;var j=k,T=t(238),D=t(293),M=Object(b.a)({},D.Transition.propTypes,{children:w.a.oneOfType([w.a.arrayOf(w.a.node),w.a.node]),tag:C.l,baseClass:w.a.string,baseClassActive:w.a.string,className:w.a.string,cssModule:w.a.object,innerRef:w.a.oneOfType([w.a.object,w.a.string,w.a.func])}),Q=Object(b.a)({},D.Transition.defaultProps,{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:C.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function F(A){var e=A.tag,t=A.baseClass,a=A.baseClassActive,n=A.className,o=A.cssModule,i=A.children,r=A.innerRef,l=Object(T.a)(A,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),c=Object(C.j)(l,C.a),d=Object(C.i)(l,C.a);return s.a.createElement(D.Transition,c,function(A){var l="entered"===A,c=Object(C.h)(E()(n,t,l&&a),o);return s.a.createElement(e,Object(g.a)({className:c},d,{ref:r}),i)})}F.propTypes=M,F.defaultProps=Q;var z=F;function G(){}var P=w.a.shape(z.propTypes),L={isOpen:w.a.bool,autoFocus:w.a.bool,centered:w.a.bool,scrollable:w.a.bool,size:w.a.string,toggle:w.a.func,keyboard:w.a.bool,role:w.a.string,labelledBy:w.a.string,backdrop:w.a.oneOfType([w.a.bool,w.a.oneOf(["static"])]),onEnter:w.a.func,onExit:w.a.func,onOpened:w.a.func,onClosed:w.a.func,children:w.a.node,className:w.a.string,wrapClassName:w.a.string,modalClassName:w.a.string,backdropClassName:w.a.string,contentClassName:w.a.string,external:w.a.node,fade:w.a.bool,cssModule:w.a.object,zIndex:w.a.oneOfType([w.a.number,w.a.string]),backdropTransition:P,modalTransition:P,innerRef:w.a.oneOfType([w.a.object,w.a.string,w.a.func]),unmountOnClose:w.a.bool,returnFocusAfterClose:w.a.bool},H=Object.keys(L),Y={isOpen:!1,autoFocus:!0,centered:!1,scrollable:!1,role:"dialog",backdrop:!0,keyboard:!0,zIndex:1050,fade:!0,onOpened:G,onClosed:G,modalTransition:{timeout:C.c.Modal},backdropTransition:{mountOnEnter:!0,timeout:C.c.Fade},unmountOnClose:!0,returnFocusAfterClose:!0},I=function(A){function e(e){var t;return(t=A.call(this,e)||this)._element=null,t._originalBodyPadding=null,t.getFocusableChildren=t.getFocusableChildren.bind(Object(f.a)(t)),t.handleBackdropClick=t.handleBackdropClick.bind(Object(f.a)(t)),t.handleBackdropMouseDown=t.handleBackdropMouseDown.bind(Object(f.a)(t)),t.handleEscape=t.handleEscape.bind(Object(f.a)(t)),t.handleTab=t.handleTab.bind(Object(f.a)(t)),t.onOpened=t.onOpened.bind(Object(f.a)(t)),t.onClosed=t.onClosed.bind(Object(f.a)(t)),t.manageFocusAfterClose=t.manageFocusAfterClose.bind(Object(f.a)(t)),t.state={isOpen:!1},t}Object(N.a)(e,A);var t=e.prototype;return t.componentDidMount=function(){var A=this.props,e=A.isOpen,t=A.autoFocus,a=A.onEnter;e&&(this.init(),this.setState({isOpen:!0}),t&&this.setFocus()),a&&a(),this._isMounted=!0},t.componentDidUpdate=function(A,e){if(this.props.isOpen&&!A.isOpen)return this.init(),void this.setState({isOpen:!0});this.props.autoFocus&&this.state.isOpen&&!e.isOpen&&this.setFocus(),this._element&&A.zIndex!==this.props.zIndex&&(this._element.style.zIndex=this.props.zIndex)},t.componentWillUnmount=function(){this.props.onExit&&this.props.onExit(),this._element&&(this.destroy(),this.state.isOpen&&this.close()),this._isMounted=!1},t.onOpened=function(A,e){this.props.onOpened(),(this.props.modalTransition.onEntered||G)(A,e)},t.onClosed=function(A){var e=this.props.unmountOnClose;this.props.onClosed(),(this.props.modalTransition.onExited||G)(A),e&&this.destroy(),this.close(),this._isMounted&&this.setState({isOpen:!1})},t.setFocus=function(){this._dialog&&this._dialog.parentNode&&"function"==typeof this._dialog.parentNode.focus&&this._dialog.parentNode.focus()},t.getFocusableChildren=function(){return this._element.querySelectorAll(C.f.join(", "))},t.getFocusedChild=function(){var A,e=this.getFocusableChildren();try{A=document.activeElement}catch(t){A=e[0]}return A},t.handleBackdropClick=function(A){if(A.target===this._mouseDownElement){if(A.stopPropagation(),!this.props.isOpen||!0!==this.props.backdrop)return;var e=this._dialog?this._dialog.parentNode:null;e&&A.target===e&&this.props.toggle&&this.props.toggle(A)}},t.handleTab=function(A){if(9===A.which){var e=this.getFocusableChildren(),t=e.length;if(0!==t){for(var a=this.getFocusedChild(),s=0,n=0;n<t;n+=1)if(e[n]===a){s=n;break}A.shiftKey&&0===s?(A.preventDefault(),e[t-1].focus()):A.shiftKey||s!==t-1||(A.preventDefault(),e[0].focus())}}},t.handleBackdropMouseDown=function(A){this._mouseDownElement=A.target},t.handleEscape=function(A){this.props.isOpen&&this.props.keyboard&&27===A.keyCode&&this.props.toggle&&(A.preventDefault(),A.stopPropagation(),this.props.toggle(A))},t.init=function(){try{this._triggeringElement=document.activeElement}catch(A){this._triggeringElement=null}this._element||(this._element=document.createElement("div"),this._element.setAttribute("tabindex","-1"),this._element.style.position="relative",this._element.style.zIndex=this.props.zIndex,document.body.appendChild(this._element)),this._originalBodyPadding=Object(C.g)(),Object(C.e)(),0===e.openCount&&(document.body.className=E()(document.body.className,Object(C.h)("modal-open",this.props.cssModule))),e.openCount+=1},t.destroy=function(){this._element&&(document.body.removeChild(this._element),this._element=null),this.manageFocusAfterClose()},t.manageFocusAfterClose=function(){if(this._triggeringElement){var A=this.props.returnFocusAfterClose;this._triggeringElement.focus&&A&&this._triggeringElement.focus(),this._triggeringElement=null}},t.close=function(){if(e.openCount<=1){var A=Object(C.h)("modal-open",this.props.cssModule),t=new RegExp("(^| )"+A+"( |$)");document.body.className=document.body.className.replace(t," ").trim()}this.manageFocusAfterClose(),e.openCount=Math.max(0,e.openCount-1),Object(C.k)(this._originalBodyPadding)},t.renderModalDialog=function(){var A,e=this,t=Object(C.i)(this.props,H);return s.a.createElement("div",Object(g.a)({},t,{className:Object(C.h)(E()("modal-dialog",this.props.className,(A={},A["modal-"+this.props.size]=this.props.size,A["modal-dialog-centered"]=this.props.centered,A["modal-dialog-scrollable"]=this.props.scrollable,A)),this.props.cssModule),role:"document",ref:function(A){e._dialog=A}}),s.a.createElement("div",{className:Object(C.h)(E()("modal-content",this.props.contentClassName),this.props.cssModule)},this.props.children))},t.render=function(){var A=this.props.unmountOnClose;if(this._element&&(this.state.isOpen||!A)){var e=!!this._element&&!this.state.isOpen&&!A;this._element.style.display=e?"none":"block";var t=this.props,a=t.wrapClassName,n=t.modalClassName,o=t.backdropClassName,i=t.cssModule,r=t.isOpen,l=t.backdrop,c=t.role,d=t.labelledBy,p=t.external,m=t.innerRef,u={onClick:this.handleBackdropClick,onMouseDown:this.handleBackdropMouseDown,onKeyUp:this.handleEscape,onKeyDown:this.handleTab,style:{display:"block"},"aria-labelledby":d,role:c,tabIndex:"-1"},h=this.props.fade,f=Object(b.a)({},z.defaultProps,this.props.modalTransition,{baseClass:h?this.props.modalTransition.baseClass:"",timeout:h?this.props.modalTransition.timeout:0}),N=Object(b.a)({},z.defaultProps,this.props.backdropTransition,{baseClass:h?this.props.backdropTransition.baseClass:"",timeout:h?this.props.backdropTransition.timeout:0}),v=l&&(h?s.a.createElement(z,Object(g.a)({},N,{in:r&&!!l,cssModule:i,className:Object(C.h)(E()("modal-backdrop",o),i)})):s.a.createElement("div",{className:Object(C.h)(E()("modal-backdrop","show",o),i)}));return s.a.createElement(j,{node:this._element},s.a.createElement("div",{className:Object(C.h)(a)},s.a.createElement(z,Object(g.a)({},u,f,{in:r,onEntered:this.onOpened,onExited:this.onClosed,cssModule:i,className:Object(C.h)(E()("modal",n),i),innerRef:m}),p,this.renderModalDialog()),v))}return null},e}(s.a.Component);I.propTypes=L,I.defaultProps=Y,I.openCount=0;var X=I,Z={tag:C.l,wrapTag:C.l,toggle:w.a.func,className:w.a.string,cssModule:w.a.object,children:w.a.node,closeAriaLabel:w.a.string,charCode:w.a.oneOfType([w.a.string,w.a.number]),close:w.a.object},R=function(A){var e,t=A.className,a=A.cssModule,n=A.children,o=A.toggle,i=A.tag,r=A.wrapTag,l=A.closeAriaLabel,c=A.charCode,d=A.close,p=Object(T.a)(A,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),m=Object(C.h)(E()(t,"modal-header"),a);if(!d&&o){var u="number"==typeof c?String.fromCharCode(c):c;e=s.a.createElement("button",{type:"button",onClick:o,className:Object(C.h)("close",a),"aria-label":l},s.a.createElement("span",{"aria-hidden":"true"},u))}return s.a.createElement(r,Object(g.a)({},p,{className:m}),s.a.createElement(i,{className:Object(C.h)("modal-title",a)},n),d||e)};R.propTypes=Z,R.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};var J=R,U={tag:C.l,className:w.a.string,cssModule:w.a.object},V=function(A){var e=A.className,t=A.cssModule,a=A.tag,n=Object(T.a)(A,["className","cssModule","tag"]),o=Object(C.h)(E()(e,"modal-body"),t);return s.a.createElement(a,Object(g.a)({},n,{className:o}))};V.propTypes=U,V.defaultProps={tag:"div"};var q=V,S=t(432),K=t.n(S);s.a.Component;var W=t(433),_=t.n(W),$=t(434),AA=t.n($),eA=t(435),tA=t.n(eA),aA=t(436),sA=t.n(aA),nA=t(437),oA=t.n(nA),iA=t(438),rA=t.n(iA),lA=t(439),cA=t.n(lA),dA=t(440),pA=t.n(dA),mA=t(441),uA=t.n(mA),hA=t(442),bA=t.n(hA),gA=t(443),fA=t.n(gA),NA=t(444),vA=t.n(NA),wA={backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"calc(100vh - 60px)"},yA=[AA.a,tA.a,sA.a],EA=[{title:"First, insert your data into RAWGraphs",image:oA.a,subSteps:[{title:"As simple as a copy-paste.",icon:s.a.createElement(n.i,{className:vA.a.substepIcon}),text:"RAWGraphs works with delimiter-separated values (i.e. csv and tsv files) as well as with copied-and-pasted texts from other applications (e.g. Microsoft Excel, Google Spreadsheets, TextEdit, …). It also works with CORS-enabled endpoints (APIs)."},{title:"No worries, your data is safe.",icon:s.a.createElement(n.h,{className:vA.a.substepIcon}),text:"Even though RAWGraphs is a web app, the data you insert will be processed only by the web browser. No server-side operations or storages are performed, no one will see, touch or copy your data!"}]},{title:"Choose within a wide range of visual models",image:rA.a,subSteps:[{title:"Conventional and unconventional layouts.",icon:s.a.createElement(n.c,{className:vA.a.substepIcon}),text:'We designed and developed RAWGraphs with designers and vis geeks in mind. That’s why we focused on providing charts that are not easy to produce with other tools. But don’t worry, you can also find bar charts and pies! Something missing? See how easy is to <a href="https://github.com/densitydesign/raw/wiki/Adding-New-Charts" target="_blank" rel="noopener noreferrer">build your own model</a>.'}]},{title:"Tune your chart and explore your data",image:cA.a,subSteps:[{title:"Understand and map visually your data dimensions.",icon:s.a.createElement(n.m,{className:vA.a.substepIcon}),text:"Do you want to know more about your data? Do you want to explore patterns and trends? Just map the dimensions of your dataset with the visual variables of the selected layout."},{title:" Visual feedback, immediately.",icon:s.a.createElement(n.l,{className:vA.a.substepIcon}),text:"As soon as the dataset dimensions are mapped you’ll see the visualization appear. Not happy with the result? Try another type of mapping to have a new visualization in the blink of an eye."}]},{title:"Export and go anywhere",image:pA.a,subSteps:[{title:" Semifinished vectors and data structures.",icon:s.a.createElement(n.j,{className:vA.a.substepIcon}),text:"RAWGraphs allows you to export visualizations as vector (SVG) or raster (PNG) images and embed them into your web page. Since RAWGraphs produces semifinished visualizations, you can even open them in your favorite vector graphics editor and improve them."}]}],OA=[{title:"RAW Graphs is open",description:"RAW Graphs is built on top of the amazing d3.js library by Mike Bostock. RAW.js is released under Apache 2 licence and it’s open to the community for improvements or for your own projects.",link:"https://github.com/densitydesign/raw/",linkLabel:"Check our repository on GitHub"},{title:"RAW Graphs is scalable",description:"Not satisfied with the layouts? Check how to easily add new charts with a basic knowledge of D3.js.",link:"https://github.com/densitydesign/raw/wiki/Adding-New-Charts",linkLabel:"Adding new charts"}],BA=[{question:"Do you want to contribute to the project? Any general question or feedback?",button:"contact us",link:"mailto:hello@rawgraphs.io"}];e.default=function(){return s.a.createElement(o.a,{headerBg:"transparent",useIt:!1},s.a.createElement(i.a,{title:"Home"}),s.a.createElement("div",{className:"container-fluid d-flex align-items-center justify-content-around flex-column",style:Object.assign({},wA,{backgroundImage:"url("+yA[Math.floor(3*Math.random())]+")"})},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-10 offset-1 text-center"},s.a.createElement("img",{src:_.a,className:"img-fluid "+vA.a.homeLogo,alt:"logo"})),s.a.createElement("div",{className:"col-12 text-center"},s.a.createElement("h2",{className:vA.a.claim},"The missing link between spreadsheets and data visualization.")),s.a.createElement("div",{className:"col-10 offset-1 col-sm-4 offset-sm-2 col-md-3 offset-md-3 col-lg-2 offset-lg-4"},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://app.rawgraphs.io"},s.a.createElement("button",{className:"btn btn-default btn-green btn-larger",type:"submit"},"Use it now!"))),s.a.createElement("div",{className:"col-10 offset-1 offset-sm-0 col-sm-4  col-md-3  col-lg-2 "},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/rawgraphs/raw/"},s.a.createElement("button",{className:"btn btn-default btn-grey btn-larger",type:"submit"},"Fork it on github!")))),s.a.createElement("div",{className:"row d-none d-sm-flex"},s.a.createElement("div",{className:"col-12 text-center"},s.a.createElement("a",{className:vA.a.exploreDown,href:"#step1"},s.a.createElement(n.d,{color:"#3E3E41",size:"3.25em"}))))),EA.map(function(A,e){return s.a.createElement(c,Object.assign({key:e},A,{index:e}))}),s.a.createElement("div",{id:"discover-more",className:"container-fluid discover-more step"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("h2",null,"Discover more")),OA.map(function(A,e){return s.a.createElement(m,Object.assign({key:e},A))})))),s.a.createElement("div",{id:"partners",className:"container-fluid step"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-12 text-center"},s.a.createElement("h2",null,"Brought to you by"))),s.a.createElement("div",{className:"row mt-5 justify-content-center"},s.a.createElement("div",{className:"col-md-4 col-12"},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:vA.a.withImg+" my-5",href:"https://densitydesign.org"},s.a.createElement("img",{className:"img-fluid",src:bA.a,alt:"Logo DensityDesign"}))),s.a.createElement("div",{className:"col-md-4 col-6"},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:vA.a.withImg,href:"https://calib.ro/"},s.a.createElement("img",{className:"img-fluid",src:uA.a,alt:"Logo Calibro"}))),s.a.createElement("div",{className:"col-md-4 col-6"},s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:vA.a.withImg,href:"https://inmagik.com/"},s.a.createElement("img",{className:"img-fluid",src:fA.a,alt:"Logo Inmagik"})))))),s.a.createElement("div",{className:"container"},s.a.createElement(h.a,{showBronze:!1})),BA.map(function(A,e){return s.a.createElement(u.a,Object.assign({key:e},A))}))}},433:function(A,e,t){A.exports=t.p+"static/logo@2x-8bdc07bce1c173c75cd3d8d0c59d2e08.png"},434:function(A,e,t){A.exports=t.p+"static/cover-bg-1@2x-4331ca77e5e2796387c64390236779fb.png"},435:function(A,e,t){A.exports=t.p+"static/cover-bg-2@2x-fa8b5fbe3eab7c640fd19982a07644d5.png"},436:function(A,e,t){A.exports=t.p+"static/cover-bg-3@2x-ea0ec52c996531dd4739b6044ac0bcc4.png"},437:function(A,e,t){A.exports=t.p+"static/step1-2cdada57b7a38d85736863e82ad20851.gif"},438:function(A,e,t){A.exports=t.p+"static/step2-9c121ffd166f0e8cbe67302ebb0197b5.gif"},439:function(A,e,t){A.exports=t.p+"static/step3-cb786efb3393fd23d9053063fc3aeea9.gif"},440:function(A,e,t){A.exports=t.p+"static/step4-e5f33c4275fd8f50de2ff0b5ce8cea1a.gif"},441:function(A,e){A.exports="data:image/png;base64,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"},442:function(A,e){A.exports="data:image/png;base64,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"},443:function(A,e,t){A.exports=t.p+"static/logo-inmagik-home-f30db845be9976cfb5bf0138dbcf304d.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-82cffce804880350b065.js.map