$(document).ready(function () {
    const link = document.querySelectorAll('.navLink');
    const menu = document.querySelector('.menu');


    $(document).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height()) {
            menu.classList.add("scrolled")

        } else {
            menu.classList.remove("scrolled")

        }
    });
});