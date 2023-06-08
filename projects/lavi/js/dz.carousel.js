/* JavaScript Document */
jQuery(document).ready(function() {
    'use strict';

    jQuery('.testimonial-one').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        items: 1,
        paginationSpeed: 2000,
        slideSpeed: 2000,
        dots: true,
    });

    /* image-carousel function by = owl.carousel.js */
    jQuery('.portfolio-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: false,
        autoplaySpeed: 1000,
        navSpeed: 1000,
        paginationSpeed: 1000,
        slideSpeed: 1000,
        dots: true,
        navText: ['<i class="la la-arrow-left"></i> Prev', 'Next <i class="la la-arrow-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    })

    jQuery('.salon-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        items: 4,
        paginationSpeed: 2000,
        slideSpeed: 2000,
        dots: true,
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    jQuery('.main-slider').owlCarousel({
        loop: true,
        margin: 0,
        center: true,
        nav: false,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        items: 1,
        paginationSpeed: 2000,
        slideSpeed: 2000,
        dots: true,
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
    });

    jQuery('.blog-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        items: 4,
        paginationSpeed: 2000,
        slideSpeed: 2000,
        dots: true,
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });

    jQuery('.team-carousel').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        autoplaySpeed: 2000,
        navSpeed: 2000,
        items: 4,
        paginationSpeed: 2000,
        slideSpeed: 2000,
        dots: true,
        navText: ['<i class="la la-angle-left"></i>', '<i class="la la-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

});

/* Document .ready END */