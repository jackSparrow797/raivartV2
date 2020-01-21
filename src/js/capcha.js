
$(document).on('af_complete', function (event, response) {
    var form = response.form;

    if (response.success) {
        switch (form.attr('id')) {
            case "form-diller-send":
                $('#form-diller').modal('hide');
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