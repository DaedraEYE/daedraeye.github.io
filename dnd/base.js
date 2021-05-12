$(function(){
    $(".nav-link").click(function(){
        $("#viewer").attr("src", $(this).attr("link"));
        console.log($(this).attr("link"));
    });
});