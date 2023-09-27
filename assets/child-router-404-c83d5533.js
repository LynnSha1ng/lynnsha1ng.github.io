import{o,d as i,F as s,ai as l,l as t}from"./index-2b4fa3dd.js";const m={title:"解决问题：Github(Gitee) Pages上的Vue项目刷新页面时子路由报404",cover:"https://s2.loli.net/2023/09/27/gHRQzUPmMVwd6by.png",publishTime:"2023-09-20 15:32",category:"解惑",tags:["前端","Vue","解惑"],id:"002"},x=`<h2>遇到问题</h2>
<p>这天我试着把这个静态博客部署到Github Pages上。部署过程不难，网页也如预期加载。然后我随手刷新了一下，发现页面直接报404了。</p>
<p><img src="https://s2.loli.net/2023/09/22/qhbI8VLkP5EKYon.png" alt="LB-0002.png"></p>
<h2>解决问题</h2>
<h3>1. 分析原因</h3>
<p>我想大概是Vue Router的原因，事实也的确是这样。</p>
<p>浏览器刷新时，如果路径改变，就会按照路径发送资源请求。但此时的URL是Vue Router在History模式下设置的，直接按此请求肯定找不到资源，于是就返回404了。</p>
<h3>2. 寻找方案</h3>
<p>我在网上查了下，找到了三种主流解决办法：</p>
<blockquote>
<ul>
<li>添加<strong>后端</strong>支持</li>
<li>改用<strong>Hash路由</strong></li>
<li>在index.html所在目录下<strong>直接添加一个内容与之相同的404.html</strong></li>
</ul>
</blockquote>
<p>第一种方法想都不用想，Github(Gitee) Pages仅支持托管<strong>静态页面</strong>。<s>而且我现在也不会后端</s></p>
<p>第二种方法会给URL增加井号，简直是在绞杀强迫症患者。而且我的文章toc定位就是用便捷的锚点链接实现的，我不想为了改用Hash路由就重写个定位方式甚至直接放弃toc定位，所以也没采用。</p>
<p>第三种方法思路对了一半。该方法利用了Github(Gitee) Pages支持自定义404页面的功能，在404.html中渲染与原网页相同的内容以防止网页丢失。但该方法仅在普通页面里可行，在Vue项目里不适用。毕竟，不可能又在404.html里面挂载根组件吧？这也太蠢了。我们换个思路，其实只需要<strong>把404.html当作跳板，重定向回相应路由</strong>即可。</p>
<h3>2. 实施过程</h3>
<ol>
<li>在public目录下新建404.html，并在head中添加了：</li>
</ol>
<pre><code class="language-html">  &lt;script&gt;
    sessionStorage.redirect = location.href;
  &lt;/script&gt;
  &lt;meta http-equiv=&quot;refresh&quot; content=&quot;0; URL='/'&quot;&gt;
</code></pre>
<ol start="2">
<li>在index.html中body标签上方添加了：</li>
</ol>
<pre><code class="language-html">&lt;script&gt;
  (function () {
    const redir = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redir &amp;&amp; redir !== location.href) {
      history.replaceState(null, null, redir);
    }
  })();
&lt;/script&gt;
</code></pre>
<p>这样，跳转至404.html时会保存此时的地址，然后立即刷新并导航至根链接（即回到index.html），index.html在加载body前用保存的地址替换掉根链接，这样Vue Router就能据此正确地导航回来了。完美解决。</p>
<h2>涉及知识点</h2>
<h3>前端路由</h3>
<p>前端路由有两种模式，Hash和History。</p>
<blockquote>
<p>Hash：利用锚点定位，哈希值改变时触发hashChange事件并执行改变DOM的回调函数。这是前端Hash路由的基本原理。</p>
<ul>
<li>优点：
<ol>
<li>兼容性佳</li>
<li>无需后端参与，是真正的前端路由</li>
</ol>
</li>
<li>缺点：
<ol>
<li>URL不美观，也不符合规范</li>
<li>占用了锚点定位功能</li>
</ol>
</li>
</ul>
</blockquote>
<blockquote>
<p>History：利用H5中<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History">History API</a>新增的pushState、replaceState方法，直接更改URL而不用重新请求。</p>
<ul>
<li>优点：
<ol>
<li>URL美观，符合规范</li>
</ol>
</li>
<li>缺点：
<ol>
<li>兼容性不如Hash</li>
<li>基于此的SPA需要服务端设置重定向</li>
</ol>
</li>
</ul>
</blockquote>
`,b=[{level:"2",content:"&#x9047;&#x5230;&#x95EE;&#x9898;"},{level:"2",content:"&#x89E3;&#x51B3;&#x95EE;&#x9898;"},{level:"3",content:"1. &#x5206;&#x6790;&#x539F;&#x56E0;"},{level:"3",content:"2. &#x5BFB;&#x627E;&#x65B9;&#x6848;"},{level:"3",content:"2. &#x5B9E;&#x65BD;&#x8FC7;&#x7A0B;"},{level:"2",content:"&#x6D89;&#x53CA;&#x77E5;&#x8BC6;&#x70B9;"},{level:"3",content:"&#x524D;&#x7AEF;&#x8DEF;&#x7531;"}],r=l('<h2>遇到问题</h2><p>这天我试着把这个静态博客部署到Github Pages上。部署过程不难，网页也如预期加载。然后我随手刷新了一下，发现页面直接报404了。</p><p><img src="https://s2.loli.net/2023/09/22/qhbI8VLkP5EKYon.png" alt="LB-0002.png"></p><h2>解决问题</h2><h3>1. 分析原因</h3><p>我想大概是Vue Router的原因，事实也的确是这样。</p><p>浏览器刷新时，如果路径改变，就会按照路径发送资源请求。但此时的URL是Vue Router在History模式下设置的，直接按此请求肯定找不到资源，于是就返回404了。</p><h3>2. 寻找方案</h3><p>我在网上查了下，找到了三种主流解决办法：</p><blockquote><ul><li>添加<strong>后端</strong>支持</li><li>改用<strong>Hash路由</strong></li><li>在index.html所在目录下<strong>直接添加一个内容与之相同的404.html</strong></li></ul></blockquote><p>第一种方法想都不用想，Github(Gitee) Pages仅支持托管<strong>静态页面</strong>。<s>而且我现在也不会后端</s></p><p>第二种方法会给URL增加井号，简直是在绞杀强迫症患者。而且我的文章toc定位就是用便捷的锚点链接实现的，我不想为了改用Hash路由就重写个定位方式甚至直接放弃toc定位，所以也没采用。</p><p>第三种方法思路对了一半。该方法利用了Github(Gitee) Pages支持自定义404页面的功能，在404.html中渲染与原网页相同的内容以防止网页丢失。但该方法仅在普通页面里可行，在Vue项目里不适用。毕竟，不可能又在404.html里面挂载根组件吧？这也太蠢了。我们换个思路，其实只需要<strong>把404.html当作跳板，重定向回相应路由</strong>即可。</p><h3>2. 实施过程</h3><ol><li>在public目录下新建404.html，并在head中添加了：</li></ol>',15),h=t("pre",null,[t("code",{class:"language-html","v-pre":"true"},`  <script>
    sessionStorage.redirect = location.href;
  <\/script>
  <meta http-equiv="refresh" content="0; URL='/'">
`)],-1),p=t("ol",{start:"2"},[t("li",null,"在index.html中body标签上方添加了：")],-1),c=t("pre",null,[t("code",{class:"language-html","v-pre":"true"},`<script>
  (function () {
    const redir = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redir && redir !== location.href) {
      history.replaceState(null, null, redir);
    }
  })();
<\/script>
`)],-1),a=l('<p>这样，跳转至404.html时会保存此时的地址，然后立即刷新并导航至根链接（即回到index.html），index.html在加载body前用保存的地址替换掉根链接，这样Vue Router就能据此正确地导航回来了。完美解决。</p><h2>涉及知识点</h2><h3>前端路由</h3><p>前端路由有两种模式，Hash和History。</p><blockquote><p>Hash：利用锚点定位，哈希值改变时触发hashChange事件并执行改变DOM的回调函数。这是前端Hash路由的基本原理。</p><ul><li>优点： <ol><li>兼容性佳</li><li>无需后端参与，是真正的前端路由</li></ol></li><li>缺点： <ol><li>URL不美观，也不符合规范</li><li>占用了锚点定位功能</li></ol></li></ul></blockquote><blockquote><p>History：利用H5中<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/History">History API</a>新增的pushState、replaceState方法，直接更改URL而不用重新请求。</p><ul><li>优点： <ol><li>URL美观，符合规范</li></ol></li><li>缺点： <ol><li>兼容性不如Hash</li><li>基于此的SPA需要服务端设置重定向</li></ol></li></ul></blockquote>',6);function n(e,g){return o(),i(s,null,[r,h,p,c,a],64)}const u={render:n};u.__hmrId="D:/Study/Frontend/MyBlog/src/assets/posts/child-router-404.md";const H=e=>({components:e,render:n});export{u as VueComponent,H as VueComponentWith,m as attributes,x as html,b as toc};
