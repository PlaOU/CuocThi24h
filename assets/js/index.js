$(document).ready(function(){
    $('.modal').hide();

    $('.signup').click(function(){        
        $('.modal').show(); 
        $('.login-form').hide();  
        $('.register-form').show();   
    });  
    
    $('.login').click(function(){
        $('.modal').show(); 
        $('.login-form').show(); 
        $('.register-form').hide();
    })

    $('.btn-back').click(function(){
        $('.modal').hide();
    })

    $('.auth-form_swith-login').click(function(){
        $('.login-form').show(); 
        $('.register-form').hide();
    })

    $('.auth-form_swith-register').click(function(){ 
        $('.login-form').hide();  
        $('.register-form').show(); 
    })
})