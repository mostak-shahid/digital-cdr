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