$(function(){

    $(".nav li a").attr("href", "#").addClass("nav-link text-white");

    $(".nav-link").click(function(){
        $("#viewer").attr("src", $(this).attr("link"));
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

});