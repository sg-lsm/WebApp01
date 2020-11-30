$(function() {
    var sw=false;
    $('.term').click(function() {
        if(sw==false){
            $(this).removeClass('small');
            $(this).addClass('large');
            sw=true;
        }else{
            $(this).removeClass('large');
            $(this).addClass('small')
            sw=false;
        }
    })
});