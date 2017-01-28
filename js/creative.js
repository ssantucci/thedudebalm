(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize and Configure Scroll Reveal Animation
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.review1', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.review2', {
        duration: 1000,
        delay: 350
    });
    sr.reveal('.review3', {
        duration: 1000,
        delay: 500
    });
    sr.reveal('.review4', {
        duration: 1000,
        delay: 650
    });
    sr.reveal('.review5', {
        duration: 1000,
        delay: 800
    });
    sr.reveal('.review6', {
        duration: 1000,
        delay: 950
    });

})(jQuery); // End of use strict
