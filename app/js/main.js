'use strict';

$(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 1,
        //autoplay: true,
        fade: true,
        autoplaySpeed: 10000,
        asNavFor: '.preview-slider',
        responsive: [
            {
                breakpoint: 768,
                arrows: false,
                dots: true

            }
        ]
    });

    $('.preview-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        focusOnSelect: true,
        asNavFor: '.slider',
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }
        ]
    });
});