$(function () {
    $('.legao>div:nth-child(2)>ul>li').click(function () {
        var a = $(this).index();
        $('.legao>div:nth-child(2)>ul>li').eq(a).css("backgroundColor","#EEBC41").siblings().css("backgroundColor"," #FFFFFF");
        $('.w-j').eq(a).css("display"," block").siblings('.w-j').css("display"," none");
        $('.legao>div:nth-child(2)>ul>li').eq(a).children().addClass('baise').parent().siblings('li').children().removeClass('baise');
    })
    $('.legao>div:nth-child(6)>ul>li').click(function () {
        var a = $(this).index();
        $('.legao>div:nth-child(6)>ul>li').eq(a).css("backgroundColor","#EEBC41").siblings().css("backgroundColor"," #FFFFFF");
        $('.w-i').eq(a).css("display"," block").siblings('.w-i').css("display"," none");
        $('.legao>div:nth-child(6)>ul>li').eq(a).children().addClass('baise').parent().siblings('li').children().removeClass('baise');
    })
    $('.legao>div:nth-child(9)>ul>li').click(function () {
        var a = $(this).index();
        $('.legao>div:nth-child(9)>ul>li').eq(a).css("backgroundColor","#ED9836").siblings().css("backgroundColor"," #FFFFFF");
        $('.w-c').eq(a).css("display"," block").siblings('.w-c').css("display"," none");
        $('.legao>div:nth-child(9)>ul>li').eq(a).children().addClass('baise').parent().siblings('li').children().removeClass('baise');
    })

})