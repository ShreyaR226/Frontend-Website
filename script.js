// Page loader: fade out after window load
window.addEventListener("load", function () {
	const loader = document.getElementById("page-loader");
	if (loader) {
		loader.classList.add("hidden");
		// set aria-hidden
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

// Mobile menu (pure JS)
// (function () {
// 	const hamburger = document.getElementById("hamburger");
// 	const mobileNav = document.getElementById("mobileNav");
// 	const mobileClose = document.getElementById("mobileClose");

// 	function openMenu() {
// 		mobileNav.classList.add("open");
// 		mobileNav.setAttribute("aria-hidden", "false");
// 		hamburger.setAttribute("aria-expanded", "true");
// 		// prevent body scroll
// 		document.body.style.overflow = "hidden";
// 	}
// 	function closeMenu() {
// 		mobileNav.classList.remove("open");
// 		mobileNav.setAttribute("aria-hidden", "true");
// 		hamburger.setAttribute("aria-expanded", "false");
// 		document.body.style.overflow = "";
// 	}

// 	hamburger.addEventListener("click", function (e) {
// 		e.stopPropagation();
// 		openMenu();
// 	});
// 	mobileClose.addEventListener("click", function () {
// 		closeMenu();
// 	});
// 	// close when clicking outside panel
// 	mobileNav.addEventListener("click", function (e) {
// 		if (e.target === mobileNav) closeMenu();
// 	});

// 	// Close on Escape
// 	document.addEventListener("keydown", function (e) {
// 		if (e.key === "Escape") closeMenu();
// 	});
// })();

// initialize carousels when DOM ready
$(document).ready(function () {
	
	$(".patient-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        1024:{ items:2 }
      }
    });

	$(".box2").owlCarousel({
      loop: true,
      margin: 40,
      nav: false,
      dots: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive:{
        0:{ items:1 },
        768:{ items:2 },
        1024:{ items:3 }
      }
    });
});

// small nicety: set year
// document.getElementById("year").textContent = new Date().getFullYear();
