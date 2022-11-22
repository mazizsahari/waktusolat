;
(function ($) {
    "use strict"
    /*----------------------------------------------------*/
    /*  Videos Slider
    /*----------------------------------------------------*/
    function video_slider() {
        if ($('.video_slider').length) {
            $('.video_slider').owlCarousel({
                loop: true,
                margin: 20,
                nav: true,
                items: 6,
                autoplay: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                smartSpeed: 1500,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 3,
                    },
                    400: {
                        items: 3,
                    },
                    575: {
                        items: 3,
                    },
                    768: {
                        items: 4,
                    },
                    992: {
                        items: 6,
                    }
                }
            })
        }
    }
    video_slider();
    /*----------------------------------------------------*/
    /*  Tips Slider
    /*----------------------------------------------------*/
    function tips_slider() {
        if ($('.tips_slider').length) {
            $('.tips_slider').owlCarousel({
                loop: true,
                margin: 15,
                nav: true,
                items: 6,
                autoplay: true,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                smartSpeed: 1500,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 1,
                    },
                    400: {
                        items: 1,
                    },
                    575: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 3,
                    }
                }
            })
        }
    }
    tips_slider();

    /*----------------------------------------------------*/
    /*  Kad Slider
    /*----------------------------------------------------*/
    function kad_slider() {
        if ($('.kad_slider').length) {
            $('.kad_slider').owlCarousel({
                loop: true,
                margin: 15,
                nav: true,
                items: 5,
                autoplay: false,
                nav: true,
                navText: [
                    "<i class='fa fa-angle-left'></i>",
                    "<i class='fa fa-angle-right'></i>"
                ],
                smartSpeed: 1500,
                dots: false,
                responsiveClass: true,
                responsive: {
                    0: {
                        items: 2,
                    },
                    400: {
                        items:2,
                    },
                    575: {
                        items: 2,
                    },
                    768: {
                        items: 3,
                    },
                    992: {
                        items: 5,
                    }
                }
            })
        }
    }
    kad_slider();
    
})(jQuery)