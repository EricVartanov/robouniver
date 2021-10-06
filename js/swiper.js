const storiesSwiper = new Swiper('.stroies__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    preloadImages: false,

    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    },

    pagination: {
        el: '.stories-swiper-pagination',
        type: 'bullets',
    },


    // Navigation arrows
    navigation: {
        nextEl: '.stories__btn-next',
        prevEl: '.stories__btn-prev',

    },


});

// mobile swiper

const plusesSwiper = new Swiper('.mobile-pluses__swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    preloadImages: false,

    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    },

    pagination: {
        el: '.pluses__swiper-pagination',
        type: 'bullets',
    },




});

const giftsSwiper = new Swiper('.mobile-gifts__item-swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    preloadImages: false,


    slidesPerView: 1.5,
    spaceBetween: 10,

    lazy: {
        loadPrevNext: false,
        loadOnTransitionStart: false,
    },





});