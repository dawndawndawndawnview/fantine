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
        $(this).css({ 'background-image': 'url(/images/nav/nav1.svg)' });
    }, function () {
        $(this).css({ 'background-image': 'none' });
    })

    $('.mainNav li a').click(function () {
        $(this).next().stop().slideToggle();
    })

}
