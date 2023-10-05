import{o,d as r,F as p,ah as u,k as e,L as t}from"./index-8df6cb24.js";const f={title:"LynnBox Music - 仿网易云移动端页面",publishTime:"2023-09-18 11:45",category:"学习",tags:["前端","Vue","仿网易云移动端"],id:"001"},S=`<blockquote>
<p><em>测试用的markdown，随便扒了个项目里的过来。。</em></p>
</blockquote>
<h2>简介</h2>
<p>这个项目源自学校工作室招新的最终考核作业（要求是仅使用原生JS完成所有功能，且不得使用任何框架和工具）。后面决定边学习边重构，方便练手，于是就有了这个项目。</p>
<p>涉及的技术栈如下：
<strong><a href="https://cn.vitejs.dev/">Vite</a></strong>、<strong><a href="https://cn.vuejs.org/">Vue 3</a></strong>、<strong><a href="https://router.vuejs.org/zh/">Vue Router</a></strong>、<strong><a href="https://pinia.vuejs.org/zh/">Pinia</a></strong>、<strong><a href="https://element-plus.org/zh-CN/">Element Plus</a></strong>、<strong><a href="https://www.axios-http.cn/">Axios</a></strong>、<strong><a href="https://swiper.com.cn/">Swiper.js</a></strong>、<strong><a href="https://www.sass.hk/">SCSS</a></strong></p>
<h2>运行</h2>
<p>在终端依次执行以下代码以热载该项目</p>
<pre><code class="language-sh">npm install
npm run dev
</code></pre>
<h2>遇到的一些问题及解决方法</h2>
<h3>1.Swiper.js注册的Swiper Element在Vue中渲染时报警告</h3>
<p>如图：
<img src="https://s2.loli.net/2023/09/13/dIHFSBXulNQ1hvO.png" alt="problem"></p>
<p>这是因为Vue 会<strong>优先把非原生标签当作Vue组件解析</strong>，Swiper注册的自定义元素swiper-container和swiper-slide显然不是Vue组件，所以报了解析失败的警告。</p>
<p>解决方法是添加相应Vue的构建配置，使用<strong>compileOptions.isCustomElement</strong>（警告信息里面已经提到）告诉Vue它们是自定义元素而非Vue组件。</p>
<pre><code class="language-js">//vite.config.js
import vue from '@vitejs/plugin-vue'

export default {
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag =&gt; {
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
</code></pre>
<p>相关资料：<a href="https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue">Vue与Web Components</a></p>
`,_=[{level:"2",content:"&#x7B80;&#x4ECB;"},{level:"2",content:"&#x8FD0;&#x884C;"},{level:"2",content:"&#x9047;&#x5230;&#x7684;&#x4E00;&#x4E9B;&#x95EE;&#x9898;&#x53CA;&#x89E3;&#x51B3;&#x65B9;&#x6CD5;"},{level:"3",content:"1.Swiper.js&#x6CE8;&#x518C;&#x7684;Swiper Element&#x5728;Vue&#x4E2D;&#x6E32;&#x67D3;&#x65F6;&#x62A5;&#x8B66;&#x544A;"}],i=u('<blockquote><p><em>测试用的markdown，随便扒了个项目里的过来。。</em></p></blockquote><h2>简介</h2><p>这个项目源自学校工作室招新的最终考核作业（要求是仅使用原生JS完成所有功能，且不得使用任何框架和工具）。后面决定边学习边重构，方便练手，于是就有了这个项目。</p><p>涉及的技术栈如下： <strong><a href="https://cn.vitejs.dev/">Vite</a></strong>、<strong><a href="https://cn.vuejs.org/">Vue 3</a></strong>、<strong><a href="https://router.vuejs.org/zh/">Vue Router</a></strong>、<strong><a href="https://pinia.vuejs.org/zh/">Pinia</a></strong>、<strong><a href="https://element-plus.org/zh-CN/">Element Plus</a></strong>、<strong><a href="https://www.axios-http.cn/">Axios</a></strong>、<strong><a href="https://swiper.com.cn/">Swiper.js</a></strong>、<strong><a href="https://www.sass.hk/">SCSS</a></strong></p><h2>运行</h2><p>在终端依次执行以下代码以热载该项目</p>',6),a=e("pre",null,[e("code",{class:"language-sh","v-pre":"true"},`npm install
npm run dev
`)],-1),l=e("h2",null,"遇到的一些问题及解决方法",-1),h=e("h3",null,"1.Swiper.js注册的Swiper Element在Vue中渲染时报警告",-1),g=e("p",null,[t("如图： "),e("img",{src:"https://s2.loli.net/2023/09/13/dIHFSBXulNQ1hvO.png",alt:"problem"})],-1),c=e("p",null,[t("这是因为Vue 会"),e("strong",null,"优先把非原生标签当作Vue组件解析"),t("，Swiper注册的自定义元素swiper-container和swiper-slide显然不是Vue组件，所以报了解析失败的警告。")],-1),m=e("p",null,[t("解决方法是添加相应Vue的构建配置，使用"),e("strong",null,"compileOptions.isCustomElement"),t("（警告信息里面已经提到）告诉Vue它们是自定义元素而非Vue组件。")],-1),d=e("pre",null,[e("code",{class:"language-js","v-pre":"true"},`//vite.config.js
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
`)],-1),x=e("p",null,[t("相关资料："),e("a",{href:"https://cn.vuejs.org/guide/extras/web-components.html#using-custom-elements-in-vue"},"Vue与Web Components")],-1);function s(n,w){return o(),r(p,null,[i,a,l,h,g,c,m,d,x],64)}const v={render:s};v.__hmrId="D:/Study/Frontend/MyBlog/src/assets/posts/lynnbox-music-readme.md";const j=n=>({components:n,render:s});export{v as VueComponent,j as VueComponentWith,f as attributes,S as html,_ as toc};
