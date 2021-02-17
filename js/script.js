$('.js-intro-txt').addClass('_active');
$(document).ready(() => {
    
    jQuery(window).scroll(function(){
        var $sections = $('section');
        $sections.each(function(i,el){
        var top  = $(el).offset().top-100;
        var bottom = top +$(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
    if( scroll > top && scroll < bottom){
        $('a.active').removeClass('active');
        $('a[href="#'+id+'"]').addClass('active');
    }
    })
    });

    $(".header__nav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок
            top = $(id).offset().top;
            
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });
    $('.burger__nav_item').on('click', function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();
        $('.js-burger-menu').removeClass('js-active');
        // получем идентификатор блока из атрибута href
        $('.js-burger-trigger').removeClass('js-active');
        $('body').removeClass('overflowBd');
        var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок
            top = $(id).offset().top-60;
            
        // анимируем переход к блоку, время: 800 мс
        $('body,html').animate({scrollTop: top}, 800);
    });

    $('.inputTel').inputmask("+7-999-999-99-99");
    $(window).scroll(function(){
        $('.header').toggleClass('scrollHeader', $(this).scrollTop() > 300);
    });

    $('.js-casesModal-overlay').on('click', () => {
        $('.js-casesModal').removeClass('js-active');
        $('body').removeClass('overflowBd');
    })

    function burgerMenuToggle() {
        $('.js-burger-trigger').toggleClass('js-active');
        $('.js-burger-menu').toggleClass('js-active');
        $('body').toggleClass('overflowBd');
    }
    function toggleBrifModal(e) {
        $('body').addClass('overflowBd');
        $('.js-brifModal').toggleClass('js-active');
        if ($('.burger__menu')) {
            $('.js-burger-trigger').removeClass('js-active');
            $('.js-burger-menu').removeClass('js-active');
            $('body').addClass('overflowBd');
        }
        if ( $('.js-servicesModal')) {
            $('.js-servicesModal').removeClass('js-active');
            $('body').addClass('overflowBd');
            // $('.js-burger-menu').removeClass('js-active');
        }
        if (e.target.classList.contains('caseModal_trigger') || e.target.classList.contains('overlay')) {
            console.log('trigger');
            $('body').removeClass('overflowBd');
        }
    }
    function toggleCaseModal(e) {
        let number = $(this).attr('data-case');

        if ($('.js-casesModal').hasClass('js-active')) {
            $('body').removeClass('overflowBd');
        } else {
            $('body').addClass('overflowBd');
        } 
        if ($(this).hasClass('cases__item')) {
            $('body').addClass('overflowBd');
            $('.casesModal__main').animate({
                scrollTop: 0
            });
        }
        $('.js-casesModal').removeClass('js-active');
        $(`.js-casesModal[data-case="${number}"]`).addClass('js-active');
    }
    function toggleServicesModal(e) {
        let number = $(this).attr('data-service');
        $('body').toggleClass('overflowBd');
        $('.js-servicesModal').removeClass('js-active');
        $(`.js-servicesModal[data-service="${number}"]`).addClass('js-active');
    }
    $('.js-burger-trigger').on('click', burgerMenuToggle);
    $('.js-casesModal-trigger').on('click', toggleCaseModal);
    $('.js-servicesModal-trigger').on('click', toggleServicesModal);
    $('.js-brifModal-trigger').on('click', toggleBrifModal);
    function ptTop() {
        let headerHeight = $('.header').css('height');
        console.log(headerHeight);
        $('.ptItem').css('padding-top', headerHeight);
    }
    ptTop();
    $(document).on('resize', ptTop);
    $('.js-services-item').on('click', function() {
        $('.js-services-item').removeClass('js-active')
        $(this).addClass('js-active');
    });
    $('.js-price-item').on('click', function() {
        $('.js-price-item').removeClass('js-active')
        $(this).addClass('js-active');
    });
    if (screen.width > 768) {
        $('.parallax__item').addClass('layer');
        $('.parallax').parallax();
    }
    $('#fileFF').on('change', function() {
        let fileName = document.getElementById('fileFF').files[0].name;
        $('#mainFileName').text(fileName);
        $('#fileFF').attr('disabled', 'disabled');
        $('.fileName').addClass('js-active');
    });
    $('#fileFF2').on('change', function() {
        let fileName = document.getElementById('fileFF2').files[0].name;
        $('#mainFileName2').text(fileName);
        $('#fileFF2').attr('disabled', 'disabled');
        $('.fileName2').addClass('js-active');
    });
    $(".brifModal-form").on('submit', () => {
        if ($('input[name=services]:checked').length > 0) {
            $('.js-radio__service_er').removeClass('js-active');
        } else {
            $('.js-radio__service_er').addClass('js-active');
            $('.brifModal__main').animate({
                scrollTop: 0
            });
        }
        if ($('input[name=budget]:checked').length > 0) {
            $('.js-radio__budget-er').removeClass('js-active');
        } else {
            $('.js-radio__budget-er').addClass('js-active');
            $('.brifModal__main').animate({
                scrollTop: 0
            });
        }
    });
    
    $(function () {
        $(".brifModal-form").validate({
            rules: {
                brif__name: {
                    required: true,
                },
                brif__company: {
                    required: true,
                },
                brif__email: {
                    required: true,
                },
                brif__tel: {
                    required: true,
                },
            },
            messages: {
                brif__name: {
                    required: "Поле обязательно к заполнению",
                },
                brif__company: {
                    required: "Поле обязательно к заполнению",
                },
                brif__email: {
                    required: "Поле обязательно к заполнению",
                    email: "Необходим формат email: aaa@aaa.com" 
                },
                brif__tel: {
                    required: "Поле обязательно к заполнению",
                },
            }
        });
    });
    // $(".brifModal-form").validate({
    //     rules: {
    //         text: {
    //             required: true,
    //         },
    //         email: {
    //             required: true,
    //         },
    //         tel: {
    //             required: true,
    //         }
    //     },
    //     messages: {
    //         text: {
    //             required: "Поле обязательно для заполнения",
    //         },
    //         email: {
    //             required: "Поле обязательно для заполнения",
    //         },
    //         tel: {
    //             required: "Поле обязательно для заполнения",
    //         }
    //     },

    // });
});
if (screen.width > 768) {
    
    document.addEventListener('DOMContentLoaded', () => {
      
        let animItems = document.querySelectorAll('._anim-items');
        if (animItems.length > 0) {
            console.log('go')
            window.addEventListener('scroll', animOnScroll);
            function animOnScroll(params) {
                for ( let i = 0; i < animItems.length; i++) {
                    const animItem = animItems[i];
                    const animItemHeight = animItem.offsetHeight;
                    const animItemOffset = offset(animItem).top;
                    const animStart = 4;
        
                    let animItemPoint = window.innerHeight - animItemHeight / animStart;
        
                    if (animItemHeight > window.innerHeight) {
                        animItemPoint = window.innerHeight - window.innerHeight / animStart;
                    }
        
                    if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                        animItem.classList.add('_active');
                    } else {
                        if (!animItem.classList.contains('_anim-no-hide')) {
                            animItem.classList.remove('_active');
                        }
        
                    }
                }
                
            }
            function offset(el) {
                const rect = el.getBoundingClientRect(),
                      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
                      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
            }
            setTimeout(() => {
                animOnScroll();
            }, 500);
        }
    });
} else {
    $('._anim-items').addClass('_active');
}