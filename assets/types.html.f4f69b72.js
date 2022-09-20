import{_ as s,o as n,c as a,d as e}from"./app.5e9eee52.js";const t={},p=e(`<h1 id="types" tabindex="-1"><a class="header-anchor" href="#types" aria-hidden="true">#</a> Types</h1><p><code>BootstrapVue3</code> was born with Typescript in mind. This is a list of types we use in this library and that you can use too:</p><h2 id="alignment" tabindex="-1"><a class="header-anchor" href="#alignment" aria-hidden="true">#</a> Alignment</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Alignment</span> <span class="token operator">=</span> <span class="token string">&#39;start&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;end&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;fill&#39;</span>
<span class="token keyword">namespace</span> Alignment <span class="token punctuation">{</span>
  <span class="token keyword">type</span> <span class="token class-name">Vertical</span> <span class="token operator">=</span> Alignment <span class="token operator">|</span> <span class="token string">&#39;baseline&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;stretch&#39;</span>
  <span class="token keyword">type</span> <span class="token class-name">Horizontal</span> <span class="token operator">=</span> Alignment <span class="token operator">|</span> <span class="token string">&#39;between&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;around&#39;</span>
  <span class="token keyword">type</span> <span class="token class-name">Content</span> <span class="token operator">=</span> Alignment <span class="token operator">|</span> <span class="token string">&#39;between&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;around&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;stretch&#39;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="booleanish" tabindex="-1"><a class="header-anchor" href="#booleanish" aria-hidden="true">#</a> Booleanish</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Booleanish</span> <span class="token operator">=</span> <span class="token string">&#39;true&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;false&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;&#39;</span> <span class="token operator">|</span> <span class="token builtin">boolean</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="bodyprop" tabindex="-1"><a class="header-anchor" href="#bodyprop" aria-hidden="true">#</a> BodyProp</h2><ul><li>This type is only used for the Toast component</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">BodyProp</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> VNode<span class="token operator">&lt;</span>RendererNode<span class="token punctuation">,</span> RendererElement<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token operator">&gt;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bpopoverdelayobject" tabindex="-1"><a class="header-anchor" href="#bpopoverdelayobject" aria-hidden="true">#</a> BPopoverDelayObject</h2><ul><li>This type is only used for the Popover component</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BPopoverDelayObject</span> <span class="token punctuation">{</span>
  show<span class="token operator">:</span> <span class="token builtin">number</span>
  hide<span class="token operator">:</span> <span class="token builtin">number</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breadcrumbitem" tabindex="-1"><a class="header-anchor" href="#breadcrumbitem" aria-hidden="true">#</a> BreadcrumbItem</h2><ul><li>This type is only used for the Breadcrumb component</li></ul><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">BreadcrumbItemObject</span> <span class="token punctuation">{</span>
  active<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  disabled<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  href<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  text<span class="token operator">:</span> <span class="token builtin">string</span>
  to<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">BreadcrumbItem</span> <span class="token operator">=</span> BreadcrumbItemObject <span class="token operator">|</span> <span class="token builtin">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="breakpoint" tabindex="-1"><a class="header-anchor" href="#breakpoint" aria-hidden="true">#</a> Breakpoint</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Breakpoint</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xl&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;xxl&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="buttontype" tabindex="-1"><a class="header-anchor" href="#buttontype" aria-hidden="true">#</a> ButtonType</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ButtonType</span> <span class="token operator">=</span> <span class="token string">&#39;button&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;submit&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;reset&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="buttonvariant" tabindex="-1"><a class="header-anchor" href="#buttonvariant" aria-hidden="true">#</a> ButtonVariant</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ButtonVariant</span> <span class="token operator">=</span>
  <span class="token operator">|</span> ColorVariant
  <span class="token operator">|</span> <span class="token string">&#39;link&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-primary&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-secondary&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-success&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-danger&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-warning&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-info&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-light&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;outline-dark&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="colorvariant" tabindex="-1"><a class="header-anchor" href="#colorvariant" aria-hidden="true">#</a> ColorVariant</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ColorVariant</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;secondary&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;light&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;dark&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="containerposition" tabindex="-1"><a class="header-anchor" href="#containerposition" aria-hidden="true">#</a> ContainerPosition</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ContainerVerticalAlign</span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span>VerticalAlign<span class="token punctuation">,</span> <span class="token string">&#39;baseline&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text-top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text-bottom&#39;</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name">ContainerHorizontalAlign</span> <span class="token operator">=</span> <span class="token string">&#39;left&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;center&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;right&#39;</span>
<span class="token keyword">type</span> <span class="token class-name">ContainerPosition</span> <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ContainerVerticalAlign<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ContainerHorizontalAlign<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="inputsize" tabindex="-1"><a class="header-anchor" href="#inputsize" aria-hidden="true">#</a> InputSize</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InputSize</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;md&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="inputtype" tabindex="-1"><a class="header-anchor" href="#inputtype" aria-hidden="true">#</a> InputType</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">InputType</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;text&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;number&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;email&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;password&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;search&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;url&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;tel&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;date&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;time&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;range&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;color&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="linktarget" tabindex="-1"><a class="header-anchor" href="#linktarget" aria-hidden="true">#</a> LinkTarget</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LinkTarget</span> <span class="token operator">=</span> <span class="token string">&#39;_self&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;_blank&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;_parent&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;_top&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="position" tabindex="-1"><a class="header-anchor" href="#position" aria-hidden="true">#</a> Position</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Position</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;position-static&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;position-relative&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;position-absolute&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;position-fixed&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;position-sticky&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="size" tabindex="-1"><a class="header-anchor" href="#size" aria-hidden="true">#</a> Size</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Size</span> <span class="token operator">=</span> <span class="token string">&#39;sm&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;lg&#39;</span> <span class="token operator">|</span> <span class="token keyword">undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="skeletonanimation" tabindex="-1"><a class="header-anchor" href="#skeletonanimation" aria-hidden="true">#</a> SkeletonAnimation</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">SkeletonAnimation</span> <span class="token operator">=</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token string">&#39;wave&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;fade&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;throb&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="skeletontype" tabindex="-1"><a class="header-anchor" href="#skeletontype" aria-hidden="true">#</a> SkeletonType</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">SkeletonType</span> <span class="token operator">=</span> <span class="token string">&#39;text&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;avatar&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;input&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;button&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="spinnertype" tabindex="-1"><a class="header-anchor" href="#spinnertype" aria-hidden="true">#</a> SpinnerType</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">SpinnerType</span> <span class="token operator">=</span> <span class="token string">&#39;border&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;grow&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="tablefield" tabindex="-1"><a class="header-anchor" href="#tablefield" aria-hidden="true">#</a> TableField</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">TableFieldObject<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;&gt;</span></span> <span class="token punctuation">{</span>
  key<span class="token operator">:</span> LiteralUnion<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token operator">&gt;</span>
  label<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  headerTitle<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  headerAbbr<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  <span class="token keyword">class</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  formatter<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> key<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> item<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
  sortable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  sortKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  sortDirection<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span>
  sortByFormatted<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  filterByFormatted<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  tdClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  thClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
  thStyle<span class="token operator">?</span><span class="token operator">:</span> StyleValue
  variant<span class="token operator">?</span><span class="token operator">:</span> ColorVariant
  tdAttr<span class="token operator">?</span><span class="token operator">:</span> TdHTMLAttributes
  thAttr<span class="token operator">?</span><span class="token operator">:</span> ThHTMLAttributes
  isRowHeader<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
  stickyColumn<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
<span class="token keyword">type</span> <span class="token class-name">TableField<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;&gt;</span></span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> TableFieldObject<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tableitem" tabindex="-1"><a class="header-anchor" href="#tableitem" aria-hidden="true">#</a> TableItem</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TableItem<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> Record<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">unknown</span><span class="token operator">&gt;&gt;</span></span> <span class="token operator">=</span> <span class="token constant">T</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span>
  _rowVariant<span class="token operator">?</span><span class="token operator">:</span> ColorVariant
  _cellVariants<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Record<span class="token operator">&lt;</span><span class="token keyword">keyof</span> <span class="token constant">T</span><span class="token punctuation">,</span> ColorVariant<span class="token operator">&gt;&gt;</span>
  _showDetails<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="textcolorvariant" tabindex="-1"><a class="header-anchor" href="#textcolorvariant" aria-hidden="true">#</a> TextColorVariant</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TextColorVariant</span> <span class="token operator">=</span>
  <span class="token operator">|</span> <span class="token string">&#39;primary&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;secondary&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;success&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;danger&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;warning&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;info&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;light&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;dark&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;white&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;body&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;muted&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;black-50&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;white-50&#39;</span>
  <span class="token operator">|</span> <span class="token string">&#39;reset&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="transitionmode" tabindex="-1"><a class="header-anchor" href="#transitionmode" aria-hidden="true">#</a> TransitionMode</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">TransitionMode</span> <span class="token operator">=</span> <span class="token string">&#39;in-out&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;out-in&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="verticalalign" tabindex="-1"><a class="header-anchor" href="#verticalalign" aria-hidden="true">#</a> VerticalAlign</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">VerticalAlign</span> <span class="token operator">=</span> <span class="token string">&#39;baseline&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;middle&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;bottom&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text-top&#39;</span> <span class="token operator">|</span> <span class="token string">&#39;text-bottom&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,51),o=[p];function r(i,l){return n(),a("div",null,o)}var d=s(t,[["render",r],["__file","types.html.vue"]]);export{d as default};
