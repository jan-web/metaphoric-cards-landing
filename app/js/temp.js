

const body = document.body,
// Swiper Opinions
	sliderButtonsOpinions = document.querySelector(".slider-buttons_opinions"),
	next = sliderButtonsOpinions.querySelector(".swiper-button-next"),
	prev = sliderButtonsOpinions.querySelector(".swiper-button-prev"),
	swiper = new Swiper(".swiper-container", {
		direction: "horizontal",
		loop: !0,
		slidesPerView: 3,
		spaceBetween: 53,
		navigation: { nextEl: next, prevEl: prev },
	}),
	// Swiper Diplopms
	sliderButtonsDiploms = document.querySelector(".slider-buttons_diploms"),
	next2 = sliderButtonsDiploms.querySelector(".swiper-button-next"),
	prev2 = sliderButtonsDiploms.querySelector(".swiper-button-prev");
console.log("next2 = ", next2);
const swiper2 = new Swiper(".swiper-container2", {
		direction: "horizontal",
		loop: !0,
		slidesPerView: 3,
		spaceBetween: 40,
		navigation: {
			nextEl: next2,
			prevEl: sliderButtonsDiploms.querySelector(".swiper-button-prev"),
		},
	}),

//modal
modalMeetingTerms = document.querySelector(".modal__meeting_terms");
modalMeetingTerms.onclick = (e) => {
	e.preventDefault(), window.open("http://example.com");
};
const modalMeetingPrivacy = document.querySelector(".modal__meeting_privacy");
modalMeetingPrivacy.onclick = (e) => {
	e.preventDefault(), window.open("http://example.com");
};
const modalOrderCourseTerms = document.querySelector(
	".modal__order-course_terms"
);
modalOrderCourseTerms &&
	(modalOrderCourseTerms.onclick = (e) => {
		e.preventDefault(), window.open("http://example.com");
	});
const modalOrderCoursePrivacy = document.querySelector(
	".modal__order-course_privacy"
);
modalOrderCourseTerms &&
	(modalOrderCoursePrivacy.onclick = (e) => {
		e.preventDefault(), window.open("http://example.com");
	});
const modalCloseButtons = document.querySelectorAll(".modal__close"),
	overlay = document.querySelector(".overlay");
for (button of modalCloseButtons)
	button.onclick = (e) => {
		e.target.closest(".modal").classList.add("d-none"),
			overlay.classList.add("d-none"),
			enableScroll(),
			body.classList.remove("modal-opened");
	};
const buttonsBlueOrderCourse = document.querySelectorAll(
		".button-blue_order-course"
	),
	modalOrderCourse = document.querySelector(".modal__order-course"),
	modal__meeting = document.querySelector(".modal__meeting"),
	tabModalFocus = (e) => {
		"Tab" == e.code &&
			(modal__meeting.classList.contains("modal-active")
				? modal__meeting.querySelector(".form-action").focus()
				: modalOrderCourse.querySelector(".form-action").focus());
	};

	//enableScroll
function enableScroll() {
	const e = parseInt(body.dataset.position, 10);
	(body.style.top = "auto"),
		body.classList.remove("disable-scroll"),
		window.scroll({ top: e, left: 0 }),
		body.removeAttribute("data-position");
}
function disableScroll() {
	const e = window.scrollY;
	body.classList.add("disable-scroll"),
		(body.dataset.position = e),
		(body.style.top = -e + "px");
}

//timer
const timer = () => {
	setTimeout(function () {
		body.classList.contains("modal-opened") ? timer() : openPresentModal();
	}, 1e4);
};
function openPresentModal() {
	overlay.classList.remove("d-none"),
		modal__meeting.classList.remove("d-none"),
		modal__meeting.classList.add("modal-active"),
		document.addEventListener("keydown", tabModalFocus, { once: !0 }),
		disableScroll();
}
for (const e of buttonsBlueOrderCourse)
	e.onclick = () => {
		overlay.classList.remove("d-none"),
			modalOrderCourse.classList.remove("d-none"),
			disableScroll(),
			document.addEventListener("keydown", tabModalFocus, { once: !0 }),
			body.classList.add("modal-opened");
	};

	//validateFormOnSubmit
