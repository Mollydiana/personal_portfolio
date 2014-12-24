/**
 * Created by mollymendelsohn-carr on 10/23/14.
 */
$(document).ready(function() {

    var doc_width = jQuery("body").width();

    if(doc_width > 1024)
    {
        var elemnt_width = doc_width/6;
    }
    else if(doc_width <= 1024 && doc_width > 850){
        var elemnt_width = doc_width/3;
    }
    else if(doc_width <= 850 && doc_width > 400){
        var elemnt_width = doc_width/3;
    }
    else{
        var elemnt_width = doc_width/2;
    }

    jQuery("#digital-items").children().width(elemnt_width);


    $('ul#filter li').click(function() {
        $('ul#filter li.current').removeClass('current');
        $(this).addClass('current');

        var filterVal = $(this).text().toLowerCase().replace(/ /g,'-');

        if(filterVal == 'all') {
            $('ul#digital-items li, img.absolute').animate({
                opacity: 1
            }, 1000);
            $("a[rel^='prettyPhoto']").each(function()
            {
                $(this).addClass('active-items');
            });
        } else {
            $('ul#digital-items li').each(function() {
                if(!$(this).hasClass(filterVal)) {
                    $(this).animate({
                        opacity: 0.1
                    }, 1000);
                } else {
                    $(this).animate({
                        opacity: 1
                    }, 1000);
                    $(this).find('a').addClass('active-items');
                }
            });
        }

        $("a[rel^='prettyPhoto']a[class~='active-items']").prettyPhoto({
            animation_speed: 'fast', /* fast/slow/normal */
            slideshow: false, /* false OR interval time in ms */
            autoplay_slideshow: false, /* true/false */
            opacity: 0.80, /* Value between 0 and 1 */
            show_title: true, /* true/false */
            allow_resize: true, /* Resize the photos bigger than viewport. true/false */
            default_width: 500,
            default_height: 344,
            counter_separator_label: '/', /* The separator for the gallery counter 1 "of" 2 */
            theme: 'pp_default', /* light_rounded / dark_rounded / light_square / dark_square / facebook */
            hideflash: false, /* Hides all the flash object on a page, set to TRUE if flash appears over prettyPhoto */
            wmode: 'opaque', /* Set the flash wmode attribute */
            autoplay: true, /* Automatically start videos: True/False */
            modal: false, /* If set to true, only the close button will close the window */
            overlay_gallery: false, /* If set to true, a gallery will overlay the fullscreen image on mouse over */
            keyboard_shortcuts: true, /* Set to false if you open forms inside prettyPhoto */
            deeplinking: false,
            social_tools: false
        });
        $('*').removeClass('active-items');
        return false;
    });
});


jQuery(window).resize(function(){


    var doc_width = jQuery("body").width();

    if(doc_width > 1024)
    {
        var elemnt_width = doc_width/6;
    }
    else if(doc_width <= 1024 && doc_width > 850){
        var elemnt_width = doc_width/3;
    }
    else if(doc_width <= 850 && doc_width > 400){
        var elemnt_width = doc_width/3;
    }
    else{
        var elemnt_width = doc_width/2;
    }

    jQuery("#digital-items").children().width(elemnt_width);
});