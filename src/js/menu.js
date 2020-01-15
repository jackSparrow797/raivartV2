$(document).ready(function () {

    $(document).on('click', '.menu-mobile-toggle', function (e) {
       e.preventDefault();
       let target = $(this).attr('href');
        $(target).slideToggle("slow");
        $(this).toggleClass('open');
    });

});