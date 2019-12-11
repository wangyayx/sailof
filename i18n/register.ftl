<#include "include/common.ftl">
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <script src="/js/jquery-3.4.1.min.js"></script>
</head>
<body>
<button type="button" class="chinese">中文</button>
<button type="button" class="english">english</button>
<form method="post" action="${base}/register">
    <input type="hidden" name="method" value="input"/>
    <p><input name="username"/>
    <div id="username.error.Pattern" style="display: none;" i18n="username.error.Pattern">必须为非中文，最少4位最多30位</div>
    </p><p>
        <input name="password"/>
    <div id="password.error.NotEmpty" style="display: none;" i18n="password.error.NotEmpty">密码不能为空</div>
    <div id="password.error.Pattern" style="display: none;" i18n="password.error.Pattern">必须为大小写英文或数字，最少6位最多20位</div>
    </p>
    <button type="submit">register</button>
</form>
<#include "include/i18n.ftl">
<#include "include/error.ftl">
</body>
</html>