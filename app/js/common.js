$(function() {
    //Открытие меню
    $('.hamburger__btn').click(
        function(e){
            e.preventDefault();
            $('.header__menu').slideToggle();
            $(this).find('img').slideToggle(0);
        }
    )
    //Открытие подменю на мобильном
    $('.header__menu .btn-arrow').click(
        function(){
            $(this).parent().parent().siblings().removeClass('active');
            if($(this).parent().parent().hasClass('active')){
                $(this).parent().parent().removeClass('active')
            } else{
                $(this).parent().parent().addClass('active')
            }
            //Скролл до активного пункта
            let activeBlock = $(this);
            $('html').animate({
                scrollTop: $(activeBlock).offset().top - 20
            }, 500);
        }
    )

})
