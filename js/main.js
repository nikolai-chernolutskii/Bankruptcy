$(function(){

    $('.slider__inner, .news__slider-inner').slick({
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
    });

    $('select').styler();

    $('.header__menu').on('click', function(){
        $('.menu ul').slideToggle();
    });

    // $('.menu__btn').on('click', function(){
    //     $('.menu__list').toggleClass('menu__list--active')
    // });

});