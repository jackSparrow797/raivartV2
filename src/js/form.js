$(document).ready(function () {
    $(document).on('click', ".open-phone", function (e) {
        e.preventDefault();
        let button = $(this);
        button.next().removeClass('d-none');
        button.remove();
    });
});
