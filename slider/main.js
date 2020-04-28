	`use strict`;

	let images = document.querySelectorAll(`.slide`);
	let nextBtn = document.querySelector(`.next`);
	let prevBtn = document.querySelector(`.prev`);
	let currentSlide = 0;
	let dots = document.querySelectorAll(`.slider-dots .dot`);
	let slideshowBtn = document.querySelector(`.slideshow`);

	nextBtn.onclick = function() {
		moveSlide(this.value);
		startSliding();
	};

	prevBtn.onclick = function() {
		moveSlide(this.value);
		startSliding();
	};

	function moveSlide(direction) {
		switch(direction) {
			case `next`:
				dots[currentSlide].style.background = `#f5f5f5`;
				currentSlide++;
				break;
			case `prev`:
				dots[currentSlide].style.background = `#f5f5f5`;
				currentSlide--;
				break;
		}
	}

	function startSliding() {
		for(let i = 0; i < images.length; i++) {
			images[i].style.display = `none`;
		}

		if(currentSlide === images.length) {
			currentSlide = 0;
		} else if(currentSlide === -1) {
			currentSlide = images.length - 1;
		}
		
		images[currentSlide].style.display = `block`;
		dots[currentSlide].style.background = `#878787`;
	}

	startSliding();