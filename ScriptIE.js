<!--判断IE浏览器版本-->
<script>
    window.AESKey = '';
    // 判断浏览器是否支持placeholder属性
    function isSupportPlaceholder() {
        var input = document.createElement('input');
        return 'placeholder' in input;
    };
    (function() {
        //判断是否是IE浏览器，包括Edge浏览器
        function IEVersion() {
            //取得浏览器的userAgent字符串
            var userAgent = navigator.userAgent;
            //判断是否IE浏览器
            var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
            if (isIE) {
                var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
                reIE.test(userAgent);
                var fIEVersion = parseFloat(RegExp["$1"]);
                if (fIEVersion < 10 || !isSupportPlaceholder()) {
                    return true;
                }
            } else {
                return false;
            }
        }
        var tpl = [
            '<div class="browser-tips" style="margin:0 auto;text-align: center;">',
            '<img style="display: inline-block;margin:100px 0 20px 0;" src="error.png">',
            '<p style="font-size: 20px;color:#000;line-height: 32px;">为了给您提供更优质的网页浏览体验，建议使用IE10及以上版本的浏览器</p>',
            '<p style="font-size: 20px;color:#000;line-height: 32px;">对“本网站”进行访问，请升级或更换其他浏览器</p>',
            '</div>'
        ].join('');

        window.onload = function() {
            if (IEVersion()) {
                document.write(tpl);
            }
        };
        window.siteName = "本网站好啊好啊";
    })();
</script>
