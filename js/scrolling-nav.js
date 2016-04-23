//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    
    var is_mobile = false;

    if( $('#mobile-check').css('display')=='none') {
        is_mobile = true;       
    }

    // now i can use is_mobile to run javascript conditionally
    
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("#page-buttons").addClass("top-nav-collapse buttons-move");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("#page-buttons").removeClass("top-nav-collapse buttons-move");
    }
    
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) == false) {
        if ($(".navbar").offset().top > 50) {
            $("#page-buttons").addClass("top-nav-collapse buttons-move");
        } else {
            $("#page-buttons").removeClass("top-nav-collapse buttons-move");
        }
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
