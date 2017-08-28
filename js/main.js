(function () {
    var $digitHour   = $('#hours'),
        $digitMinute = $('#minutes'),
        $digitSecond = $('#seconds');

    function zeroPad (number) {
        if (number < 10) {
            number = "0" + number.toString();
        }
        return number;
    }

    setInterval(function () {
        var now    = new Date(),
            hour   = 23 - now.getHours(),
            minute = 59 - now.getMinutes(),
            second = 59 - now.getSeconds();

        $digitSecond.text(zeroPad(second));
        $digitMinute.text(zeroPad(minute));
        $digitHour.text(zeroPad(hour));
    }, 1000);
})();

var $block = $(".light-obj");
var $body = $('body');

$block.circulate({
    speed: 1000,
    height: 250,
    width: 600,
    loop: true
});

setInterval(function () {
    if ($body.hasClass('night')) {
        $body.removeClass('night')
    } else {
        $body.addClass('night')
    }
}, 4000);