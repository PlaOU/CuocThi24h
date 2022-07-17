$(document).ready(function(){
    var count = 0;
    var m = 0;
    const user_name = [];
    const password = [];
    $('.register-form').hide();
    $('.user').hide();
    $('.signout').hide();
    $('.chat-page').hide();

    $('.signup').click(function(){        
        $('.modal').show(); 
        $('.login-form').hide();  
        $('.register-form').show(); 
        $('.auth-form__input-email').val('');  
        $('.auth-form__input-password').val('');
        $('.auth-form__input-repassword').val('');   
    });  
    
    $('.login').click(function(){
        $('.modal').show(); 
        $('.login-form').show(); 
        $('.register-form').hide();
        $('.auth-form__login-email').val('');
        $('.auth-form__login-password').val('');
    })

    $('.btn-back').click(function(){
        $('.modal').hide();
    })

    $('.auth-form_swith-login').click(function(){
        $('.login-form').show(); 
        $('.register-form').hide();
        $('.auth-form__login-email').val('');
        $('.auth-form__login-password').val('');
    })

    $('.auth-form_swith-register').click(function(){ 
        $('.login-form').hide();  
        $('.register-form').show(); 
        $('.auth-form__input-email').val('');  
        $('.auth-form__input-password').val('');
        $('.auth-form__input-repassword').val('');
    })

    $('.btn-signup').click(function(){
        var F = 0;        
        
        if(!$('.auth-form__input-email').val()){
            $('.auth-form__input-email').addClass("empty_field");
            $('.auth-form__input-email').attr("placeholder", "Không được để trống!");
            F = 1;
            
        }

        if(!$('.auth-form__input-password').val()){
            $('.auth-form__input-password').addClass("empty_field");
            $('.auth-form__input-password').attr("placeholder", "Không được để trống!");        
            F = 1;    
        }

        if(!$('.auth-form__input-repassword').val()){
            $('.auth-form__input-repassword').addClass("empty_field");
            $('.auth-form__input-repassword').attr("placeholder", "Không được để trống!");     
            F = 1;       
        }
        
        if(m >0){
            for(let i=0; i<m; i++){
                if($('.auth-form__input-email').val() == user_name[i]){
                    $('.auth-form__input-email').addClass("empty_field");
                    $('.auth-form__input-email').val('');
                    $('.auth-form__input-email').attr("placeholder", "User này đã được sử dụng!");
                    F = 1;
                }
            }
        }

        if($('.auth-form__input-repassword').val() != $('.auth-form__input-password').val()){
            $('.auth-form__input-repassword').addClass("empty_field");
            $('.auth-form__input-repassword').val('');
            $('.auth-form__input-repassword').attr("placeholder", "Mật khẩu nhập lại không giống!");  
            F = 1;   
        }

        if(F == 0){
            user_name[m] = $('.auth-form__input-email').val();
            password[m] = $('.auth-form__input-password').val(); 
            m++;
            alert("Đăng ký thành công!");  
            $('.auth-form__login-email').val('');
            $('.auth-form__login-password').val('');
            $('.login-form').show(); 
            $('.register-form').hide();
        }
    })

    $('.btn-login').click(function(){
        var T = 0;
           
        if(!$('.auth-form__login-email').val()){
            $('.auth-form__login-email').addClass("empty_field");
            $('.auth-form__login-email').attr("placeholder", "Không được để trống!");
            T = 1;            
        }

        if(!$('.auth-form__login-password').val()){
            $('.auth-form__login-password').addClass("empty_field");
            $('.auth-form__login-password').attr("placeholder", "Không được để trống!");     
            T = 1;       
        }

        if(T == 0){            
            for(let i = 0; i < m; i++){                
                if($('.auth-form__login-email').val() == user_name[i]){
                    if($('.auth-form__login-password').val() == password[i]){         
                        $('.modal').hide();                
                        $('.signup').hide();
                        $('.login').hide();
                        $('.user').show();
                        $('.signout').show();
                        $('.user-name').html(" " + user_name[i]);
                        T = 1;
                    }
                    else{
                        alert("Sai mật khẩu!"); 
                        T = 1;
                    }
                }                
            }
            
            if(T == 0){
                alert("Không tồn tại user name này!"); 
            }
        }
    })

    $('.signout').click(function(){
        $('.user').hide();
        $('.signout').hide();
        $('.signup').show();
        $('.login').show();
    })

    $('.chat-switch').click(function(){
        $('.main-content').hide();
        $('.chat-page').show();
        $('#slider').hide();
    })

    $('.main-switch').click(function(){
        $('.main-content').show();
        $('.chat-page').hide();
        $('#slider').show();
    })

    
    $('.submit').click(function(){
        if($('#input-message').val() !=""){
            var dt = new Date();
            var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
            var mess = $('#input-message').val();            
            $('.bubbleWrapper').append(`<div class = inlineContainer${count}><div>`);
            $('.inlineContainer' + count).addClass("own");
            $('.inlineContainer' + count).append(`<div class = ownBubble${count}>${mess}<div>`);
            $('.ownBubble' + count).addClass("own");
            $('.bubbleWrapper').append("<span class = own>" + time + "</span");
            count++;

            $('.bubbleWrapper').append(`<div class = inlineContainer${count}><div>`);
            $('.inlineContainer' + count).append("<img class=inlineIcon src='https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/288988561_3365367797124337_9011349159566551624_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=XZ-mSUAnAgEAX8r45_G&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT9IeRlat6rG8ETI_qlFErjRBrr_DVs3nk59gQ3EeA6X7Q&oe=62D7636A'/>");
            $('.inlineContainer' + count).append(`<div class = otherBubble${count}>Vui lòng để lại lời nhắn và chúng tôi sẽ phản hồi bạn trong thời gian sớm nhất<div>`);
            $('otherBubble' + count).addClass("other");
            $('.bubbleWrapper').append("<span class = other>" + time + "</span");
            count++;

            $('#input-message').val("");
        }
    })
    
})

