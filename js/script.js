const swiper = new Swiper('.swiper', {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

});

const swiper3 = new Swiper(".swiper3", {
    slidesPerView: 2,
    spaceBetween: 42,
    pagination: {
        el: ".swiper3-pagination",
        clickable: true,
    },
});


