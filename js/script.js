// JS-функция определения поддержки WebP
function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });

$(document).ready(function() {
    $('.header__burger, .menu__list, .ovelay').click(function(event) {
        $('.header__burger, .menu__list, .overlay').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// Слайдер

$(document).ready(function(){
    $('.carousel').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/arrow_prev.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/arrow_next.png" alt=""></button>',
        responsive: [
            {
              breakpoint: 993,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 577,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

    // Модальные окна
    $('.btn-price').each(function(i) {
      $(this).on('click', function(e) {
        e.preventDefault();
        $('.card-item__wrap_descr').eq(i).toggleClass('card-item__wrap_descr-active');
        $('.card-item__hover').eq(i).toggleClass('card-item__hover_active');
       });
    });
    $('[data-modal=call_back]').on('click', function() {
      $('.overlay__modal, #modal__call-back').fadeIn('slow');
    $('.modal__close, .modal__close-thanks').on('click', function() {
      $('.overlay__modal, #modal__call-back, #thanks').fadeOut();
    });
    });

    
    $('.btn-promo').on('click', function() {
      $('.overlay__modal, .modal-calc').fadeIn('slow');
    $('.modal-calc__close').on('click', function() {
      $('.overlay__modal, .modal-calc').fadeOut();
    });
    });

    /* function validateForms(form) {
      $(form).validate({
        rules: {
          name: "required",
          email: {
            required: true,
            email: true,
            },
            phone: true
        },
        messages: {
          name: "Введите пожалуйста имя",
          email: {
            required: "Введите пожалйуста свой E-mail",
            email: "Ваш e-mail должен быть в формате: name@domain.com"
          },
          phone: "Введите свой телефон"        
        }
      });
    } */

    // Валидация форм

    function valideForms(form) {
      $(form).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone: "required",
          email: {
            required: true,
            email: true
          }
        },
      messages: {
        name:  "Введите пожалуйста имя",
        phone: "Пожалуйста, введите номер телефона",
        email: {
              required: "Пожалуйста, введите свою почту",
              email: "Неправильно ввели свою почту"
        }
      }
      });
    }

    valideForms('#modal__call');
    valideForms('#form-consultation');
    valideForms('#form-questions');


    
  });
  
// Калькулятор расчета стоимости доставки груза

  var btn = document.querySelector('#btn'),
    out = document.querySelector('#out'),
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    load = document.querySelector('#load'),
    del = document.querySelector('#del'),
    frag = document.querySelector('#frag'),
    range = document.querySelector('#range'),
    rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = 500;
    weight = document.querySelector('#weight'),
    vol = document.querySelector('#vol'),
    kg = 1,
    kub = 10,
    km = 1;
 // range slider
    range.onchange = function(){
      var rasstoyanie = document.querySelector('.rasstoyanie').innerHTML = range.value;
    };
  // Basic function  
btn.onclick = function(){
  if (weight.value != '' && vol.value != '') {
      if (load.checked){ 
          load.value = 1500; }
        else 
        {
          load.value = 0;
      }
      if (del.checked){ 
          del.value = 10; }
        else 
        {
          del.value = 0;
      }
      if (frag.checked){ 
          frag.value = 20; }
        else 
        {
          frag.value = 0;
      }
 
var sum = (weight.value * kg) + (vol.value * kub) + Number(load.value) + + Number(del.value) + Number(frag.value) + (range.value * km);
      out.innerHTML = sum;
  }else{
alert('Введите вес и объем груза');
}
};

//Маска номера телефона

$('input[name=phone]').mask('+38(999)-999-99-99');

// Плавный скролл 

$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  } else {
    $('.pageup').fadeOut();
  }
});

$("a[href^='#']").click(function() {
  let _href = $(this).attr("href");
  $("html, body").animate({scrollTop:$(_href).offset().top+"px"});
  return false;
});


// Mailer 

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function() {
    $(this).find("input").val(" ");
    $('#modal__call-back, .modal, .overlay').fadeOut();
    $('#thanks').fadeIn('slow');
    $('form').trigger('reset');
  });
  return false;
});





 
  
 