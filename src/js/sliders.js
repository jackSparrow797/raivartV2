$(document).ready(function () {
    $("input[name=phone]").mask("+7 (000) 000-00-00");
    $(".slider").slick({
        arrows: false,
        infinite: true,
        dots: true
    });
});