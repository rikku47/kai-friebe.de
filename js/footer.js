$(document).ready(function () {
    $("#footer-button").click(function () {
        $("footer").slideToggle(300);
        if ($("footer").is(':visible'))
            $("footer").css('display', 'flex');
        // $("footer").toggleClass('flex-row');
    });
});