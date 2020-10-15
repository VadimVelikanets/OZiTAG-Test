$(function() {
    //Открытие меню
    $('.hamburger__btn').click(
        function(e){
            e.preventDefault();
            $('.header__menu').slideToggle();
            $(this).find('img').slideToggle(0);
        }
    )
    //Открытие пунктов меню на мобилом
    $('.header__menu .btn-arrow').click(
        function(){
            if($(this).parent().parent().hasClass('active')){
                $(this).parent().parent().removeClass('active')
            } else{
                $(this).parent().parent().addClass('active')
            }
            let activeBlock = $(this);
            $('html').animate({
                scrollTop: $(activeBlock).offset().top - 20
            }, 500);
        }
    )

})
