(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pa="168",Mi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Rc=0,so=1,Cc=2,Dl=1,Il=2,dn=3,_n=0,wt=1,jt=2,In=0,Si=1,ro=2,ao=3,oo=4,Pc=5,Xn=100,Lc=101,Dc=102,Ic=103,Uc=104,Nc=200,Oc=201,Fc=202,Bc=203,Xr=204,Yr=205,zc=206,kc=207,Hc=208,Gc=209,Vc=210,Wc=211,Xc=212,Yc=213,qc=214,Kc=0,jc=1,Zc=2,Ks=3,$c=4,Jc=5,Qc=6,eh=7,Ul=0,th=1,nh=2,Un=0,ih=1,sh=2,rh=3,Nl=4,ah=5,oh=6,lh=7,lo="attached",ch="detached",Ol=300,Ai=301,wi=302,qr=303,Kr=304,nr=306,Ri=1e3,Pn=1001,js=1002,At=1003,Fl=1004,Ji=1005,Ut=1006,Hs=1007,pn=1008,xn=1009,Bl=1010,zl=1011,is=1012,La=1013,jn=1014,Xt=1015,os=1016,Da=1017,Ia=1018,Ci=1020,kl=35902,Hl=1021,Gl=1022,Bt=1023,Vl=1024,Wl=1025,yi=1026,Pi=1027,Ua=1028,Na=1029,Xl=1030,Oa=1031,Fa=1033,Gs=33776,Vs=33777,Ws=33778,Xs=33779,jr=35840,Zr=35841,$r=35842,Jr=35843,Qr=36196,ea=37492,ta=37496,na=37808,ia=37809,sa=37810,ra=37811,aa=37812,oa=37813,la=37814,ca=37815,ha=37816,ua=37817,da=37818,fa=37819,pa=37820,ma=37821,Ys=36492,ga=36494,_a=36495,Yl=36283,xa=36284,va=36285,Ma=36286,ss=2300,rs=2301,hr=2302,co=2400,ho=2401,uo=2402,hh=2500,uh=0,ql=1,Sa=2,dh=3200,fh=3201,Kl=0,ph=1,Cn="",Tt="srgb",vt="srgb-linear",Ba="display-p3",ir="display-p3-linear",Zs="linear",tt="srgb",$s="rec709",Js="p3",Qn=7680,fo=519,mh=512,gh=513,_h=514,jl=515,xh=516,vh=517,Mh=518,Sh=519,ya=35044,po="300 es",mn=2e3,Qs=2001;class $n{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Mt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let mo=1234567;const es=Math.PI/180,Li=180/Math.PI;function Yt(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mt[s&255]+Mt[s>>8&255]+Mt[s>>16&255]+Mt[s>>24&255]+"-"+Mt[e&255]+Mt[e>>8&255]+"-"+Mt[e>>16&15|64]+Mt[e>>24&255]+"-"+Mt[t&63|128]+Mt[t>>8&255]+"-"+Mt[t>>16&255]+Mt[t>>24&255]+Mt[n&255]+Mt[n>>8&255]+Mt[n>>16&255]+Mt[n>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function za(s,e){return(s%e+e)%e}function yh(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Eh(s,e,t){return s!==e?(t-s)/(e-s):0}function ts(s,e,t){return(1-t)*s+t*e}function Th(s,e,t,n){return ts(s,e,1-Math.exp(-t*n))}function bh(s,e=1){return e-Math.abs(za(s,e*2)-e)}function Ah(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function wh(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Rh(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Ch(s,e){return s+Math.random()*(e-s)}function Ph(s){return s*(.5-Math.random())}function Lh(s){s!==void 0&&(mo=s);let e=mo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Dh(s){return s*es}function Ih(s){return s*Li}function Uh(s){return(s&s-1)===0&&s!==0}function Nh(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Oh(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Fh(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),d=a((e-n)/2),p=r((n-e)/2),g=a((n-e)/2);switch(i){case"XYX":s.set(o*h,l*u,l*d,o*c);break;case"YZY":s.set(l*d,o*h,l*u,o*c);break;case"ZXZ":s.set(l*u,l*d,o*h,o*c);break;case"XZX":s.set(o*h,l*g,l*p,o*c);break;case"YXY":s.set(l*p,o*h,l*g,o*c);break;case"ZYZ":s.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Wt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Ze(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yn={DEG2RAD:es,RAD2DEG:Li,generateUUID:Yt,clamp:xt,euclideanModulo:za,mapLinear:yh,inverseLerp:Eh,lerp:ts,damp:Th,pingpong:bh,smoothstep:Ah,smootherstep:wh,randInt:Rh,randFloat:Ch,randFloatSpread:Ph,seededRandom:Lh,degToRad:Dh,radToDeg:Ih,isPowerOfTwo:Uh,ceilPowerOfTwo:Nh,floorPowerOfTwo:Oh,setQuaternionFromProperEuler:Fh,normalize:Ze,denormalize:Wt};class Te{constructor(e=0,t=0){Te.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,n,i,r,a,o,l,c){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c)}set(e,t,n,i,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],m=i[3],f=i[6],T=i[1],S=i[4],b=i[7],D=i[2],R=i[5],A=i[8];return r[0]=a*x+o*T+l*D,r[3]=a*m+o*S+l*R,r[6]=a*f+o*b+l*A,r[1]=c*x+h*T+u*D,r[4]=c*m+h*S+u*R,r[7]=c*f+h*b+u*A,r[2]=d*x+p*T+g*D,r[5]=d*m+p*S+g*R,r[8]=d*f+p*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+i*r*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,p=c*r-a*l,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*c-h*n)*x,e[2]=(o*n-i*a)*x,e[3]=d*x,e[4]=(h*t-i*l)*x,e[5]=(i*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ur.makeScale(e,t)),this}rotate(e){return this.premultiply(ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ur=new Ne;function Zl(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function as(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Bh(){const s=as("canvas");return s.style.display="block",s}const go={};function Ei(s){s in go||(go[s]=!0,console.warn(s))}function zh(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const _o=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xo=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Gi={[vt]:{transfer:Zs,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Tt]:{transfer:tt,primaries:$s,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[ir]:{transfer:Zs,primaries:Js,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(xo),fromReference:s=>s.applyMatrix3(_o)},[Ba]:{transfer:tt,primaries:Js,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(xo),fromReference:s=>s.applyMatrix3(_o).convertLinearToSRGB()}},kh=new Set([vt,ir]),Ve={enabled:!0,_workingColorSpace:vt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!kh.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Gi[e].toReference,i=Gi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Gi[s].primaries},getTransfer:function(s){return s===Cn?Zs:Gi[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Gi[e].luminanceCoefficients)}};function Ti(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function dr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let ei;class Hh{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ei===void 0&&(ei=as("canvas")),ei.width=e.width,ei.height=e.height;const n=ei.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ei}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=Ti(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ti(t[n]/255)*255):t[n]=Ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gh=0;class $l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Yt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(fr(i[a].image)):r.push(fr(i[a]))}else r=fr(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Hh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vh=0;class mt extends $n{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Pn,i=Pn,r=Ut,a=pn,o=Bt,l=xn,c=mt.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Yt(),this.name="",this.source=new $l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Te(0,0),this.repeat=new Te(1,1),this.center=new Te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ol)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ri:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ri:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Ol;mt.DEFAULT_ANISOTROPY=1;class Qe{constructor(e=0,t=0,n=0,i=1){Qe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],x=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,b=(p+1)/2,D=(f+1)/2,R=(h+d)/4,A=(u+x)/4,B=(g+m)/4;return S>b&&S>D?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=R/n,r=A/n):b>D?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=B/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=A/r,i=B/r),this.set(n,i,r,t),this}let T=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(u-x)/T,this.z=(d-h)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wh extends $n{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new mt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new $l(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zn extends Wh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jl extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xh extends mt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=At,this.minFilter=At,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Jt{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[a+0],p=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==d||c!==p||h!==g){let m=1-o;const f=l*d+c*p+h*g+u*x,T=f>=0?1:-1,S=1-f*f;if(S>Number.EPSILON){const D=Math.sqrt(S),R=Math.atan2(D,f*T);m=Math.sin(m*R)/D,o=Math.sin(o*R)/D}const b=o*T;if(l=l*m+d*b,c=c*m+p*b,h=h*m+g*b,u=u*m+x*b,m===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=D,c*=D,h*=D,u*=D}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[a],d=r[a+1],p=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-o*p,e[t+2]=c*g+h*p+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(i/2),u=o(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(i+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(i+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-i)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+i*c-r*l,this._y=i*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-i*o,this._w=a*h-n*o-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=i+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-r*o,this.y=r*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pr.copy(this).projectOnVector(e),this.sub(pr)}reflect(e){return this.sub(pr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pr=new P,vo=new Jt;class vn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kt):kt.fromBufferAttribute(r,a),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ds.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(e.matrixWorld),this.union(ds)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vi),fs.subVectors(this.max,Vi),ti.subVectors(e.a,Vi),ni.subVectors(e.b,Vi),ii.subVectors(e.c,Vi),Sn.subVectors(ni,ti),yn.subVectors(ii,ni),Fn.subVectors(ti,ii);let t=[0,-Sn.z,Sn.y,0,-yn.z,yn.y,0,-Fn.z,Fn.y,Sn.z,0,-Sn.x,yn.z,0,-yn.x,Fn.z,0,-Fn.x,-Sn.y,Sn.x,0,-yn.y,yn.x,0,-Fn.y,Fn.x,0];return!mr(t,ti,ni,ii,fs)||(t=[1,0,0,0,1,0,0,0,1],!mr(t,ti,ni,ii,fs))?!1:(ps.crossVectors(Sn,yn),t=[ps.x,ps.y,ps.z],mr(t,ti,ni,ii,fs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(an[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),an[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),an[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),an[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),an[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),an[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),an[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),an[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(an),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const an=[new P,new P,new P,new P,new P,new P,new P,new P],kt=new P,ds=new vn,ti=new P,ni=new P,ii=new P,Sn=new P,yn=new P,Fn=new P,Vi=new P,fs=new P,ps=new P,Bn=new P;function mr(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Bn.fromArray(s,r);const o=i.x*Math.abs(Bn.x)+i.y*Math.abs(Bn.y)+i.z*Math.abs(Bn.z),l=e.dot(Bn),c=t.dot(Bn),h=n.dot(Bn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Yh=new vn,Wi=new P,gr=new P;class en{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yh.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wi.subVectors(e,this.center);const t=Wi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Wi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wi.copy(e.center).add(gr)),this.expandByPoint(Wi.copy(e.center).sub(gr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const on=new P,_r=new P,ms=new P,En=new P,xr=new P,gs=new P,vr=new P;class Oi{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,on)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=on.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(on.copy(this.origin).addScaledVector(this.direction,t),on.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_r.copy(e).add(t).multiplyScalar(.5),ms.copy(t).sub(e).normalize(),En.copy(this.origin).sub(_r);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ms),o=En.dot(this.direction),l=-En.dot(ms),c=En.lengthSq(),h=Math.abs(1-a*a);let u,d,p,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const x=1/h;u*=x,d*=x,p=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_r).addScaledVector(ms,d),p}intersectSphere(e,t){on.subVectors(e.center,this.origin);const n=on.dot(this.direction),i=on.dot(on)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,on)!==null}intersectTriangle(e,t,n,i,r){xr.subVectors(t,e),gs.subVectors(n,e),vr.crossVectors(xr,gs);let a=this.direction.dot(vr),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;En.subVectors(this.origin,e);const l=o*this.direction.dot(gs.crossVectors(En,gs));if(l<0)return null;const c=o*this.direction.dot(xr.cross(En));if(c<0||l+c>a)return null;const h=-o*En.dot(vr);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class De{constructor(e,t,n,i,r,a,o,l,c,h,u,d,p,g,x,m){De.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,x,m)}set(e,t,n,i,r,a,o,l,c,h,u,d,p,g,x,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new De().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/si.setFromMatrixColumn(e,0).length(),r=1/si.setFromMatrixColumn(e,1).length(),a=1/si.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-x*c,t[9]=-o*l,t[2]=x-d*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d+x*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-g,t[6]=x+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,x=c*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,p=a*u,g=o*h,x=o*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+x,t[1]=l*u,t[5]=x*c+d,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=a*l,p=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+x,t[5]=a*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qh,e,Kh)}lookAt(e,t,n){const i=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),Tn.crossVectors(n,Dt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),Tn.crossVectors(n,Dt)),Tn.normalize(),_s.crossVectors(Dt,Tn),i[0]=Tn.x,i[4]=_s.x,i[8]=Dt.x,i[1]=Tn.y,i[5]=_s.y,i[9]=Dt.y,i[2]=Tn.z,i[6]=_s.z,i[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],m=n[10],f=n[14],T=n[3],S=n[7],b=n[11],D=n[15],R=i[0],A=i[4],B=i[8],E=i[12],M=i[1],C=i[5],q=i[9],G=i[13],J=i[2],$=i[6],K=i[10],Q=i[14],X=i[3],he=i[7],de=i[11],ve=i[15];return r[0]=a*R+o*M+l*J+c*X,r[4]=a*A+o*C+l*$+c*he,r[8]=a*B+o*q+l*K+c*de,r[12]=a*E+o*G+l*Q+c*ve,r[1]=h*R+u*M+d*J+p*X,r[5]=h*A+u*C+d*$+p*he,r[9]=h*B+u*q+d*K+p*de,r[13]=h*E+u*G+d*Q+p*ve,r[2]=g*R+x*M+m*J+f*X,r[6]=g*A+x*C+m*$+f*he,r[10]=g*B+x*q+m*K+f*de,r[14]=g*E+x*G+m*Q+f*ve,r[3]=T*R+S*M+b*J+D*X,r[7]=T*A+S*C+b*$+D*he,r[11]=T*B+S*q+b*K+D*de,r[15]=T*E+S*G+b*Q+D*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],x=e[7],m=e[11],f=e[15];return g*(+r*l*u-i*c*u-r*o*d+n*c*d+i*o*p-n*l*p)+x*(+t*l*p-t*c*d+r*a*d-i*a*p+i*c*h-r*l*h)+m*(+t*c*u-t*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+f*(-i*o*h-t*l*u+t*o*d+i*a*u-n*a*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],m=e[14],f=e[15],T=u*m*c-x*d*c+x*l*p-o*m*p-u*l*f+o*d*f,S=g*d*c-h*m*c-g*l*p+a*m*p+h*l*f-a*d*f,b=h*x*c-g*u*c+g*o*p-a*x*p-h*o*f+a*u*f,D=g*u*l-h*x*l-g*o*d+a*x*d+h*o*m-a*u*m,R=t*T+n*S+i*b+r*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=T*A,e[1]=(x*d*r-u*m*r-x*i*p+n*m*p+u*i*f-n*d*f)*A,e[2]=(o*m*r-x*l*r+x*i*c-n*m*c-o*i*f+n*l*f)*A,e[3]=(u*l*r-o*d*r-u*i*c+n*d*c+o*i*p-n*l*p)*A,e[4]=S*A,e[5]=(h*m*r-g*d*r+g*i*p-t*m*p-h*i*f+t*d*f)*A,e[6]=(g*l*r-a*m*r-g*i*c+t*m*c+a*i*f-t*l*f)*A,e[7]=(a*d*r-h*l*r+h*i*c-t*d*c-a*i*p+t*l*p)*A,e[8]=b*A,e[9]=(g*u*r-h*x*r-g*n*p+t*x*p+h*n*f-t*u*f)*A,e[10]=(a*x*r-g*o*r+g*n*c-t*x*c-a*n*f+t*o*f)*A,e[11]=(h*o*r-a*u*r-h*n*c+t*u*c+a*n*p-t*o*p)*A,e[12]=D*A,e[13]=(h*x*i-g*u*i+g*n*d-t*x*d-h*n*m+t*u*m)*A,e[14]=(g*o*i-a*x*i-g*n*l+t*x*l+a*n*m-t*o*m)*A,e[15]=(a*u*i-h*o*i+h*n*l-t*u*l-a*n*d+t*o*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,h*o+n,h*l-i*a,0,c*l-i*o,h*l+i*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,p=r*h,g=r*u,x=a*h,m=a*u,f=o*u,T=l*c,S=l*h,b=l*u,D=n.x,R=n.y,A=n.z;return i[0]=(1-(x+f))*D,i[1]=(p+b)*D,i[2]=(g-S)*D,i[3]=0,i[4]=(p-b)*R,i[5]=(1-(d+f))*R,i[6]=(m+T)*R,i[7]=0,i[8]=(g+S)*A,i[9]=(m-T)*A,i[10]=(1-(d+x))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=si.set(i[0],i[1],i[2]).length();const a=si.set(i[4],i[5],i[6]).length(),o=si.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const c=1/r,h=1/a,u=1/o;return Ht.elements[0]*=c,Ht.elements[1]*=c,Ht.elements[2]*=c,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=u,Ht.elements[9]*=u,Ht.elements[10]*=u,t.setFromRotationMatrix(Ht),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=mn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(o===mn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Qs)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=mn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(a-r),d=(t+e)*c,p=(n+i)*h;let g,x;if(o===mn)g=(a+r)*u,x=-2*u;else if(o===Qs)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const si=new P,Ht=new De,qh=new P(0,0,0),Kh=new P(1,1,1),Tn=new P,_s=new P,Dt=new P,Mo=new De,So=new Jt;class Qt{constructor(e=0,t=0,n=0,i=Qt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Mo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return So.setFromEuler(this),this.setFromQuaternion(So,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qt.DEFAULT_ORDER="XYZ";class ka{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jh=0;const yo=new P,ri=new Jt,ln=new De,xs=new P,Xi=new P,Zh=new P,$h=new Jt,Eo=new P(1,0,0),To=new P(0,1,0),bo=new P(0,0,1),Ao={type:"added"},Jh={type:"removed"},ai={type:"childadded",child:null},Mr={type:"childremoved",child:null};class rt extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jh++}),this.uuid=Yt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new P,t=new Qt,n=new Jt,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new De},normalMatrix:{value:new Ne}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ka,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.multiply(ri),this}rotateOnWorldAxis(e,t){return ri.setFromAxisAngle(e,t),this.quaternion.premultiply(ri),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(To,e)}rotateZ(e){return this.rotateOnAxis(bo,e)}translateOnAxis(e,t){return yo.copy(e).applyQuaternion(this.quaternion),this.position.add(yo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(To,e)}translateZ(e){return this.translateOnAxis(bo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?xs.copy(e):xs.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Xi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Xi,xs,this.up):ln.lookAt(xs,Xi,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),ri.setFromRotationMatrix(ln),this.quaternion.premultiply(ri.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ao),ai.child=e,this.dispatchEvent(ai),ai.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jh),Mr.child=e,this.dispatchEvent(Mr),Mr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ln.multiply(e.parent.matrixWorld)),e.applyMatrix4(ln),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ao),ai.child=e,this.dispatchEvent(ai),ai.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,e,Zh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xi,$h,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}rt.DEFAULT_UP=new P(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new P,cn=new P,Sr=new P,hn=new P,oi=new P,li=new P,wo=new P,yr=new P,Er=new P,Tr=new P;class Zt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Gt.subVectors(e,t),i.cross(Gt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Gt.subVectors(i,t),cn.subVectors(n,t),Sr.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(cn),l=Gt.dot(Sr),c=cn.dot(cn),h=cn.dot(Sr),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,i,r,a,o,l){return this.getBarycoord(e,t,n,i,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static isFrontFacing(e,t,n,i){return Gt.subVectors(n,t),cn.subVectors(e,t),Gt.cross(cn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Gt.cross(cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;oi.subVectors(i,n),li.subVectors(r,n),yr.subVectors(e,n);const l=oi.dot(yr),c=li.dot(yr);if(l<=0&&c<=0)return t.copy(n);Er.subVectors(e,i);const h=oi.dot(Er),u=li.dot(Er);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(oi,a);Tr.subVectors(e,r);const p=oi.dot(Tr),g=li.dot(Tr);if(g>=0&&p<=g)return t.copy(r);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(li,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return wo.subVectors(r,i),o=(u-h)/(u-h+(p-g)),t.copy(i).addScaledVector(wo,o);const f=1/(m+x+d);return a=x*f,o=d*f,t.copy(n).addScaledVector(oi,a).addScaledVector(li,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bn={h:0,s:0,l:0},vs={h:0,s:0,l:0};function br(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ve.workingColorSpace){if(e=za(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=br(a,r,e+1/3),this.g=br(a,r,e),this.b=br(a,r,e-1/3)}return Ve.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=Ql[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}copyLinearToSRGB(e){return this.r=dr(e.r),this.g=dr(e.g),this.b=dr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Ve.fromWorkingColorSpace(St.copy(this),e),Math.round(xt(St.r*255,0,255))*65536+Math.round(xt(St.g*255,0,255))*256+Math.round(xt(St.b*255,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.fromWorkingColorSpace(St.copy(this),t);const n=St.r,i=St.g,r=St.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.fromWorkingColorSpace(St.copy(this),t),e.r=St.r,e.g=St.g,e.b=St.b,e}getStyle(e=Tt){Ve.fromWorkingColorSpace(St.copy(this),e);const t=St.r,n=St.g,i=St.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(bn),this.setHSL(bn.h+e,bn.s+t,bn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bn),e.getHSL(vs);const n=ts(bn.h,vs.h,t),i=ts(bn.s,vs.s,t),r=ts(bn.l,vs.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const St=new Pe;Pe.NAMES=Ql;let Qh=0;class $t extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Yt(),this.name="",this.type="Material",this.blending=Si,this.side=_n,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=Yr,this.blendEquation=Xn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qn,this.stencilZFail=Qn,this.stencilZPass=Qn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Si&&(n.blending=this.blending),this.side!==_n&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==Yr&&(n.blendDst=this.blendDst),this.blendEquation!==Xn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ln extends $t{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.combine=Ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new P,Ms=new Te;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ei("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ms.fromBufferAttribute(this,t),Ms.applyMatrix3(e),this.setXY(t,Ms.x,Ms.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wt(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wt(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wt(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ya&&(e.usage=this.usage),e}}class ec extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class tc extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gn extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let eu=0;const Ot=new De,Ar=new rt,ci=new P,It=new vn,Yi=new vn,pt=new P;class tn extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eu++}),this.uuid=Yt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?tc:ec)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Ar.lookAt(e),Ar.updateMatrix(),this.applyMatrix4(Ar.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Yi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(It.min,Yi.min),It.expandByPoint(pt),pt.addVectors(It.max,Yi.max),It.expandByPoint(pt)):(It.expandByPoint(Yi.min),It.expandByPoint(Yi.max))}It.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)pt.fromBufferAttribute(o,c),l&&(ci.fromBufferAttribute(e,c),pt.add(ci)),i=Math.max(i,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let B=0;B<n.count;B++)o[B]=new P,l[B]=new P;const c=new P,h=new P,u=new P,d=new Te,p=new Te,g=new Te,x=new P,m=new P;function f(B,E,M){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,B),p.fromBufferAttribute(r,E),g.fromBufferAttribute(r,M),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),o[B].add(x),o[E].add(x),o[M].add(x),l[B].add(m),l[E].add(m),l[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let B=0,E=T.length;B<E;++B){const M=T[B],C=M.start,q=M.count;for(let G=C,J=C+q;G<J;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const S=new P,b=new P,D=new P,R=new P;function A(B){D.fromBufferAttribute(i,B),R.copy(D);const E=o[B];S.copy(E),S.sub(D.multiplyScalar(D.dot(E))).normalize(),b.crossVectors(R,E);const C=b.dot(l[B])<0?-1:1;a.setXYZW(B,S.x,S.y,S.z,C)}for(let B=0,E=T.length;B<E;++B){const M=T[B],C=M.start,q=M.count;for(let G=C,J=C+q;G<J;G+=3)A(e.getX(G+0)),A(e.getX(G+1)),A(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,a=new P,o=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Rt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ro=new De,zn=new Oi,Ss=new en,Co=new P,hi=new P,ui=new P,di=new P,wr=new P,ys=new P,Es=new Te,Ts=new Te,bs=new Te,Po=new P,Lo=new P,Do=new P,As=new P,ws=new P;class et extends rt{constructor(e=new tn,t=new Ln){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ys.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(wr.fromBufferAttribute(u,e),a?ys.addScaledVector(wr,h):ys.addScaledVector(wr.sub(t),h))}t.add(ys)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(r),zn.copy(e.ray).recast(e.near),!(Ss.containsPoint(zn.origin)===!1&&(zn.intersectSphere(Ss,Co)===null||zn.origin.distanceToSquared(Co)>(e.far-e.near)**2))&&(Ro.copy(r).invert(),zn.copy(e.ray).applyMatrix4(Ro),!(n.boundingBox!==null&&zn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,zn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,D=S;b<D;b+=3){const R=o.getX(b),A=o.getX(b+1),B=o.getX(b+2);i=Rs(this,f,e,n,c,h,u,R,A,B),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const T=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);i=Rs(this,a,e,n,c,h,u,T,S,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,D=S;b<D;b+=3){const R=b,A=b+1,B=b+2;i=Rs(this,f,e,n,c,h,u,R,A,B),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,f=x;m<f;m+=3){const T=m,S=m+1,b=m+2;i=Rs(this,a,e,n,c,h,u,T,S,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function tu(s,e,t,n,i,r,a,o){let l;if(e.side===wt?l=n.intersectTriangle(a,r,i,!0,o):l=n.intersectTriangle(i,r,a,e.side===_n,o),l===null)return null;ws.copy(o),ws.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(ws);return c<t.near||c>t.far?null:{distance:c,point:ws.clone(),object:s}}function Rs(s,e,t,n,i,r,a,o,l,c){s.getVertexPosition(o,hi),s.getVertexPosition(l,ui),s.getVertexPosition(c,di);const h=tu(s,e,t,n,hi,ui,di,As);if(h){i&&(Es.fromBufferAttribute(i,o),Ts.fromBufferAttribute(i,l),bs.fromBufferAttribute(i,c),h.uv=Zt.getInterpolation(As,hi,ui,di,Es,Ts,bs,new Te)),r&&(Es.fromBufferAttribute(r,o),Ts.fromBufferAttribute(r,l),bs.fromBufferAttribute(r,c),h.uv1=Zt.getInterpolation(As,hi,ui,di,Es,Ts,bs,new Te)),a&&(Po.fromBufferAttribute(a,o),Lo.fromBufferAttribute(a,l),Do.fromBufferAttribute(a,c),h.normal=Zt.getInterpolation(As,hi,ui,di,Po,Lo,Do,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new P,materialIndex:0};Zt.getNormal(hi,ui,di,u.normal),h.face=u}return h}class Fi extends tn{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new gn(c,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(u,2));function g(x,m,f,T,S,b,D,R,A,B,E){const M=b/A,C=D/B,q=b/2,G=D/2,J=R/2,$=A+1,K=B+1;let Q=0,X=0;const he=new P;for(let de=0;de<K;de++){const ve=de*C-G;for(let Be=0;Be<$;Be++){const Ge=Be*M-q;he[x]=Ge*T,he[m]=ve*S,he[f]=J,c.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[f]=R>0?1:-1,h.push(he.x,he.y,he.z),u.push(Be/A),u.push(1-de/B),Q+=1}}for(let de=0;de<B;de++)for(let ve=0;ve<A;ve++){const Be=d+ve+$*de,Ge=d+ve+$*(de+1),Y=d+(ve+1)+$*(de+1),te=d+(ve+1)+$*de;l.push(Be,Ge,te),l.push(Ge,Y,te),X+=6}o.addGroup(p,X,E),p+=X,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Di(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Et(s){const e={};for(let t=0;t<s.length;t++){const n=Di(s[t]);for(const i in n)e[i]=n[i]}return e}function nu(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function nc(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const iu={clone:Di,merge:Et};var su=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends $t{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=su,this.fragmentShader=ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Di(e.uniforms),this.uniformsGroups=nu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ic extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=mn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const An=new P,Io=new Te,Uo=new Te;class bt extends ic{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Li*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Li*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(An.x,An.y).multiplyScalar(-e/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-e/An.z)}getViewSize(e,t){return this.getViewBounds(e,Io,Uo),t.subVectors(Uo,Io)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fi=-90,pi=1;class au extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new bt(fi,pi,e,t);i.layers=this.layers,this.add(i);const r=new bt(fi,pi,e,t);r.layers=this.layers,this.add(r);const a=new bt(fi,pi,e,t);a.layers=this.layers,this.add(a);const o=new bt(fi,pi,e,t);o.layers=this.layers,this.add(o);const l=new bt(fi,pi,e,t);l.layers=this.layers,this.add(l);const c=new bt(fi,pi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===mn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class sc extends mt{constructor(e,t,n,i,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,i,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ou extends Zn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new sc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ut}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Fi(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:Di(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:wt,blending:In});r.uniforms.tEquirect.value=t;const a=new et(i,r),o=t.minFilter;return t.minFilter===pn&&(t.minFilter=Ut),new au(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Rr=new P,lu=new P,cu=new Ne;class Rn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Rr.subVectors(n,t).cross(lu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Rr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||cu.getNormalMatrix(e),i=this.coplanarPoint(Rr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new en,Cs=new P;class Ha{constructor(e=new Rn,t=new Rn,n=new Rn,i=new Rn,r=new Rn,a=new Rn){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mn){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],m=i[11],f=i[12],T=i[13],S=i[14],b=i[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+a,d+h,m+g,b+T).normalize(),n[3].setComponents(l-a,d-h,m-g,b-T).normalize(),n[4].setComponents(l-o,d-u,m-x,b-S).normalize(),t===mn)n[5].setComponents(l+o,d+u,m+x,b+S).normalize();else if(t===Qs)n[5].setComponents(o,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Cs.x=i.normal.x>0?e.max.x:e.min.x,Cs.y=i.normal.y>0?e.max.y:e.min.y,Cs.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Cs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rc(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function hu(s){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(s.bindBuffer(c,o),u.count===-1&&d.length===0&&s.bufferSubData(c,0,h),d.length!==0){for(let p=0,g=d.length;p<g;p++){const x=d[p];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}u.count!==-1&&(s.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:r,update:a}}class ls extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,h=l+1,u=e/o,d=t/l,p=[],g=[],x=[],m=[];for(let f=0;f<h;f++){const T=f*d-a;for(let S=0;S<c;S++){const b=S*u-r;g.push(b,-T,0),x.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const S=T+c*f,b=T+c*(f+1),D=T+1+c*(f+1),R=T+1+c*f;p.push(S,b,R),p.push(b,D,R)}this.setIndex(p),this.setAttribute("position",new gn(g,3)),this.setAttribute("normal",new gn(x,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.widthSegments,e.heightSegments)}}var uu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,du=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,gu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_u=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,xu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Mu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Su=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,wu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ru=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Lu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Du=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Iu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Uu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Nu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ou=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ku=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Gu=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Yu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ku=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ju=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$u=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ju=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ed=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,td=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,nd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ld=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,cd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,hd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,dd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Md=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ed=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Td=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,wd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Od=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,kd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Zd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$d=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,rf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,af=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,of=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const uf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,df=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_f=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,xf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,vf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,bf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Df=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,If=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Of=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ff=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ue={alphahash_fragment:uu,alphahash_pars_fragment:du,alphamap_fragment:fu,alphamap_pars_fragment:pu,alphatest_fragment:mu,alphatest_pars_fragment:gu,aomap_fragment:_u,aomap_pars_fragment:xu,batching_pars_vertex:vu,batching_vertex:Mu,begin_vertex:Su,beginnormal_vertex:yu,bsdfs:Eu,iridescence_fragment:Tu,bumpmap_pars_fragment:bu,clipping_planes_fragment:Au,clipping_planes_pars_fragment:wu,clipping_planes_pars_vertex:Ru,clipping_planes_vertex:Cu,color_fragment:Pu,color_pars_fragment:Lu,color_pars_vertex:Du,color_vertex:Iu,common:Uu,cube_uv_reflection_fragment:Nu,defaultnormal_vertex:Ou,displacementmap_pars_vertex:Fu,displacementmap_vertex:Bu,emissivemap_fragment:zu,emissivemap_pars_fragment:ku,colorspace_fragment:Hu,colorspace_pars_fragment:Gu,envmap_fragment:Vu,envmap_common_pars_fragment:Wu,envmap_pars_fragment:Xu,envmap_pars_vertex:Yu,envmap_physical_pars_fragment:id,envmap_vertex:qu,fog_vertex:Ku,fog_pars_vertex:ju,fog_fragment:Zu,fog_pars_fragment:$u,gradientmap_pars_fragment:Ju,lightmap_pars_fragment:Qu,lights_lambert_fragment:ed,lights_lambert_pars_fragment:td,lights_pars_begin:nd,lights_toon_fragment:sd,lights_toon_pars_fragment:rd,lights_phong_fragment:ad,lights_phong_pars_fragment:od,lights_physical_fragment:ld,lights_physical_pars_fragment:cd,lights_fragment_begin:hd,lights_fragment_maps:ud,lights_fragment_end:dd,logdepthbuf_fragment:fd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:_d,map_pars_fragment:xd,map_particle_fragment:vd,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:yd,morphinstance_vertex:Ed,morphcolor_vertex:Td,morphnormal_vertex:bd,morphtarget_pars_vertex:Ad,morphtarget_vertex:wd,normal_fragment_begin:Rd,normal_fragment_maps:Cd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Od,iridescence_pars_fragment:Fd,opaque_fragment:Bd,packing:zd,premultiplied_alpha_fragment:kd,project_vertex:Hd,dithering_fragment:Gd,dithering_pars_fragment:Vd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:Yd,shadowmap_pars_vertex:qd,shadowmap_vertex:Kd,shadowmask_pars_fragment:jd,skinbase_vertex:Zd,skinning_pars_vertex:$d,skinning_vertex:Jd,skinnormal_vertex:Qd,specularmap_fragment:ef,specularmap_pars_fragment:tf,tonemapping_fragment:nf,tonemapping_pars_fragment:sf,transmission_fragment:rf,transmission_pars_fragment:af,uv_pars_fragment:of,uv_pars_vertex:lf,uv_vertex:cf,worldpos_vertex:hf,background_vert:uf,background_frag:df,backgroundCube_vert:ff,backgroundCube_frag:pf,cube_vert:mf,cube_frag:gf,depth_vert:_f,depth_frag:xf,distanceRGBA_vert:vf,distanceRGBA_frag:Mf,equirect_vert:Sf,equirect_frag:yf,linedashed_vert:Ef,linedashed_frag:Tf,meshbasic_vert:bf,meshbasic_frag:Af,meshlambert_vert:wf,meshlambert_frag:Rf,meshmatcap_vert:Cf,meshmatcap_frag:Pf,meshnormal_vert:Lf,meshnormal_frag:Df,meshphong_vert:If,meshphong_frag:Uf,meshphysical_vert:Nf,meshphysical_frag:Of,meshtoon_vert:Ff,meshtoon_frag:Bf,points_vert:zf,points_frag:kf,shadow_vert:Hf,shadow_frag:Gf,sprite_vert:Vf,sprite_frag:Wf},le={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Kt={basic:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Et([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Et([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Et([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Et([le.points,le.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Et([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Et([le.common,le.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Et([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Et([le.sprite,le.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Et([le.common,le.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Et([le.lights,le.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};Kt.physical={uniforms:Et([Kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const Ps={r:0,b:0,g:0},Hn=new Qt,Xf=new De;function Yf(s,e,t,n,i,r,a){const o=new Pe(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?t:e).get(S)),S}function x(T){let S=!1;const b=g(T);b===null?f(o,l):b&&b.isColor&&(f(b,1),S=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(T,S){const b=g(S);b&&(b.isCubeTexture||b.mapping===nr)?(h===void 0&&(h=new et(new Fi(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Di(Kt.backgroundCube.uniforms),vertexShader:Kt.backgroundCube.vertexShader,fragmentShader:Kt.backgroundCube.fragmentShader,side:wt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hn.copy(S.backgroundRotation),Hn.x*=-1,Hn.y*=-1,Hn.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Hn.y*=-1,Hn.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Xf.makeRotationFromEuler(Hn)),h.material.toneMapped=Ve.getTransfer(b.colorSpace)!==tt,(u!==b||d!==b.version||p!==s.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,p=s.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new et(new ls(2,2),new Nn({name:"BackgroundMaterial",uniforms:Di(Kt.background.uniforms),vertexShader:Kt.background.vertexShader,fragmentShader:Kt.background.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(b.colorSpace)!==tt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,p=s.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,S){T.getRGB(Ps,nc(s)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,S,a)}return{getClearColor:function(){return o},setClearColor:function(T,S=1){o.set(T),l=S,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(o,l)},render:x,addToRenderList:m}}function qf(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,a=!1;function o(M,C,q,G,J){let $=!1;const K=u(G,q,C);r!==K&&(r=K,c(r.object)),$=p(M,G,q,J),$&&g(M,G,q,J),J!==null&&e.update(J,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,b(M,C,q,G),J!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function l(){return s.createVertexArray()}function c(M){return s.bindVertexArray(M)}function h(M){return s.deleteVertexArray(M)}function u(M,C,q){const G=q.wireframe===!0;let J=n[M.id];J===void 0&&(J={},n[M.id]=J);let $=J[C.id];$===void 0&&($={},J[C.id]=$);let K=$[G];return K===void 0&&(K=d(l()),$[G]=K),K}function d(M){const C=[],q=[],G=[];for(let J=0;J<t;J++)C[J]=0,q[J]=0,G[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:q,attributeDivisors:G,object:M,attributes:{},index:null}}function p(M,C,q,G){const J=r.attributes,$=C.attributes;let K=0;const Q=q.getAttributes();for(const X in Q)if(Q[X].location>=0){const de=J[X];let ve=$[X];if(ve===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor)),de===void 0||de.attribute!==ve||ve&&de.data!==ve.data)return!0;K++}return r.attributesNum!==K||r.index!==G}function g(M,C,q,G){const J={},$=C.attributes;let K=0;const Q=q.getAttributes();for(const X in Q)if(Q[X].location>=0){let de=$[X];de===void 0&&(X==="instanceMatrix"&&M.instanceMatrix&&(de=M.instanceMatrix),X==="instanceColor"&&M.instanceColor&&(de=M.instanceColor));const ve={};ve.attribute=de,de&&de.data&&(ve.data=de.data),J[X]=ve,K++}r.attributes=J,r.attributesNum=K,r.index=G}function x(){const M=r.newAttributes;for(let C=0,q=M.length;C<q;C++)M[C]=0}function m(M){f(M,0)}function f(M,C){const q=r.newAttributes,G=r.enabledAttributes,J=r.attributeDivisors;q[M]=1,G[M]===0&&(s.enableVertexAttribArray(M),G[M]=1),J[M]!==C&&(s.vertexAttribDivisor(M,C),J[M]=C)}function T(){const M=r.newAttributes,C=r.enabledAttributes;for(let q=0,G=C.length;q<G;q++)C[q]!==M[q]&&(s.disableVertexAttribArray(q),C[q]=0)}function S(M,C,q,G,J,$,K){K===!0?s.vertexAttribIPointer(M,C,q,J,$):s.vertexAttribPointer(M,C,q,G,J,$)}function b(M,C,q,G){x();const J=G.attributes,$=q.getAttributes(),K=C.defaultAttributeValues;for(const Q in $){const X=$[Q];if(X.location>=0){let he=J[Q];if(he===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const de=he.normalized,ve=he.itemSize,Be=e.get(he);if(Be===void 0)continue;const Ge=Be.buffer,Y=Be.type,te=Be.bytesPerElement,fe=Y===s.INT||Y===s.UNSIGNED_INT||he.gpuType===La;if(he.isInterleavedBufferAttribute){const pe=he.data,Ee=pe.stride,Re=he.offset;if(pe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<X.locationSize;Oe++)f(X.location+Oe,pe.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Oe=0;Oe<X.locationSize;Oe++)m(X.location+Oe);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Oe=0;Oe<X.locationSize;Oe++)S(X.location+Oe,ve/X.locationSize,Y,de,Ee*te,(Re+ve/X.locationSize*Oe)*te,fe)}else{if(he.isInstancedBufferAttribute){for(let pe=0;pe<X.locationSize;pe++)f(X.location+pe,he.meshPerAttribute);M.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let pe=0;pe<X.locationSize;pe++)m(X.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let pe=0;pe<X.locationSize;pe++)S(X.location+pe,ve/X.locationSize,Y,de,ve*te,ve/X.locationSize*pe*te,fe)}}else if(K!==void 0){const de=K[Q];if(de!==void 0)switch(de.length){case 2:s.vertexAttrib2fv(X.location,de);break;case 3:s.vertexAttrib3fv(X.location,de);break;case 4:s.vertexAttrib4fv(X.location,de);break;default:s.vertexAttrib1fv(X.location,de)}}}}T()}function D(){B();for(const M in n){const C=n[M];for(const q in C){const G=C[q];for(const J in G)h(G[J].object),delete G[J];delete C[q]}delete n[M]}}function R(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const q in C){const G=C[q];for(const J in G)h(G[J].object),delete G[J];delete C[q]}delete n[M.id]}function A(M){for(const C in n){const q=n[C];if(q[M.id]===void 0)continue;const G=q[M.id];for(const J in G)h(G[J].object),delete G[J];delete q[M.id]}}function B(){E(),a=!0,r!==i&&(r=i,c(r.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:B,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Kf(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let x=0;x<u;x++)g+=h[x];for(let x=0;x<d.length;x++)t.update(g,n,d[x])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function jf(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(R){return!(R!==Bt&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const A=R===os&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xn&&n.convert(R)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Xt&&!A)}function l(R){if(R==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),f=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),T=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=p>0,D=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:x,maxAttributes:m,maxVertexUniforms:f,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:b,maxSamples:D}}function Zf(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new Rn,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,f=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):c();else{const T=r?0:n,S=T*4;let b=f.clippingState||null;l.value=b,b=h(g,d,S,p);for(let D=0;D!==S;++D)b[D]=t[D];f.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const f=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,b=p;S!==x;++S,b+=4)a.copy(u[S]).applyMatrix4(T,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function $f(s){let e=new WeakMap;function t(a,o){return o===qr?a.mapping=Ai:o===Kr&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===qr||o===Kr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ou(l.height);return c.fromEquirectangularTexture(s,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ga extends ic{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,No=[.125,.215,.35,.446,.526,.582],qn=20,Cr=new Ga,Oo=new Pe;let Pr=null,Lr=0,Dr=0,Ir=!1;const Wn=(1+Math.sqrt(5))/2,mi=1/Wn,Fo=[new P(-Wn,mi,0),new P(Wn,mi,0),new P(-mi,0,Wn),new P(mi,0,Wn),new P(0,Wn,-mi),new P(0,Wn,mi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ea{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Pr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr,Lr,Dr),this._renderer.xr.enabled=Ir,e.scissorTest=!1,Ls(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===wi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget(),Lr=this._renderer.getActiveCubeFace(),Dr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ut,minFilter:Ut,generateMipmaps:!1,type:os,format:Bt,colorSpace:vt,depthBuffer:!1},i=Bo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jf(r)),this._blurMaterial=Qf(r,e,t)}return i}_compileMaterial(e){const t=new et(this._lodPlanes[0],e);this._renderer.compile(t,Cr)}_sceneToCubeUV(e,t,n,i){const o=new bt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Oo),h.toneMapping=Un,h.autoClear=!1;const p=new Ln({name:"PMREM.Background",side:wt,depthWrite:!1,depthTest:!1}),g=new et(new Fi,p);let x=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,x=!0):(p.color.copy(Oo),x=!0);for(let f=0;f<6;f++){const T=f%3;T===0?(o.up.set(0,l[f],0),o.lookAt(c[f],0,0)):T===1?(o.up.set(0,0,l[f]),o.lookAt(0,c[f],0)):(o.up.set(0,l[f],0),o.lookAt(0,0,c[f]));const S=this._cubeSize;Ls(i,T*S,f>2?S:0,S,S),h.setRenderTarget(i),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Ai||e.mapping===wi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ls(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Cr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Fo[(i-r-1)%Fo.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new et(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*qn-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):qn;m>qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${qn}`);const f=[];let T=0;for(let A=0;A<qn;++A){const B=A/x,E=Math.exp(-B*B/2);f.push(E),A===0?T+=E:A<m&&(T+=2*E)}for(let A=0;A<f.length;A++)f[A]=f[A]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:S}=this;d.dTheta.value=g,d.mipInt.value=S-n;const b=this._sizeLods[i],D=3*b*(i>S-vi?i-S+vi:0),R=4*(this._cubeSize-b);Ls(t,D,R,3*b,2*b),l.setRenderTarget(t),l.render(u,Cr)}}function Jf(s){const e=[],t=[],n=[];let i=s;const r=s-vi+1+No.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let l=1/o;a>s-vi?l=No[a-s+vi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,x=3,m=2,f=1,T=new Float32Array(x*g*p),S=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,B=R>2?0:-1,E=[A,B,0,A+2/3,B,0,A+2/3,B+1,0,A,B,0,A+2/3,B+1,0,A,B+1,0];T.set(E,x*g*R),S.set(d,m*g*R);const M=[R,R,R,R,R,R];b.set(M,f*g*R)}const D=new tn;D.setAttribute("position",new Rt(T,x)),D.setAttribute("uv",new Rt(S,m)),D.setAttribute("faceIndex",new Rt(b,f)),e.push(D),i>vi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bo(s,e,t){const n=new Zn(s,e,t);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Qf(s,e,t){const n=new Float32Array(qn),i=new P(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:qn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function zo(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function ko(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Va(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:In,depthTest:!1,depthWrite:!1})}function Va(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ep(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===qr||l===Kr,h=l===Ai||l===wi;if(c||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ea(s)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&i(p)?(t===null&&(t=new Ea(s)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function tp(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Ei("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function np(s,e,t,n){const i={},r=new WeakMap;function a(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,f=x.length;m<f;m++)e.remove(x[m])}d.removeEventListener("dispose",a),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const x=p[g];for(let m=0,f=x.length;m<f;m++)e.update(x[m],s.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let S=0,b=T.length;S<b;S+=3){const D=T[S+0],R=T[S+1],A=T[S+2];d.push(D,R,R,A,A,D)}}else if(g!==void 0){const T=g.array;x=g.version;for(let S=0,b=T.length/3-1;S<b;S+=3){const D=S+0,R=S+1,A=S+2;d.push(D,R,R,A,A,D)}}else return;const m=new(Zl(d)?tc:ec)(d,1);m.version=x;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function ip(s,e,t){let n;function i(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*a),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*a,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/a,p[f],x[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T];for(let T=0;T<x.length;T++)t.update(f,n,x[T])}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function sp(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function rp(s,e,t){const n=new WeakMap,i=new Qe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let M=function(){B.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),x===!0&&(b=2),m===!0&&(b=3);let D=o.attributes.position.count*b,R=1;D>e.maxTextureSize&&(R=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const A=new Float32Array(D*R*4*u),B=new Jl(A,D,R,u);B.type=Xt,B.needsUpdate=!0;const E=b*4;for(let C=0;C<u;C++){const q=f[C],G=T[C],J=S[C],$=D*R*4*C;for(let K=0;K<q.count;K++){const Q=K*E;g===!0&&(i.fromBufferAttribute(q,K),A[$+Q+0]=i.x,A[$+Q+1]=i.y,A[$+Q+2]=i.z,A[$+Q+3]=0),x===!0&&(i.fromBufferAttribute(G,K),A[$+Q+4]=i.x,A[$+Q+5]=i.y,A[$+Q+6]=i.z,A[$+Q+7]=0),m===!0&&(i.fromBufferAttribute(J,K),A[$+Q+8]=i.x,A[$+Q+9]=i.y,A[$+Q+10]=i.z,A[$+Q+11]=J.itemSize===4?i.w:1)}}d={count:u,texture:B,size:new Te(D,R)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(s,"morphTargetBaseInfluence",x),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function ap(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class ac extends mt{constructor(e,t,n,i,r,a,o,l,c,h=yi){if(h!==yi&&h!==Pi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===yi&&(n=jn),n===void 0&&h===Pi&&(n=Ci),super(null,i,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const oc=new mt,Ho=new ac(1,1),lc=new Jl,cc=new Xh,hc=new sc,Go=[],Vo=[],Wo=new Float32Array(16),Xo=new Float32Array(9),Yo=new Float32Array(4);function Bi(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Go[i];if(r===void 0&&(r=new Float32Array(i),Go[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function dt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ft(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function sr(s,e){let t=Vo[e];t===void 0&&(t=new Int32Array(e),Vo[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function op(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function lp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2fv(this.addr,e),ft(t,e)}}function cp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;s.uniform3fv(this.addr,e),ft(t,e)}}function hp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4fv(this.addr,e),ft(t,e)}}function up(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Yo.set(n),s.uniformMatrix2fv(this.addr,!1,Yo),ft(t,n)}}function dp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Xo.set(n),s.uniformMatrix3fv(this.addr,!1,Xo),ft(t,n)}}function fp(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Wo.set(n),s.uniformMatrix4fv(this.addr,!1,Wo),ft(t,n)}}function pp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2iv(this.addr,e),ft(t,e)}}function gp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3iv(this.addr,e),ft(t,e)}}function _p(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4iv(this.addr,e),ft(t,e)}}function xp(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function vp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;s.uniform2uiv(this.addr,e),ft(t,e)}}function Mp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;s.uniform3uiv(this.addr,e),ft(t,e)}}function Sp(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;s.uniform4uiv(this.addr,e),ft(t,e)}}function yp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Ho.compareFunction=jl,r=Ho):r=oc,t.setTexture2D(e||r,i)}function Ep(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||cc,i)}function Tp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||hc,i)}function bp(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||lc,i)}function Ap(s){switch(s){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return dp;case 35676:return fp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return xp;case 36294:return vp;case 36295:return Mp;case 36296:return Sp;case 35678:case 36198:case 36298:case 36306:case 35682:return yp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Tp;case 36289:case 36303:case 36311:case 36292:return bp}}function wp(s,e){s.uniform1fv(this.addr,e)}function Rp(s,e){const t=Bi(e,this.size,2);s.uniform2fv(this.addr,t)}function Cp(s,e){const t=Bi(e,this.size,3);s.uniform3fv(this.addr,t)}function Pp(s,e){const t=Bi(e,this.size,4);s.uniform4fv(this.addr,t)}function Lp(s,e){const t=Bi(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Dp(s,e){const t=Bi(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Ip(s,e){const t=Bi(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Up(s,e){s.uniform1iv(this.addr,e)}function Np(s,e){s.uniform2iv(this.addr,e)}function Op(s,e){s.uniform3iv(this.addr,e)}function Fp(s,e){s.uniform4iv(this.addr,e)}function Bp(s,e){s.uniform1uiv(this.addr,e)}function zp(s,e){s.uniform2uiv(this.addr,e)}function kp(s,e){s.uniform3uiv(this.addr,e)}function Hp(s,e){s.uniform4uiv(this.addr,e)}function Gp(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||oc,r[a])}function Vp(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||cc,r[a])}function Wp(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||hc,r[a])}function Xp(s,e,t){const n=this.cache,i=e.length,r=sr(t,i);dt(n,r)||(s.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||lc,r[a])}function Yp(s){switch(s){case 5126:return wp;case 35664:return Rp;case 35665:return Cp;case 35666:return Pp;case 35674:return Lp;case 35675:return Dp;case 35676:return Ip;case 5124:case 35670:return Up;case 35667:case 35671:return Np;case 35668:case 35672:return Op;case 35669:case 35673:return Fp;case 5125:return Bp;case 36294:return zp;case 36295:return kp;case 36296:return Hp;case 35678:case 36198:case 36298:case 36306:case 35682:return Gp;case 35679:case 36299:case 36307:return Vp;case 35680:case 36300:case 36308:case 36293:return Wp;case 36289:case 36303:case 36311:case 36292:return Xp}}class qp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ap(t.type)}}class Kp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Yp(t.type)}}class jp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Ur=/(\w+)(\])?(\[|\.)?/g;function qo(s,e){s.seq.push(e),s.map[e.id]=e}function Zp(s,e,t){const n=s.name,i=n.length;for(Ur.lastIndex=0;;){const r=Ur.exec(n),a=Ur.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){qo(t,c===void 0?new qp(o,s,e):new Kp(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new jp(o),qo(t,u)),t=u}}}class qs{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Zp(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Ko(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const $p=37297;let Jp=0;function Qp(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function em(s){const e=Ve.getPrimaries(Ve.workingColorSpace),t=Ve.getPrimaries(s);let n;switch(e===t?n="":e===Js&&t===$s?n="LinearDisplayP3ToLinearSRGB":e===$s&&t===Js&&(n="LinearSRGBToLinearDisplayP3"),s){case vt:case ir:return[n,"LinearTransferOETF"];case Tt:case Ba:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function jo(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Qp(s.getShaderSource(e),a)}else return i}function tm(s,e){const t=em(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function nm(s,e){let t;switch(e){case ih:t="Linear";break;case sh:t="Reinhard";break;case rh:t="Cineon";break;case Nl:t="ACESFilmic";break;case oh:t="AgX";break;case lh:t="Neutral";break;case ah:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ds=new P;function im(){Ve.getLuminanceCoefficients(Ds);const s=Ds.x.toFixed(4),e=Ds.y.toFixed(4),t=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function sm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qi).join(`
`)}function rm(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function am(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Qi(s){return s!==""}function Zo(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $o(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const om=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(s){return s.replace(om,cm)}const lm=new Map;function cm(s,e){let t=Ue[e];if(t===void 0){const n=lm.get(e);if(n!==void 0)t=Ue[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jo(s){return s.replace(hm,um)}function um(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qo(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dm(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dl?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Il?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function fm(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Ai:case wi:e="ENVMAP_TYPE_CUBE";break;case nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pm(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case wi:e="ENVMAP_MODE_REFRACTION";break}return e}function mm(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ul:e="ENVMAP_BLENDING_MULTIPLY";break;case th:e="ENVMAP_BLENDING_MIX";break;case nh:e="ENVMAP_BLENDING_ADD";break}return e}function gm(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _m(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dm(t),c=fm(t),h=pm(t),u=mm(t),d=gm(t),p=sm(t),g=rm(r),x=i.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Qi).join(`
`),f.length>0&&(f+=`
`)):(m=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qi).join(`
`),f=[Qo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?Ue.tonemapping_pars_fragment:"",t.toneMapping!==Un?nm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.colorspace_pars_fragment,tm("linearToOutputTexel",t.outputColorSpace),im(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qi).join(`
`)),a=Ta(a),a=Zo(a,t),a=$o(a,t),o=Ta(o),o=Zo(o,t),o=$o(o,t),a=Jo(a),o=Jo(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+m+a,b=T+f+o,D=Ko(i,i.VERTEX_SHADER,S),R=Ko(i,i.FRAGMENT_SHADER,b);i.attachShader(x,D),i.attachShader(x,R),t.index0AttributeName!==void 0?i.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(x,0,"position"),i.linkProgram(x);function A(C){if(s.debug.checkShaderErrors){const q=i.getProgramInfoLog(x).trim(),G=i.getShaderInfoLog(D).trim(),J=i.getShaderInfoLog(R).trim();let $=!0,K=!0;if(i.getProgramParameter(x,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,x,D,R);else{const Q=jo(i,D,"vertex"),X=jo(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(x,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+q+`
`+Q+`
`+X)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(G===""||J==="")&&(K=!1);K&&(C.diagnostics={runnable:$,programLog:q,vertexShader:{log:G,prefix:m},fragmentShader:{log:J,prefix:f}})}i.deleteShader(D),i.deleteShader(R),B=new qs(i,x),E=am(i,x)}let B;this.getUniforms=function(){return B===void 0&&A(this),B};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=i.getProgramParameter(x,$p)),M},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}let xm=0;class vm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Mm(e),t.set(e,n)),n}}class Mm{constructor(e){this.id=xm++,this.code=e,this.usedTimes=0}}function Sm(s,e,t,n,i,r,a){const o=new ka,l=new vm,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(E){return c.add(E),E===0?"uv":`uv${E}`}function m(E,M,C,q,G){const J=q.fog,$=G.geometry,K=E.isMeshStandardMaterial?q.environment:null,Q=(E.isMeshStandardMaterial?t:e).get(E.envMap||K),X=Q&&Q.mapping===nr?Q.image.height:null,he=g[E.type];E.precision!==null&&(p=i.getMaxPrecision(E.precision),p!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",p,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ve=de!==void 0?de.length:0;let Be=0;$.morphAttributes.position!==void 0&&(Be=1),$.morphAttributes.normal!==void 0&&(Be=2),$.morphAttributes.color!==void 0&&(Be=3);let Ge,Y,te,fe;if(he){const Ye=Kt[he];Ge=Ye.vertexShader,Y=Ye.fragmentShader}else Ge=E.vertexShader,Y=E.fragmentShader,l.update(E),te=l.getVertexShaderID(E),fe=l.getFragmentShaderID(E);const pe=s.getRenderTarget(),Ee=G.isInstancedMesh===!0,Re=G.isBatchedMesh===!0,Oe=!!E.map,nt=!!E.matcap,w=!!Q,it=!!E.aoMap,We=!!E.lightMap,Xe=!!E.bumpMap,Me=!!E.normalMap,O=!!E.displacementMap,H=!!E.emissiveMap,ee=!!E.metalnessMap,y=!!E.roughnessMap,_=E.anisotropy>0,N=E.clearcoat>0,W=E.dispersion>0,F=E.iridescence>0,V=E.sheen>0,ue=E.transmission>0,re=_&&!!E.anisotropyMap,oe=N&&!!E.clearcoatMap,Ie=N&&!!E.clearcoatNormalMap,ne=N&&!!E.clearcoatRoughnessMap,me=F&&!!E.iridescenceMap,ke=F&&!!E.iridescenceThicknessMap,Ce=V&&!!E.sheenColorMap,ge=V&&!!E.sheenRoughnessMap,Le=!!E.specularMap,Fe=!!E.specularColorMap,st=!!E.specularIntensityMap,L=ue&&!!E.transmissionMap,ie=ue&&!!E.thicknessMap,j=!!E.gradientMap,Z=!!E.alphaMap,ae=E.alphaTest>0,be=!!E.alphaHash,He=!!E.extensions;let lt=Un;E.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(lt=s.toneMapping);const gt={shaderID:he,shaderType:E.type,shaderName:E.name,vertexShader:Ge,fragmentShader:Y,defines:E.defines,customVertexShaderID:te,customFragmentShaderID:fe,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:p,batching:Re,batchingColor:Re&&G._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&G.instanceColor!==null,instancingMorph:Ee&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:vt,alphaToCoverage:!!E.alphaToCoverage,map:Oe,matcap:nt,envMap:w,envMapMode:w&&Q.mapping,envMapCubeUVHeight:X,aoMap:it,lightMap:We,bumpMap:Xe,normalMap:Me,displacementMap:d&&O,emissiveMap:H,normalMapObjectSpace:Me&&E.normalMapType===ph,normalMapTangentSpace:Me&&E.normalMapType===Kl,metalnessMap:ee,roughnessMap:y,anisotropy:_,anisotropyMap:re,clearcoat:N,clearcoatMap:oe,clearcoatNormalMap:Ie,clearcoatRoughnessMap:ne,dispersion:W,iridescence:F,iridescenceMap:me,iridescenceThicknessMap:ke,sheen:V,sheenColorMap:Ce,sheenRoughnessMap:ge,specularMap:Le,specularColorMap:Fe,specularIntensityMap:st,transmission:ue,transmissionMap:L,thicknessMap:ie,gradientMap:j,opaque:E.transparent===!1&&E.blending===Si&&E.alphaToCoverage===!1,alphaMap:Z,alphaTest:ae,alphaHash:be,combine:E.combine,mapUv:Oe&&x(E.map.channel),aoMapUv:it&&x(E.aoMap.channel),lightMapUv:We&&x(E.lightMap.channel),bumpMapUv:Xe&&x(E.bumpMap.channel),normalMapUv:Me&&x(E.normalMap.channel),displacementMapUv:O&&x(E.displacementMap.channel),emissiveMapUv:H&&x(E.emissiveMap.channel),metalnessMapUv:ee&&x(E.metalnessMap.channel),roughnessMapUv:y&&x(E.roughnessMap.channel),anisotropyMapUv:re&&x(E.anisotropyMap.channel),clearcoatMapUv:oe&&x(E.clearcoatMap.channel),clearcoatNormalMapUv:Ie&&x(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&x(E.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&x(E.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&x(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&x(E.sheenColorMap.channel),sheenRoughnessMapUv:ge&&x(E.sheenRoughnessMap.channel),specularMapUv:Le&&x(E.specularMap.channel),specularColorMapUv:Fe&&x(E.specularColorMap.channel),specularIntensityMapUv:st&&x(E.specularIntensityMap.channel),transmissionMapUv:L&&x(E.transmissionMap.channel),thicknessMapUv:ie&&x(E.thicknessMap.channel),alphaMapUv:Z&&x(E.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Me||_),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!$.attributes.uv&&(Oe||Z),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ve,morphTextureStride:Be,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,decodeVideoTexture:Oe&&E.map.isVideoTexture===!0&&Ve.getTransfer(E.map.colorSpace)===tt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===jt,flipSided:E.side===wt,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:He&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&E.extensions.multiDraw===!0||Re)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return gt.vertexUv1s=c.has(1),gt.vertexUv2s=c.has(2),gt.vertexUv3s=c.has(3),c.clear(),gt}function f(E){const M=[];if(E.shaderID?M.push(E.shaderID):(M.push(E.customVertexShaderID),M.push(E.customFragmentShaderID)),E.defines!==void 0)for(const C in E.defines)M.push(C),M.push(E.defines[C]);return E.isRawShaderMaterial===!1&&(T(M,E),S(M,E),M.push(s.outputColorSpace)),M.push(E.customProgramCacheKey),M.join()}function T(E,M){E.push(M.precision),E.push(M.outputColorSpace),E.push(M.envMapMode),E.push(M.envMapCubeUVHeight),E.push(M.mapUv),E.push(M.alphaMapUv),E.push(M.lightMapUv),E.push(M.aoMapUv),E.push(M.bumpMapUv),E.push(M.normalMapUv),E.push(M.displacementMapUv),E.push(M.emissiveMapUv),E.push(M.metalnessMapUv),E.push(M.roughnessMapUv),E.push(M.anisotropyMapUv),E.push(M.clearcoatMapUv),E.push(M.clearcoatNormalMapUv),E.push(M.clearcoatRoughnessMapUv),E.push(M.iridescenceMapUv),E.push(M.iridescenceThicknessMapUv),E.push(M.sheenColorMapUv),E.push(M.sheenRoughnessMapUv),E.push(M.specularMapUv),E.push(M.specularColorMapUv),E.push(M.specularIntensityMapUv),E.push(M.transmissionMapUv),E.push(M.thicknessMapUv),E.push(M.combine),E.push(M.fogExp2),E.push(M.sizeAttenuation),E.push(M.morphTargetsCount),E.push(M.morphAttributeCount),E.push(M.numDirLights),E.push(M.numPointLights),E.push(M.numSpotLights),E.push(M.numSpotLightMaps),E.push(M.numHemiLights),E.push(M.numRectAreaLights),E.push(M.numDirLightShadows),E.push(M.numPointLightShadows),E.push(M.numSpotLightShadows),E.push(M.numSpotLightShadowsWithMaps),E.push(M.numLightProbes),E.push(M.shadowMapType),E.push(M.toneMapping),E.push(M.numClippingPlanes),E.push(M.numClipIntersection),E.push(M.depthPacking)}function S(E,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),E.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),E.push(o.mask)}function b(E){const M=g[E.type];let C;if(M){const q=Kt[M];C=iu.clone(q.uniforms)}else C=E.uniforms;return C}function D(E,M){let C;for(let q=0,G=h.length;q<G;q++){const J=h[q];if(J.cacheKey===M){C=J,++C.usedTimes;break}}return C===void 0&&(C=new _m(s,M,E,r),h.push(C)),C}function R(E){if(--E.usedTimes===0){const M=h.indexOf(E);h[M]=h[h.length-1],h.pop(),E.destroy()}}function A(E){l.remove(E)}function B(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:D,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:B}}function ym(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,l){s.get(a)[o]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function Em(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function el(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function tl(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,d,p,g,x,m){let f=s[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},s[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=x,f.group=m),e++,f}function o(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(u,d,p,g,x,m){const f=a(u,d,p,g,x,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Em),n.length>1&&n.sort(d||el),i.length>1&&i.sort(d||el)}function h(){for(let u=e,d=s.length;u<d;u++){const p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:l,finish:h,sort:c}}function Tm(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new tl,s.set(n,[a])):i>=r.length?(a=new tl,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function bm(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Pe};break;case"SpotLight":t={position:new P,direction:new P,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Am(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let wm=0;function Rm(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Cm(s){const e=new bm,t=Am(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new De,a=new De;function o(c){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let p=0,g=0,x=0,m=0,f=0,T=0,S=0,b=0,D=0,R=0,A=0;c.sort(Rm);for(let E=0,M=c.length;E<M;E++){const C=c[E],q=C.color,G=C.intensity,J=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=q.r*G,u+=q.g*G,d+=q.b*G;else if(C.isLightProbe){for(let K=0;K<9;K++)n.probe[K].addScaledVector(C.sh.coefficients[K],G);A++}else if(C.isDirectionalLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Q=C.shadow,X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.directionalShadow[p]=X,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=C.shadow.matrix,T++}n.directional[p]=K,p++}else if(C.isSpotLight){const K=e.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(q).multiplyScalar(G),K.distance=J,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,n.spot[x]=K;const Q=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,Q.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[x]=Q.matrix,C.castShadow){const X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=$,b++}x++}else if(C.isRectAreaLight){const K=e.get(C);K.color.copy(q).multiplyScalar(G),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=K,m++}else if(C.isPointLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),K.distance=C.distance,K.decay=C.decay,C.castShadow){const Q=C.shadow,X=t.get(C);X.shadowIntensity=Q.intensity,X.shadowBias=Q.bias,X.shadowNormalBias=Q.normalBias,X.shadowRadius=Q.radius,X.shadowMapSize=Q.mapSize,X.shadowCameraNear=Q.camera.near,X.shadowCameraFar=Q.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,S++}n.point[g]=K,g++}else if(C.isHemisphereLight){const K=e.get(C);K.skyColor.copy(C.color).multiplyScalar(G),K.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[f]=K,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const B=n.hash;(B.directionalLength!==p||B.pointLength!==g||B.spotLength!==x||B.rectAreaLength!==m||B.hemiLength!==f||B.numDirectionalShadows!==T||B.numPointShadows!==S||B.numSpotShadows!==b||B.numSpotMaps!==D||B.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+D-R,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,B.directionalLength=p,B.pointLength=g,B.spotLength=x,B.rectAreaLength=m,B.hemiLength=f,B.numDirectionalShadows=T,B.numPointShadows=S,B.numSpotShadows=b,B.numSpotMaps=D,B.numLightProbes=A,n.version=wm++)}function l(c,h){let u=0,d=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const S=c[f];if(S.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),u++}else if(S.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const b=n.hemi[x];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:n}}function nl(s){const e=new Cm(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pm(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new nl(s),e.set(i,[o])):r>=a.length?(o=new nl(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Lm extends $t{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dm extends $t{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Im=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Um=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Nm(s,e,t){let n=new Ha;const i=new Te,r=new Te,a=new Qe,o=new Lm({depthPacking:fh}),l=new Dm,c={},h=t.maxTextureSize,u={[_n]:wt,[wt]:_n,[jt]:jt},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Te},radius:{value:4}},vertexShader:Im,fragmentShader:Um}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new et(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dl;let f=this.type;this.render=function(R,A,B){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const E=s.getRenderTarget(),M=s.getActiveCubeFace(),C=s.getActiveMipmapLevel(),q=s.state;q.setBlending(In),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const G=f!==dn&&this.type===dn,J=f===dn&&this.type!==dn;for(let $=0,K=R.length;$<K;$++){const Q=R[$],X=Q.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const he=X.getFrameExtents();if(i.multiply(he),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/he.x),i.x=r.x*he.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/he.y),i.y=r.y*he.y,X.mapSize.y=r.y)),X.map===null||G===!0||J===!0){const ve=this.type!==dn?{minFilter:At,magFilter:At}:{};X.map!==null&&X.map.dispose(),X.map=new Zn(i.x,i.y,ve),X.map.texture.name=Q.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const de=X.getViewportCount();for(let ve=0;ve<de;ve++){const Be=X.getViewport(ve);a.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),q.viewport(a),X.updateMatrices(Q,ve),n=X.getFrustum(),b(A,B,X.camera,Q,this.type)}X.isPointLightShadow!==!0&&this.type===dn&&T(X,B),X.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(E,M,C)};function T(R,A){const B=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,B,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,B,p,x,null)}function S(R,A,B,E){let M=null;const C=B.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(C!==void 0)M=C;else if(M=B.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const q=M.uuid,G=A.uuid;let J=c[q];J===void 0&&(J={},c[q]=J);let $=J[G];$===void 0&&($=M.clone(),J[G]=$,A.addEventListener("dispose",D)),M=$}if(M.visible=A.visible,M.wireframe=A.wireframe,E===dn?M.side=A.shadowSide!==null?A.shadowSide:A.side:M.side=A.shadowSide!==null?A.shadowSide:u[A.side],M.alphaMap=A.alphaMap,M.alphaTest=A.alphaTest,M.map=A.map,M.clipShadows=A.clipShadows,M.clippingPlanes=A.clippingPlanes,M.clipIntersection=A.clipIntersection,M.displacementMap=A.displacementMap,M.displacementScale=A.displacementScale,M.displacementBias=A.displacementBias,M.wireframeLinewidth=A.wireframeLinewidth,M.linewidth=A.linewidth,B.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const q=s.properties.get(M);q.light=B}return M}function b(R,A,B,E,M){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&M===dn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,R.matrixWorld);const G=e.update(R),J=R.material;if(Array.isArray(J)){const $=G.groups;for(let K=0,Q=$.length;K<Q;K++){const X=$[K],he=J[X.materialIndex];if(he&&he.visible){const de=S(R,he,E,M);R.onBeforeShadow(s,R,A,B,G,de,X),s.renderBufferDirect(B,null,G,de,R,X),R.onAfterShadow(s,R,A,B,G,de,X)}}}else if(J.visible){const $=S(R,J,E,M);R.onBeforeShadow(s,R,A,B,G,$,null),s.renderBufferDirect(B,null,G,$,R,null),R.onAfterShadow(s,R,A,B,G,$,null)}}const q=R.children;for(let G=0,J=q.length;G<J;G++)b(q[G],A,B,E,M)}function D(R){R.target.removeEventListener("dispose",D);for(const B in c){const E=c[B],M=R.target.uuid;M in E&&(E[M].dispose(),delete E[M])}}}function Om(s){function e(){let L=!1;const ie=new Qe;let j=null;const Z=new Qe(0,0,0,0);return{setMask:function(ae){j!==ae&&!L&&(s.colorMask(ae,ae,ae,ae),j=ae)},setLocked:function(ae){L=ae},setClear:function(ae,be,He,lt,gt){gt===!0&&(ae*=lt,be*=lt,He*=lt),ie.set(ae,be,He,lt),Z.equals(ie)===!1&&(s.clearColor(ae,be,He,lt),Z.copy(ie))},reset:function(){L=!1,j=null,Z.set(-1,0,0,0)}}}function t(){let L=!1,ie=null,j=null,Z=null;return{setTest:function(ae){ae?fe(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(ae){ie!==ae&&!L&&(s.depthMask(ae),ie=ae)},setFunc:function(ae){if(j!==ae){switch(ae){case Kc:s.depthFunc(s.NEVER);break;case jc:s.depthFunc(s.ALWAYS);break;case Zc:s.depthFunc(s.LESS);break;case Ks:s.depthFunc(s.LEQUAL);break;case $c:s.depthFunc(s.EQUAL);break;case Jc:s.depthFunc(s.GEQUAL);break;case Qc:s.depthFunc(s.GREATER);break;case eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}j=ae}},setLocked:function(ae){L=ae},setClear:function(ae){Z!==ae&&(s.clearDepth(ae),Z=ae)},reset:function(){L=!1,ie=null,j=null,Z=null}}}function n(){let L=!1,ie=null,j=null,Z=null,ae=null,be=null,He=null,lt=null,gt=null;return{setTest:function(Ye){L||(Ye?fe(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(Ye){ie!==Ye&&!L&&(s.stencilMask(Ye),ie=Ye)},setFunc:function(Ye,rn,qt){(j!==Ye||Z!==rn||ae!==qt)&&(s.stencilFunc(Ye,rn,qt),j=Ye,Z=rn,ae=qt)},setOp:function(Ye,rn,qt){(be!==Ye||He!==rn||lt!==qt)&&(s.stencilOp(Ye,rn,qt),be=Ye,He=rn,lt=qt)},setLocked:function(Ye){L=Ye},setClear:function(Ye){gt!==Ye&&(s.clearStencil(Ye),gt=Ye)},reset:function(){L=!1,ie=null,j=null,Z=null,ae=null,be=null,He=null,lt=null,gt=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,T=null,S=null,b=null,D=null,R=new Pe(0,0,0),A=0,B=!1,E=null,M=null,C=null,q=null,G=null;const J=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,K=0;const Q=s.getParameter(s.VERSION);Q.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(Q)[1]),$=K>=1):Q.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),$=K>=2);let X=null,he={};const de=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Be=new Qe().fromArray(de),Ge=new Qe().fromArray(ve);function Y(L,ie,j,Z){const ae=new Uint8Array(4),be=s.createTexture();s.bindTexture(L,be),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let He=0;He<j;He++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(ie,0,s.RGBA,1,1,Z,0,s.RGBA,s.UNSIGNED_BYTE,ae):s.texImage2D(ie+He,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ae);return be}const te={};te[s.TEXTURE_2D]=Y(s.TEXTURE_2D,s.TEXTURE_2D,1),te[s.TEXTURE_CUBE_MAP]=Y(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[s.TEXTURE_2D_ARRAY]=Y(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),te[s.TEXTURE_3D]=Y(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),r.setFunc(Ks),Xe(!1),Me(so),fe(s.CULL_FACE),it(In);function fe(L){c[L]!==!0&&(s.enable(L),c[L]=!0)}function pe(L){c[L]!==!1&&(s.disable(L),c[L]=!1)}function Ee(L,ie){return h[L]!==ie?(s.bindFramebuffer(L,ie),h[L]=ie,L===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=ie),L===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=ie),!0):!1}function Re(L,ie){let j=d,Z=!1;if(L){j=u.get(ie),j===void 0&&(j=[],u.set(ie,j));const ae=L.textures;if(j.length!==ae.length||j[0]!==s.COLOR_ATTACHMENT0){for(let be=0,He=ae.length;be<He;be++)j[be]=s.COLOR_ATTACHMENT0+be;j.length=ae.length,Z=!0}}else j[0]!==s.BACK&&(j[0]=s.BACK,Z=!0);Z&&s.drawBuffers(j)}function Oe(L){return p!==L?(s.useProgram(L),p=L,!0):!1}const nt={[Xn]:s.FUNC_ADD,[Lc]:s.FUNC_SUBTRACT,[Dc]:s.FUNC_REVERSE_SUBTRACT};nt[Ic]=s.MIN,nt[Uc]=s.MAX;const w={[Nc]:s.ZERO,[Oc]:s.ONE,[Fc]:s.SRC_COLOR,[Xr]:s.SRC_ALPHA,[Vc]:s.SRC_ALPHA_SATURATE,[Hc]:s.DST_COLOR,[zc]:s.DST_ALPHA,[Bc]:s.ONE_MINUS_SRC_COLOR,[Yr]:s.ONE_MINUS_SRC_ALPHA,[Gc]:s.ONE_MINUS_DST_COLOR,[kc]:s.ONE_MINUS_DST_ALPHA,[Wc]:s.CONSTANT_COLOR,[Xc]:s.ONE_MINUS_CONSTANT_COLOR,[Yc]:s.CONSTANT_ALPHA,[qc]:s.ONE_MINUS_CONSTANT_ALPHA};function it(L,ie,j,Z,ae,be,He,lt,gt,Ye){if(L===In){g===!0&&(pe(s.BLEND),g=!1);return}if(g===!1&&(fe(s.BLEND),g=!0),L!==Pc){if(L!==x||Ye!==B){if((m!==Xn||S!==Xn)&&(s.blendEquation(s.FUNC_ADD),m=Xn,S=Xn),Ye)switch(L){case Si:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ro:s.blendFunc(s.ONE,s.ONE);break;case ao:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oo:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Si:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ro:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case ao:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case oo:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}f=null,T=null,b=null,D=null,R.set(0,0,0),A=0,x=L,B=Ye}return}ae=ae||ie,be=be||j,He=He||Z,(ie!==m||ae!==S)&&(s.blendEquationSeparate(nt[ie],nt[ae]),m=ie,S=ae),(j!==f||Z!==T||be!==b||He!==D)&&(s.blendFuncSeparate(w[j],w[Z],w[be],w[He]),f=j,T=Z,b=be,D=He),(lt.equals(R)===!1||gt!==A)&&(s.blendColor(lt.r,lt.g,lt.b,gt),R.copy(lt),A=gt),x=L,B=!1}function We(L,ie){L.side===jt?pe(s.CULL_FACE):fe(s.CULL_FACE);let j=L.side===wt;ie&&(j=!j),Xe(j),L.blending===Si&&L.transparent===!1?it(In):it(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),i.setMask(L.colorWrite);const Z=L.stencilWrite;a.setTest(Z),Z&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),H(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(L){E!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),E=L)}function Me(L){L!==Rc?(fe(s.CULL_FACE),L!==M&&(L===so?s.cullFace(s.BACK):L===Cc?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),M=L}function O(L){L!==C&&($&&s.lineWidth(L),C=L)}function H(L,ie,j){L?(fe(s.POLYGON_OFFSET_FILL),(q!==ie||G!==j)&&(s.polygonOffset(ie,j),q=ie,G=j)):pe(s.POLYGON_OFFSET_FILL)}function ee(L){L?fe(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function y(L){L===void 0&&(L=s.TEXTURE0+J-1),X!==L&&(s.activeTexture(L),X=L)}function _(L,ie,j){j===void 0&&(X===null?j=s.TEXTURE0+J-1:j=X);let Z=he[j];Z===void 0&&(Z={type:void 0,texture:void 0},he[j]=Z),(Z.type!==L||Z.texture!==ie)&&(X!==j&&(s.activeTexture(j),X=j),s.bindTexture(L,ie||te[L]),Z.type=L,Z.texture=ie)}function N(){const L=he[X];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function W(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function F(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function V(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ie(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function me(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ke(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ce(L){Be.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),Be.copy(L))}function ge(L){Ge.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),Ge.copy(L))}function Le(L,ie){let j=l.get(ie);j===void 0&&(j=new WeakMap,l.set(ie,j));let Z=j.get(L);Z===void 0&&(Z=s.getUniformBlockIndex(ie,L.name),j.set(L,Z))}function Fe(L,ie){const Z=l.get(ie).get(L);o.get(ie)!==Z&&(s.uniformBlockBinding(ie,Z,L.__bindingPointIndex),o.set(ie,Z))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},X=null,he={},h={},u=new WeakMap,d=[],p=null,g=!1,x=null,m=null,f=null,T=null,S=null,b=null,D=null,R=new Pe(0,0,0),A=0,B=!1,E=null,M=null,C=null,q=null,G=null,Be.set(0,0,s.canvas.width,s.canvas.height),Ge.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:fe,disable:pe,bindFramebuffer:Ee,drawBuffers:Re,useProgram:Oe,setBlending:it,setMaterial:We,setFlipSided:Xe,setCullFace:Me,setLineWidth:O,setPolygonOffset:H,setScissorTest:ee,activeTexture:y,bindTexture:_,unbindTexture:N,compressedTexImage2D:W,compressedTexImage3D:F,texImage2D:me,texImage3D:ke,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:Ie,texStorage3D:ne,texSubImage2D:V,texSubImage3D:ue,compressedTexSubImage2D:re,compressedTexSubImage3D:oe,scissor:Ce,viewport:ge,reset:st}}function il(s,e,t,n){const i=Fm(n);switch(t){case Hl:return s*e;case Vl:return s*e;case Wl:return s*e*2;case Ua:return s*e/i.components*i.byteLength;case Na:return s*e/i.components*i.byteLength;case Xl:return s*e*2/i.components*i.byteLength;case Oa:return s*e*2/i.components*i.byteLength;case Gl:return s*e*3/i.components*i.byteLength;case Bt:return s*e*4/i.components*i.byteLength;case Fa:return s*e*4/i.components*i.byteLength;case Gs:case Vs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ws:case Xs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zr:case Jr:return Math.max(s,16)*Math.max(e,8)/4;case jr:case $r:return Math.max(s,8)*Math.max(e,8)/2;case Qr:case ea:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ta:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case na:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ra:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case oa:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case la:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ca:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ha:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ua:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case da:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case fa:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case pa:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ma:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ys:case ga:case _a:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Yl:case xa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case va:case Ma:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fm(s){switch(s){case xn:case Bl:return{byteLength:1,components:1};case is:case zl:case os:return{byteLength:2,components:1};case Da:case Ia:return{byteLength:2,components:4};case jn:case La:case Xt:return{byteLength:4,components:1};case kl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function Bm(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Te,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(y,_){return p?new OffscreenCanvas(y,_):as("canvas")}function x(y,_,N){let W=1;const F=ee(y);if((F.width>N||F.height>N)&&(W=N/Math.max(F.width,F.height)),W<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const V=Math.floor(W*F.width),ue=Math.floor(W*F.height);u===void 0&&(u=g(V,ue));const re=_?g(V,ue):u;return re.width=V,re.height=ue,re.getContext("2d").drawImage(y,0,0,V,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+F.width+"x"+F.height+") to ("+V+"x"+ue+")."),re}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+F.width+"x"+F.height+")."),y;return y}function m(y){return y.generateMipmaps&&y.minFilter!==At&&y.minFilter!==Ut}function f(y){s.generateMipmap(y)}function T(y,_,N,W,F=!1){if(y!==null){if(s[y]!==void 0)return s[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let V=_;if(_===s.RED&&(N===s.FLOAT&&(V=s.R32F),N===s.HALF_FLOAT&&(V=s.R16F),N===s.UNSIGNED_BYTE&&(V=s.R8)),_===s.RED_INTEGER&&(N===s.UNSIGNED_BYTE&&(V=s.R8UI),N===s.UNSIGNED_SHORT&&(V=s.R16UI),N===s.UNSIGNED_INT&&(V=s.R32UI),N===s.BYTE&&(V=s.R8I),N===s.SHORT&&(V=s.R16I),N===s.INT&&(V=s.R32I)),_===s.RG&&(N===s.FLOAT&&(V=s.RG32F),N===s.HALF_FLOAT&&(V=s.RG16F),N===s.UNSIGNED_BYTE&&(V=s.RG8)),_===s.RG_INTEGER&&(N===s.UNSIGNED_BYTE&&(V=s.RG8UI),N===s.UNSIGNED_SHORT&&(V=s.RG16UI),N===s.UNSIGNED_INT&&(V=s.RG32UI),N===s.BYTE&&(V=s.RG8I),N===s.SHORT&&(V=s.RG16I),N===s.INT&&(V=s.RG32I)),_===s.RGB&&N===s.UNSIGNED_INT_5_9_9_9_REV&&(V=s.RGB9_E5),_===s.RGBA){const ue=F?Zs:Ve.getTransfer(W);N===s.FLOAT&&(V=s.RGBA32F),N===s.HALF_FLOAT&&(V=s.RGBA16F),N===s.UNSIGNED_BYTE&&(V=ue===tt?s.SRGB8_ALPHA8:s.RGBA8),N===s.UNSIGNED_SHORT_4_4_4_4&&(V=s.RGBA4),N===s.UNSIGNED_SHORT_5_5_5_1&&(V=s.RGB5_A1)}return(V===s.R16F||V===s.R32F||V===s.RG16F||V===s.RG32F||V===s.RGBA16F||V===s.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function S(y,_){let N;return y?_===null||_===jn||_===Ci?N=s.DEPTH24_STENCIL8:_===Xt?N=s.DEPTH32F_STENCIL8:_===is&&(N=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===jn||_===Ci?N=s.DEPTH_COMPONENT24:_===Xt?N=s.DEPTH_COMPONENT32F:_===is&&(N=s.DEPTH_COMPONENT16),N}function b(y,_){return m(y)===!0||y.isFramebufferTexture&&y.minFilter!==At&&y.minFilter!==Ut?Math.log2(Math.max(_.width,_.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?_.mipmaps.length:1}function D(y){const _=y.target;_.removeEventListener("dispose",D),A(_),_.isVideoTexture&&h.delete(_)}function R(y){const _=y.target;_.removeEventListener("dispose",R),E(_)}function A(y){const _=n.get(y);if(_.__webglInit===void 0)return;const N=y.source,W=d.get(N);if(W){const F=W[_.__cacheKey];F.usedTimes--,F.usedTimes===0&&B(y),Object.keys(W).length===0&&d.delete(N)}n.remove(y)}function B(y){const _=n.get(y);s.deleteTexture(_.__webglTexture);const N=y.source,W=d.get(N);delete W[_.__cacheKey],a.memory.textures--}function E(y){const _=n.get(y);if(y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let F=0;F<_.__webglFramebuffer[W].length;F++)s.deleteFramebuffer(_.__webglFramebuffer[W][F]);else s.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)s.deleteFramebuffer(_.__webglFramebuffer[W]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=y.textures;for(let W=0,F=N.length;W<F;W++){const V=n.get(N[W]);V.__webglTexture&&(s.deleteTexture(V.__webglTexture),a.memory.textures--),n.remove(N[W])}n.remove(y)}let M=0;function C(){M=0}function q(){const y=M;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),M+=1,y}function G(y){const _=[];return _.push(y.wrapS),_.push(y.wrapT),_.push(y.wrapR||0),_.push(y.magFilter),_.push(y.minFilter),_.push(y.anisotropy),_.push(y.internalFormat),_.push(y.format),_.push(y.type),_.push(y.generateMipmaps),_.push(y.premultiplyAlpha),_.push(y.flipY),_.push(y.unpackAlignment),_.push(y.colorSpace),_.join()}function J(y,_){const N=n.get(y);if(y.isVideoTexture&&O(y),y.isRenderTargetTexture===!1&&y.version>0&&N.__version!==y.version){const W=y.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ge(N,y,_);return}}t.bindTexture(s.TEXTURE_2D,N.__webglTexture,s.TEXTURE0+_)}function $(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){Ge(N,y,_);return}t.bindTexture(s.TEXTURE_2D_ARRAY,N.__webglTexture,s.TEXTURE0+_)}function K(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){Ge(N,y,_);return}t.bindTexture(s.TEXTURE_3D,N.__webglTexture,s.TEXTURE0+_)}function Q(y,_){const N=n.get(y);if(y.version>0&&N.__version!==y.version){Y(N,y,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,N.__webglTexture,s.TEXTURE0+_)}const X={[Ri]:s.REPEAT,[Pn]:s.CLAMP_TO_EDGE,[js]:s.MIRRORED_REPEAT},he={[At]:s.NEAREST,[Fl]:s.NEAREST_MIPMAP_NEAREST,[Ji]:s.NEAREST_MIPMAP_LINEAR,[Ut]:s.LINEAR,[Hs]:s.LINEAR_MIPMAP_NEAREST,[pn]:s.LINEAR_MIPMAP_LINEAR},de={[mh]:s.NEVER,[Sh]:s.ALWAYS,[gh]:s.LESS,[jl]:s.LEQUAL,[_h]:s.EQUAL,[Mh]:s.GEQUAL,[xh]:s.GREATER,[vh]:s.NOTEQUAL};function ve(y,_){if(_.type===Xt&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Ut||_.magFilter===Hs||_.magFilter===Ji||_.magFilter===pn||_.minFilter===Ut||_.minFilter===Hs||_.minFilter===Ji||_.minFilter===pn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(y,s.TEXTURE_WRAP_S,X[_.wrapS]),s.texParameteri(y,s.TEXTURE_WRAP_T,X[_.wrapT]),(y===s.TEXTURE_3D||y===s.TEXTURE_2D_ARRAY)&&s.texParameteri(y,s.TEXTURE_WRAP_R,X[_.wrapR]),s.texParameteri(y,s.TEXTURE_MAG_FILTER,he[_.magFilter]),s.texParameteri(y,s.TEXTURE_MIN_FILTER,he[_.minFilter]),_.compareFunction&&(s.texParameteri(y,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(y,s.TEXTURE_COMPARE_FUNC,de[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===At||_.minFilter!==Ji&&_.minFilter!==pn||_.type===Xt&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");s.texParameterf(y,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,i.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Be(y,_){let N=!1;y.__webglInit===void 0&&(y.__webglInit=!0,_.addEventListener("dispose",D));const W=_.source;let F=d.get(W);F===void 0&&(F={},d.set(W,F));const V=G(_);if(V!==y.__cacheKey){F[V]===void 0&&(F[V]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,N=!0),F[V].usedTimes++;const ue=F[y.__cacheKey];ue!==void 0&&(F[y.__cacheKey].usedTimes--,ue.usedTimes===0&&B(_)),y.__cacheKey=V,y.__webglTexture=F[V].texture}return N}function Ge(y,_,N){let W=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=s.TEXTURE_3D);const F=Be(y,_),V=_.source;t.bindTexture(W,y.__webglTexture,s.TEXTURE0+N);const ue=n.get(V);if(V.version!==ue.__version||F===!0){t.activeTexture(s.TEXTURE0+N);const re=Ve.getPrimaries(Ve.workingColorSpace),oe=_.colorSpace===Cn?null:Ve.getPrimaries(_.colorSpace),Ie=_.colorSpace===Cn||re===oe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ne=x(_.image,!1,i.maxTextureSize);ne=H(_,ne);const me=r.convert(_.format,_.colorSpace),ke=r.convert(_.type);let Ce=T(_.internalFormat,me,ke,_.colorSpace,_.isVideoTexture);ve(W,_);let ge;const Le=_.mipmaps,Fe=_.isVideoTexture!==!0,st=ue.__version===void 0||F===!0,L=V.dataReady,ie=b(_,ne);if(_.isDepthTexture)Ce=S(_.format===Pi,_.type),st&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,Ce,ne.width,ne.height):t.texImage2D(s.TEXTURE_2D,0,Ce,ne.width,ne.height,0,me,ke,null));else if(_.isDataTexture)if(Le.length>0){Fe&&st&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,Le[0].width,Le[0].height);for(let j=0,Z=Le.length;j<Z;j++)ge=Le[j],Fe?L&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ke,ge.data):t.texImage2D(s.TEXTURE_2D,j,Ce,ge.width,ge.height,0,me,ke,ge.data);_.generateMipmaps=!1}else Fe?(st&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,ne.width,ne.height),L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ne.width,ne.height,me,ke,ne.data)):t.texImage2D(s.TEXTURE_2D,0,Ce,ne.width,ne.height,0,me,ke,ne.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Fe&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,Le[0].width,Le[0].height,ne.depth);for(let j=0,Z=Le.length;j<Z;j++)if(ge=Le[j],_.format!==Bt)if(me!==null)if(Fe){if(L)if(_.layerUpdates.size>0){const ae=il(ge.width,ge.height,_.format,_.type);for(const be of _.layerUpdates){const He=ge.data.subarray(be*ae/ge.data.BYTES_PER_ELEMENT,(be+1)*ae/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,be,ge.width,ge.height,1,me,He,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,ne.depth,me,ge.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,j,Ce,ge.width,ge.height,ne.depth,0,ge.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,j,0,0,0,ge.width,ge.height,ne.depth,me,ke,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,j,Ce,ge.width,ge.height,ne.depth,0,me,ke,ge.data)}else{Fe&&st&&t.texStorage2D(s.TEXTURE_2D,ie,Ce,Le[0].width,Le[0].height);for(let j=0,Z=Le.length;j<Z;j++)ge=Le[j],_.format!==Bt?me!==null?Fe?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,j,Ce,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?L&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,ge.width,ge.height,me,ke,ge.data):t.texImage2D(s.TEXTURE_2D,j,Ce,ge.width,ge.height,0,me,ke,ge.data)}else if(_.isDataArrayTexture)if(Fe){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ie,Ce,ne.width,ne.height,ne.depth),L)if(_.layerUpdates.size>0){const j=il(ne.width,ne.height,_.format,_.type);for(const Z of _.layerUpdates){const ae=ne.data.subarray(Z*j/ne.data.BYTES_PER_ELEMENT,(Z+1)*j/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,me,ke,ae)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,me,ke,ne.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ce,ne.width,ne.height,ne.depth,0,me,ke,ne.data);else if(_.isData3DTexture)Fe?(st&&t.texStorage3D(s.TEXTURE_3D,ie,Ce,ne.width,ne.height,ne.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,me,ke,ne.data)):t.texImage3D(s.TEXTURE_3D,0,Ce,ne.width,ne.height,ne.depth,0,me,ke,ne.data);else if(_.isFramebufferTexture){if(st)if(Fe)t.texStorage2D(s.TEXTURE_2D,ie,Ce,ne.width,ne.height);else{let j=ne.width,Z=ne.height;for(let ae=0;ae<ie;ae++)t.texImage2D(s.TEXTURE_2D,ae,Ce,j,Z,0,me,ke,null),j>>=1,Z>>=1}}else if(Le.length>0){if(Fe&&st){const j=ee(Le[0]);t.texStorage2D(s.TEXTURE_2D,ie,Ce,j.width,j.height)}for(let j=0,Z=Le.length;j<Z;j++)ge=Le[j],Fe?L&&t.texSubImage2D(s.TEXTURE_2D,j,0,0,me,ke,ge):t.texImage2D(s.TEXTURE_2D,j,Ce,me,ke,ge);_.generateMipmaps=!1}else if(Fe){if(st){const j=ee(ne);t.texStorage2D(s.TEXTURE_2D,ie,Ce,j.width,j.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me,ke,ne)}else t.texImage2D(s.TEXTURE_2D,0,Ce,me,ke,ne);m(_)&&f(W),ue.__version=V.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function Y(y,_,N){if(_.image.length!==6)return;const W=Be(y,_),F=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,y.__webglTexture,s.TEXTURE0+N);const V=n.get(F);if(F.version!==V.__version||W===!0){t.activeTexture(s.TEXTURE0+N);const ue=Ve.getPrimaries(Ve.workingColorSpace),re=_.colorSpace===Cn?null:Ve.getPrimaries(_.colorSpace),oe=_.colorSpace===Cn||ue===re?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const Ie=_.isCompressedTexture||_.image[0].isCompressedTexture,ne=_.image[0]&&_.image[0].isDataTexture,me=[];for(let Z=0;Z<6;Z++)!Ie&&!ne?me[Z]=x(_.image[Z],!0,i.maxCubemapSize):me[Z]=ne?_.image[Z].image:_.image[Z],me[Z]=H(_,me[Z]);const ke=me[0],Ce=r.convert(_.format,_.colorSpace),ge=r.convert(_.type),Le=T(_.internalFormat,Ce,ge,_.colorSpace),Fe=_.isVideoTexture!==!0,st=V.__version===void 0||W===!0,L=F.dataReady;let ie=b(_,ke);ve(s.TEXTURE_CUBE_MAP,_);let j;if(Ie){Fe&&st&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Le,ke.width,ke.height);for(let Z=0;Z<6;Z++){j=me[Z].mipmaps;for(let ae=0;ae<j.length;ae++){const be=j[ae];_.format!==Bt?Ce!==null?Fe?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,be.width,be.height,Ce,be.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Le,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,0,0,be.width,be.height,Ce,ge,be.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae,Le,be.width,be.height,0,Ce,ge,be.data)}}}else{if(j=_.mipmaps,Fe&&st){j.length>0&&ie++;const Z=ee(me[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ie,Le,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Fe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,me[Z].width,me[Z].height,Ce,ge,me[Z].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Le,me[Z].width,me[Z].height,0,Ce,ge,me[Z].data);for(let ae=0;ae<j.length;ae++){const He=j[ae].image[Z].image;Fe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,He.width,He.height,Ce,ge,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Le,He.width,He.height,0,Ce,ge,He.data)}}else{Fe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Ce,ge,me[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Le,Ce,ge,me[Z]);for(let ae=0;ae<j.length;ae++){const be=j[ae];Fe?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,0,0,Ce,ge,be.image[Z]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Z,ae+1,Le,Ce,ge,be.image[Z])}}}m(_)&&f(s.TEXTURE_CUBE_MAP),V.__version=F.version,_.onUpdate&&_.onUpdate(_)}y.__version=_.version}function te(y,_,N,W,F,V){const ue=r.convert(N.format,N.colorSpace),re=r.convert(N.type),oe=T(N.internalFormat,ue,re,N.colorSpace);if(!n.get(_).__hasExternalTextures){const ne=Math.max(1,_.width>>V),me=Math.max(1,_.height>>V);F===s.TEXTURE_3D||F===s.TEXTURE_2D_ARRAY?t.texImage3D(F,V,oe,ne,me,_.depth,0,ue,re,null):t.texImage2D(F,V,oe,ne,me,0,ue,re,null)}t.bindFramebuffer(s.FRAMEBUFFER,y),Me(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,F,n.get(N).__webglTexture,0,Xe(_)):(F===s.TEXTURE_2D||F>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&F<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,F,n.get(N).__webglTexture,V),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(y,_,N){if(s.bindRenderbuffer(s.RENDERBUFFER,y),_.depthBuffer){const W=_.depthTexture,F=W&&W.isDepthTexture?W.type:null,V=S(_.stencilBuffer,F),ue=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,re=Xe(_);Me(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,re,V,_.width,_.height):N?s.renderbufferStorageMultisample(s.RENDERBUFFER,re,V,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,V,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ue,s.RENDERBUFFER,y)}else{const W=_.textures;for(let F=0;F<W.length;F++){const V=W[F],ue=r.convert(V.format,V.colorSpace),re=r.convert(V.type),oe=T(V.internalFormat,ue,re,V.colorSpace),Ie=Xe(_);N&&Me(_)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ie,oe,_.width,_.height):Me(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ie,oe,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,oe,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function pe(y,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,y),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),J(_.depthTexture,0);const W=n.get(_.depthTexture).__webglTexture,F=Xe(_);if(_.depthTexture.format===yi)Me(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,W,0);else if(_.depthTexture.format===Pi)Me(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0,F):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,W,0);else throw new Error("Unknown depthTexture format")}function Ee(y){const _=n.get(y),N=y.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==y.depthTexture){const W=y.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){const F=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",F)};W.addEventListener("dispose",F),_.__depthDisposeCallback=F}_.__boundDepthTexture=W}if(y.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");pe(_.__webglFramebuffer,y)}else if(N){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=s.createRenderbuffer(),fe(_.__webglDepthbuffer[W],y,!1);else{const F=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,V=_.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,V),s.framebufferRenderbuffer(s.FRAMEBUFFER,F,s.RENDERBUFFER,V)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),fe(_.__webglDepthbuffer,y,!1);else{const W=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,F=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,F),s.framebufferRenderbuffer(s.FRAMEBUFFER,W,s.RENDERBUFFER,F)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(y,_,N){const W=n.get(y);_!==void 0&&te(W.__webglFramebuffer,y,y.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),N!==void 0&&Ee(y)}function Oe(y){const _=y.texture,N=n.get(y),W=n.get(_);y.addEventListener("dispose",R);const F=y.textures,V=y.isWebGLCubeRenderTarget===!0,ue=F.length>1;if(ue||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=_.version,a.memory.textures++),V){N.__webglFramebuffer=[];for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[re]=[];for(let oe=0;oe<_.mipmaps.length;oe++)N.__webglFramebuffer[re][oe]=s.createFramebuffer()}else N.__webglFramebuffer[re]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let re=0;re<_.mipmaps.length;re++)N.__webglFramebuffer[re]=s.createFramebuffer()}else N.__webglFramebuffer=s.createFramebuffer();if(ue)for(let re=0,oe=F.length;re<oe;re++){const Ie=n.get(F[re]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=s.createTexture(),a.memory.textures++)}if(y.samples>0&&Me(y)===!1){N.__webglMultisampledFramebuffer=s.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let re=0;re<F.length;re++){const oe=F[re];N.__webglColorRenderbuffer[re]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,N.__webglColorRenderbuffer[re]);const Ie=r.convert(oe.format,oe.colorSpace),ne=r.convert(oe.type),me=T(oe.internalFormat,Ie,ne,oe.colorSpace,y.isXRRenderTarget===!0),ke=Xe(y);s.renderbufferStorageMultisample(s.RENDERBUFFER,ke,me,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+re,s.RENDERBUFFER,N.__webglColorRenderbuffer[re])}s.bindRenderbuffer(s.RENDERBUFFER,null),y.depthBuffer&&(N.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(N.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(V){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),ve(s.TEXTURE_CUBE_MAP,_);for(let re=0;re<6;re++)if(_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)te(N.__webglFramebuffer[re][oe],y,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,oe);else te(N.__webglFramebuffer[re],y,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);m(_)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let re=0,oe=F.length;re<oe;re++){const Ie=F[re],ne=n.get(Ie);t.bindTexture(s.TEXTURE_2D,ne.__webglTexture),ve(s.TEXTURE_2D,Ie),te(N.__webglFramebuffer,y,Ie,s.COLOR_ATTACHMENT0+re,s.TEXTURE_2D,0),m(Ie)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let re=s.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(re=y.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(re,W.__webglTexture),ve(re,_),_.mipmaps&&_.mipmaps.length>0)for(let oe=0;oe<_.mipmaps.length;oe++)te(N.__webglFramebuffer[oe],y,_,s.COLOR_ATTACHMENT0,re,oe);else te(N.__webglFramebuffer,y,_,s.COLOR_ATTACHMENT0,re,0);m(_)&&f(re),t.unbindTexture()}y.depthBuffer&&Ee(y)}function nt(y){const _=y.textures;for(let N=0,W=_.length;N<W;N++){const F=_[N];if(m(F)){const V=y.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ue=n.get(F).__webglTexture;t.bindTexture(V,ue),f(V),t.unbindTexture()}}}const w=[],it=[];function We(y){if(y.samples>0){if(Me(y)===!1){const _=y.textures,N=y.width,W=y.height;let F=s.COLOR_BUFFER_BIT;const V=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ue=n.get(y),re=_.length>1;if(re)for(let oe=0;oe<_.length;oe++)t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let oe=0;oe<_.length;oe++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(F|=s.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(F|=s.STENCIL_BUFFER_BIT)),re){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);const Ie=n.get(_[oe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ie,0)}s.blitFramebuffer(0,0,N,W,0,0,N,W,F,s.NEAREST),l===!0&&(w.length=0,it.length=0,w.push(s.COLOR_ATTACHMENT0+oe),y.depthBuffer&&y.resolveDepthBuffer===!1&&(w.push(V),it.push(V),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,it)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),re)for(let oe=0;oe<_.length;oe++){t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);const Ie=n.get(_[oe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+oe,s.TEXTURE_2D,Ie,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const _=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function Xe(y){return Math.min(i.maxSamples,y.samples)}function Me(y){const _=n.get(y);return y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function O(y){const _=a.render.frame;h.get(y)!==_&&(h.set(y,_),y.update())}function H(y,_){const N=y.colorSpace,W=y.format,F=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||N!==vt&&N!==Cn&&(Ve.getTransfer(N)===tt?(W!==Bt||F!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function ee(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(c.width=y.naturalWidth||y.width,c.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(c.width=y.displayWidth,c.height=y.displayHeight):(c.width=y.width,c.height=y.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=C,this.setTexture2D=J,this.setTexture2DArray=$,this.setTexture3D=K,this.setTextureCube=Q,this.rebindTextures=Re,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=We,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=te,this.useMultisampledRTT=Me}function zm(s,e){function t(n,i=Cn){let r;const a=Ve.getTransfer(i);if(n===xn)return s.UNSIGNED_BYTE;if(n===Da)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ia)return s.UNSIGNED_SHORT_5_5_5_1;if(n===kl)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Bl)return s.BYTE;if(n===zl)return s.SHORT;if(n===is)return s.UNSIGNED_SHORT;if(n===La)return s.INT;if(n===jn)return s.UNSIGNED_INT;if(n===Xt)return s.FLOAT;if(n===os)return s.HALF_FLOAT;if(n===Hl)return s.ALPHA;if(n===Gl)return s.RGB;if(n===Bt)return s.RGBA;if(n===Vl)return s.LUMINANCE;if(n===Wl)return s.LUMINANCE_ALPHA;if(n===yi)return s.DEPTH_COMPONENT;if(n===Pi)return s.DEPTH_STENCIL;if(n===Ua)return s.RED;if(n===Na)return s.RED_INTEGER;if(n===Xl)return s.RG;if(n===Oa)return s.RG_INTEGER;if(n===Fa)return s.RGBA_INTEGER;if(n===Gs||n===Vs||n===Ws||n===Xs)if(a===tt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Gs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Gs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ws)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jr||n===Zr||n===$r||n===Jr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$r)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qr||n===ea||n===ta)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Qr||n===ea)return a===tt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ta)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===na||n===ia||n===sa||n===ra||n===aa||n===oa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===na)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ia)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ra)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===oa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===la)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ca)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ha)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ua)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===da)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pa)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ma)return a===tt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ys||n===ga||n===_a)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ys)return a===tt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ga)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Yl||n===xa||n===va||n===Ma)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ys)return r.COMPRESSED_RED_RGTC1_EXT;if(n===xa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===va)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ci?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class km extends bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Kn extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),f=this._getHandJoint(c,x);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Kn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Wm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new mt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Nn({vertexShader:Gm,fragmentShader:Vm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new ls(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Xm extends $n{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const x=new Wm,m=t.getContextAttributes();let f=null,T=null;const S=[],b=[],D=new Te;let R=null;const A=new bt;A.layers.enable(1),A.viewport=new Qe;const B=new bt;B.layers.enable(2),B.viewport=new Qe;const E=[A,B],M=new km;M.layers.enable(1),M.layers.enable(2);let C=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let te=S[Y];return te===void 0&&(te=new Nr,S[Y]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Y){let te=S[Y];return te===void 0&&(te=new Nr,S[Y]=te),te.getGripSpace()},this.getHand=function(Y){let te=S[Y];return te===void 0&&(te=new Nr,S[Y]=te),te.getHandSpace()};function G(Y){const te=b.indexOf(Y.inputSource);if(te===-1)return;const fe=S[te];fe!==void 0&&(fe.update(Y.inputSource,Y.frame,c||a),fe.dispatchEvent({type:Y.type,data:Y.inputSource}))}function J(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",J),i.removeEventListener("inputsourceschange",$);for(let Y=0;Y<S.length;Y++){const te=b[Y];te!==null&&(b[Y]=null,S[Y].disconnect(te))}C=null,q=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,T=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",J),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),T=new Zn(p.framebufferWidth,p.framebufferHeight,{format:Bt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,fe=null,pe=null;m.depth&&(pe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?Pi:yi,fe=m.stencil?Ci:jn);const Ee={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new Zn(d.textureWidth,d.textureHeight,{format:Bt,type:xn,depthTexture:new ac(d.textureWidth,d.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(Y){for(let te=0;te<Y.removed.length;te++){const fe=Y.removed[te],pe=b.indexOf(fe);pe>=0&&(b[pe]=null,S[pe].disconnect(fe))}for(let te=0;te<Y.added.length;te++){const fe=Y.added[te];let pe=b.indexOf(fe);if(pe===-1){for(let Re=0;Re<S.length;Re++)if(Re>=b.length){b.push(fe),pe=Re;break}else if(b[Re]===null){b[Re]=fe,pe=Re;break}if(pe===-1)break}const Ee=S[pe];Ee&&Ee.connect(fe)}}const K=new P,Q=new P;function X(Y,te,fe){K.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(fe.matrixWorld);const pe=K.distanceTo(Q),Ee=te.projectionMatrix.elements,Re=fe.projectionMatrix.elements,Oe=Ee[14]/(Ee[10]-1),nt=Ee[14]/(Ee[10]+1),w=(Ee[9]+1)/Ee[5],it=(Ee[9]-1)/Ee[5],We=(Ee[8]-1)/Ee[0],Xe=(Re[8]+1)/Re[0],Me=Oe*We,O=Oe*Xe,H=pe/(-We+Xe),ee=H*-We;if(te.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ee),Y.translateZ(H),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ee[10]===-1)Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const y=Oe+H,_=nt+H,N=Me-ee,W=O+(pe-ee),F=w*nt/_*y,V=it*nt/_*y;Y.projectionMatrix.makePerspective(N,W,F,V,y,_),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function he(Y,te){te===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(te.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let te=Y.near,fe=Y.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),M.near=B.near=A.near=te,M.far=B.far=A.far=fe,(C!==M.near||q!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,q=M.far);const pe=Y.parent,Ee=M.cameras;he(M,pe);for(let Re=0;Re<Ee.length;Re++)he(Ee[Re],pe);Ee.length===2?X(M,A,B):M.projectionMatrix.copy(A.projectionMatrix),de(Y,M,pe)};function de(Y,te,fe){fe===null?Y.matrix.copy(te.matrixWorld):(Y.matrix.copy(fe.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(te.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(te.projectionMatrix),Y.projectionMatrixInverse.copy(te.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Li*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Y)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let ve=null;function Be(Y,te){if(h=te.getViewerPose(c||a),g=te,h!==null){const fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(T,p.framebuffer),e.setRenderTarget(T));let pe=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,pe=!0);for(let Re=0;Re<fe.length;Re++){const Oe=fe[Re];let nt=null;if(p!==null)nt=p.getViewport(Oe);else{const it=u.getViewSubImage(d,Oe);nt=it.viewport,Re===0&&(e.setRenderTargetTextures(T,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(T))}let w=E[Re];w===void 0&&(w=new bt,w.layers.enable(Re),w.viewport=new Qe,E[Re]=w),w.matrix.fromArray(Oe.transform.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale),w.projectionMatrix.fromArray(Oe.projectionMatrix),w.projectionMatrixInverse.copy(w.projectionMatrix).invert(),w.viewport.set(nt.x,nt.y,nt.width,nt.height),Re===0&&(M.matrix.copy(w.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),pe===!0&&M.cameras.push(w)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Re=u.getDepthInformation(fe[0]);Re&&Re.isValid&&Re.texture&&x.init(e,Re,i.renderState)}}for(let fe=0;fe<S.length;fe++){const pe=b[fe],Ee=S[fe];pe!==null&&Ee!==void 0&&Ee.update(pe,te,c||a)}ve&&ve(Y,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ge=new rc;Ge.setAnimationLoop(Be),this.setAnimationLoop=function(Y){ve=Y},this.dispose=function(){}}}const Gn=new Qt,Ym=new De;function qm(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,nc(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,T,S,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),x(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===wt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===wt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),S=T.envMap,b=T.envMapRotation;S&&(m.envMap.value=S,Gn.copy(b),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),m.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(Gn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===wt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function x(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Km(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const b=S.program;n.uniformBlockBinding(T,b)}function c(T,S){let b=i[T.id];b===void 0&&(g(T),b=h(T),i[T.id]=b,T.addEventListener("dispose",m));const D=S.program;n.updateUBOMapping(T,D);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const S=u();T.__bindingPointIndex=S;const b=s.createBuffer(),D=T.__size,R=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,D,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,S,b),b}function u(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const S=i[T.id],b=T.uniforms,D=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let R=0,A=b.length;R<A;R++){const B=Array.isArray(b[R])?b[R]:[b[R]];for(let E=0,M=B.length;E<M;E++){const C=B[E];if(p(C,R,E,D)===!0){const q=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let J=0;for(let $=0;$<G.length;$++){const K=G[$],Q=x(K);typeof K=="number"||typeof K=="boolean"?(C.__data[0]=K,s.bufferSubData(s.UNIFORM_BUFFER,q+J,C.__data)):K.isMatrix3?(C.__data[0]=K.elements[0],C.__data[1]=K.elements[1],C.__data[2]=K.elements[2],C.__data[3]=0,C.__data[4]=K.elements[3],C.__data[5]=K.elements[4],C.__data[6]=K.elements[5],C.__data[7]=0,C.__data[8]=K.elements[6],C.__data[9]=K.elements[7],C.__data[10]=K.elements[8],C.__data[11]=0):(K.toArray(C.__data,J),J+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,C.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(T,S,b,D){const R=T.value,A=S+"_"+b;if(D[A]===void 0)return typeof R=="number"||typeof R=="boolean"?D[A]=R:D[A]=R.clone(),!0;{const B=D[A];if(typeof R=="number"||typeof R=="boolean"){if(B!==R)return D[A]=R,!0}else if(B.equals(R)===!1)return B.copy(R),!0}return!1}function g(T){const S=T.uniforms;let b=0;const D=16;for(let A=0,B=S.length;A<B;A++){const E=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,C=E.length;M<C;M++){const q=E[M],G=Array.isArray(q.value)?q.value:[q.value];for(let J=0,$=G.length;J<$;J++){const K=G[J],Q=x(K),X=b%D,he=X%Q.boundary,de=X+he;b+=he,de!==0&&D-de<Q.storage&&(b+=D-de),q.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=Q.storage}}}const R=b%D;return R>0&&(b+=D-R),T.__size=b,T.__cache={},this}function x(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function f(){for(const T in i)s.deleteBuffer(i[T]);a=[],i={},r={}}return{bind:l,update:c,dispose:f}}class jm{constructor(e={}){const{canvas:t=Bh(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,m=null;const f=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this.toneMapping=Un,this.toneMappingExposure=1;const S=this;let b=!1,D=0,R=0,A=null,B=-1,E=null;const M=new Qe,C=new Qe;let q=null;const G=new Pe(0);let J=0,$=t.width,K=t.height,Q=1,X=null,he=null;const de=new Qe(0,0,$,K),ve=new Qe(0,0,$,K);let Be=!1;const Ge=new Ha;let Y=!1,te=!1;const fe=new De,pe=new P,Ee=new Qe,Re={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function nt(){return A===null?Q:1}let w=n;function it(v,I){return t.getContext(v,I)}try{const v={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pa}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",ae,!1),w===null){const I="webgl2";if(w=it(I,v),w===null)throw it(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let We,Xe,Me,O,H,ee,y,_,N,W,F,V,ue,re,oe,Ie,ne,me,ke,Ce,ge,Le,Fe,st;function L(){We=new tp(w),We.init(),Le=new zm(w,We),Xe=new jf(w,We,e,Le),Me=new Om(w),O=new sp(w),H=new ym,ee=new Bm(w,We,Me,H,Xe,Le,O),y=new $f(S),_=new ep(S),N=new hu(w),Fe=new qf(w,N),W=new np(w,N,O,Fe),F=new ap(w,W,N,O),ke=new rp(w,Xe,ee),Ie=new Zf(H),V=new Sm(S,y,_,We,Xe,Fe,Ie),ue=new qm(S,H),re=new Tm,oe=new Pm(We),me=new Yf(S,y,_,Me,F,d,l),ne=new Nm(S,F,Xe),st=new Km(w,O,Xe,Me),Ce=new Kf(w,We,O),ge=new ip(w,We,O),O.programs=V.programs,S.capabilities=Xe,S.extensions=We,S.properties=H,S.renderLists=re,S.shadowMap=ne,S.state=Me,S.info=O}L();const ie=new Xm(S,w);this.xr=ie,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=We.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=We.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(v){v!==void 0&&(Q=v,this.setSize($,K,!1))},this.getSize=function(v){return v.set($,K)},this.setSize=function(v,I,z=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,K=I,t.width=Math.floor(v*Q),t.height=Math.floor(I*Q),z===!0&&(t.style.width=v+"px",t.style.height=I+"px"),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set($*Q,K*Q).floor()},this.setDrawingBufferSize=function(v,I,z){$=v,K=I,Q=z,t.width=Math.floor(v*z),t.height=Math.floor(I*z),this.setViewport(0,0,v,I)},this.getCurrentViewport=function(v){return v.copy(M)},this.getViewport=function(v){return v.copy(de)},this.setViewport=function(v,I,z,k){v.isVector4?de.set(v.x,v.y,v.z,v.w):de.set(v,I,z,k),Me.viewport(M.copy(de).multiplyScalar(Q).round())},this.getScissor=function(v){return v.copy(ve)},this.setScissor=function(v,I,z,k){v.isVector4?ve.set(v.x,v.y,v.z,v.w):ve.set(v,I,z,k),Me.scissor(C.copy(ve).multiplyScalar(Q).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(v){Me.setScissorTest(Be=v)},this.setOpaqueSort=function(v){X=v},this.setTransparentSort=function(v){he=v},this.getClearColor=function(v){return v.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(v=!0,I=!0,z=!0){let k=0;if(v){let U=!1;if(A!==null){const se=A.texture.format;U=se===Fa||se===Oa||se===Na}if(U){const se=A.texture.type,ce=se===xn||se===jn||se===is||se===Ci||se===Da||se===Ia,_e=me.getClearColor(),xe=me.getClearAlpha(),Ae=_e.r,we=_e.g,Se=_e.b;ce?(p[0]=Ae,p[1]=we,p[2]=Se,p[3]=xe,w.clearBufferuiv(w.COLOR,0,p)):(g[0]=Ae,g[1]=we,g[2]=Se,g[3]=xe,w.clearBufferiv(w.COLOR,0,g))}else k|=w.COLOR_BUFFER_BIT}I&&(k|=w.DEPTH_BUFFER_BIT),z&&(k|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),re.dispose(),oe.dispose(),H.dispose(),y.dispose(),_.dispose(),F.dispose(),Fe.dispose(),st.dispose(),V.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",qt),ie.removeEventListener("sessionend",$a),On.stop()};function j(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const v=O.autoReset,I=ne.enabled,z=ne.autoUpdate,k=ne.needsUpdate,U=ne.type;L(),O.autoReset=v,ne.enabled=I,ne.autoUpdate=z,ne.needsUpdate=k,ne.type=U}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function be(v){const I=v.target;I.removeEventListener("dispose",be),He(I)}function He(v){lt(v),H.remove(v)}function lt(v){const I=H.get(v).programs;I!==void 0&&(I.forEach(function(z){V.releaseProgram(z)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,z,k,U,se){I===null&&(I=Re);const ce=U.isMesh&&U.matrixWorld.determinant()<0,_e=Tc(v,I,z,k,U);Me.setMaterial(k,ce);let xe=z.index,Ae=1;if(k.wireframe===!0){if(xe=W.getWireframeAttribute(z),xe===void 0)return;Ae=2}const we=z.drawRange,Se=z.attributes.position;let qe=we.start*Ae,at=(we.start+we.count)*Ae;se!==null&&(qe=Math.max(qe,se.start*Ae),at=Math.min(at,(se.start+se.count)*Ae)),xe!==null?(qe=Math.max(qe,0),at=Math.min(at,xe.count)):Se!=null&&(qe=Math.max(qe,0),at=Math.min(at,Se.count));const ot=at-qe;if(ot<0||ot===1/0)return;Fe.setup(U,k,_e,z,xe);let Pt,Ke=Ce;if(xe!==null&&(Pt=N.get(xe),Ke=ge,Ke.setIndex(Pt)),U.isMesh)k.wireframe===!0?(Me.setLineWidth(k.wireframeLinewidth*nt()),Ke.setMode(w.LINES)):Ke.setMode(w.TRIANGLES);else if(U.isLine){let ye=k.linewidth;ye===void 0&&(ye=1),Me.setLineWidth(ye*nt()),U.isLineSegments?Ke.setMode(w.LINES):U.isLineLoop?Ke.setMode(w.LINE_LOOP):Ke.setMode(w.LINE_STRIP)}else U.isPoints?Ke.setMode(w.POINTS):U.isSprite&&Ke.setMode(w.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ke.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))Ke.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,_t=U._multiDrawCounts,je=U._multiDrawCount,zt=xe?N.get(xe).bytesPerElement:1,Jn=H.get(k).currentProgram.getUniforms();for(let Lt=0;Lt<je;Lt++)Jn.setValue(w,"_gl_DrawID",Lt),Ke.render(ye[Lt]/zt,_t[Lt])}else if(U.isInstancedMesh)Ke.renderInstances(qe,ot,U.count);else if(z.isInstancedBufferGeometry){const ye=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,_t=Math.min(z.instanceCount,ye);Ke.renderInstances(qe,ot,_t)}else Ke.render(qe,ot)};function gt(v,I,z){v.transparent===!0&&v.side===jt&&v.forceSinglePass===!1?(v.side=wt,v.needsUpdate=!0,us(v,I,z),v.side=_n,v.needsUpdate=!0,us(v,I,z),v.side=jt):us(v,I,z)}this.compile=function(v,I,z=null){z===null&&(z=v),m=oe.get(z),m.init(I),T.push(m),z.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),v!==z&&v.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const k=new Set;return v.traverse(function(U){const se=U.material;if(se)if(Array.isArray(se))for(let ce=0;ce<se.length;ce++){const _e=se[ce];gt(_e,z,U),k.add(_e)}else gt(se,z,U),k.add(se)}),T.pop(),m=null,k},this.compileAsync=function(v,I,z=null){const k=this.compile(v,I,z);return new Promise(U=>{function se(){if(k.forEach(function(ce){H.get(ce).currentProgram.isReady()&&k.delete(ce)}),k.size===0){U(v);return}setTimeout(se,10)}We.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Ye=null;function rn(v){Ye&&Ye(v)}function qt(){On.stop()}function $a(){On.start()}const On=new rc;On.setAnimationLoop(rn),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(v){Ye=v,ie.setAnimationLoop(v),v===null?On.stop():On.start()},ie.addEventListener("sessionstart",qt),ie.addEventListener("sessionend",$a),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,I,A),m=oe.get(v,T.length),m.init(I),T.push(m),fe.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ge.setFromProjectionMatrix(fe),te=this.localClippingEnabled,Y=Ie.init(this.clippingPlanes,te),x=re.get(v,f.length),x.init(),f.push(x),ie.enabled===!0&&ie.isPresenting===!0){const se=S.xr.getDepthSensingMesh();se!==null&&ar(se,I,-1/0,S.sortObjects)}ar(v,I,0,S.sortObjects),x.finish(),S.sortObjects===!0&&x.sort(X,he),Oe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Oe&&me.addToRenderList(x,v),this.info.render.frame++,Y===!0&&Ie.beginShadows();const z=m.state.shadowsArray;ne.render(z,v,I),Y===!0&&Ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const k=x.opaque,U=x.transmissive;if(m.setupLights(),I.isArrayCamera){const se=I.cameras;if(U.length>0)for(let ce=0,_e=se.length;ce<_e;ce++){const xe=se[ce];Qa(k,U,v,xe)}Oe&&me.render(v);for(let ce=0,_e=se.length;ce<_e;ce++){const xe=se[ce];Ja(x,v,xe,xe.viewport)}}else U.length>0&&Qa(k,U,v,I),Oe&&me.render(v),Ja(x,v,I);A!==null&&(ee.updateMultisampleRenderTarget(A),ee.updateRenderTargetMipmap(A)),v.isScene===!0&&v.onAfterRender(S,v,I),Fe.resetDefaultState(),B=-1,E=null,T.pop(),T.length>0?(m=T[T.length-1],Y===!0&&Ie.setGlobalState(S.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?x=f[f.length-1]:x=null};function ar(v,I,z,k){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Ge.intersectsSprite(v)){k&&Ee.setFromMatrixPosition(v.matrixWorld).applyMatrix4(fe);const ce=F.update(v),_e=v.material;_e.visible&&x.push(v,ce,_e,z,Ee.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Ge.intersectsObject(v))){const ce=F.update(v),_e=v.material;if(k&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ee.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),Ee.copy(ce.boundingSphere.center)),Ee.applyMatrix4(v.matrixWorld).applyMatrix4(fe)),Array.isArray(_e)){const xe=ce.groups;for(let Ae=0,we=xe.length;Ae<we;Ae++){const Se=xe[Ae],qe=_e[Se.materialIndex];qe&&qe.visible&&x.push(v,ce,qe,z,Ee.z,Se)}}else _e.visible&&x.push(v,ce,_e,z,Ee.z,null)}}const se=v.children;for(let ce=0,_e=se.length;ce<_e;ce++)ar(se[ce],I,z,k)}function Ja(v,I,z,k){const U=v.opaque,se=v.transmissive,ce=v.transparent;m.setupLightsView(z),Y===!0&&Ie.setGlobalState(S.clippingPlanes,z),k&&Me.viewport(M.copy(k)),U.length>0&&hs(U,I,z),se.length>0&&hs(se,I,z),ce.length>0&&hs(ce,I,z),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Qa(v,I,z,k){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[k.id]===void 0&&(m.state.transmissionRenderTarget[k.id]=new Zn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?os:xn,minFilter:pn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ve.workingColorSpace}));const se=m.state.transmissionRenderTarget[k.id],ce=k.viewport||M;se.setSize(ce.z,ce.w);const _e=S.getRenderTarget();S.setRenderTarget(se),S.getClearColor(G),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),Oe&&me.render(z);const xe=S.toneMapping;S.toneMapping=Un;const Ae=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),m.setupLightsView(k),Y===!0&&Ie.setGlobalState(S.clippingPlanes,k),hs(v,z,k),ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se),We.has("WEBGL_multisampled_render_to_texture")===!1){let we=!1;for(let Se=0,qe=I.length;Se<qe;Se++){const at=I[Se],ot=at.object,Pt=at.geometry,Ke=at.material,ye=at.group;if(Ke.side===jt&&ot.layers.test(k.layers)){const _t=Ke.side;Ke.side=wt,Ke.needsUpdate=!0,eo(ot,z,k,Pt,Ke,ye),Ke.side=_t,Ke.needsUpdate=!0,we=!0}}we===!0&&(ee.updateMultisampleRenderTarget(se),ee.updateRenderTargetMipmap(se))}S.setRenderTarget(_e),S.setClearColor(G,J),Ae!==void 0&&(k.viewport=Ae),S.toneMapping=xe}function hs(v,I,z){const k=I.isScene===!0?I.overrideMaterial:null;for(let U=0,se=v.length;U<se;U++){const ce=v[U],_e=ce.object,xe=ce.geometry,Ae=k===null?ce.material:k,we=ce.group;_e.layers.test(z.layers)&&eo(_e,I,z,xe,Ae,we)}}function eo(v,I,z,k,U,se){v.onBeforeRender(S,I,z,k,U,se),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),U.onBeforeRender(S,I,z,k,v,se),U.transparent===!0&&U.side===jt&&U.forceSinglePass===!1?(U.side=wt,U.needsUpdate=!0,S.renderBufferDirect(z,I,k,U,v,se),U.side=_n,U.needsUpdate=!0,S.renderBufferDirect(z,I,k,U,v,se),U.side=jt):S.renderBufferDirect(z,I,k,U,v,se),v.onAfterRender(S,I,z,k,U,se)}function us(v,I,z){I.isScene!==!0&&(I=Re);const k=H.get(v),U=m.state.lights,se=m.state.shadowsArray,ce=U.state.version,_e=V.getParameters(v,U.state,se,I,z),xe=V.getProgramCacheKey(_e);let Ae=k.programs;k.environment=v.isMeshStandardMaterial?I.environment:null,k.fog=I.fog,k.envMap=(v.isMeshStandardMaterial?_:y).get(v.envMap||k.environment),k.envMapRotation=k.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ae===void 0&&(v.addEventListener("dispose",be),Ae=new Map,k.programs=Ae);let we=Ae.get(xe);if(we!==void 0){if(k.currentProgram===we&&k.lightsStateVersion===ce)return no(v,_e),we}else _e.uniforms=V.getUniforms(v),v.onBeforeCompile(_e,S),we=V.acquireProgram(_e,xe),Ae.set(xe,we),k.uniforms=_e.uniforms;const Se=k.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Se.clippingPlanes=Ie.uniform),no(v,_e),k.needsLights=Ac(v),k.lightsStateVersion=ce,k.needsLights&&(Se.ambientLightColor.value=U.state.ambient,Se.lightProbe.value=U.state.probe,Se.directionalLights.value=U.state.directional,Se.directionalLightShadows.value=U.state.directionalShadow,Se.spotLights.value=U.state.spot,Se.spotLightShadows.value=U.state.spotShadow,Se.rectAreaLights.value=U.state.rectArea,Se.ltc_1.value=U.state.rectAreaLTC1,Se.ltc_2.value=U.state.rectAreaLTC2,Se.pointLights.value=U.state.point,Se.pointLightShadows.value=U.state.pointShadow,Se.hemisphereLights.value=U.state.hemi,Se.directionalShadowMap.value=U.state.directionalShadowMap,Se.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Se.spotShadowMap.value=U.state.spotShadowMap,Se.spotLightMatrix.value=U.state.spotLightMatrix,Se.spotLightMap.value=U.state.spotLightMap,Se.pointShadowMap.value=U.state.pointShadowMap,Se.pointShadowMatrix.value=U.state.pointShadowMatrix),k.currentProgram=we,k.uniformsList=null,we}function to(v){if(v.uniformsList===null){const I=v.currentProgram.getUniforms();v.uniformsList=qs.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function no(v,I){const z=H.get(v);z.outputColorSpace=I.outputColorSpace,z.batching=I.batching,z.batchingColor=I.batchingColor,z.instancing=I.instancing,z.instancingColor=I.instancingColor,z.instancingMorph=I.instancingMorph,z.skinning=I.skinning,z.morphTargets=I.morphTargets,z.morphNormals=I.morphNormals,z.morphColors=I.morphColors,z.morphTargetsCount=I.morphTargetsCount,z.numClippingPlanes=I.numClippingPlanes,z.numIntersection=I.numClipIntersection,z.vertexAlphas=I.vertexAlphas,z.vertexTangents=I.vertexTangents,z.toneMapping=I.toneMapping}function Tc(v,I,z,k,U){I.isScene!==!0&&(I=Re),ee.resetTextureUnits();const se=I.fog,ce=k.isMeshStandardMaterial?I.environment:null,_e=A===null?S.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:vt,xe=(k.isMeshStandardMaterial?_:y).get(k.envMap||ce),Ae=k.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,we=!!z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Se=!!z.morphAttributes.position,qe=!!z.morphAttributes.normal,at=!!z.morphAttributes.color;let ot=Un;k.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ot=S.toneMapping);const Pt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Ke=Pt!==void 0?Pt.length:0,ye=H.get(k),_t=m.state.lights;if(Y===!0&&(te===!0||v!==E)){const Nt=v===E&&k.id===B;Ie.setState(k,v,Nt)}let je=!1;k.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==_t.state.version||ye.outputColorSpace!==_e||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==xe||k.fog===!0&&ye.fog!==se||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==Ie.numPlanes||ye.numIntersection!==Ie.numIntersection)||ye.vertexAlphas!==Ae||ye.vertexTangents!==we||ye.morphTargets!==Se||ye.morphNormals!==qe||ye.morphColors!==at||ye.toneMapping!==ot||ye.morphTargetsCount!==Ke)&&(je=!0):(je=!0,ye.__version=k.version);let zt=ye.currentProgram;je===!0&&(zt=us(k,I,U));let Jn=!1,Lt=!1,or=!1;const ct=zt.getUniforms(),Mn=ye.uniforms;if(Me.useProgram(zt.program)&&(Jn=!0,Lt=!0,or=!0),k.id!==B&&(B=k.id,Lt=!0),Jn||E!==v){ct.setValue(w,"projectionMatrix",v.projectionMatrix),ct.setValue(w,"viewMatrix",v.matrixWorldInverse);const Nt=ct.map.cameraPosition;Nt!==void 0&&Nt.setValue(w,pe.setFromMatrixPosition(v.matrixWorld)),Xe.logarithmicDepthBuffer&&ct.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&ct.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Lt=!0,or=!0)}if(U.isSkinnedMesh){ct.setOptional(w,U,"bindMatrix"),ct.setOptional(w,U,"bindMatrixInverse");const Nt=U.skeleton;Nt&&(Nt.boneTexture===null&&Nt.computeBoneTexture(),ct.setValue(w,"boneTexture",Nt.boneTexture,ee))}U.isBatchedMesh&&(ct.setOptional(w,U,"batchingTexture"),ct.setValue(w,"batchingTexture",U._matricesTexture,ee),ct.setOptional(w,U,"batchingIdTexture"),ct.setValue(w,"batchingIdTexture",U._indirectTexture,ee),ct.setOptional(w,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(w,"batchingColorTexture",U._colorsTexture,ee));const lr=z.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&ke.update(U,z,zt),(Lt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,ct.setValue(w,"receiveShadow",U.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Mn.envMap.value=xe,Mn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),k.isMeshStandardMaterial&&k.envMap===null&&I.environment!==null&&(Mn.envMapIntensity.value=I.environmentIntensity),Lt&&(ct.setValue(w,"toneMappingExposure",S.toneMappingExposure),ye.needsLights&&bc(Mn,or),se&&k.fog===!0&&ue.refreshFogUniforms(Mn,se),ue.refreshMaterialUniforms(Mn,k,Q,K,m.state.transmissionRenderTarget[v.id]),qs.upload(w,to(ye),Mn,ee)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qs.upload(w,to(ye),Mn,ee),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&ct.setValue(w,"center",U.center),ct.setValue(w,"modelViewMatrix",U.modelViewMatrix),ct.setValue(w,"normalMatrix",U.normalMatrix),ct.setValue(w,"modelMatrix",U.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){const Nt=k.uniformsGroups;for(let cr=0,wc=Nt.length;cr<wc;cr++){const io=Nt[cr];st.update(io,zt),st.bind(io,zt)}}return zt}function bc(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Ac(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(v,I,z){H.get(v.texture).__webglTexture=I,H.get(v.depthTexture).__webglTexture=z;const k=H.get(v);k.__hasExternalTextures=!0,k.__autoAllocateDepthBuffer=z===void 0,k.__autoAllocateDepthBuffer||We.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,I){const z=H.get(v);z.__webglFramebuffer=I,z.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,z=0){A=v,D=I,R=z;let k=!0,U=null,se=!1,ce=!1;if(v){const xe=H.get(v);if(xe.__useDefaultFramebuffer!==void 0)Me.bindFramebuffer(w.FRAMEBUFFER,null),k=!1;else if(xe.__webglFramebuffer===void 0)ee.setupRenderTarget(v);else if(xe.__hasExternalTextures)ee.rebindTextures(v,H.get(v.texture).__webglTexture,H.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Se=v.depthTexture;if(xe.__boundDepthTexture!==Se){if(Se!==null&&H.has(Se)&&(v.width!==Se.image.width||v.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(v)}}const Ae=v.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(ce=!0);const we=H.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[I])?U=we[I][z]:U=we[I],se=!0):v.samples>0&&ee.useMultisampledRTT(v)===!1?U=H.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?U=we[z]:U=we,M.copy(v.viewport),C.copy(v.scissor),q=v.scissorTest}else M.copy(de).multiplyScalar(Q).floor(),C.copy(ve).multiplyScalar(Q).floor(),q=Be;if(Me.bindFramebuffer(w.FRAMEBUFFER,U)&&k&&Me.drawBuffers(v,U),Me.viewport(M),Me.scissor(C),Me.setScissorTest(q),se){const xe=H.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+I,xe.__webglTexture,z)}else if(ce){const xe=H.get(v.texture),Ae=I||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,xe.__webglTexture,z||0,Ae)}B=-1},this.readRenderTargetPixels=function(v,I,z,k,U,se,ce){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e){Me.bindFramebuffer(w.FRAMEBUFFER,_e);try{const xe=v.texture,Ae=xe.format,we=xe.type;if(!Xe.textureFormatReadable(Ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-k&&z>=0&&z<=v.height-U&&w.readPixels(I,z,k,U,Le.convert(Ae),Le.convert(we),se)}finally{const xe=A!==null?H.get(A).__webglFramebuffer:null;Me.bindFramebuffer(w.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(v,I,z,k,U,se,ce){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=H.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ce!==void 0&&(_e=_e[ce]),_e){Me.bindFramebuffer(w.FRAMEBUFFER,_e);try{const xe=v.texture,Ae=xe.format,we=xe.type;if(!Xe.textureFormatReadable(Ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(we))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=v.width-k&&z>=0&&z<=v.height-U){const Se=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Se),w.bufferData(w.PIXEL_PACK_BUFFER,se.byteLength,w.STREAM_READ),w.readPixels(I,z,k,U,Le.convert(Ae),Le.convert(we),0),w.flush();const qe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);await zh(w,qe,4);try{w.bindBuffer(w.PIXEL_PACK_BUFFER,Se),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,se)}finally{w.deleteBuffer(Se),w.deleteSync(qe)}return se}}finally{const xe=A!==null?H.get(A).__webglFramebuffer:null;Me.bindFramebuffer(w.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(v,I=null,z=0){v.isTexture!==!0&&(Ei("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,v=arguments[1]);const k=Math.pow(2,-z),U=Math.floor(v.image.width*k),se=Math.floor(v.image.height*k),ce=I!==null?I.x:0,_e=I!==null?I.y:0;ee.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,z,0,0,ce,_e,U,se),Me.unbindTexture()},this.copyTextureToTexture=function(v,I,z=null,k=null,U=0){v.isTexture!==!0&&(Ei("WebGLRenderer: copyTextureToTexture function signature has changed."),k=arguments[0]||null,v=arguments[1],I=arguments[2],U=arguments[3]||0,z=null);let se,ce,_e,xe,Ae,we;z!==null?(se=z.max.x-z.min.x,ce=z.max.y-z.min.y,_e=z.min.x,xe=z.min.y):(se=v.image.width,ce=v.image.height,_e=0,xe=0),k!==null?(Ae=k.x,we=k.y):(Ae=0,we=0);const Se=Le.convert(I.format),qe=Le.convert(I.type);ee.setTexture2D(I,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const at=w.getParameter(w.UNPACK_ROW_LENGTH),ot=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Pt=w.getParameter(w.UNPACK_SKIP_PIXELS),Ke=w.getParameter(w.UNPACK_SKIP_ROWS),ye=w.getParameter(w.UNPACK_SKIP_IMAGES),_t=v.isCompressedTexture?v.mipmaps[U]:v.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,_t.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,_t.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,_e),w.pixelStorei(w.UNPACK_SKIP_ROWS,xe),v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,U,Ae,we,se,ce,Se,qe,_t.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,U,Ae,we,_t.width,_t.height,Se,_t.data):w.texSubImage2D(w.TEXTURE_2D,U,Ae,we,se,ce,Se,qe,_t),w.pixelStorei(w.UNPACK_ROW_LENGTH,at),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Pt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ke),w.pixelStorei(w.UNPACK_SKIP_IMAGES,ye),U===0&&I.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),Me.unbindTexture()},this.copyTextureToTexture3D=function(v,I,z=null,k=null,U=0){v.isTexture!==!0&&(Ei("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,k=arguments[1]||null,v=arguments[2],I=arguments[3],U=arguments[4]||0);let se,ce,_e,xe,Ae,we,Se,qe,at;const ot=v.isCompressedTexture?v.mipmaps[U]:v.image;z!==null?(se=z.max.x-z.min.x,ce=z.max.y-z.min.y,_e=z.max.z-z.min.z,xe=z.min.x,Ae=z.min.y,we=z.min.z):(se=ot.width,ce=ot.height,_e=ot.depth,xe=0,Ae=0,we=0),k!==null?(Se=k.x,qe=k.y,at=k.z):(Se=0,qe=0,at=0);const Pt=Le.convert(I.format),Ke=Le.convert(I.type);let ye;if(I.isData3DTexture)ee.setTexture3D(I,0),ye=w.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)ee.setTexture2DArray(I,0),ye=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,I.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,I.unpackAlignment);const _t=w.getParameter(w.UNPACK_ROW_LENGTH),je=w.getParameter(w.UNPACK_IMAGE_HEIGHT),zt=w.getParameter(w.UNPACK_SKIP_PIXELS),Jn=w.getParameter(w.UNPACK_SKIP_ROWS),Lt=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ot.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ot.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,xe),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ae),w.pixelStorei(w.UNPACK_SKIP_IMAGES,we),v.isDataTexture||v.isData3DTexture?w.texSubImage3D(ye,U,Se,qe,at,se,ce,_e,Pt,Ke,ot.data):I.isCompressedArrayTexture?w.compressedTexSubImage3D(ye,U,Se,qe,at,se,ce,_e,Pt,ot.data):w.texSubImage3D(ye,U,Se,qe,at,se,ce,_e,Pt,Ke,ot),w.pixelStorei(w.UNPACK_ROW_LENGTH,_t),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,je),w.pixelStorei(w.UNPACK_SKIP_PIXELS,zt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Jn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Lt),U===0&&I.generateMipmaps&&w.generateMipmap(ye),Me.unbindTexture()},this.initRenderTarget=function(v){H.get(v).__webglFramebuffer===void 0&&ee.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?ee.setTextureCube(v,0):v.isData3DTexture?ee.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?ee.setTexture2DArray(v,0):ee.setTexture2D(v,0),Me.unbindTexture()},this.resetState=function(){D=0,R=0,A=null,Me.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Ba?"display-p3":"srgb",t.unpackColorSpace=Ve.workingColorSpace===ir?"display-p3":"srgb"}}class uc extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qt,this.environmentIntensity=1,this.environmentRotation=new Qt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Zm{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ya,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Yt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ei("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yt=new P;class Wa{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Wt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ze(t,this.array),n=Ze(n,this.array),i=Ze(i,this.array),r=Ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Rt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const sl=new P,rl=new Qe,al=new Qe,$m=new P,ol=new De,Is=new P,Or=new en,ll=new De,Fr=new Oi;class Jm extends et{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=lo,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Is),this.boundingBox.expandByPoint(Is)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Is),this.boundingSphere.expandByPoint(Is)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(i),e.ray.intersectsSphere(Or)!==!1&&(ll.copy(i).invert(),Fr.copy(e.ray).applyMatrix4(ll),!(this.boundingBox!==null&&Fr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Qe,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===lo?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===ch?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;rl.fromBufferAttribute(i.attributes.skinIndex,e),al.fromBufferAttribute(i.attributes.skinWeight,e),sl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=al.getComponent(r);if(a!==0){const o=rl.getComponent(r);ol.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector($m.copy(sl).applyMatrix4(ol),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class dc extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class fc extends mt{constructor(e=null,t=1,n=1,i,r,a,o,l,c=At,h=At,u,d){super(null,a,o,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const cl=new De,Qm=new De;class Xa{constructor(e=[],t=[]){this.uuid=Yt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:Qm;cl.multiplyMatrices(o,t[r]),cl.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Xa(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new fc(t,e,e,Bt,Xt);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new dc),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class ba extends Rt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gi=new De,hl=new De,Us=[],ul=new vn,eg=new De,qi=new et,Ki=new en;class tg extends et{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ba(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,eg)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),ul.copy(e.boundingBox).applyMatrix4(gi),this.boundingBox.union(ul)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gi),Ki.copy(e.boundingSphere).applyMatrix4(gi),this.boundingSphere.union(Ki)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(qi.geometry=this.geometry,qi.material=this.material,qi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ki.copy(this.boundingSphere),Ki.applyMatrix4(n),e.ray.intersectsSphere(Ki)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,gi),hl.multiplyMatrices(n,gi),qi.matrixWorld=hl,qi.raycast(e,Us);for(let a=0,o=Us.length;a<o;a++){const l=Us[a];l.instanceId=r,l.object=this,t.push(l)}Us.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ba(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new fc(new Float32Array(i*this.count),i,this.count,Ua,Xt));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=i*e;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class pc extends $t{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const er=new P,tr=new P,dl=new De,ji=new Oi,Ns=new en,Br=new P,fl=new P;class Ya extends rt{constructor(e=new tn,t=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)er.fromBufferAttribute(t,i-1),tr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=er.distanceTo(tr);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ns.copy(n.boundingSphere),Ns.applyMatrix4(i),Ns.radius+=r,e.ray.intersectsSphere(Ns)===!1)return;dl.copy(i).invert(),ji.copy(e.ray).applyMatrix4(dl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=h.getX(x),T=h.getX(x+1),S=Os(this,e,ji,l,f,T);S&&t.push(S)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),f=Os(this,e,ji,l,x,m);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=p,m=g-1;x<m;x+=c){const f=Os(this,e,ji,l,x,x+1);f&&t.push(f)}if(this.isLineLoop){const x=Os(this,e,ji,l,g-1,p);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Os(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(er.fromBufferAttribute(a,i),tr.fromBufferAttribute(a,r),t.distanceSqToSegment(er,tr,Br,fl)>n)return;Br.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Br);if(!(l<e.near||l>e.far))return{distance:l,point:fl.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,object:s}}const pl=new P,ml=new P;class ng extends Ya{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)pl.fromBufferAttribute(t,i),ml.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+pl.distanceTo(ml);e.setAttribute("lineDistance",new gn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ig extends Ya{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class mc extends $t{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gl=new De,Aa=new Oi,Fs=new en,Bs=new P;class sg extends rt{constructor(e=new tn,t=new mc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(i),Fs.radius+=r,e.ray.intersectsSphere(Fs)===!1)return;gl.copy(i).invert(),Aa.copy(e.ray).applyMatrix4(gl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=d,x=p;g<x;g++){const m=c.getX(g);Bs.fromBufferAttribute(u,m),_l(Bs,m,l,i,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=d,x=p;g<x;g++)Bs.fromBufferAttribute(u,g),_l(Bs,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function _l(s,e,t,n,i,r,a){const o=Aa.distanceSqToPoint(s);if(o<t){const l=new P;Aa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class Vt extends $t{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kl,this.normalScale=new Te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class nn extends Vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Te(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function zs(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function rg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ag(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function xl(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let l=0;l!==e;++l)i[a++]=s[o+l]}return i}function gc(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class cs{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class og extends cs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:co,endingEnd:co}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],l=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case ho:r=e,o=2*t-n;break;case uo:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ho:a=e,l=2*n-t;break;case uo:a=1,l=n+i[1]-i[0];break;default:a=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),x=g*g,m=x*g,f=-d*m+2*d*x-d*g,T=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-p)*m+(1.5+p)*x+.5*g,b=p*m-p*x;for(let D=0;D!==o;++D)r[D]=f*a[h+D]+T*a[c+D]+S*a[l+D]+b*a[u+D];return r}}class lg extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}}class cg extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class sn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zs(t,this.TimeBufferType),this.values=zs(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:zs(e.times,Array),values:zs(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new cg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lg(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new og(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case rs:t=this.InterpolantFactoryMethodLinear;break;case hr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return rs;case this.InterpolantFactoryMethodSmooth:return hr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(i!==void 0&&rg(i))for(let o=0,l=i.length;o!==l;++o){const c=i[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hr,r=e.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(i)l=!0;else{const u=o*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const x=t[u+g];if(x!==t[d+g]||x!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const u=o*n,d=a*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}sn.prototype.TimeBufferType=Float32Array;sn.prototype.ValueBufferType=Float32Array;sn.prototype.DefaultInterpolation=rs;class zi extends sn{constructor(e,t,n){super(e,t,n)}}zi.prototype.ValueTypeName="bool";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=ss;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;class _c extends sn{}_c.prototype.ValueTypeName="color";class Ii extends sn{}Ii.prototype.ValueTypeName="number";class hg extends cs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(i-t);let c=e*o;for(let h=c+o;c!==h;c+=4)Jt.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Ui extends sn{InterpolantFactoryMethodLinear(e){return new hg(this.times,this.values,this.getValueSize(),e)}}Ui.prototype.ValueTypeName="quaternion";Ui.prototype.InterpolantFactoryMethodSmooth=void 0;class ki extends sn{constructor(e,t,n){super(e,t,n)}}ki.prototype.ValueTypeName="string";ki.prototype.ValueBufferType=Array;ki.prototype.DefaultInterpolation=ss;ki.prototype.InterpolantFactoryMethodLinear=void 0;ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Ni extends sn{}Ni.prototype.ValueTypeName="vector";class ug{constructor(e="",t=-1,n=[],i=hh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Yt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(fg(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(sn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=ag(l);l=xl(l,1,h),c=xl(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Ii(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,x){if(p.length!==0){const m=[],f=[];gc(p,m,f,g),m.length!==0&&x.push(new u(d,m,f))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let x=0;x<d[g].morphTargets.length;x++)p[d[g].morphTargets[x]]=-1;for(const x in p){const m=[],f=[];for(let T=0;T!==d[g].morphTargets.length;++T){const S=d[g];m.push(S.time),f.push(S.morphTarget===x?1:0)}i.push(new Ii(".morphTargetInfluence["+x+"]",m,f))}l=p.length*a}else{const p=".bones["+t[u].name+"]";n(Ni,p+".position",d,"pos",i),n(Ui,p+".quaternion",d,"rot",i),n(Ni,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function dg(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Ni;case"color":return _c;case"quaternion":return Ui;case"bool":case"boolean":return zi;case"string":return ki}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function fg(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=dg(s.type);if(s.times===void 0){const t=[],n=[];gc(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Dn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class pg{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const mg=new pg;class Hi{constructor(e){this.manager=e!==void 0?e:mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Hi.DEFAULT_MATERIAL_NAME="__DEFAULT";const un={};class gg extends Error{constructor(e,t){super(e),this.response=t}}class xc extends Hi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Dn.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(un[e]!==void 0){un[e].push({onLoad:t,onProgress:n,onError:i});return}un[e]=[],un[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=un[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let x=0;const m=new ReadableStream({start(f){T();function T(){u.read().then(({done:S,value:b})=>{if(S)f.close();else{x+=b.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:p});for(let R=0,A=h.length;R<A;R++){const B=h[R];B.onProgress&&B.onProgress(D)}f.enqueue(b),T()}},S=>{f.error(S)})}}});return new Response(m)}else throw new gg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Dn.add(e,c);const h=un[e];delete un[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=un[e];if(h===void 0)throw this.manager.itemError(e),c;delete un[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _g extends Hi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Dn.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=as("img");function l(){h(),Dn.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class xg extends Hi{constructor(e){super(e)}load(e,t,n,i){const r=new mt,a=new _g(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class rr extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const zr=new De,vl=new P,Ml=new P;class qa{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Te(512,512),this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ha,this._frameExtents=new Te(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vl.setFromMatrixPosition(e.matrixWorld),t.position.copy(vl),Ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ml),t.updateMatrixWorld(),zr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(zr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class vg extends qa{constructor(){super(new bt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Li*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mg extends rr{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vg}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Sl=new De,Zi=new P,kr=new P;class Sg extends qa{constructor(){super(new bt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Te(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zi),kr.copy(n.position),kr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(kr),n.updateMatrixWorld(),i.makeTranslation(-Zi.x,-Zi.y,-Zi.z),Sl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl)}}class vc extends rr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Sg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yg extends qa{constructor(){super(new Ga(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mc extends rr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new yg}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Eg extends rr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ns{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Tg extends Hi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Dn.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Dn.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),Dn.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Dn.add(e,l),r.manager.itemStart(e)}}const Ka="\\[\\]\\.:\\/",bg=new RegExp("["+Ka+"]","g"),ja="[^"+Ka+"]",Ag="[^"+Ka.replace("\\.","")+"]",wg=/((?:WC+[\/:])*)/.source.replace("WC",ja),Rg=/(WCOD+)?/.source.replace("WCOD",Ag),Cg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ja),Pg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ja),Lg=new RegExp("^"+wg+Rg+Cg+Pg+"$"),Dg=["material","materials","bones","map"];class Ig{constructor(e,t,n){const i=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(bg,"")}static parseTrackName(e){const t=Lg.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Dg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[i];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=Ig;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const yl=new De;class Ug{constructor(e,t,n=0,i=1/0){this.ray=new Oi(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new ka,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return yl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(yl),this}intersectObject(e,t=!0,n=[]){return wa(e,this,n,t),n.sort(El),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)wa(e[i],this,n,t);return n.sort(El),n}}function El(s,e){return s.distance-e.distance}function wa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let a=0,o=r.length;a<o;a++)wa(r[a],e,t,!0)}}class Tl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(xt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ng extends $n{constructor(e,t){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pa);const bl={type:"change"},Za={type:"start"},Sc={type:"end"},ks=new Oi,Al=new Rn,Og=Math.cos(70*Yn.DEG2RAD),ut=new P,Ct=2*Math.PI,Je={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Hr=1e-6;class Fg extends Ng{constructor(e,t=null){super(e,t),this.state=Je.NONE,this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Mi.ROTATE,MIDDLE:Mi.DOLLY,RIGHT:Mi.PAN},this.touches={ONE:xi.ROTATE,TWO:xi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new P,this._lastQuaternion=new Jt,this._lastTargetPosition=new P,this._quat=new Jt().setFromUnitVectors(e.up,new P(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tl,this._sphericalDelta=new Tl,this._scale=1,this._panOffset=new P,this._rotateStart=new Te,this._rotateEnd=new Te,this._rotateDelta=new Te,this._panStart=new Te,this._panEnd=new Te,this._panDelta=new Te,this._dollyStart=new Te,this._dollyEnd=new Te,this._dollyDelta=new Te,this._dollyDirection=new P,this._mouse=new Te,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=zg.bind(this),this._onPointerDown=Bg.bind(this),this._onPointerUp=kg.bind(this),this._onContextMenu=qg.bind(this),this._onMouseWheel=Vg.bind(this),this._onKeyDown=Wg.bind(this),this._onTouchStart=Xg.bind(this),this._onTouchMove=Yg.bind(this),this._onMouseDown=Hg.bind(this),this._onMouseMove=Gg.bind(this),this._interceptControlDown=Kg.bind(this),this._interceptControlUp=jg.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(bl),this.update(),this.state=Je.NONE}update(e=null){const t=this.object.position;ut.copy(t).sub(this.target),ut.applyQuaternion(this._quat),this._spherical.setFromVector3(ut),this.autoRotate&&this.state===Je.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,i=this.maxAzimuthAngle;isFinite(n)&&isFinite(i)&&(n<-Math.PI?n+=Ct:n>Math.PI&&(n-=Ct),i<-Math.PI?i+=Ct:i>Math.PI&&(i-=Ct),n<=i?this._spherical.theta=Math.max(n,Math.min(i,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+i)/2?Math.max(n,this._spherical.theta):Math.min(i,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ut.setFromSpherical(this._spherical),ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ut.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new P(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new P(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ks.origin.copy(this.object.position),ks.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ks.direction))<Og?this.object.lookAt(this.target):(Al.setFromNormalAndCoplanarPoint(this.object.up,this.target),ks.intersectPlane(Al,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Hr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Hr||this._lastTargetPosition.distanceToSquared(this.target)>Hr?(this.dispatchEvent(bl),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Ct/60*this.autoRotateSpeed*e:Ct/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ut.setFromMatrixColumn(t,0),ut.multiplyScalar(-e),this._panOffset.add(ut)}_panUp(e,t){this.screenSpacePanning===!0?ut.setFromMatrixColumn(t,1):(ut.setFromMatrixColumn(t,0),ut.crossVectors(this.object.up,ut)),ut.multiplyScalar(e),this._panOffset.add(ut)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const i=this.object.position;ut.copy(i).sub(this.target);let r=ut.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),i=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=i/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Ct*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._rotateStart.set(n,i)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panStart.set(n,i)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(i,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Ct*this._rotateDelta.x/t.clientHeight),this._rotateUp(Ct*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),i=.5*(e.pageY+t.y);this._panEnd.set(n,i)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,i=e.pageY-t.y,r=Math.sqrt(n*n+i*i);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Te,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Bg(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function zg(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function kg(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Sc),this.state=Je.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Hg(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Mi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Je.DOLLY;break;case Mi.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Je.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Je.ROTATE}break;case Mi.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Je.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Je.PAN}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Za)}function Gg(s){switch(this.state){case Je.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Je.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Je.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function Vg(s){this.enabled===!1||this.enableZoom===!1||this.state!==Je.NONE||(s.preventDefault(),this.dispatchEvent(Za),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(Sc))}function Wg(s){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(s)}function Xg(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case xi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Je.TOUCH_ROTATE;break;case xi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Je.TOUCH_PAN;break;default:this.state=Je.NONE}break;case 2:switch(this.touches.TWO){case xi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Je.TOUCH_DOLLY_PAN;break;case xi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Je.TOUCH_DOLLY_ROTATE;break;default:this.state=Je.NONE}break;default:this.state=Je.NONE}this.state!==Je.NONE&&this.dispatchEvent(Za)}function Yg(s){switch(this._trackPointer(s),this.state){case Je.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Je.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Je.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Je.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Je.NONE}}function qg(s){this.enabled!==!1&&s.preventDefault()}function Kg(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jg(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function wl(s,e){if(e===uh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Sa||e===ql){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Sa)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class Zg extends Hi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new t_(t)}),this.register(function(t){return new n_(t)}),this.register(function(t){return new u_(t)}),this.register(function(t){return new d_(t)}),this.register(function(t){return new f_(t)}),this.register(function(t){return new s_(t)}),this.register(function(t){return new r_(t)}),this.register(function(t){return new a_(t)}),this.register(function(t){return new o_(t)}),this.register(function(t){return new e_(t)}),this.register(function(t){return new l_(t)}),this.register(function(t){return new i_(t)}),this.register(function(t){return new h_(t)}),this.register(function(t){return new c_(t)}),this.register(function(t){return new Jg(t)}),this.register(function(t){return new p_(t)}),this.register(function(t){return new m_(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const c=ns.extractUrlBase(e);a=ns.resolveURL(c,this.path)}else a=ns.extractUrlBase(e);this.manager.itemStart(e);const o=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new xc(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===yc){try{a[ze.KHR_BINARY_GLTF]=new g_(e)}catch(u){i&&i(u);return}r=JSON.parse(a[ze.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new C_(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ze.KHR_MATERIALS_UNLIT:a[u]=new Qg;break;case ze.KHR_DRACO_MESH_COMPRESSION:a[u]=new __(r,this.dracoLoader);break;case ze.KHR_TEXTURE_TRANSFORM:a[u]=new x_;break;case ze.KHR_MESH_QUANTIZATION:a[u]=new v_;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function $g(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ze={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Jg{constructor(e){this.parser=e,this.name=ze.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Pe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],vt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mc(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vc(h),c.distance=u;break;case"spot":c=new Mg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,fn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class Qg{constructor(){this.name=ze.KHR_MATERIALS_UNLIT}getMaterialType(){return Ln}extendParams(e,t,n){const i=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],vt),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Tt))}return Promise.all(i)}}class e_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class t_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Te(o,o)}return Promise.all(r)}}class n_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class i_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class s_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],vt)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Tt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class r_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class a_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(o[0],o[1],o[2],vt),Promise.all(r)}}class o_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class l_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(o[0],o[1],o[2],vt),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Tt)),Promise.all(r)}}class c_{constructor(e){this.parser=e,this.name=ze.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class h_{constructor(e){this.parser=e,this.name=ze.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:nn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class u_{constructor(e){this.parser=e,this.name=ze.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class d_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class f_{constructor(e){this.parser=e,this.name=ze.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class p_{constructor(e){this.name=ze.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}else return null}}class m_{constructor(e){this.name=ze.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ft.TRIANGLES&&c.mode!==Ft.TRIANGLE_STRIP&&c.mode!==Ft.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(h=>(l[c]=h,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const x=new De,m=new P,f=new Jt,T=new P(1,1,1),S=new tg(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&T.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,x.compose(m,f,T));for(const b in l)if(b==="_COLOR_0"){const D=l[b];S.instanceColor=new ba(D.array,D.itemSize,D.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);rt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),p.push(S)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const yc="glTF",$i=12,Rl={JSON:1313821514,BIN:5130562};class g_{constructor(e){this.name=ze.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,$i),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==yc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-$i,r=new DataView(e,$i);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const l=r.getUint32(a,!0);if(a+=4,l===Rl.JSON){const c=new Uint8Array(e,$i+a,o);this.content=n.decode(c)}else if(l===Rl.BIN){const c=$i+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class __{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ze.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const h in a){const u=Ra[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=Ra[h]||h.toLowerCase();if(a[h]!==void 0){const d=n.accessors[e.attributes[h]],p=bi[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const g in p.attributes){const x=p.attributes[g],m=l[g];m!==void 0&&(x.normalized=m)}u(p)},o,c,vt,d)})})}}class x_{constructor(){this.name=ze.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class v_{constructor(){this.name=ze.KHR_MESH_QUANTIZATION}}class Ec extends cs{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,h=i-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,x=g-c,m=-2*p+3*d,f=p-d,T=1-m,S=f-d+u;for(let b=0;b!==o;b++){const D=a[x+b+o],R=a[x+b+l]*h,A=a[g+b+o],B=a[g+b]*h;r[b]=T*D+S*R+m*A+f*B}return r}}const M_=new Jt;class S_ extends Ec{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return M_.fromArray(r).normalize().toArray(r),r}}const Ft={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},bi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cl={9728:At,9729:Ut,9984:Fl,9985:Hs,9986:Ji,9987:pn},Pl={33071:Pn,33648:js,10497:Ri},Gr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ra={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},wn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},y_={CUBICSPLINE:void 0,LINEAR:rs,STEP:ss},Vr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function E_(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Vt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:_n})),s.DefaultMaterial}function Vn(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function fn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function T_(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function b_(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function A_(s){let e;const t=s.extensions&&s.extensions[ze.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Wr(t.attributes):e=s.indices+":"+Wr(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Wr(s.targets[n]);return e}function Wr(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ca(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function w_(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const R_=new De;class C_{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new $g,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const l=o.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new xg(this.options.manager):this.textureLoader=new Tg(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new xc(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return Vn(r,o,i),fn(o,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){for(const l of o.scenes)l.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,h]of a.children.entries())r(h,o.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ze.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(ns.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Gr[i.type],o=bi[i.componentType],l=i.normalized===!0,c=new o(i.count*a);return Promise.resolve(new Rt(c,a,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],l=Gr[i.type],c=bi[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let x,m;if(p&&p!==u){const f=Math.floor(d/p),T="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let S=t.cache.get(T);S||(x=new c(o,f*p,i.count*p/h),S=new Zm(x,p/h),t.cache.add(T,S)),m=new Wa(S,l,d%p/h,g)}else o===null?x=new c(i.count*l):x=new c(o,d,i.count*l),m=new Rt(x,l,g);if(i.sparse!==void 0){const f=Gr.SCALAR,T=bi[i.sparse.indices.componentType],S=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,D=new T(a[1],S,i.sparse.count*f),R=new c(a[2],b,i.sparse.count*l);o!==null&&(m=new Rt(m.array.slice(),m.itemSize,m.normalized));for(let A=0,B=D.length;A<B;A++){const E=D[A];if(m.setX(E,R[A*l]),l>=2&&m.setY(E,R[A*l+1]),l>=3&&m.setZ(E,R[A*l+2]),l>=4&&m.setW(E,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Cl[d.magFilter]||Ut,h.minFilter=Cl[d.minFilter]||pn,h.wrapS=Pl[d.wrapS]||Ri,h.wrapT=Pl[d.wrapT]||Ri,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:a.mimeType});return l=o.createObjectURL(d),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){const m=new mt(x);m.needsUpdate=!0,d(m)}),t.load(ns.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&o.revokeObjectURL(l),fn(u,a),u.userData.mimeType=a.mimeType||w_(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[ze.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[ze.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=r.associations.get(a);a=r.extensions[ze.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,l)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new mc,$t.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new pc,$t.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),r&&(l.vertexColors=!0),a&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Vt}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},l=r.extensions||{},c=[];if(l[ze.KHR_MATERIALS_UNLIT]){const u=i[ze.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),c.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Pe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],vt),o.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",u.baseColorTexture,Tt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=jt);const h=r.alphaMode||Vr.OPAQUE;if(h===Vr.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Vr.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Ln&&(c.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Te(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Ln&&(c.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Ln){const u=r.emissiveFactor;o.emissive=new Pe().setRGB(u[0],u[1],u[2],vt)}return r.emissiveTexture!==void 0&&a!==Ln&&c.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Tt)),Promise.all(c).then(function(){const u=new a(o);return r.name&&(u.name=r.name),fn(u,r),t.associations.set(u,{materials:e}),r.extensions&&Vn(i,u,r),u})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[ze.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return Ll(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],h=A_(c),u=i[h];if(u)a.push(u.promise);else{let d;c.extensions&&c.extensions[ze.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ll(new tn,c,t),i[h]={primitive:c,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const h=a[l].material===void 0?E_(this.cache):this.getDependency("material",a[l].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const x=h[p],m=a[p];let f;const T=c[p];if(m.mode===Ft.TRIANGLES||m.mode===Ft.TRIANGLE_STRIP||m.mode===Ft.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Jm(x,T):new et(x,T),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===Ft.TRIANGLE_STRIP?f.geometry=wl(f.geometry,ql):m.mode===Ft.TRIANGLE_FAN&&(f.geometry=wl(f.geometry,Sa));else if(m.mode===Ft.LINES)f=new ng(x,T);else if(m.mode===Ft.LINE_STRIP)f=new Ya(x,T);else if(m.mode===Ft.LINE_LOOP)f=new ig(x,T);else if(m.mode===Ft.POINTS)f=new sg(x,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&b_(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),fn(f,r),m.extensions&&Vn(i,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Vn(i,u[0],r),u[0];const d=new Kn;r.extensions&&Vn(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new bt(Yn.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Ga(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),fn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],l=[];for(let c=0,h=a.length;c<h;c++){const u=a[c];if(u){o.push(u);const d=new De;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Xa(o,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],g=i.samplers[p.sampler],x=p.target,m=x.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,T=i.parameters!==void 0?i.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",T)),c.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],x=u[3],m=u[4],f=[];for(let T=0,S=d.length;T<S;T++){const b=d[T],D=p[T],R=g[T],A=x[T],B=m[T];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const E=n._createAnimationTracks(b,D,R,A,B);if(E)for(let M=0;M<E.length;M++)f.push(E[M])}return new ug(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=i.weights.length;l<c;l++)o.morphTargetInfluences[l]=i.weights[l]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let c=0,h=o.length;c<h;c++)a.push(n.getDependency("node",o[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,R_)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let h;if(r.isBone===!0?h=new dc:c.length>1?h=new Kn:c.length===1?h=c[0]:h=new rt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=a),fn(h,r),r.extensions&&Vn(n,h,r),r.matrix!==void 0){const u=new De;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Kn;n.name&&(r.name=i.createUniqueName(n.name)),fn(r,n),n.extensions&&Vn(t,r,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(i.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of i.associations)(d instanceof $t||d instanceof mt)&&u.set(d,p);return h.traverse(d=>{const p=i.associations.get(d);p!=null&&u.set(d,p)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,l=[];wn[r.path]===wn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(o);let c;switch(wn[r.path]){case wn.weights:c=Ii;break;case wn.rotation:c=Ui;break;case wn.position:case wn.scale:c=Ni;break;default:switch(n.itemSize){case 1:c=Ii;break;case 2:case 3:default:c=Ni;break}break}const h=i.interpolation!==void 0?y_[i.interpolation]:rs,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+wn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ca(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Ui?S_:Ec;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function P_(s,e,t){const n=e.attributes,i=new vn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),o.normalized){const h=Ca(bi[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new P,l=new P;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const x=Ca(bi[d.componentType]);l.multiplyScalar(x)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new en;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Ll(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(l){s.setAttribute(o,l)})}for(const a in n){const o=Ra[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Ve.workingColorSpace!==vt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Ve.workingColorSpace}" not supported.`),fn(s,e),P_(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?T_(s,e.targets,t):s})}class L_ extends uc{constructor(){super();const e=new Fi;e.deleteAttribute("uv");const t=new Vt({side:wt}),n=new Vt,i=new vc(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new et(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new et(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new et(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const l=new et(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new et(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new et(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new et(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new et(e,_i(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new et(e,_i(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new et(e,_i(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const x=new et(e,_i(43));x.position.set(-.462,8.89,14.52),x.scale.set(4.38,5.441,.088),this.add(x);const m=new et(e,_i(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new et(e,_i(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function _i(s){const e=new Ln;return e.color.setScalar(s),e}document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("three-js-container"),e=new uc,t=new bt(75,s.clientWidth/s.clientHeight,.1,100),n=new jm({antialias:!0});n.setSize(s.clientWidth,s.clientHeight),n.setPixelRatio(s.devicePixelRatio),n.shadowMap.enabled=!0,n.toneMapping=Nl,n.toneMappingExposure=1,n.shadowMap.enabled=!0,n.shadowMap.type=Il,s.appendChild(n.domElement);const i=new L_,r=new Ea(n);e.background=new Pe(12303291),e.environment=r.fromScene(i).texture,i.receiveShadow=!0,i.castShadow=!0;const a=new Fg(t,n.domElement);a.enableDamping=!0,a.dampingFactor=.25,a.enableZoom=!0;const o=new ls(100,50),l=new Vt({color:16381678,roughness:.8,metalness:0}),c=new et(o,l);c.rotation.x=-Math.PI/2,c.position.y=-2,c.receiveShadow=!0,e.add(c);const h=new Eg(16777215,.8);h.intensity=.7,e.add(h);const u=new Mc(16777215,1);u.position.set(5,10,7.5),u.intensity=1.9,u.castShadow=!0,e.add(u),u.shadow.mapSize.width=2048,u.shadow.mapSize.height=2048,u.shadow.camera.near=.5,u.shadow.camera.far=50,u.shadow.camera.left=-10,u.shadow.camera.right=10,u.shadow.camera.top=10,u.shadow.camera.bottom=-10,u.shadow.bias=-.002,t.position.set(0,-.2,3),a.update();let d,p=null,g=null,x=null,m=null,f=null,T=null,S=null,b=null,D="14'x20'";const R={front:null,rear:null,left:null,right:null};let A={front:!1,rear:!1,left:!1,right:!1},B={front:!1,rear:!1,left:!1,right:!1};const E={"10'x10'":"10' x 10'.glb","10'x14'":"10' x 14'.glb","14'x14'":"14' x 14'.glb","14'x20'":"14' x 20'.glb"};let M=[],C=[];const q=new Zg;function G(O){d&&(e.remove(d),d=null),document.querySelectorAll(".side-btn").forEach(ee=>{ee.classList.remove("active")}),document.querySelectorAll(".zip-btn").forEach(ee=>{ee.classList.remove("active")});const H=E[O];q.load(H,ee=>{d=ee.scene,d.position.set(0,-2,0),d.scale.set(1,1,1),e.add(d),d.traverse(y=>{y.isMesh&&(y.receiveShadow=!0,y.castShadow=!0,(y.name&&y.name.match(/^3DGeom-3/)&&O=="14'x20'"||y.name&&y.name.match(/^3DGeom-3/)&&O=="14'x14'"||y.name&&y.name.match(/^3DGeom-1/)&&O=="10'x14'"||y.name&&y.name.match(/^3DGeom-3/)&&O=="10'x10'")&&M.push(y))}),ve(),nt(),Ee(d),Xe(),w(d),Q(d)},ee=>console.log(`${ee.loaded/ee.total*100}% loaded`),ee=>console.error("An error occurred while loading the model:",ee))}G(D);const J=document.getElementById("rotationControl"),$=document.getElementById("rotationValue");J.addEventListener("input",O=>{const H=O.target.value;$.textContent=`${H}°`;const ee=Yn.degToRad(H);M.forEach(y=>{y.rotation.z=ee})}),document.getElementById("zipControl").addEventListener("input",O=>{const H=document.getElementById("zipValue"),ee=O.target.value;H.textContent=`${ee}%`;const y=Yn.mapLinear(ee,0,100,0,1);let _=null;R.front?_=R.front:R.rear?_=R.rear:R.left?_=R.left:R.right&&(_=R.right);let N=123;_&&_.includes("Zip 4.glb")?N=140:_&&_.includes("Zip 3.glb")&&(N=180);const W=C.find(F=>F.name.includes("zip-18"));C.forEach(F=>{if(F!==W){const ue=(W.userData.index-F.userData.index)/W.userData.index*y*N;F.position.z=F.userData.initialZ+ue}else F.position.z=F.userData.initialZ})}),document.querySelectorAll(".size-btn").forEach(O=>{O.addEventListener("click",H=>{document.querySelectorAll(".size-btn").forEach(ee=>ee.classList.remove("active")),O.classList.add("active"),D=O.textContent.trim(),G(D)})}),document.querySelectorAll(".color-btn").forEach(O=>{O.addEventListener("click",H=>{if(d){let F=function(re){re.traverse(oe=>{oe.isMesh&&N!="default"&&(oe.material=W)})},V=function(re){re.traverse(oe=>{oe.isMesh&&N!="default"&&oe.name.includes("c8c8c8")&&(oe.material=W)})},ue=function(re){re.traverse(oe=>{oe.isMesh&&N!="default"&&oe.name.includes("7e7e7e")&&(oe.material=W)})};var ee=F,y=V,_=ue;const N=H.target.classList.contains("black")?"black":H.target.classList.contains("white")?"white":"black";let W;(N==="black"||N==="white")&&(W=new Vt({color:N==="black"?2829099:16777215,metalness:.9,roughness:.5})),F(d),p&&V(p),g&&V(g),x&&V(x),m&&V(m),f&&ue(f),T&&ue(T),S&&ue(S),b&&ue(b)}})});function Q(O){if(O){let H=new Vt({color:2829099,metalness:.9,roughness:.5});O.traverse(ee=>{ee.isMesh&&(ee.material=H)})}}function X(O){if(O){let H=new Vt({color:2829099,metalness:.9,roughness:.5});O.traverse(ee=>{ee.isMesh&&ee.name.includes("c8c8c8")&&(ee.material=H)})}}function he(O){if(O){let H=new Vt({color:2829099,metalness:.9,roughness:.5});O.traverse(ee=>{ee.isMesh&&ee.name.includes("7e7e7e")&&(ee.material=H)})}}function de(O,H,ee,y,_){const N=Date.now(),W=Yn.degToRad(H),F=Yn.degToRad(ee);function V(){const ue=Date.now()-N,re=Math.min(ue/y,1);O.rotation.z=W+(F-W)*re,re<1?requestAnimationFrame(V):_&&_()}V()}function ve(){M.forEach(O=>{const H=Yn.radToDeg(O.rotation.z);Math.abs(H-90)<1?de(O,90,0,2500):de(O,0,90,2500,()=>{de(O,90,0,2500)})})}const Be=new Ug,Ge=new Te,Y={};let te=null,fe={};function pe(O){const H=s.getBoundingClientRect();Ge.x=(O.clientX-H.left)/H.width*2-1,Ge.y=-((O.clientY-H.top)/H.height)*2+1,Be.setFromCamera(Ge,t);const ee=Be.intersectObjects(Object.values(fe),!0);if(te&&(te.material.copy(Y[te.uuid]),te=null),ee.length>0){const y=ee[0].object;s.style.cursor="pointer",Y[y.uuid]||(Y[y.uuid]=y.material.clone()),y.material=new Vt({color:16776960,emissive:16776960,emissiveIntensity:1,metalness:.6,roughness:.4});const _=y.name||"Unnamed Part",N=document.getElementById("name-display");N.textContent=`Selected: ${_}`,te=y}else{const y=document.getElementById("name-display");y.textContent=""}}s.addEventListener("click",pe);function Ee(O){fe={},O.traverse(H=>{H.receiveShadow=!0,H.castShadow=!0,H.isMesh&&H.material&&H.material.color&&(fe[H.uuid]=H)})}function Re(O,H){let ee,y=[];O==="front"?ee=p:O==="rear"?ee=g:O==="left"?ee=x:O==="right"&&(ee=m),ee?(e.remove(ee),O==="front"&&(p=null),O==="rear"&&(g=null),O==="left"&&(x=null),O==="right"&&(m=null),A[O]=!1):q.load(H,_=>{const N=_.scene;N.scale.set(1,1,1),Oe(N,O),e.add(N),N.traverse(F=>{if(F.isMesh&&F.material){const V=new P;F.getWorldPosition(V),F.userData.worldY=V.y,y.push(F)}});let W=y.slice();W.sort((F,V)=>F.userData.worldY-V.userData.worldY),W.forEach((F,V)=>{let ue="UnknownMaterial";F.material.color?ue=`Color-${F.material.color.getHexString()}`:F.material.type&&(ue=`MaterialType-${F.material.type}`),F.name=`${ue}-glass-${V}`,F.userData.index=V+1,F.userData.initialZ=F.position.z}),O==="front"&&(p=N),O==="rear"&&(g=N),O==="left"&&(x=N),O==="right"&&(m=N),A[O]=!0,Ee(N),X(N)})}function Oe(O,H){D==="14'x20'"?(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-4.11),H==="left"&&(O.position.set(-2.85,-2,-2.18),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(2.85,-2,-2.18),O.rotation.y=-Math.PI/2)):D==="14'x14'"?(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-4.11),H==="left"&&(O.position.set(-1.95,-2,-2.18),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(1.95,-2,-2.18),O.rotation.y=-Math.PI/2)):D==="10'x14'"?(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-2.82),H==="left"&&(O.position.set(-1.95,-2,-1.55),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(1.95,-2,-1.55),O.rotation.y=-Math.PI/2)):D==="10'x10'"&&(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-2.82),H==="left"&&(O.position.set(-1.32,-2,-1.55),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(1.32,-2,-1.55),O.rotation.y=-Math.PI/2))}function nt(){Object.keys(A).forEach(O=>{if(A[O]){let H;D==="14'x20'"?H={front:"Sliding Glass (6).glb",rear:"Sliding Glass (6).glb",left:"Sliding Glass (4).glb",right:"Sliding Glass (4).glb"}:D==="14'x14'"?H={front:"Sliding Glass (4).glb",rear:"Sliding Glass (4).glb",left:"Sliding Glass (4).glb",right:"Sliding Glass (4).glb"}:D==="10'x14'"?H={front:"Sliding Glass (4).glb",rear:"Sliding Glass (4).glb",left:"Sliding Glass (3).glb",right:"Sliding Glass (3).glb"}:D==="10'x10'"&&(H={front:"Sliding Glass (3).glb",rear:"Sliding Glass (3).glb",left:"Sliding Glass (3).glb",right:"Sliding Glass (3).glb"}),H[O]&&Re(O,H[O])}})}document.querySelectorAll(".side-btn").forEach(O=>{O.addEventListener("click",H=>{const ee=H.target.getAttribute("data-side");O.classList.toggle("active");let y;D==="14'x20'"?y={front:"Sliding Glass (6).glb",rear:"Sliding Glass (6).glb",left:"Sliding Glass (4).glb",right:"Sliding Glass (4).glb"}:D==="14'x14'"?y={front:"Sliding Glass (4).glb",rear:"Sliding Glass (4).glb",left:"Sliding Glass (4).glb",right:"Sliding Glass (4).glb"}:D==="10'x14'"?y={front:"Sliding Glass (4).glb",rear:"Sliding Glass (4).glb",left:"Sliding Glass (3).glb",right:"Sliding Glass (3).glb"}:D==="10'x10'"&&(y={front:"Sliding Glass (3).glb",rear:"Sliding Glass (3).glb",left:"Sliding Glass (3).glb",right:"Sliding Glass (3).glb"}),y[ee]&&Re(ee,y[ee])})});function w(O){fe={},O.traverse(H=>{H.isMesh&&H.material&&H.material.color&&(fe[H.uuid]=H)})}function it(O,H){let ee;O==="front"?ee=f:O==="rear"?ee=T:O==="left"?ee=S:O==="right"&&(ee=b),ee?(e.remove(ee),O==="front"&&(f=null),O==="rear"&&(T=null),O==="left"&&(S=null),O==="right"&&(b=null),B[O]=!1):q.load(H,y=>{const _=y.scene;_.scale.set(1,1,1),We(_,O),e.add(_);let N=[];_.traverse(F=>{if(F.receiveShadow=!0,F.castShadow=!0,F.isMesh&&F.material){const V=new P;F.getWorldPosition(V),F.userData.worldY=V.y,N.push(F)}});let W=N.slice();W.sort((F,V)=>F.userData.worldY-V.userData.worldY),W.forEach((F,V)=>{let ue="UnknownMaterial";F.material.color?ue=`Color-${F.material.color.getHexString()}`:F.material.type&&(ue=`MaterialType-${F.material.type}`),F.name=`${ue}-zip-${V}`,F.userData.index=V+1,F.userData.initialZ=F.position.z,F.name.includes("7e7e7e")||C.push(F)}),R[O]=H,O==="front"&&(f=_),O==="rear"&&(T=_),O==="left"&&(S=_),O==="right"&&(b=_),B[O]=!0,w(_),he(_)})}function We(O,H){D==="14'x20'"?(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-4.11),H==="left"&&(O.position.set(-2.85,-2,-2.18),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(2.85,-2,-2.18),O.rotation.y=-Math.PI/2)):D==="14'x14'"?(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-4.11),H==="left"&&(O.position.set(-1.95,-2,-2.18),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(1.95,-2,-2.18),O.rotation.y=-Math.PI/2)):D==="10'x14'"?(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-2.82),H==="left"&&(O.position.set(-1.95,-2,-1.55),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(1.95,-2,-1.55),O.rotation.y=-Math.PI/2)):D==="10'x10'"&&(H==="front"&&O.position.set(0,-2,0),H==="rear"&&O.position.set(0,-2,-2.82),H==="left"&&(O.position.set(-1.32,-2,-1.55),O.rotation.y=Math.PI/2),H==="right"&&(O.position.set(1.32,-2,-1.55),O.rotation.y=-Math.PI/2))}function Xe(){Object.keys(B).forEach(O=>{if(B[O]){let H;D==="14'x20'"?H={front:"Zip 6.glb",rear:"Zip 6.glb",left:"Zip 4.glb",right:"Zip 4.glb"}:D==="14'x14'"?H={front:"Zip 4.glb",rear:"Zip 4.glb",left:"Zip 4.glb",right:"Zip 4.glb"}:D==="10'x14'"?H={front:"Zip 4.glb",rear:"Zip 4.glb",left:"Zip 3.glb",right:"Zip 3.glb"}:D==="10'x10'"&&(H={front:"Zip 3.glb",rear:"Zip 3.glb",left:"Zip 3.glb",right:"Zip 3.glb"}),H[O]&&it(O,H[O])}})}document.querySelectorAll(".zip-btn").forEach(O=>{O.addEventListener("click",H=>{const ee=H.target.getAttribute("data-zip");let y;O.classList.toggle("active"),D==="14'x20'"?y={front:"Zip 6.glb",rear:"Zip 6.glb",left:"Zip 4.glb",right:"Zip 4.glb"}:D==="14'x14'"?y={front:"Zip 4.glb",rear:"Zip 4.glb",left:"Zip 4.glb",right:"Zip 4.glb"}:D==="10'x14'"?y={front:"Zip 4.glb",rear:"Zip 4.glb",left:"Zip 3.glb",right:"Zip 3.glb"}:D==="10'x10'"&&(y={front:"Zip 3.glb",rear:"Zip 3.glb",left:"Zip 3.glb",right:"Zip 3.glb"}),y[ee]&&it(ee,y[ee])})}),window.addEventListener("resize",()=>{t.aspect=s.clientWidth/s.clientHeight,t.updateProjectionMatrix(),n.setSize(s.clientWidth,s.clientHeight)});function Me(){requestAnimationFrame(Me),a.update(),n.render(e,t)}Me()});
