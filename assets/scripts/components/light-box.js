$('body').delegate('.light-box-item', 'click', function () {
	$(this).clone().removeClass('light-box-item slide-image').addClass('light-box-image').appendTo('.light-box-items');
	$('body').addClass('no-scroll');
	$('.light-box-wrapper').addClass('active');
});

$('body').delegate('.close-light-box', 'click', function () {
	$('.light-box-wrapper').removeClass('active');
	$('body').removeClass('no-scroll');
	$('.light-box-items').empty();
});
