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
        $(".top_background").css('margin-bottom', '-455px');

    }
    else {
        $(".top_background").css('margin-bottom', '0');
    }
});

