import{a as h,A as v,o as a,c,F as _,b,d as t,e as r,_ as w,f as C,r as O,w as V,t as u,u as l,g as S}from"./index-d3ff3c69.js";var j={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"}}]},name:"clock-circle",theme:"outlined"};const y=j;function d(s){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(n);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable}))),o.forEach(function(i){x(s,i,n[i])})}return s}function x(s,e,n){return e in s?Object.defineProperty(s,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):s[e]=n,s}var g=function(e,n){var o=d({},e,n.attrs);return h(v,d({},o,{icon:y}),null)};g.displayName="ClockCircleOutlined";g.inheritAttrs=!1;const k=g,p={title:"LynnBox Music - 仿网易云移动端页面",publishTime:"2023-9-18 11:45",categories:"学习",tags:["前端","Vue","仿网易云移动端"]},B=b('<h2>简介</h2><p>这个项目源自学校工作室招新的最终考核作业（要求是仅使用原生JS完成所有功能，且不得使用任何框架和工具）。后面决定边学习边重构，方便练手，于是就有了这个项目。</p><p>涉及的技术栈如下： <strong><a href="https://cn.vitejs.dev/">Vite</a></strong>、<strong><a href="https://cn.vuejs.org/">Vue 3</a></strong>、<strong><a href="https://router.vuejs.org/zh/">Vue Router</a></strong>、<strong><a href="https://pinia.vuejs.org/zh/">Pinia</a></strong>、<strong><a href="https://element-plus.org/zh-CN/">Element Plus</a></strong>、<strong><a href="https://www.axios-http.cn/">Axios</a></strong>、<strong><a href="https://swiper.com.cn/">Swiper.js</a></strong>、<strong><a href="https://www.sass.hk/">SCSS</a></strong></p><h2>运行</h2><p>在终端依次执行以下代码以热载该项目</p>',5),P=t("pre",null,[t("code",{class:"language-sh","v-pre":"true"},`npm install
npm run dev
`)],-1),A=t("h2",null,"遇到的一些问题及解决方法",-1),N=t("h3",null,"1.Swiper.js注册的Swiper Element在Vue中渲染时报警告",-1),z=t("p",null,[r("如图： "),t("img",{src:"https://s2.loli.net/2023/09/13/dIHFSBXulNQ1hvO.png",alt:"problem"})],-1),E=t("p",null,[r("这是因为Vue 会"),t("strong",null,"优先把非原生标签当作Vue组件解析"),r("，Swiper注册的自定义元素swiper-container和swiper-slide显然不是Vue组件，所以报了解析失败的警告。")],-1),D=t("p",null,[r("解决方法是添加相应Vue的构建配置，使用"),t("strong",null,"compileOptions.isCustomElement"),r("（警告信息里面已经提到）告诉Vue它们是自定义元素而非Vue组件。")],-1),T=t("pre",null,[t("code",{class:"language-js","v-pre":"true"},`//vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => {
            return tag.startsWith('swiper-')
            /*
            这样写便于以后添加多个自定义元素配置，例如：
            //将所有以“my-”开头或以“icon”结尾或包含“custom”的标签视为自定义元素
            return tag.startsWith('my-')
              || tag.endsWith('icon')
              || tag.includes('custom')
            */
          },
        },
      },
    }),
  ],
}
`)],-1),I=t("p",null,[r("资料："),t("a",{href:"https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue"},"Vue与Web Components")],-1);function M(s,e){return a(),c(_,null,[B,P,A,N,z,E,D,T,I],64)}const m={render:M};m.__hmrId="C:/Users/a/Desktop/MyBlog/src/assets/posts/lynnbox-music-readme.md";const W={class:"blog-article markdown-body"},$={class:"article-title"},F={class:"sub-info"},L={class:"article-tags"},H={class:"tag"},R={class:"publish-time"},J={__name:"BlogArticle",setup(s){const e=C(p.publishTime);return(n,o)=>{const i=O("highlight");return V((a(),c("div",W,[t("h1",$,[r(u(l(p).title)+" ",1),t("div",F,[t("span",L,[(a(!0),c(_,null,S(l(p).tags,f=>(a(),c("span",H,u(f),1))),256))]),t("span",R,[h(l(k)),r(" "+u(l(e)),1)])])]),h(l(m))])),[[i]])}}},U=w(J,[["__scopeId","data-v-52906572"]]);export{U as default};
