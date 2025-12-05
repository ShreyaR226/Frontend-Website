window.addEventListener("load", function () {
	const loader = document.getElementById("page-loader");
	if (loader) {
		loader.classList.add("hidden");
		loader.setAttribute("aria-hidden", "true");
	}
});
const tabs = document.querySelectorAll(".tabs li");

tabs.forEach((tab) => {
	tab.addEventListener("click", () => {
		document.querySelector(".tabs li.active")?.classList.remove("active");
		tab.classList.add("active");
	});
});

const toggles = document.querySelectorAll(".faq-question");
toggles.forEach((toggle) => {
	toggle.addEventListener("click", () => {
		const answer = toggle.nextElementSibling;
		const button = toggle.querySelector(".faq-toggle");
		answer.classList.toggle("open");
		button.textContent = answer.classList.contains("open") ? "-" : "+";
	});
});

$(document).ready(function () {
	$(".patient-carousel").owlCarousel({
		loop: true,
		margin: 20,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			0: { items: 1 },
			768: { items: 2 },
			1024: { items: 2 },
		},
	});

	$(".box2").owlCarousel({
		loop: true,
		margin: 40,
		nav: false,
		dots: true,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive: {
			0: { items: 1 },
			768: { items: 2 },
			1024: { items: 3 },
		},
	});
});
