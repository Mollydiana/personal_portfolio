/**
 * Created by mollymendelsohn-carr on 10/23/14.
 */
// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});
$(window).bind('scroll resize', function () {

    var currentSection = null;

    $('.section').each(function () {
        var element = $(this).attr('id');
        if ($('#' + element).is('*')) {
            if ($(window).scrollTop() >= $('#' + element).offset().top - 70) {
                currentSection = element;

            }
        }
    });

    $('#main_menu ul li').removeClass('active').find('a[href="#' + currentSection + '"]').parent().addClass('active');
    $('select.small-menu option:selected').removeAttr('selected');
    $('select.small-menu option[value="#' + currentSection + '"]').attr('selected', 'selected');
});

jQuery(document).ready(function () {
    $("#main_menu").sticky({ topSpacing: 0 });
    $('#main_menu ul li a, a.slow-scroll').click(function () {
        $('html, body').animate({scrollTop: $(this.hash).offset().top}, 2000);
        return false;
    });
});

$(window).bind("scroll", function () {
    if ($(this).scrollTop() > 520) {
        $(".main_menu").addClass("new_main_menu");

        $("#subOverlay").fadeIn();
    } else {
        $("#subOverlay").stop().fadeOut();

        $(".main_menu").removeClass("new_main_menu");
    }
});

$(window).resize(function () {
    if ($(window).width() < 522) {
        $(".top_background").css('margin-bottom', '-312px');
    }
    else {
        $(".top_background").css('margin-bottom', '0');
    }
});

$(window).resize(function () {
    clearTimeout(this.id);
    this.id = setTimeout(mobileSize, 500);
});
function mobileSize() {
    sizes();
}
$(window).load(function () {
    sizes();
});
function sizes() {
    var width = $(window).width();
    if (width < 640) {
        $(".m_carr_header").css(({
            'height': '84px',
            'margin-top': '-40px',
            'margin-left': '481px'

        }));
        $(".strip").css(({
            'background': 'none'
        }));
        $(".title").css(({
            'visibility': 'hidden'
        }));
        $(".mobile_title").css(({
            'padding-bottom': '30px',
            'font-size': '21px',
            'margin-left': '527px',
            'margin-top': '-57px',
            'visibility': 'visible'
        }));
        $("#portfolio-items").css(({
            'margin-left': '25%'
        }));
        $(".portfolio_full_screen_image").css(({
            'visibility': 'hidden',
            'height': '0px'
        }));
        $(".sites").css(({
            'margin-bottom': '-95px'
        }));
        $(".i_vid_1").css(({
            'margin-left': '-25px',
            'margin-right': '50px'
        }));
        $(".i_vid_2").css(({
            'margin-left': '-25px'
        }));
        $(".i_vid_3").css(({
            'margin-left': '-62px'
        }));
        $(".cd_display").css(({
            'display': 'block',
            'margin-left': '-35px',
            'margin-bottom': '-20px'
        }));
        $(".cds").css(({
            'margin-bottom': '-20px'
        }));
        $(".cd_normal").css(({
            'visibility': 'hidden',
            'height': '40px'
        }));
        $(".cd_small").css(({
            'visibility': 'visible',
            'height': 'auto'
        }));
        $(".music").css(({
            'margin-bottom': '-130px'
        }));
        $(".photo_wrapper_top").css(({
            'height': '100%',
            'webkit-background-size': 'none',
            'overflow': 'visible',
            'background-size': 'auto',
            'background-position': 'top'
        }));
        $(".iframe_margin").css(({
            'margin-left': '-120px'
        }));


    }
    else if (width > 640) {
        $(".m_carr_header").css(({
            'margin-top': '40px',
            'margin-left': '-242px',
            'opacity': 0.8,
            'height': 'auto'

        }));
        $(".strip").css(({
            'background': 'rgba(255, 255, 255, 0.4)'
        }));
        $(".mobile_title").css(({
            'visibility': 'hidden'

        }));
        $(".title").css(({
            'visibility': 'visible'
        }));
        $("#portfolio-items").css(({
            'margin-left': '2%'
        }));
        $(".portfolio_full_screen_image").css(({
            'visibility': 'visible'
        }));
        $(".i_vid_1").css(({
            'margin-left': 'auto',
            'margin-right': 'auto'
        }));
        $(".i_vid_2").css(({
            'margin-left': 'auto'
        }));
        $(".i_vid_3").css(({
            'margin-left': 'auto'
        }));
        $(".cd_display").css(({
            'display': 'inline-flex'
        }));
        $(".cd_small").css(({
            'visibility': 'hidden',
            'height': '20px'
        }));
        $(".cd_normal").css(({
            'visibility': 'visible',
            'height': 'auto'
        }));
        $(".music").css(({
            'margin-bottom': '36px'
        }));
        $(".photo_wrapper_top").css(({
            'height': '100%',
            'webkit-background-size': 'contain',
            'overflow': 'hidden',
            'background-size': 'cover',
            'background-position': '50% 50%'
        }));
        $(".iframe_margin").css(({
            'margin-left': '0px'
        }));
    }
}



