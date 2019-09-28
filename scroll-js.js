$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() - 80 > $nav.height());
  });
});

$(document).ready(function(){
	$("a[href*=#]").on("click", function(e){

	var anchor = $(this);

	$('html, body').stop().animate({
		scrollTop: $(anchor.attr('href')).offset().top
		}, 777);
		e.preventDefault();
		return false;
	});
});