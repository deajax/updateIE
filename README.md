# UpdateIE

如果你的网站使用了HTML5或者CSS3属性，是否还要费劲心思去兼容IE？
你的客户年龄很大，对于电脑使用并不得心应手，甚至依然在使用十年前的老机器？
他们的老旧机器上除了漫天的全家桶以外，还有IE6/7/8，而客户刚好只用这个上网？
你费劲心思的动画效果、盒装布局、甚至连background-size都没用，客户看到只是一堆文字和图片乱七八糟的堆砌着，甚至一片空白，然后还要为此另写一套ie.css？

#### 为了互联网的健康发展，我们应该摒弃掉过时的浏览器！



##### 所以UpdateIE的作用就是把整个页面屏蔽掉，然后让他们下载一个现代浏览器。

把下面的代码放到 `<head></head>` 里：

```html
<!--[if IE]>
  <script type="text/javascript" src="https://deajax.github.io/updateIE/UpdateIE.js"></script>
<![endif]-->
```



这里还有其他方案

> `<!--[if IE]> 所有的IE可识别 <![endif]-->`
>
> `<!--[if IE 8]> 仅IE8可识别 <![endif]-->`
>
> `<!--[if lt IE 8]> IE8以及IE8以下版本可识别 <![endif]-->`
>
> `<!--[if gte IE 8]> IE8以及IE8以上版本可识别 <![endif]-->`

