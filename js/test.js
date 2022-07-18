function mainNavEff(){
    var winwidth = window.outerWidth;

    function setMenu() {
        if (!window.matchMedia('(max-width:768px)').matches) {
            // 如果螢幕>768執行
            $('.hamburger').hide();
            // $('.mainNav ul ul').hide();

            // 下拉選單
            $('.mainNav>ul>li').hover(function () {
                $(this).children('ul').stop().animate({ 'top': 0 }, 500, 'easeOutBack');
            }, function () {
                $(this).children('ul').stop().animate({ 'top': -300 }, 500, 'easeInBack');
            });

        } else {
            // 否則執行
            $('.hamburger').show();
        }

        // 框框
        $('.mainNav li a').hover(function () {
            $(this).css({ 'background-image': 'url(/images/nav/nav1.svg)' })
        }, function () {
            $(this).css({ 'background-image': 'none' })
        })

        $('.mainNav li a').click(function () {
            $(this).next().stop().slideToggle()
        })

    }

    setMenu();

    // 看螢幕大小有沒有變化
    $(window).resize(function () {
        if (window.outerWidth != winwidth) {
            setMenu();
            winwidth = window.outerWidth
        }
    })

    $('.hamburger').click(function () {
        $('#nav-main').stop().slideToggle();
        $(this).toggleClass('closeBtn')
        return false;
        // return false;
        //讓a 的 # 失去作用，不會回到網頁頂端。  加在最後面
        //或是直接在 html的a 寫href="javascript:;"
    })

}