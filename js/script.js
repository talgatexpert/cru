
var btnPrev = document.querySelector('.prev-btn')
var btnNext = document.querySelector('.next-btn')





var rev = $('.rev_slider');
rev.on('init', function (event, slick, currentSlide) {
    var
        cur = $(slick.$slides[slick.currentSlide]),
        next = cur.next(),
        prev = cur.prev();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    cur.removeClass('slick-snext').removeClass('slick-sprev');
    slick.$prev = prev;
    slick.$next = next;
}).on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    console.log('beforeChange');
    var
        cur = $(slick.$slides[nextSlide]);
    console.log(slick.$prev, slick.$next);
    slick.$prev.removeClass('slick-sprev');
    slick.$next.removeClass('slick-snext');
    next = cur.next(),
        prev = cur.prev();
    prev.prev();
    prev.next();
    prev.addClass('slick-sprev');
    next.addClass('slick-snext');
    slick.$prev = prev;
    slick.$next = next;
    cur.removeClass('slick-next').removeClass('slick-sprev');
});

rev.slick({
    speed: 1000,
    arrows: true,
    dots: false,
    focusOnSelect: true,
    prevArrow: btnPrev,
    nextArrow: btnNext,
    infinite: true,
    slidesPerRow: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    customPaging: function (slider, i) {
        return '';
    },
    /*infinite: false,*/
});



$(document).ready(function () {

    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');

        $('.tab ul.tabs li a').click(function (g) {
            g.preventDefault();

            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();

            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');

            tab.find('.tab_content').find('div.tab-item').not('div.tab-item:eq(' + index + ')').hide();
            tab.find('.tab_content').find('div.tab-item:eq(' + index + ')').show();

            g.preventDefault();
        });
    })(jQuery);

});
    

function animateHamburger() {
    $('#hamburger-button').toggleClass('open');
    /*animation from burger to X*/
}

function slideMenu() {
    $('.navbar').toggleClass('open');
    /*animation for slide down menu*/
}
$('#hamburger-button').click(function () {
    console.log('trying');
    animateHamburger();
    slideMenu(); /*attaching click handler to the burger button*/
});
var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1
});

$('.arrow-next').click(function () {
    var currentSlide = $('.active-slide'),
        nextSlide = currentSlide.next(),
        currentDot = $('.active-dot'),
        nextDot = currentDot.next();

    if (nextSlide.length === 0) {
        nextSlide = $('.slide-tab').first();
        nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    nextSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
});

$('.arrow-prev').click(function () {
    var currentSlide = $('.active-slide'),
        prevSlide = currentSlide.prev(),
        currentDot = $('.active-dot'),
        prevDot = currentDot.prev();

    if (prevSlide.length === 0) {
        prevSlide = $('.slide-tab').last();
        prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(600).removeClass('active-slide');
    prevSlide.fadeIn(600).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
});

// this bit will resize the sliders height to make it responsive

//this part will add a dot for each slider item, then assign a class name to the first child to get the active state


$('.slider-tab div:first').addClass('active-slide');
$('.slider-dots li:first').addClass('active-dot');



$('.tab-item-mob:first').css('display', 'block');


$(document).ready(function () {

    // SLIDER
    //$('.slider').slick({});

    $('.slider-tab-items').slick({
        dots: true,
        speed: 1000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="img/tab-next.png"/></div>',
        prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="img/tab-prev.png"/></div>',
    });
    $('.slider').slick({
        dots: true,
        speed: 1000,
        infinite: true,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 3000,
        nextArrow: '<div class="slick-custom-arrow slick-custom-arrow-right"><img src="img/tab-next.png"/></div>',
        prevArrow: '<div class="slick-custom-arrow slick-custom-arrow-left"><img src="img/tab-prev.png"/></div>',
    });
    var tabs = document.querySelectorAll('.tab-item-mob')

    var sliderNow = document.querySelector('.slider-tab')
    function tabSlider(e) {

        console.log(e.target)

        if (e.target.className == "slide-tab active-slide") {
            var dataTab = e.target.getAttribute('data-tab')

            for (let i = 0; i < tabs.length; i++) {
                if (dataTab == i) {
                    tabs[i].style.display = 'block'

                }
                else {
                    tabs[i].style.display = 'none'

                }
            }
        }
    }



    sliderNow.addEventListener('click', tabSlider)

});
