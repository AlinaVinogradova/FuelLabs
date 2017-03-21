 $(document).ready(function(){
     
     //FIXED NAV
     $(window).scroll(function(){
      var sticky = $('.header'),
          scroll = $(window).scrollTop();

      if (scroll >= 1) sticky.addClass('fixed');
      else sticky.removeClass('fixed');
    });
     
     
     //Плавный переход по меню
      $(".menu li a, #menu-mobile a").click(function (e) { 
        e.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
          $(".nav-menu").animate({top:-300},350);
          $('#over-menu').fadeOut();
        $('body,html').animate({scrollTop: top -50}, 500);
    });
     
     
     
      //AJAX
    $(".contact-form, .popup-form").submit(function(event){
	event.preventDefault();
	var data = {};

 	data.name = $(this).find('input[name="name"]').val();
 	data.email = $(this).find('input[name="email"]').val();
 	data.text = $(this).find('input[name="text"]').val();
        
//     var name_pattern=/^[a-zA-Z'][a-zA-Z-' ]+$/, //регулярное выражение для имени
//     prov = name_pattern.test(data.name);  //проверка
//if (prov==true) {      //если прошло проверку паттерна
        
        
    if(data.name.length > 0 && data.email.length > 0 && data.text.length > 0 ){  //если поля заполнены
        $.ajax({
            method: 'POST',
            url: '/mail.php',
            data: data,
            success: function(){
                $('.message-status').fadeIn(300);   //окошно со статусом
                    setTimeout(function(){
                        $('.message-status').fadeOut(300);
                    },1000);
                $(".name, .email, .text").each(function (){   //очищаем поля
                        $(this).val("");
                    });
            }

          });
    }
        else{
            $('.message-status_empty').fadeIn(300);  
            setTimeout(function(){
                    $('.message-status_empty').fadeOut(300);
                },1000);
        }
      
        
//    }
//        else{
//            $('.message-status_error').fadeIn(300);   //ошибка
//            setTimeout(function(){
//                    $('.message-status_error').fadeOut(300);
//                },1000);
//        }
        
        
  });
     
     
     //MOBILE MENU
         $('.to-nav-menu').click(function(){
                $(".nav-menu").animate({top:0},350);
                $('#over-menu').fadeIn();
        }); 
         
      $( "#over-menu , .menu-mobile_close" ).click(function() {
          $(".nav-menu").animate({top:-300},350);
          $('#over-menu').fadeOut();
    });
     
     
     
     //POP UP
     $('.offer_btn1').click(function(e){
        e.preventDefault();
        $('.popup1').fadeIn(300);
    })
     $('.offer_btn2').click(function(e){
        e.preventDefault();
        $('.popup2').fadeIn(300);
    })
    $( ".popup-overlay, .popup-hide" ).click(function() {
        $('.popup').fadeOut(300);
    });
 });