function slowScroll(id) {
    var offset = 0;
    $('html, body').animate({
        scrollTop: $(id).offset().top - offset
    }, 1);

    return false;
}

$('').css({"color": "black"})