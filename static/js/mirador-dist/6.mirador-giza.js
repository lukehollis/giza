(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{807:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n(12),o=n(7),i=n(13),c=n(0),s=n.n(c),l=n(629),u=n(17),f=n.n(u),p=n(297),d=n(325),h=n(298),y=n(24),v=n(1),b=n(4),g=(n(6),n(3)),m=n(57),w=Object(m.a)(c.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var O=c.forwardRef((function(e,t){var n=e.alt,r=e.children,a=e.classes,o=e.className,i=e.component,s=void 0===i?"div":i,l=e.imgProps,u=e.sizes,f=e.src,p=e.srcSet,d=e.variant,h=void 0===d?"circle":d,y=Object(b.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),m=null,O=function(e){var t=e.src,n=e.srcSet,r=c.useState(!1),a=r[0],o=r[1];return c.useEffect((function(){if(t||n){o(!1);var e=!0,r=new Image;return r.src=t,r.srcSet=n,r.onload=function(){e&&o("loaded")},r.onerror=function(){e&&o("error")},function(){e=!1}}}),[t,n]),a}({src:f,srcSet:p}),j=f||p,C=j&&"error"!==O;return m=C?c.createElement("img",Object(v.a)({alt:n,src:f,srcSet:p,sizes:u,className:a.img},l)):null!=r?r:j&&n?n[0]:c.createElement(w,{className:a.fallback}),c.createElement(s,Object(v.a)({className:Object(g.a)(a.root,a.system,a[h],o,!C&&a.colorDefault),ref:t},y),m)})),j=Object(o.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(O),C=n(694),x=n(716),I=n.n(x),k=n(272),E=n.n(k),P=n(46),S=n.n(P),R=(n(425),n(351)),A=n(36),_=n(87);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function N(e,t){return(N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=$(e);if(t){var a=$(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return q(this,n)}}function q(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?T(e):t}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function $(e){return($=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var K=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&N(e,t)}(o,e);var t,n,r,a=z(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=a.call(this,e)).state={requestedAnnotations:!1},t.handleSelect=t.handleSelect.bind(T(t)),t.handleKey=t.handleKey.bind(T(t)),t.handleIntersection=t.handleIntersection.bind(T(t)),t}return t=o,(n=[{key:"handleSelect",value:function(){var e=this.props,t=e.canvas,n=e.selected,r=e.setCanvas,a=e.focusOnCanvas;n?a():r(t.id)}},{key:"handleKey",value:function(e){var t=this.props,n=t.canvas,r=t.setCanvas,a=t.focusOnCanvas;this.keys={enter:"Enter",space:" "},this.chars={enter:13,space:32},e.key===this.keys.enter||e.which===this.chars.enter||e.key===this.keys.space||e.which===this.chars.space?a():r(n.index,n.id)}},{key:"handleIntersection",value:function(e){var t=e.isIntersecting,n=this.props,r=n.annotationsCount,a=n.requestCanvasAnnotations,o=this.state.requestedAnnotations;!t||void 0===r||r>0||o||(this.setState({requestedAnnotations:!0}),a())}},{key:"render",value:function(){var e=this.props,t=e.annotationsCount,n=e.searchAnnotationsCount,r=e.canvas,a=e.classes,o=e.config,i=e.selected,c=new A.a(r);return s.a.createElement(R.a,{onChange:this.handleIntersection},s.a.createElement("div",{key:r.index,className:S()(a.galleryViewItem,i?a.selected:"",n>0?a.hasAnnotations:""),onClick:this.handleSelect,onKeyUp:this.handleKey,role:"button",tabIndex:0},s.a.createElement(_.a,{resource:r,labelled:!0,variant:"outside",maxWidth:o.width,maxHeight:o.height,style:{margin:"0 auto",maxWidth:"".concat(Math.ceil(o.height*c.aspectRatio),"px")}},s.a.createElement("div",{className:a.chips},n>0&&s.a.createElement(C.a,{avatar:s.a.createElement(j,{className:a.avatar,classes:{circle:a.avatarIcon}},s.a.createElement(E.a,{fontSize:"small"})),label:n,className:S()(a.searchChip),size:"small"}),(t||0)>0&&s.a.createElement(C.a,{avatar:s.a.createElement(j,{className:a.avatar,classes:{circle:a.avatarIcon}},s.a.createElement(I.a,{className:a.annotationIcon})),label:t,className:S()(a.annotationsChip),size:"small"})))))}}])&&D(t.prototype,n),r&&D(t,r),o}(c.Component);K.defaultProps={annotationsCount:void 0,config:{height:100,width:null},requestCanvasAnnotations:function(){},searchAnnotationsCount:0,selected:!1};var V=n(31),W=n(330),F=n(104),H=n(352),M=n(52);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function G(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){U(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function U(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var X=Object(r.compose)(Object(a.b)((function(e,t){var n=t.canvas,r=t.windowId,a=Object(V.g)(e,{windowId:r}),o=Object(W.f)(e,{windowId:r}),i=f()(o.map((function(e){return e.resources}))).filter((function(e){return e.targetId===n.id})),c=Object(F.e)(e,{content:"annotations",windowId:r}).length>0;return{annotationsCount:function(){if(c)return Object(H.d)(e,{canvasId:n.id}).reduce((function(e,t){return e+t.resources.filter((function(e){return e.targetId===n.id})).length}),0)}(),config:Object(M.a)(e).galleryView,searchAnnotationsCount:i.length,selected:a&&a.id===n.id}}),(function(e,t){var n=t.canvas,r=(t.id,t.windowId);return{focusOnCanvas:function(){return e(p.i(r,"single"))},requestCanvasAnnotations:function(){return e(d.f(r,n.id))},setCanvas:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return e(h.a.apply(y,[r].concat(n)))}}})),Object(o.a)((function(e){return{annotationIcon:{height:"1rem",width:"1rem"},annotationsChip:G({},e.typography.caption),avatar:{backgroundColor:"transparent"},chips:{opacity:.875,position:"absolute",right:0,textAlign:"right",top:0},galleryViewItem:{"&$hasAnnotations":{border:"2px solid ".concat(e.palette.action.selected)},"&$selected,&$selected$hasAnnotations":{border:"2px solid ".concat(e.palette.primary.main)},"&:focus":{outline:"none"},"&:hover":{backgroundColor:e.palette.action.hover},border:"2px solid transparent",cursor:"pointer",display:"inline-block",margin:"".concat(e.spacing(1),"px ").concat(e.spacing(.5),"px"),maxHeight:function(e){return e.config.height+45},minWidth:"60px",overflow:"hidden",padding:e.spacing(.5),position:"relative",width:"min-content"},hasAnnotations:{},searchChip:G(G({},e.typography.caption),{},{"&$selected $avatar":{backgroundColor:e.palette.highlights.primary},marginTop:2}),selected:{}}})))(K);function Y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function B(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return(L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Q(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=ee(e);if(t){var a=ee(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Z(this,n)}}function Z(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ee(e){return(ee=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var te=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&L(e,t)}(o,e);var t,n,r,a=Q(o);function o(){return Y(this,o),a.apply(this,arguments)}return t=o,(n=[{key:"render",value:function(){var e=this.props,t=e.canvases,n=e.classes,r=e.viewingDirection,a=e.windowId,o="right-to-left"===r?"rtl":"ltr";return s.a.createElement(l.a,{component:"section",dir:o,square:!0,elevation:0,className:n.galleryContainer,id:"".concat(a,"-gallery")},t.map((function(e){return s.a.createElement(X,{key:e.id,windowId:a,canvas:e})})))}}])&&B(t.prototype,n),r&&B(t,r),o}(c.Component);te.defaultProps={classes:{},viewingDirection:""};var ne=n(49),re=Object(r.compose)(Object(o.a)((function(e){return{galleryContainer:{alignItems:"flex-start",display:"flex",flexDirection:"row",flexWrap:"wrap",overflowX:"hidden",overflowY:"scroll",padding:"50px 0 50px 20px",width:"100%"}}})),Object(a.b)((function(e,t){var n=t.windowId;return{canvases:Object(V.f)(e,{windowId:n}),viewingDirection:Object(ne.e)(e,{windowId:n})}})),Object(i.a)("GalleryView"));t.default=re(te)}}]);