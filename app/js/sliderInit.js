'use strict';

const mainSliderOptions = {
    slidesToShow: 1,
    fade: true,
    asNavFor: '.preview-slider',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false
            }

        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                dots: true
            }

        }
    ]
};

const previewSliderOptions = {
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
            slidesToScroll: 3,
            arrows: false,
            dots: true
        }
    }
]};

export default class Slider {
    constructor() {
        $('.slider').slick(mainSliderOptions);
        $('.preview-slider').slick(previewSliderOptions);
    }
};

