(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(6397)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,r=i(2648).Z,a=i(1598).Z,o=i(7273).Z,s=a(i(7294)),c=r(i(2636)),l=i(7757),u=i(3735),m=i(3341);i(4210);var d=r(i(7746));let _={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function f(e){return void 0!==e.default}function g(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function h(e,t,i,r,a,o,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let c="decode"in e?e.decode():Promise.resolve();c.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&o(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,a=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>a,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{a=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let p=s.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:a,qualityInt:c,className:l,imgStyle:u,blurStyle:m,isLazy:d,fill:_,placeholder:f,loading:g,srcString:p,config:v,unoptimized:w,loader:b,onLoadRef:y,onLoadingCompleteRef:x,setBlurComplete:j,setShowAltText:E,onLoad:S,onError:N}=e,C=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return g=d?"lazy":g,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},C,{loading:g,width:a,height:r,decoding:"async","data-nimg":_?"fill":"1",className:l,style:n({},u,m)},i,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(N&&(e.src=e.src),e.complete&&h(e,p,f,y,x,j,w))},[p,f,y,x,j,N,w,t]),onLoad:e=>{let t=e.currentTarget;h(t,p,f,y,x,j,w)},onError:e=>{E(!0),"blur"===f&&j(!0),N&&N(e)}})))}),v=s.forwardRef((e,t)=>{let i,r;var a,{src:h,sizes:v,unoptimized:w=!1,priority:b=!1,loading:y,className:x,quality:j,width:E,height:S,fill:N,style:C,onLoad:z,onLoadingComplete:H,placeholder:k="empty",blurDataURL:P,layout:R,objectFit:M,objectPosition:O,lazyBoundary:I,lazyRoot:D}=e,L=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let A=s.useContext(m.ImageConfigContext),B=s.useMemo(()=>{let e=_||A||u.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[A]),T=L,F=T.loader||d.default;delete T.loader;let G="__next_img_default"in F;if(G){if("custom"===B.loader)throw Error('Image with src "'.concat(h,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=F;F=t=>{let{config:i}=t,n=o(t,["config"]);return e(n)}}if(R){"fill"===R&&(N=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(C=n({},C,e));let t={responsive:"100vw",fill:"100vw"}[R];t&&!v&&(v=t)}let q="",W=g(E),V=g(S);if("object"==typeof(a=h)&&(f(a)||void 0!==a.src)){let e=f(h)?h.default:h;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,P=P||e.blurDataURL,q=e.src,!N){if(W||V){if(W&&!V){let t=W/e.width;V=Math.round(e.height*t)}else if(!W&&V){let t=V/e.height;W=Math.round(e.width*t)}}else W=e.width,V=e.height}}let Z=!b&&("lazy"===y||void 0===y);((h="string"==typeof h?h:q).startsWith("data:")||h.startsWith("blob:"))&&(w=!0,Z=!1),B.unoptimized&&(w=!0),G&&h.endsWith(".svg")&&!B.dangerouslyAllowSVG&&(w=!0);let[J,U]=s.useState(!1),[X,Y]=s.useState(!1),K=g(j),Q=Object.assign(N?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:M,objectPosition:O}:{},X?{}:{color:"transparent"},C),$="blur"===k&&P&&!J?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(l.getImageBlurSvg({widthInt:W,heightInt:V,blurWidth:i,blurHeight:r,blurDataURL:P,objectFit:Q.objectFit}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:a,sizes:o,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:c,kind:l}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let a=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:a,kind:"x"}}(t,r,o),u=c.length-1;return{sizes:o||"w"!==l?o:"100vw",srcSet:c.map((e,n)=>"".concat(s({config:t,src:i,quality:a,width:e})," ").concat("w"===l?e:n+1).concat(l)).join(", "),src:s({config:t,src:i,quality:a,width:c[u]})}}({config:B,src:h,unoptimized:w,width:W,quality:K,sizes:v,loader:F}),et=h,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:T.crossOrigin},en=s.useRef(z);s.useEffect(()=>{en.current=z},[z]);let er=s.useRef(H);s.useEffect(()=>{er.current=H},[H]);let ea=n({isLazy:Z,imgAttributes:ee,heightInt:V,widthInt:W,qualityInt:K,className:x,imgStyle:Q,blurStyle:$,loading:y,config:B,fill:N,unoptimized:w,placeholder:k,loader:F,srcString:et,onLoadRef:en,onLoadingCompleteRef:er,setBlurComplete:U,setShowAltText:Y},T);return s.default.createElement(s.default.Fragment,null,s.default.createElement(p,Object.assign({},ea,{ref:t})),b?s.default.createElement(c.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:a,objectFit:o}=e,s=n||t,c=r||i,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&c?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(c,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},6397:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return _},default:function(){return f}});var n,r,a=i(5893),o=i(9008),s=i.n(o),c=i(5675),l=i.n(c),u=i(9034),m=i.n(u);let d=e=>{let t=new Set(e.map(e=>e.category)),i=[];return t.forEach(t=>{i.push({category:t,items:e.filter(e=>e.category===t)})}),i};(n=r||(r={}))[n.Mashawi=0]="Mashawi",n[n["Side Dishes"]=1]="Side Dishes",n[n.Drinks=2]="Drinks",n[n.Main=3]="Main";var _=!0;function f(e){let{data:t}=e,i=d(t);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s(),{children:[(0,a.jsx)("title",{children:"Plastinian Resturant"}),(0,a.jsx)("meta",{name:"description",content:"Plastinian resturant menu"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{className:m().container,children:i.map(e=>(0,a.jsxs)("div",{className:m().menu,children:[(0,a.jsx)("h2",{className:m().menu_group_heading,children:r[e.category]}),(0,a.jsx)("div",{className:m().menu_group,children:e.items.map(e=>(0,a.jsxs)("div",{className:m().menu_item,children:[(0,a.jsx)(l(),{className:m().menu_item_image,src:"/Produkty/".concat(e.img),alt:"Vercel Logo",width:1e3,height:1e3,priority:!0}),(0,a.jsxs)("div",{className:m().menu_item_text,children:[(0,a.jsxs)("h2",{className:m().menu_item_heading,children:[(0,a.jsxs)("div",{className:m().menu_item_heading_name,children:[(0,a.jsx)("span",{className:m().menu_item_name,children:e.cz_name}),(0,a.jsx)("span",{className:m().menu_item_name_sub,children:e.en_name})]}),(0,a.jsxs)("span",{className:m().menu_item_price,children:[(0,a.jsx)("span",{className:m().menu_item_price_amount,children:e.price}),(0,a.jsx)("span",{className:m().menu_item_price_currency,children:"CZK"})]})]}),(0,a.jsx)("p",{className:m().menu_item_description,children:e.description})]})]},"menu_item_".concat(e.id)))})]},"menu_category_".concat(e)))})]})}},9034:function(e){e.exports={container:"Home_container__bCOhY",menu:"Home_menu__2ncGe",menu_group_heading:"Home_menu_group_heading__Hbl0f",menu_group:"Home_menu_group__rIqD6",menu_item:"Home_menu_item__w_dwB",menu_item_image:"Home_menu_item_image__8i2V1",menu_item_text:"Home_menu_item_text__7Tq0n",menu_item_heading:"Home_menu_item_heading__N2Kat",menu_item_heading_name:"Home_menu_item_heading_name__P9GBp",menu_item_name:"Home_menu_item_name__98x1d",menu_item_name_sub:"Home_menu_item_name_sub__4nTDq",menu_item_description:"Home_menu_item_description__75_br",menu_item_price:"Home_menu_item_price__p65R9",menu_item_price_amount:"Home_menu_item_price_amount__SoZJ3",menu_item_price_currency:"Home_menu_item_price_currency__WcxV0",card:"Home_card___LpL1",thirteen:"Home_thirteen__cMI_k",grid:"Home_grid__GxQ85",rotate:"Home_rotate____XsI"}},9008:function(e,t,i){e.exports=i(2636)},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);