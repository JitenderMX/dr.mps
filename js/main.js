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
        $(this).next('.faq-text').slideToggle(300);
        // Toggle the arrow icon direction
        $(this).find('i').toggleClass('fa-chevron-down fa-chevron-up');
    });