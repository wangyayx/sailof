<script src="/js/i18n.min.js"></script>
<script>
    /*默认语言*/
    i18n("[i18n]", {
        defaultLang: 'cn', // 设置默认语言，
        filePath: "/i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever:true,// 默认为 true  保存当前语言，设置为 false 后，每次刷新都为cn
        get: true,
        callback: function() {
            console.log("i18n is ready.");
        }
    });
    /*切换为中文 - 按钮*/
    var cnBtn = document.querySelector(".chinese");
    cnBtn.addEventListener('click', function() {
            i18n("[i18n]", {
                lang: "cn",// 变更语言
                filePath: "/i18n/",
                get: true
            });
        },
        false);
    /*切换为英文 - 按钮*/
    var enBtn = document.querySelector(".english");
    enBtn.addEventListener('click', function() {
            i18n("[i18n]", {
                lang: "en",
                filePath: "/i18n/",
                get: true
            });
            alert(1);
        },
        false);
</script>