$(document).ready(function (){
    $(".smooth-scroll").click(function(event){
        event.preventDefault();
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(section).offset().top - 93
        }, 1200);
    });
});
