var x=Object.defineProperty;var M=(i,e,n)=>e in i?x(i,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[e]=n;var a=(i,e,n)=>(M(i,typeof e!="symbol"?e+"":e,n),n);import{d,r as O,s as I,o as P,a as p,c as C,b as B,e as u,F as H,p as V,f as N,g as F,h as T,u as c,R as $,i as W,j,w as z,t as L,k as A,l as G,m as K,n as q,q as Q,v as X}from"./vendor-H0B2H-hW.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=n(t);fetch(t.href,s)}})();const R=window.Cesium.Cartesian3,m=window.Cesium.ScreenSpaceEventHandler,w=window.Cesium.ScreenSpaceEventType,b=window.Cesium.HeightReference,v=window.Cesium.Color,J=window.Cesium.ConstantPositionProperty,D=window.Cesium.Cartographic,Y=window.Cesium.Ellipsoid,S=window.Cesium.Math,Z=window.Cesium.ReferenceFrame,_=(i,e)=>{const n=e.pickPositionSupported;let o=null;if(n)return o=e.pickPosition(i,new R),console.log(ee(o)),o;{const t=e.camera.getPickRay(i);if(t){const s=e.globe.pick(t,e,new R);return s||o}else{const s=e.camera.pickEllipsoid(i,e.globe.ellipsoid,new R);return s||o}}},g=new D(0,0,0),ee=i=>{D.fromCartesian(i,Y.WGS84,g);const e=g.longitude*S.DEGREES_PER_RADIAN,n=g.latitude*S.DEGREES_PER_RADIAN;return[e,n,g.height]};class te{constructor(e){a(this,"viewer");a(this,"eventHandlers");a(this,"status");a(this,"drawType");a(this,"handlers");a(this,"oldDepthTestValue",!1);this.viewer=e,this.eventHandlers={},this.status=!1,this.handlers=new Map,this.oldDepthTestValue=e.scene.globe.depthTestAgainstTerrain,e.scene.globe.depthTestAgainstTerrain=!0}beginPoint(){const e=this.viewer,n=e.scene,o=n.canvas,t=e.entities,s=()=>({color:v.ALICEBLUE,outlineColor:v.AQUA,outlineWidth:2,pixelSize:4,disableDepthTestDistance:5e4,heightReference:b.RELATIVE_TO_GROUND,show:!0}),r=()=>({color:v.ALICEBLUE,outlineColor:v.AQUA,outlineWidth:2,pixelSize:4,disableDepthTestDistance:0,heightReference:b.RELATIVE_TO_GROUND,show:!0}),y=new J;t.add({id:"movePoint",point:s(),position:y});let h,f;this.handlers.has("point-move")?h=this.handlers.get("point-move"):(h=new m(o),this.handlers.set("point-move",h)),this.handlers.has("point")?f=this.handlers.get("point"):(f=new m(o),this.handlers.set("point",f)),f.setInputAction(E=>{const l=_(E.position,n);if(l)t.add({point:r(),position:l});else return},w.LEFT_CLICK),h.setInputAction(E=>{const l=_(E.endPosition,n);if(l)y.setValue(l,Z.FIXED);else return},w.MOUSE_MOVE)}beginLine(){const n=this.viewer.scene,o=n.canvas;let t;this.handlers.has("line")?t=this.handlers.get("line"):(t=new m(o),this.handlers.set("line",t)),t.setInputAction(s=>{const r=_(s.position,n);if(r)console.log(r);else return},w.LEFT_CLICK)}beginPolygon(){const n=this.viewer.scene,o=n.canvas;let t;this.handlers.has("line")?t=this.handlers.get("line"):(t=new m(o),this.handlers.set("line",t)),t.setInputAction(s=>{const r=_(s.position,n);if(r)console.log(r);else return},w.LEFT_CLICK)}begin(e){switch(this.status=!0,this.drawType=e.type,e.type){case"point":this.beginPoint();break;case"line":this.beginLine();break;case"polygon":this.beginPolygon();break}return this}end(){this.status=!1,this.drawType=void 0,this.viewer.entities.removeById("movePoint");for(const[o,t]of this.handlers)t.destroy();for(const[o,t]of Object.entries(this.eventHandlers))t.forEach(s=>{s({})})}addEventListener(e,n){this.eventHandlers[e].push(n)}destroy(){this.status=!1,this.viewer.scene.globe.depthTestAgainstTerrain=this.oldDepthTestValue;for(const[e,n]of Object.entries(this.eventHandlers))n.length=0}}const ne=window.Cesium.Camera,se=window.Cesium.Rectangle,oe=()=>{ne.DEFAULT_VIEW_RECTANGLE=se.fromDegrees(75,0,140,60)},ie=i=>(V("data-v-ca6b5f62"),i=i(),N(),i),re=ie(()=>u("div",{id:"none-credit"},null,-1)),ae=window.Cesium.ImageryLayer,ce=window.Cesium.UrlTemplateImageryProvider,le=window.Cesium.Viewer,ue=d({__name:"index",setup(i){const e=O(),n=I(),o="production",s="https://libs.cdnjs.net/cesium/1.114.0/";return window.CESIUM_BASE_URL=s,F(k,n),console.log(`模式: ${o}, CESIUM_BASE_URL: ${s}`),P(()=>{oe(),n.value=new le(e.value,{infoBox:!1,selectionIndicator:!1,msaaSamples:4,timeline:!1,animation:!1,sceneModePicker:!1,scene3DOnly:!0,baseLayer:new ae(new ce({url:"https://cors.freehi.workers.dev/?https://gac-geo.googlecnapps.cn/maps/vt/lyrs=s&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}",maximumLevel:18}),{}),geocoder:!1,navigationHelpButton:!1,projectionPicker:!1,requestRenderMode:!0,creditContainer:"none-credit"});const r=n.value;r.scene.globe.depthTestAgainstTerrain=!0,r.scene.debugShowFramesPerSecond=!0}),(r,y)=>(p(),C(H,null,[B(r.$slots,"router-view",{},void 0,!0),u("div",{id:"cesium-viewer",ref_key:"viewerDivRef",ref:e},null,512),re],64))}}),U=(i,e)=>{const n=i.__vccOpts||i;for(const[o,t]of e)n[o]=t;return n},de=U(ue,[["__scopeId","data-v-ca6b5f62"]]),k=Symbol("CESIUM_VIEWER"),pe={id:"route-pane"},he={id:"nav"},fe=d({__name:"index",setup(i){const e=W();return(n,o)=>(p(),C("div",pe,[T(c($)),u("div",he,[u("button",{type:"button",onClick:o[0]||(o[0]=t=>c(e).push({path:"/"}))},"/"),u("button",{type:"button",onClick:o[1]||(o[1]=t=>c(e).push({path:"/test"}))},"/TestPane")])]))}}),me=U(fe,[["__scopeId","data-v-74d7121c"]]),we=d({__name:"App",setup(i){return(e,n)=>(p(),j(c(de),null,{"router-view":z(()=>[T(c(me))]),_:1}))}}),ve=d({__name:"index",setup(i){const e=A();return(n,o)=>(p(),C("div",null,L(String(c(e).name)),1))}}),_e=d({__name:"index",setup(i){const e=K(k),n=I(),o=A();return P(()=>{e&&(n.value=new te(e.value),n.value.begin({type:"point"}))}),G(()=>{var t,s;(t=n.value)==null||t.end(),(s=n.value)==null||s.destroy()}),(t,s)=>(p(),C("div",null,L(String(c(o).name)),1))}}),ge="/zoucaa",Ce=q({history:Q(ge),routes:[{path:"/",name:"Root",component:ve},{path:"/test",name:"Test",component:_e}]});X(we).use(Ce).mount("#app");
