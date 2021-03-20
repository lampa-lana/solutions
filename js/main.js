const swiper = new Swiper(".us-slider", {
  loop: false,
   keyboard: {
      enabled: true,
    },
  
  // Navigation arrows
  navigation: {
    nextEl: ".us-slider__button-next",
    prevEl: ".us-slider__button-prev",
  },

});

   $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста укажите свое имя",
          minlength: "Ваше имя должно содержать минимум 2 символа",
        },
        email: {
          required: "Нам нужен Ваш контактный адрес электронной почты",
          email: "Ваша электронная почта должна быть в формате name@domain.com",
        },
         checkbox: {
          required: "Нам необходимо Ваше согласие на обработку персональных данных. <br>Поставьте, пожалуйста галочку ",          
        },
         website: {
          url: "Адрес сайта должен быть в формате https://site.domain или http://site.domain ",          
        },
        phone: {
          required: "Нам нужен Ваш контактный номер телефона",
          phone: "Ваш номер телефона должен быть в формате +7(999) 999-99-99",
          minlength: "Ваш номер телефона должен содержать минимум 10 цифр",
        },
      },
    });
    
  });
  $(function(){  
    $(".request-input-number").mask("+7(999) 999-99-99", {
      } );
  }); 
