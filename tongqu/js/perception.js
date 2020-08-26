$(function () {
    $('.gantong>div:nth-child(2)>ul>li').click(function () {
        var a = $(this).index();
        $('.gantong>div:nth-child(2)>ul>li').eq(a).css("backgroundColor","#B10063").siblings().css("backgroundColor"," #EEEEEE");
        $('.w-j').eq(a).css("display"," block").siblings('.w-j').css("display"," none");
        $('.gantong>div:nth-child(2)>ul>li').eq(a).children().addClass('baise').parent().siblings('li').children().removeClass('baise');
    })
    $('.gantong>div:nth-child(6)>ul>li').click(function () {
        var a = $(this).index();
        $('.gantong>div:nth-child(6)>ul>li').eq(a).css("backgroundColor","#B10063").siblings().css("backgroundColor"," #EEEEEE");
        $('.w-i').eq(a).css("display"," block").siblings('.w-i').css("display"," none");
        $('.gantong>div:nth-child(6)>ul>li').eq(a).children().addClass('baise').parent().siblings('li').children().removeClass('baise');
    })
})