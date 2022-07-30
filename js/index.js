function indexEff() {
    // 換頁
    var timer
    window.scrollTo({ 'top': 10 });

    $(window).scroll(function () {
        window.clearTimeout(timer)

        timer = window.setTimeout(function () {
            console.log('scroll event')
            //callback your coding
        }, 100)

        var scrollOut = $(window).scrollTop()
        // 滾動的高度
        var albumH = $(".album").outerHeight()
        // 一個.album的高度
        let fruit = 10
        let spring = 10 + albumH * 1
        let summer = 10 + albumH * 2
        let autumn = 10 + albumH * 3
        let winter = 10 + albumH * 4
        // let endP = 10 + albumH * 5

        var nowPage = (scrollOut - scrollOut % albumH) / albumH
        // 現在位置

        // var pageN = $(".album").length
        console.log('nowPage', nowPage)
        console.log(scrollOut)


        if (nowPage < 1) {
            if (scrollOut < fruit) {
                window.scrollTo({ 'top': winter });
                // nowPage = 'spring'
            } else if (scrollOut > fruit) {
                window.scrollTo({ 'top': spring });
                // nowPage = 'winter'
            } else {
                window.scrollTo({ 'top': fruit });
                // nowPage = 'fruit'
            }
        } else if (nowPage < 2) {
            if (scrollOut < spring) {
                window.scrollTo({ 'top': fruit });
                // nowPage = 'fruit'
            } else if (scrollOut > spring) {
                window.scrollTo({ 'top': summer });
                // nowPage = 'summer'
            } else {
                window.scrollTo({ 'top': spring });
                // nowPage = 'spring'
            }
        } else if (nowPage < 3) {
            if (scrollOut < summer) {
                window.scrollTo({ 'top': spring });
                // nowPage = 'spring'
            } else if (scrollOut > summer) {
                window.scrollTo({ 'top': autumn });
                // nowPage = 'autumn'
            } else {
                window.scrollTo({ 'top': summer });
                // nowPage = 'summer'
            }
        } else if (nowPage < 4) {
            if (scrollOut < autumn) {
                window.scrollTo({ 'top': summer });
                // nowPage = 'summer'
            } else if (scrollOut > autumn) {
                window.scrollTo({ 'top': winter });
                // nowPage = 'winter'
            } else {
                window.scrollTo({ 'top': autumn });
                // nowPage = 'autumn'
            }
        } else if (nowPage < 5) {
            if (scrollOut < winter) {
                window.scrollTo({ 'top': autumn });
                // nowPage = 'autumn'
            } else if (scrollOut > winter) {
                window.scrollTo({ 'top': fruit });
                // nowPage = 'fruit'
            } else {
                window.scrollTo({ 'top': winter });
                // nowPage = 'winter'
            }
        }

    })
}