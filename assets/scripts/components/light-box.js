$('body').delegate('.light-box-item', 'click', function () {
	$(this).clone().removeClass('light-box-item slide-image').addClass('light-box-image').appendTo('.light-box-items');
	$('.light-box-wrapper').addClass('active');
	$('body').addClass('no-scroll');
});

$('body').delegate('.close-light-box', 'click', function () {
	$('.light-box-wrapper').removeClass('active');
	$('.light-box-items').empty();
	$('body').removeClass('no-scroll');
});
