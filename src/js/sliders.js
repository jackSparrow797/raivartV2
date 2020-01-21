$(document).ready(function () {
    $("input[name=phone]").mask("+7 (000) 000-00-00");
    $(".slider").slick({
        arrows: false,
        infinite: true,
        dots: true,
        autoplay: true
    });
    $(".product-slider").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 2,
        appendArrows: '.direction-arrows',
        nextArrow: '<a href="#" class="ml-3"><img src="/assets/design/images/right.png"/></a>',
        prevArrow: '<a href="#" class="mr-3"><img src="/assets/design/images/left.png"/></a>',
        responsive: [{

            breakpoint: 1130,
            settings: {
                slidesToShow:1,
                dots: true
            }

        }]
    });
    $(".news-slider").slick({
        arrows: true,
        infinite: false,
        slidesToShow: 4,
        appendArrows: '.news-arrows',
        nextArrow: '<a href="#" class="ml-3"><img src="/assets/design/images/right.png"/></a>',
        prevArrow: '<a href="#" class="mr-3"><img src="/assets/design/images/left.png"/></a>',
        responsive: [{
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
                dots: true
            }
        },{
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
                dots: true
            }
        },
        ]
    });

    $(".video-slider, .photo-slider").slick({
        arrows: false,
        infinite: false,
        slidesToShow: 3,
        responsive: [{
            breakpoint: 1130,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 760,
            settings: {
                slidesToShow: 1,
            }
        },
        ]
    });
});