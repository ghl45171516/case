$(function () {
    $('.clearfix>li').click(function () {
        var a = $(this).index();
        $(this).addClass('bian').siblings().removeClass('bian');
        $('.huanjing>div .xs').eq(a).css("display"," block").siblings('.xs').css("display"," none");
    })
})