function initSlider() {
	$('.slide-image').clone().addClass('light-box-item').appendTo('.thumbnails');

	// Variables
	let sliderWidth;
	let thumbnailWidth;
	const slideCount = $('.hero-slide').length;
	const lastSlide = slideCount - 1;

	$('.hero-slide').prop('id', function (index) {
		if ($(this).index() == 0) {
			$(this).addClass('active');
		}
		return index;
	});

	$('.thumbnails .slide-image').prop('id', function (index) {
		if ($(this).index() == 0) {
			$(this).addClass('active');
		}
		return index;
	});

	if (slideCount == 1) {
		$('.prev-slide').hide();
		$('.next-slide').hide();
	}

	// Grab slide width on page load
	sliderWidth = $('.hero-slider').width();
	thumbnailWidth = $('.thumbnails .slide-image').width();
	// Update slide width on window resize
	$(window).on('resize', function () {
		sliderWidth = $('.hero-slider').width();
		thumbnailWidth = $('.thumbnails .slide-image').width();
	});

	// Animate Slider Left
	$('body').delegate('.prev-slide', 'click', function () {
		if ($('.hero-slide.active').attr('id') != 0) {
			// prettier-ignore
			$('.thumbnails').animate({
				left: `+=${thumbnailWidth + 36}`,
			}, 1000, function() {
				// Animation complete
			});
			// prettier-ignore
			$('.hero-slider').animate({
				left: `+=${sliderWidth}`,
			}, 1000, function() {
				// Animation complete
			});
			$('.hero-slide.active').removeClass('active').prev().addClass('active');
			$('.thumbnails .slide-image.active').removeClass('active').prev().addClass('active');
		}
	});

	// Animate Slider Right
	$('body').delegate('.next-slide', 'click', function () {
		if ($('.hero-slide.active').attr('id') != lastSlide) {
			// prettier-ignore
			$('.thumbnails').animate({
				left: `-=${thumbnailWidth + 36}`,
			}, 1000, function() {
				// Animation complete
			});
			// prettier-ignore
			$('.hero-slider').animate({
				left: `-=${sliderWidth}`,
			}, 1000, function() {
				// Animation complete
			});
			$('.hero-slide.active').removeClass('active').next().addClass('active');
			$('.thumbnails .slide-image.active').removeClass('active').next().addClass('active');
		}
	});
}
