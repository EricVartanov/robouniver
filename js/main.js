$(document).ready(function() {

    // фиксация верхнего меню
    $(window).scroll(function() {
        if ($(this).scrollTop() > 23) {
            $('.header').addClass('fixed-header');

        } else if ($(this).scrollTop() < 23) {
            $('.header').removeClass('fixed-header');
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
            map.addClass('see-all_opened')
            mapArrow.addClass('see-all__arrow_up')
            progBtnText.text('Свернуть')

        } else {

            map.removeClass('see-all_opened')
            map.addClass('programm__see-all_closed')
            mapArrow.removeClass('see-all__arrow_up')
            progBtnText.text('Смотреть полностью')
        }

    })

    plusesBtn.click(() => {
        if (pluses.hasClass('pluses__see-all_closed')) {
            pluses.removeClass('pluses__see-all_closed')
            pluses.addClass('see-all_opened')
            plusesArrow.addClass('see-all__arrow_up')
            plusesBtnText.text('Свернуть')

        } else {

            pluses.removeClass('see-all_opened')
            pluses.addClass('pluses__see-all_closed')
            plusesArrow.removeClass('see-all__arrow_up')
            plusesBtnText.text('Смотреть еще 16 преимуществ')
        }

    })




})