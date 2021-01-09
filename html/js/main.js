jQuery(document).ready(function($){	
    if ($('#sig').length>0){
        var sig = $('#sig').signature();
        $('#sigClear').click(function() {
            sig.signature('clear');
        });
    }
    $('.btn-answer').on('click',function(){
        let value = $(this).val();
        $(this).closest('.row').find('.answer').val(value);
    });
});
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()