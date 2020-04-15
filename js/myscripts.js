$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $( ".topnavheader #background" ).fadeIn();
    } else {
        console.log('there');
        $( ".topnavheader #background" ).fadeOut();
    }
});