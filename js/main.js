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
          $(".nav-menu").animate({right:-250},350);
          $('.menu-mobile_close').fadeOut(100);
          $('.to-nav-menu').css('opacity', 1);
          $('#over-menu').fadeOut();
        $('body,html').animate({scrollTop: top -50}, 500);
    });
     
     
     
      //AJAX отправка писем
    $(".contact-form").submit(function(event){
	event.preventDefault();
	var data = {};

 	data.name = $(this).find('input[name="name"]').val();
 	data.email = $(this).find('input[name="email"]').val();
 	data.text = $(this).find('textarea[name="text"]').val();

//     var name_pattern=/^[a-zA-Z'][a-zA-Z-' ]+$/, //регулярное выражение для имени
//     prov = name_pattern.test(data.name);  //проверка
//if (prov==true) {      //если прошло проверку паттерна
        
        
    if(data.name.length > 0 && data.email.length > 0 && data.text.length > 0 ){  //если поля заполнены
        $.ajax({
            type: 'POST',
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


     //AJAX отправка писем 2
     $(".popup-form").submit(function(event){
         event.preventDefault();
         var data = {};

         data.tel = $(this).find('input[name="tel"]').val();

//     var name_pattern=/^[a-zA-Z'][a-zA-Z-' ]+$/, //регулярное выражение для имени
//     prov = name_pattern.test(data.name);  //проверка
//if (prov==true) {      //если прошло проверку паттерна


         if(data.tel.length > 0 ){  //если поля заполнены
             $.ajax({
                 type: 'POST',
                 url: '/mail.php',
                 data: data,
                 success: function(){
                     $('.message-status').fadeIn(300);   //окошно со статусом
                     setTimeout(function(){
                         $('.message-status').fadeOut(300);
                        $('.offer_btn').css('z-index' , '1');
                        $('.popup').fadeOut(300);
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
             $(this).css('opacity', 0);
             $('.menu-mobile_close').fadeIn();
             $(".nav-menu").animate({right:0},350);
             $('#over-menu').fadeIn();
        }); 
         
      $( "#over-menu , .menu-mobile_close" ).click(function() {
          $('.menu-mobile_close').fadeOut(100);
          $('.to-nav-menu').css('opacity', 1);
          $(".nav-menu").animate({right:-250},350);
          $('#over-menu').fadeOut();
    });
     

     
     
     //POP UP
     $('.offer_btn1').click(function(e){
        e.preventDefault();
        $('.offer_btn').css('z-index' , '0');
        $('.popup1').fadeIn(300);
    })
     $('.offer_btn2').click(function(e){
        e.preventDefault();      
       $('.offer_btn').css('z-index' , '0');
        $('.popup2').fadeIn(300);
    })
    $( ".popup-overlay, .popup-hide" ).click(function() {
         $('.offer_btn').css('z-index' , '1');
        $('.popup').fadeOut(300);
    });
     
     
     //MASK для popup
     $("#pop-up_input_tel").mask("+380 - 999 - 99 - 99" ,{placeholder:" "});
     $("#pop-up_input_tel2").mask("+380 - 999 - 99 - 99" ,{placeholder:" "});
     
     
      
     //Анимация блока SECTION2        Interval - Timeout
     function section2() {
         $('.section22').animate({left: "0%"}, 3000);
         $('.section2').animate({left: "-100%"}, 3000);
        setTimeout(
            function(){
                 $('.section22').animate({left: "100%"}, 3000)
                 $('.section2').animate({left: "0%"}, 3000)
            }, 10000);
    };
    setInterval(section2, 20000) ;
 });