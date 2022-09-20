import{_ as m,o as _,c as b,b as n,w as a,a as o,e as s,d as c,r as e}from"./app.5e9eee52.js";const h={},f=o("h1",{id:"nav",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#nav","aria-hidden":"true"},"#"),s(" Nav")],-1),w=o("p",null,"Bootstrap's vue nav component is a simple wrapper for building navigation components",-1),x=s(" Home "),q=s(" About "),L=s(" New "),A=s(" Home "),y=o("h2",{id:"drop-down",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#drop-down","aria-hidden":"true"},"#"),s(" Drop Down")],-1),D=o("p",null,"Drops downs can be added like so",-1),N=s("Active"),T=s("Link"),C=s("One"),B=s("Two"),O=s("Three"),V=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav</span> <span class="token attr-name">pills</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>Active<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item-dropdown</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>my-nav-dropdown<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Dropdown<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">toggle-class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>nav-link-custom<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">right</span>
    <span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-dropdown-item</span><span class="token punctuation">&gt;</span></span>One<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-dropdown-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-dropdown-item</span><span class="token punctuation">&gt;</span></span>Two<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-dropdown-item</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-dropdown-divider</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-dropdown-divider</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-dropdown-item</span><span class="token punctuation">&gt;</span></span>Three<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-dropdown-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item-dropdown</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tab-style" tabindex="-1"><a class="header-anchor" href="#tab-style" aria-hidden="true">#</a> Tab Style</h2>`,2),S=s("Active"),P=s("Link"),H=s("Another Link"),R=s("Disabled"),z=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav</span> <span class="token attr-name">tabs</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>Active<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>Another Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pills-style" tabindex="-1"><a class="header-anchor" href="#pills-style" aria-hidden="true">#</a> Pills Style</h2>`,2),E=s("Active"),U=s("Link"),j=s("Another Link"),F=s("Disabled"),G=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-card</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav</span> <span class="token attr-name">pills</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>Active<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>Another Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-card</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vertical-orientation" tabindex="-1"><a class="header-anchor" href="#vertical-orientation" aria-hidden="true">#</a> Vertical Orientation</h2><p>By default <code>&lt;b-nav&gt;</code> appear on a horizontal line. Stack your navigation by setting the vertical prop.</p>`,3),I=s("Active"),J=s("Link"),K=s("Another Link"),M=s("Disabled"),Q=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav</span> <span class="token attr-name">vertical</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>w-25<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">active</span><span class="token punctuation">&gt;</span></span>Active<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>Another Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">disabled</span><span class="token punctuation">&gt;</span></span>Disabled<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nav-text" tabindex="-1"><a class="header-anchor" href="#nav-text" aria-hidden="true">#</a> Nav Text</h2><p>Use the <code>&lt;b-nav-text&gt;</code> child component to place plain text content into the nav:</p>`,3),W=s("Link 1"),X=s("Link 2"),Y=s("Plain text"),Z=c(`<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav</span> <span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Link 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-item</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Link 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-item</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b-nav-text</span><span class="token punctuation">&gt;</span></span>Plain text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav-text</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b-nav</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function $(nn,an){const t=e("b-nav-item"),l=e("b-nav"),i=e("b-card"),u=e("b-container"),p=e("ClientOnly"),d=e("b-dropdown-item"),k=e("b-dropdown-divider"),r=e("b-nav-item-dropdown"),v=e("b-nav-text"),g=e("ComponentReference");return _(),b("div",null,[f,w,n(p,null,{default:a(()=>[n(u,null,{default:a(()=>[n(i,null,{default:a(()=>[n(l,null,{default:a(()=>[n(t,null,{default:a(()=>[x]),_:1}),n(t,null,{default:a(()=>[q]),_:1}),n(t,null,{default:a(()=>[L]),_:1}),n(t,{disabled:""},{default:a(()=>[A]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),y,D,n(p,null,{default:a(()=>[n(u,null,{default:a(()=>[n(i,null,{default:a(()=>[n(l,{pills:""},{default:a(()=>[n(t,{active:""},{default:a(()=>[N]),_:1}),n(t,null,{default:a(()=>[T]),_:1}),n(r,{id:"my-nav-dropdown",text:"Dropdown","toggle-class":"nav-link-custom",right:""},{default:a(()=>[n(d,null,{default:a(()=>[C]),_:1}),n(d,null,{default:a(()=>[B]),_:1}),n(k),n(d,null,{default:a(()=>[O]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),V,n(p,null,{default:a(()=>[n(l,{tabs:""},{default:a(()=>[n(t,{active:""},{default:a(()=>[S]),_:1}),n(t,null,{default:a(()=>[P]),_:1}),n(t,null,{default:a(()=>[H]),_:1}),n(t,{disabled:""},{default:a(()=>[R]),_:1})]),_:1})]),_:1}),z,n(p,null,{default:a(()=>[n(i,null,{default:a(()=>[n(l,{pills:""},{default:a(()=>[n(t,{active:""},{default:a(()=>[E]),_:1}),n(t,null,{default:a(()=>[U]),_:1}),n(t,null,{default:a(()=>[j]),_:1}),n(t,{disabled:""},{default:a(()=>[F]),_:1})]),_:1})]),_:1})]),_:1}),G,n(p,null,{default:a(()=>[n(l,{vertical:"",class:"w-25"},{default:a(()=>[n(t,{active:""},{default:a(()=>[I]),_:1}),n(t,null,{default:a(()=>[J]),_:1}),n(t,null,{default:a(()=>[K]),_:1}),n(t,{disabled:""},{default:a(()=>[M]),_:1})]),_:1})]),_:1}),Q,n(p,null,{default:a(()=>[n(u,null,{default:a(()=>[n(i,null,{default:a(()=>[n(l,null,{default:a(()=>[n(t,{href:"#1"},{default:a(()=>[W]),_:1}),n(t,{href:"#2"},{default:a(()=>[X]),_:1}),n(v,null,{default:a(()=>[Y]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),Z,n(p,null,{default:a(()=>[n(g)]),_:1})])}var tn=m(h,[["render",$],["__file","Nav.html.vue"]]);export{tn as default};
