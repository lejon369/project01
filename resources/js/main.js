// mixit up plugin
var mixer = mixitup(".grid-portfolio-container");
// scrollify section
$(function () {
    $.scrollify({
        section: ".scrollify1",
        setHeights: false,
    });
});
// Humberger menu 
function openMenu() {
    document.getElementById("navbar").style.height = "100%";
}
function closeMenu() {
    document.getElementById("navbar").style.height = "0";
}
// smotth scroll
$(function(){
    $('.menu-item a, .scroll-down a').on('click', function(){
        $('html, body').animate({
           scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
        return false;
    });
});




