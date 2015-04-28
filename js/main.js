/**
 * Created by mollymendelsohn-carr on 10/23/14.
 */
function is_touch_device() {
  return !!('ontouchstart' in window);
}

jQuery(window).load(function() {


//------------------------------------------------------------------------
//Helper Methods -->
//------------------------------------------------------------------------


    var StringFormat = function () {
        var s = arguments[0];
        for (var i = 0; i < arguments.length - 1; i++) {
            var regExpression = new RegExp("\\{" + i + "\\}", "gm");
            s = s.replace(regExpression, arguments[i + 1]);
        }
        return s;
    };

    function is_touch_device() {
        return !!('ontouchstart' in window);
    }

    if (!("ontouchstart" in document.documentElement)) {
        document.documentElement.className += " no-touch";
    }});