function validateFormOnSubmit(e) {
	return (
		(reason = ""),
		e.name && (reason += validateName(e)),
		e.email && (reason += validateEmail(e)),
		e.tel && (reason += validatePhone(e)),
		e.name_ordercourse && (reason += validateDegree(e)),
		e.disclaimer && (reason += validateDisclaimer(e)),
		document.addEventListener("keydown", tabModalFocus, { once: !0 }),
		reason.length,
		!1
	);
}
function validateName(e) {
	let o = "";
	return (
		0 == e.name.value.length
			? ((e.querySelector(".modal__input-name-error").innerHTML =
					"Неверный формат символов"),
			  (o = "1"))
			: (e.querySelector(".modal__input-name-error").innerHTML = "&nbsp;"),
		o
	);
}
function validateEmail(e) {
	const o = e.email;
	let t = "";
	const r = trim(o.value);
	return (
		"" == o.value
			? ((e.querySelector(".modal__input-email-error").innerHTML =
					"Пожалуйста, введите адрес электронной почты"),
			  (t = "2"))
			: /^[^@]+@[^@.]+\.[^@]*\w\w$/.test(r)
			? o.value.match(/[\(\)\<\>\,\;\:\\\"\[\]]/)
				? ((t = "4"),
				  (e.querySelector(".modal__input-email-error").innerHTML =
						"Адрес электронной почты содержит недопустимые символы"))
				: (e.querySelector(".modal__input-email-error").innerHTML = "&nbsp;")
			: ((e.querySelector(".modal__input-email-error").innerHTML =
					"Пожалуйста, введите действительный адрес электронной почты"),
			  (t = "3")),
		t
	);
}
function trim(e) {
	return e.replace(/^\s+|\s+$/, "");
}
function validatePhone(e) {
	let o = e.tel,
		t = "";
	const r = o.value.replace(/[\(\)\.\-\ ]/g, "");
	return (
		"" == o.value
			? ((e.querySelector(".modal__input-tel-error").innerHTML =
					"Пожалуйста введите номер телефона"),
			  (t = "6"))
			: isNaN(parseInt(r))
			? ((t = "5"),
			  (e.querySelector(".modal__input-tel-error").innerHTML =
					"Неверный формат номера телефона"))
			: r.length < 10
			? ((t = "6"),
			  (e.querySelector(".modal__input-tel-error").innerHTML =
					"Телефонный номер слишком короткий"))
			: (e.querySelector(".modal__input-tel-error").innerHTML = "&nbsp"),
		t
	);
}
function validateDegree(e) {
	let o = "";
	return (
		0 == e.degree[0].checked && 0 == e.degree[1].checked
			? ((e.querySelector(".modal__input-chbox-error").innerHTML =
					"Нужно выбрать Да или Нет"),
			  (o = "2"))
			: (e.querySelector(".modal__input-chbox-error").innerHTML = " "),
		o
	);
}
function validateDisclaimer(e) {
	const o = e.disclaimer;
	let t = "";
	e.querySelector(".checkbox-input");
	return (
		console.log("disclaimer.id =", o.id, "disclaimer = ", o),
		console.log(
			'document.getElementById("disclaimer").checked= ',
			document.getElementById(o.id).checked
		),
		console.log(
			"document.getElementById(disclaimer.id).nextElementSibling= ",
			document.getElementById(o.id).nextElementSibling
		),
		!1 === document.getElementById(o.id).checked
			? ((document.getElementById(o.id).style.backgroundColor = "green"),
			  document
					.getElementById(o.id)
					.nextElementSibling.classList.add("checkbox-input_error"),
			  (t = "4"))
			: document
					.getElementById(o.id)
					.nextElementSibling.classList.remove("checkbox-input_error"),
		t
	);
}
const forms = document.querySelectorAll("form");
for (form of forms)
	form.addEventListener("submit", (e) => {
		console.log(e), e.preventDefault();
	});
