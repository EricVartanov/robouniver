$(document).ready(function() {

    // фиксация верхнего меню
    $(window).scroll(function() {
        if ($(this).scrollTop() > 23) {
            $('.header').addClass('fixed-navbar');

        } else if ($(this).scrollTop() < 23) {
            $('.header').removeClass('fixed-navbar');
        }
    });



    //функция развернуть-свернуть при нажатии на кнопку "посмотреть все"
    // карта 
    const progBtn = $('.programm__see-all')
    const progBtnText = $('.programm__see-all_text')
    const map = $('.programm__map')
    const mapArrow = $('.programm__down-arrow')


    //22 плюса
    const pluses = $('.pluses__content')
    const plusesBtn = $('.pluses__see-all')
    const plusesArrow = $('.pluses__down-arrow')
    const plusesBtnText = $('.pluses__see-all_text')


    progBtn.click(() => {
        if (map.hasClass('programm__see-all_closed')) {
            map.removeClass('programm__see-all_closed')
            map.addClass('programm__see-all_opened')
            mapArrow.addClass('see-all__arrow_up')
            progBtnText.text('Свернуть')

        } else {

            map.removeClass('programm__see-all_opened')
            map.addClass('programm__see-all_closed')
            mapArrow.removeClass('see-all__arrow_up')
            progBtnText.text('Смотреть полностью')
        }

    })

    plusesBtn.click(() => {
        if (pluses.hasClass('pluses__see-all_closed')) {
            pluses.removeClass('pluses__see-all_closed')
            pluses.addClass('pluses__see-all_opened')
            plusesArrow.addClass('see-all__arrow_up')
            plusesBtnText.text('Свернуть')

        } else {

            pluses.removeClass('pluses__see-all_opened')
            pluses.addClass('pluses__see-all_closed')
            plusesArrow.removeClass('see-all__arrow_up')
            plusesBtnText.text('Смотреть еще 16 преимуществ')
        }

    })



    //кнопака мобильного меню с меню
    const mobileMenuBtn = $('.mobile__menu-btn')
    const mobileMenuAllRows = $('.menu-btn__row')
    const mobileMenuRow1 = $('.row-1')
    const mobileMenuRow2 = $('.row-2')
    const mobileMenuRow3 = $('.row-3')
    const mobileMenu = $('.mobile-navbar__nav')
    mobileMenu.hide()
    mobileMenuBtn.click(() => {
        if (mobileMenuRow1.hasClass('row-1-animation') && mobileMenuRow2.hasClass('row-2-animation') && mobileMenuRow3.hasClass('row-3-animation')) {
            mobileMenuAllRows.toggleClass('row-animation-none')
        } else {
            mobileMenuRow1.toggleClass('row-1-animation')
            mobileMenuRow2.toggleClass('row-2-animation')
            mobileMenuRow3.toggleClass('row-3-animation')
        }
        // mobileMenu.toggleClass('mobile-navbar__nav_opened')
        mobileMenu.slideToggle(500)
    })





})