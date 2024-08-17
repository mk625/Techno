
// preloader 
$(window).on("load", function () {
    $(".loader-container").fadeOut(2000);
});

$(document).ready(function () {
    
    // responsive nav menu button 
    $('.open-menu').click(function () {
        $('.mobile-navbar-menulists').addClass('toogleopen');
        $('.open-menu').addClass('hidden')
        $('.close-menu').removeClass('hidden')
    });
    $('.close-menu').click(function () {
        $('.mobile-navbar-menulists').removeClass('toogleopen');
        $('.close-menu').addClass('hidden')
        $('.open-menu').removeClass('hidden')
    });
    
    
    // submenu 
    $('.primarynav-item').hover(function () {
        $(this).find('.sub-menu').css('visibility', 'visible');
    }, function () {
        $(this).find('.sub-menu').css('visibility', 'hidden');
        
    });


    // scroll to top
    var offset = 250;
    var duration = 500;
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.to-top').fadeIn(duration);
        } else {
            $('.to-top').fadeOut(duration);
        }
    });
    
    $('.to-top').click(function () {
        $('body').animate({ scrollTop: 0 }, duration);
    });



    // hero carousel 
    $("#hero-carousel").owlCarousel({
        loop: true,
        items: 1,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 2000
    });


    // service cards carousel 
    $("#service-cards-slider").owlCarousel({
        margin: 30,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });


    // case study carousel 
    $("#casestudy-carousel").owlCarousel({
        loop: true,
        items: 5,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 5000,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1400: {
                items: 5
            }
        }
    });


    // testimonial carousel 
    $('#testimonial-cards-slider').owlCarousel({
        margin: 40,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

});