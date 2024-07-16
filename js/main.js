// Loading Common Element Using External File
$("#header").load("header.html");
$("#footer").load("footer.html");
$("#faq").load("faq.html");
$("#admission-year").load("admission-year.html");

$(".show-more").click(function(){
    $(this).toggleClass('active')
    $(this).next().slideToggle(500)
})

AOS.init();

    $('.faq-h').click(function () {
        // Toggle the display of the FAQ answer
        $('.faq-h').next('.faq-text').slideUp(300);
        $(this).next('.faq-text').slideToggle(300);
        // Toggle the arrow icon direction
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });

    $(".brand-slider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 4000,
        pauseOnHover: false,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    })