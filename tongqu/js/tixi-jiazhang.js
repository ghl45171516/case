$(function () {
    $('.w-ul ul li').click(function () {
        var a = $(this).index();
        $('.w-ul ul li').eq(a).css("backgroundColor"," rgb(61,149,195)").siblings().css("backgroundColor"," rgb(210,210,210)");
        $('.w .w-j').eq(a).css("display"," block").siblings('.w-j').css("display"," none");
    })
})