import{s as d,o as a,c as l,j as t,t as p,a1 as m,a2 as b,k as f,e as k,F as r,a as v,E as C,I as i,a3 as x,a4 as $}from"./chunks/framework.B1vZCx97.js";const S={key:0},T={__name:"ButtonCounter",setup(n){const e=d(0);let s,o=!1;function u(){document.getElementById("add").click(),s=setTimeout(u,1e3)}function _(){o||(o=!0,u())}function g(){clearTimeout(s),o=!1}return(Z,c)=>(a(),l(r,null,[t("div",null,[t("h1",null,p(e.value),1)]),t("button",{id:"add",onClick:c[0]||(c[0]=h=>e.value++),class:"VPButton"},"Add"),e.value>10?(a(),l("div",S,[m(t("button",{onClick:c[1]||(c[1]=h=>_())},"Start",512),[[b,!f(o)]]),m(t("button",{onClick:c[2]||(c[2]=h=>g())},"Stop",512),[[b,!1]])])):k("",!0)],64))}},y=t("span",null,"   ",-1),A={__name:"FlashCard",props:["qn","an"],setup(n){const e=d(!0);return(s,o)=>(a(),l(r,null,[t("button",{class:"button",onClick:o[0]||(o[0]=u=>e.value=!e.value)},p(e.value?n.qn:n.an),1),v(),y],64))}},q={__name:"FlashCardList",setup(n){let e=new Map,s=[...Array(26).keys()].map(o=>String.fromCharCode(o+97));for(let o in s)e.set(s[o].toUpperCase(),s[o]);return(o,u)=>(a(!0),l(r,null,C(f(e),_=>(a(),l("span",null,[i(A,{qn:_[0],an:_[1]},null,8,["qn","an"])]))),256))}},V=["src"],P=t("span",null,"   ",-1),I={__name:"FlashCardImg",props:["img1","img2"],setup(n){const e=d(!0);return(s,o)=>(a(),l(r,null,[t("button",{class:"buttonImg",onClick:o[0]||(o[0]=u=>e.value=!e.value)},[t("img",{src:e.value?n.img1:n.img2,alt:" "},null,8,V)]),v(),P],64))}},N=t("br",null,null,-1),B={class:"bigger"},D={__name:"URLDecode",setup(n){const e=d("A%20b");return(s,o)=>(a(),l(r,null,[m(t("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=u=>e.value=u)},null,512),[[x,e.value]]),N,t("span",B,p(decodeURI(e.value)),1)],64))}},F=$('<h1 id="about" tabindex="-1">About <a class="header-anchor" href="#about" aria-label="Permalink to &quot;About&quot;">​</a></h1><p><img src="https://picsum.photos/id/279/800/600?grayscale" alt="alt"></p><h2 id="tools" tabindex="-1">Tools <a class="header-anchor" href="#tools" aria-label="Permalink to &quot;Tools&quot;">​</a></h2>',3),U={class:"info custom-block"},E=t("p",{class:"custom-block-title"},"Count",-1),L={class:"info custom-block"},R=t("p",{class:"custom-block-title"},"A-Z",-1),j={class:"info custom-block"},w=t("p",{class:"custom-block-title"},"-",-1),M={class:"info custom-block"},O=t("p",{class:"custom-block-title"},"URL Decode",-1),G=JSON.parse('{"title":"About","description":"","frontmatter":{"layout":"home","hero":{"name":"Stage Project","text":"Stage Site"}},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),J={name:"index.md"},H=Object.assign(J,{setup(n){return(e,s)=>(a(),l("div",null,[F,t("div",U,[E,i(T)]),t("div",L,[R,i(q)]),t("div",j,[w,i(I,{img1:"https://picsum.photos/id/279/400/300?grayscale",img2:"https://picsum.photos/id/185/400/300?grayscale"})]),t("div",M,[O,i(D)])]))}});export{G as __pageData,H as default};
