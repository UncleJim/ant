//
//  忘了有多久 再没听到你
//     对我说 你最爱的故事
//      ---	《童话》
//

;(function($, undefined) {
    //	HTML样式
    var html = '<div id="setting_about" style="padding:30px;">' +
    '    <div align="center">' +
    '        <img id="setting_about_logo" src="/ant/img/logo.png"/>' +
    '        <hr/>' +
    '        <h2>ANT 1.0</h2>' +
    '    </div>' +
    '    <div>' +
    '        <blockquote>不追求有多强，只努力不平凡！<small>2015/06/06</small></blockquote>' +
    '        <p><strong>蚁逅，一个凝聚创新、创意与创造，追求共享、自由与交流的小平台。</strong></p>' +
    '        <p>这里，有一群喜欢把想法付诸于现实并努力去实现的爱好者。<br>如果你一样，欢迎加入我们 ٩(×̯×)۶</p>' +
    '        <p><i class="fa fa-users"></i> 交流群: <a target="_blank" href="http://shang.qq.com/wpa/qunwpa?idkey=9012d6bc8d334ca0afa9a1154d50c8499b823dc768b81940ff7f7e7028d34ba4">130611633</a><br><i class="fa fa-weibo"></i> 微博: <a href="http://weibo.com/antoor" target="_blank">http://weibo.com/antoor</a></p>' +
    '        <p><strong class="text-danger">免责声明</strong> 本站仅提供一个学习与交流的平台，请勿用于其他非法用途，否则后果风险自行承担！</p>' +
    '    </div>' +
    '</div>';
    //	添加侧边栏
    w2ui['sidebar'].add('ant_setting', {
        id: 'setting_about',
        text: '关于蚁逅',
        icon: 'fa fa-heart-o',
        onClick: function() {
            w2ui['layout'].content('main', html);
        }
    })
    //	初始化完毕启动
    ANT.addonLoaded.reg(function() {
        ANT.ROUTE.run()
    })
})(jQuery)