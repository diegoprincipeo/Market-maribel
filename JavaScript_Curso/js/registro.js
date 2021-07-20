$(document).ready( 
    
    setTimeout(function(){
    
    $('.content-form').css("opacity", "1");
    }, 100)
)

$('#email').on('focus', function(){
    
    $('.lbl-email').css("margin-top", "-20px");
    $('.lbl-email').css("font-size", "14px");
})

$('#email').on('focusout', function(){
    
    if($('#email').val().length < 1){
        
        $('.lbl-email').css("margin-top", "10px");
        $('.lbl-email').css("font-size", "16px");
    }else{
        $('.lbl-email').css("margin-top", "-20px");
    $('.lbl-email').css("font-size", "14px");
    }
})

$('#clave').on('focus', function(){
    
    $('.lbl-clave').css("margin-top", "20px");
    $('.lbl-clave').css("font-size", "14px");
})

$('#clave').on('focusout', function(){
    
    if($('#clave').val().length < 1){
        
        $('.lbl-clave').css("margin-top", "50px");
        $('.lbl-clave').css("font-size", "15px");
    }else{
        $('.lbl-clave').css("margin-top", "20px");
    $('.lbl-clave').css("font-size", "14px");
    }
})

$('#confirm-clave').on('focus', function(){
    
    $('.lbl-confirm-clave').css("margin-top", "20px");
    $('.lbl-confirm-clave').css("font-size", "14px");
})

$('#confirm-clave').on('focusout', function(){
    
    if($('#confirm-clave').val().length < 1){
        
        $('.lbl-confirm-clave').css("margin-top", "50px");
        $('.lbl-confirm-clave').css("font-size", "15px");
    }else{
        $('.lbl-confirm-clave').css("margin-top", "20px");
    $('.lbl-confirm-clave').css("font-size", "14px");
    }
})