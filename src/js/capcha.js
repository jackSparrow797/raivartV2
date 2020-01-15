import {load} from "recaptcha-v3";

$(document).on('af_complete', function (event, response) {
    var form = response.form;
    //public key
    load('6Lekhc8UAAAAALhSz9VS2xFMWuoVxt7c1dTOMmt1').then((recaptcha) => {
        recaptcha.execute('action_name').then((token) => {
            $('form').each(function (index) {
                $(this).find('input[name="token"]').val(token);
            });
        })
    });

    if (response.success) {
        switch (form.attr('id')) {
            case "form-cost":
                $('#form-diller-send').modal('hide');
                break;

            case "form-call":
                $('#modal-call').modal('hide');
                break;

            case "form-repairs":
                $('#modal-repairs').modal('hide');
                break;

            case "form-b2b":
                $('#modal-b2b').modal('hide');
                break;
        }
        // $('#success').modal('show');
        // $('#success .modal-body p').html(response.message);
    } else {
        console.log(response)
    }
});