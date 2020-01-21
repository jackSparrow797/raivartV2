$(document).ready(function () {

    // $("img.lazyload").lazyLoadXT();

    $(document).on('click', '.menu-mobile-toggle', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $(target).slideToggle("slow");
        $(this).toggleClass('open');
    });

    $(document).on('click', '.photo-tabs a', function (e) {
        e.preventDefault();
        let target = $(this).attr('href');
        $('.photo-tab').removeClass("active");
        $('.photo-tabs li').removeClass("active");
        $(target).addClass("active");
        $(this).parent().addClass('active');
        let sliderClass = $(this).attr('data-slider');
        $("." + sliderClass).slick('reinit');
    });

    $(".to_up").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 800);
        return false;
    });
    window.onscroll = function () {
        var scrolled = window.pageYOffset;
        if (scrolled > 100) {
            $('.to_up').fadeIn("slow")
        } else {
            $('.to_up').fadeOut("slow")
        }
    };

    $(window).scroll(function () {
        var top = $(document).scrollTop();
        if (top > 83) $('.floating').addClass('fixed'); //200 - это значение высоты прокрутки страницы для добавления класс
        else $('.floating').removeClass('fixed');
    });


    $(document).on("click", ".menu-desktop a, .link-block", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 700 мс
        $('body,html').animate({scrollTop: top}, 700);
    });



});

const Blazy = require('blazy');
var bLazy = new Blazy();