$(function () {
    $('.tiaojian').click(function (e) {
        e.stopPropagation();
        $('.quanping').css('display','block');
        $('.quanping-w').click(function (e) {
            $('.quanping').css('display','block');
            e.stopPropagation();
        })
        $(".quanping").click(function (e) {
            $('.quanping').css('display','none');
            e.stopPropagation();
        })
        $(".quanping-w>div").click(function (e) {
            $('.quanping').css('display','none');
            e.stopPropagation();
        })

    })
})