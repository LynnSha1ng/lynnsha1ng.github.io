import{o as a,b as o,F as s,an as p,j as e,L as l}from"./index-c7b4eb2a.js";const v={title:"Java基础学习笔记（一）：环境搭建",cover:"https://s2.loli.net/2023/10/12/XJPFkxYaQ8b2Ufo.jpg",publishTime:"2023-10-11 21:16",category:"学习",tags:["Java","学习笔记","软件安装激活教程"],id:"post002"},b=`<h2>Java</h2>
<p>挂几个网址：
<a href="https://www.oracle.com/cn/java/technologies/downloads/">Oracle官网下载</a></p>
<p><a href="https://www.injdk.cn/">Java I Tell You</a>（国内JDK镜像源）</p>
<p>安装方法不赘述。个人建议同时下载两个版本，<span style="color:red;">Java 8 + 最新LTS版</span>。许多企业和项目仍在用Java 8，肯定有必要熟练掌握。不过，就算企业不更新Java，也要为了拓展自己的知识深度与广度而学习更多新版特性，<strong>学习永无止境</strong>！</p>
<h2>IDE</h2>
<p>推荐三款主流IDE：<a href="https://netbeans.apache.org/">NetBeans</a>、<a href="https://www.eclipse.org/">Eclipse</a>、<a href="https://www.jetbrains.com/zh-cn/idea/">IntelliJ IDEA</a>，可以去各自的官网或阅读掘金文章<a href="https://juejin.cn/post/7039508842874404877">《NetBeans、Eclipse 和 IDEA，哪个才是最优秀的Java IDE》</a>大致了解这三款IDE的特点和利弊。</p>
<p>前两款都是开源免费的；IDEA只有社区版是免费的，用作Java/Kotlin开发足够了。不过因为我目前还想用最终版里集成的数据库功能，最后就选择了IDEA最终版。</p>
<p>下面分享IDEA最终版（也是其他JetBrains旗下产品）的激活方法，<code>&lt;span style=&quot;color:red;&quot;&gt;</code>仅供学习交流！有余力请尽量从官方渠道申请正版授权码！</p>
<h3>一、下载并安装</h3>
<p>去官网下载IDEA终极版安装包，安装后先不运行。</p>
<h3>二、启动前</h3>
<p>进入https://jetbra.in/s ，页面显示如下：</p>
<p><img src="https://s2.loli.net/2023/10/12/nqIjbc7hVDSgBE4.jpg" alt="页面1"></p>
<p>带地球图标的代表可用。点进第一个可用网址，页面显示如下：</p>
<p><img src="https://s2.loli.net/2023/10/12/t1UaKPV2RIfXHWh.png" alt="页面2"></p>
<p>下载jetbra.zip并解压到某目录下，注意路径中不要带空格。另外，激活完后这些也要一直保留，勿删，也勿移动（移动了记得改idea64.exe.vmoptions里的相应路径）。这里我选择的是 <code>D:\\jetbra</code></p>
<p>复制激活码备用。</p>
<p>根据<strong>readme.txt</strong>为 <code>IDEA安装目录\\bin\\base64.exe.vmoptions</code>文件内添加指定内容即可。这里我的安装目录为 <code>D:\\Program Files\\IntelliJ IDEA 2023.2.2</code></p>
<pre><code>-javaagent:D:/jetbra/ja-netfilter.jar=jetbrains

# Java 17还须添加：
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
</code></pre>
<p><img src="https://s2.loli.net/2023/10/12/nZHYI437VdJOmkW.jpg" alt="base64.exe.vmoptions"></p>
<h3>三、启动并激活</h3>
<p>打开IDEA，点击左下角设置图标，在“管理许可证”（Manage Lisenses）中，选择“激活IntelliJ IDEA”（Activate IntelliJ IDEA）和“激活码”（Activation Code），粘贴激活码并点击激活按钮即可。</p>
<h3>四、写在最后</h3>
<ul>
<li>该方法同样适用于其他JetBrains旗下产品的激活。<strong>举一隅不以三隅反，则不复也。</strong></li>
<li>激活文件可共用。</li>
</ul>
`,x=[{level:"2",content:"Java"},{level:"2",content:"IDE"},{level:"3",content:"&#x4E00;&#x3001;&#x4E0B;&#x8F7D;&#x5E76;&#x5B89;&#x88C5;"},{level:"3",content:"&#x4E8C;&#x3001;&#x542F;&#x52A8;&#x524D;"},{level:"3",content:"&#x4E09;&#x3001;&#x542F;&#x52A8;&#x5E76;&#x6FC0;&#x6D3B;"},{level:"3",content:"&#x56DB;&#x3001;&#x5199;&#x5728;&#x6700;&#x540E;"}],r=p('<h2>Java</h2><p>挂几个网址： <a href="https://www.oracle.com/cn/java/technologies/downloads/">Oracle官网下载</a></p><p><a href="https://www.injdk.cn/">Java I Tell You</a>（国内JDK镜像源）</p><p>安装方法不赘述。个人建议同时下载两个版本，<span style="color:red;">Java 8 + 最新LTS版</span>。许多企业和项目仍在用Java 8，肯定有必要熟练掌握。不过，就算企业不更新Java，也要为了拓展自己的知识深度与广度而学习更多新版特性，<strong>学习永无止境</strong>！</p><h2>IDE</h2><p>推荐三款主流IDE：<a href="https://netbeans.apache.org/">NetBeans</a>、<a href="https://www.eclipse.org/">Eclipse</a>、<a href="https://www.jetbrains.com/zh-cn/idea/">IntelliJ IDEA</a>，可以去各自的官网或阅读掘金文章<a href="https://juejin.cn/post/7039508842874404877">《NetBeans、Eclipse 和 IDEA，哪个才是最优秀的Java IDE》</a>大致了解这三款IDE的特点和利弊。</p><p>前两款都是开源免费的；IDEA只有社区版是免费的，用作Java/Kotlin开发足够了。不过因为我目前还想用最终版里集成的数据库功能，最后就选择了IDEA最终版。</p><p>下面分享IDEA最终版（也是其他JetBrains旗下产品）的激活方法，<code>&lt;span style=&quot;color:red;&quot;&gt;</code>仅供学习交流！有余力请尽量从官方渠道申请正版授权码！</p><h3>一、下载并安装</h3><p>去官网下载IDEA终极版安装包，安装后先不运行。</p><h3>二、启动前</h3><p>进入https://jetbra.in/s ，页面显示如下：</p><p><img src="https://s2.loli.net/2023/10/12/nqIjbc7hVDSgBE4.jpg" alt="页面1"></p><p>带地球图标的代表可用。点进第一个可用网址，页面显示如下：</p><p><img src="https://s2.loli.net/2023/10/12/t1UaKPV2RIfXHWh.png" alt="页面2"></p><p>下载jetbra.zip并解压到某目录下，注意路径中不要带空格。另外，激活完后这些也要一直保留，勿删，也勿移动（移动了记得改idea64.exe.vmoptions里的相应路径）。这里我选择的是 <code>D:\\jetbra</code></p><p>复制激活码备用。</p><p>根据<strong>readme.txt</strong>为 <code>IDEA安装目录\\bin\\base64.exe.vmoptions</code>文件内添加指定内容即可。这里我的安装目录为 <code>D:\\Program Files\\IntelliJ IDEA 2023.2.2</code></p>',18),c=e("pre",null,[e("code",{"v-pre":"true"},`-javaagent:D:/jetbra/ja-netfilter.jar=jetbrains

# Java 17还须添加：
--add-opens=java.base/jdk.internal.org.objectweb.asm=ALL-UNNAMED
--add-opens=java.base/jdk.internal.org.objectweb.asm.tree=ALL-UNNAMED
`)],-1),i=e("p",null,[e("img",{src:"https://s2.loli.net/2023/10/12/nZHYI437VdJOmkW.jpg",alt:"base64.exe.vmoptions"})],-1),h=e("h3",null,"三、启动并激活",-1),d=e("p",null,"打开IDEA，点击左下角设置图标，在“管理许可证”（Manage Lisenses）中，选择“激活IntelliJ IDEA”（Activate IntelliJ IDEA）和“激活码”（Activation Code），粘贴激活码并点击激活按钮即可。",-1),D=e("h3",null,"四、写在最后",-1),E=e("ul",null,[e("li",null,[l("该方法同样适用于其他JetBrains旗下产品的激活。"),e("strong",null,"举一隅不以三隅反，则不复也。")]),e("li",null,"激活文件可共用。")],-1);function n(t,I){return a(),o(s,null,[r,c,i,h,d,D,E],64)}const g={render:n};g.__hmrId="D:/Study/Frontend/MyBlog/src/assets/posts/java-notes1.md";const m=t=>({components:t,render:n});export{g as VueComponent,m as VueComponentWith,v as attributes,b as html,x as toc};
