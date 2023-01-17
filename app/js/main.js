// burger script
const menu = document.querySelector(".header__menu-wrap"),
  menuItem = document.querySelectorAll(".header__menu-item"),
  burger = document.querySelector(".header__burger");

burger.addEventListener("click", () => {
  // burger.classList.toggle('header__burger_active');
  burger.classList.toggle("d-none");
  menu.classList.toggle("header__menu-wrap_active");
  setTimeout(
    () => menu.classList.toggle("header__menu-wrap_background-dark"),
    500
  );
});
const menuToggleAction = () => {
  burger.classList.toggle("d-none");
  menu.classList.toggle("header__menu-wrap_active");
  menu.classList.toggle("header__menu-wrap_background-dark");
};
menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    // burger.classList.toggle('header__burger_active');
    menuToggleAction();
  });
});

menu.addEventListener("click", (e) => {
  if (e.target.classList.contains("header__menu")) {
    menuToggleAction();
  }
});

// More info link in About Course
const aboutCourseMoreinfo = document.querySelector(".about-course__moreinfo");
const aboutCourseHidedTabs = document.querySelectorAll(".about-course__hided");
const aboutCourseBenefitVisibleTabs = document.querySelectorAll(
  ".about-course__benefit_visible"
);

const makeAllListItemsVisible = () => {
  aboutCourseBenefitVisibleTabs.forEach((tab) => {
    tab.classList.add("about-course__benefit_list");
  });
};

const hideAllListMobileItemsVisible = () =>
  document
  .querySelectorAll(".about-course__benefit_notmobile-none")
  .forEach((elem) =>
    elem.classList.remove("about-course__benefit_notmobile-none")
  );

aboutCourseMoreinfo.onclick = () => {
  for (const tab of aboutCourseHidedTabs) {
    tab.classList.toggle("about-course__benefit_d-none");
    hideAllListMobileItemsVisible();
  }
  makeAllListItemsVisible();
};

const aboutCourseMoreinfoMobile = document.querySelector(
  ".about-course__moreinfo_mobile"
);
aboutCourseMoreinfoMobile.onclick = () => {
  hideAllListMobileItemsVisible();
  aboutCourseMoreinfo.parentElement.classList.add("d-none");
  makeAllListItemsVisible();
};

// // More info link in About Presenter
const aboutPresenterMoreinfoPlan = document.querySelector(
  ".about-presenter__moreinfo_plan"
);
const aboutPresenterDescrFullTabs = document.querySelectorAll(
  ".about-presenter__descr_full"
);
const aboutPresenterMoreinfoMobile = document.querySelector(
  ".about-presenter__moreinfo_mobile"
);
aboutPresenterMoreinfoPlan.onclick = () => {
  aboutPresenterDescrFullTabs.forEach((tab) => {
    tab.classList.remove("about-presenter__descr_full");
  });
  aboutPresenterMoreinfoPlan.parentElement.classList.remove(
    "about-presenter__descr_plan"
  );
  aboutPresenterMoreinfoMobile.parentElement.classList.remove(
    "about-presenter__descr_mobile"
  );
};

aboutPresenterMoreinfoMobile.onclick = () => {
  aboutPresenterDescrFullTabs.forEach((tab) => {
    tab.classList.remove("about-presenter__descr_full");
  });
  aboutPresenterMoreinfoMobile.parentElement.classList.remove(
    "about-presenter__descr_mobile"
  );
  aboutPresenterMoreinfoPlan.parentElement.classList.remove(
    "about-presenter__descr_plan"
  );
};

const body = document.body;

// Swiper Opinions
const sliderButtonsOpinions = document.querySelector(
  ".slider-buttons_opinions"
);
const next = sliderButtonsOpinions.querySelector(".swiper-button-next");
const prev = sliderButtonsOpinions.querySelector(".swiper-button-prev");
const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // slidesPerView: 3,
  // spaceBetween: 53,
  pagination: {
    el: ".swiper-pagination_opinions",
    type: "fraction",
    clickable: "true",
  },
  breakpoints: {
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 53,
    },
    // when window width is >= 1440px
    768: {
      slidesPerView: 2.4,
      spaceBetween: 24,
    },
    // when window width is >= 1440px
    640: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    300: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: next,
    prevEl: prev,
  },
});
// Swiper Diplopms
const sliderButtonsDiploms = document.querySelector(".slider-buttons_diploms");
const next2 = sliderButtonsDiploms.querySelector(".swiper-button-next");
const prev2 = sliderButtonsDiploms.querySelector(".swiper-button-prev");

const swiper2 = new Swiper(".swiper-container2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  // slidesPerView: 3,
  // spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  breakpoints: {
    // when window width is >= 1440px
    1440: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 1.9,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1.5,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    300: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: next2,
    prevEl: sliderButtonsDiploms.querySelector(".swiper-button-prev"),
  },
});

// hide logo img & make magic with header
const headerLogoImg = document.querySelector(".header__logo-img");
const headerTop = document.querySelector(".header__top");

const magicHeader = () => {
  headerLogoImg.classList.add("header__logo-img_magic");
  headerTop.classList.add("header__top_magic");
  burger.classList.add("header__burger_magic");
};
const unMagicHeader = () => {
  headerLogoImg.classList.remove("header__logo-img_magic");
  headerTop.classList.remove("header__top_magic");
  burger.classList.remove("header__burger_magic");
};

// go-up & header magic
const goUp = document.querySelector(".go-up");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 0) {
    magicHeader();
  }
  if (window.pageYOffset === 0) {
    unMagicHeader();
  }
  if (window.pageYOffset > 600) {
    goUp.classList.remove("d-none");
  } else {
    goUp.classList.add("d-none");
  }
  if (window.pageYOffset > 3841) {
    goUp.classList.add("go-up__absolut");
  } else {
    goUp.classList.remove("go-up__absolut");
  }
  if (window.pageYOffset > 4466) {
    goUp.classList.add("go-up__bottom-up");
  } else {
    goUp.classList.remove("go-up__bottom-up");
  }
});

goUp.onclick = (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};

//modal
// Privacy & Terms links on forms
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

// close-modal button listener
const modalCloseButtons = document.querySelectorAll(".modal__close"),
  overlay = document.querySelector(".overlay");
for (button of modalCloseButtons) {
  button.onclick = (e) => {
    e.target.closest(".modal").classList.add("d-none");
    overlay.classList.add("d-none");
    enableScroll();
    body.classList.remove("modal-opened");
  };
}
//  buttonsBlueOrderCourse = document.querySelectorAll(
// 		".button-blue_order-course"
// 	),

const modal__meeting = document.querySelector(".modal__meeting"),
  modalOrderCourse = document.querySelector(".modal__order-course");

// обработчик нажатия на ТАБ
tabModalFocus = (e) => {
  if (e.code == "Tab" && modal__meeting.classList.contains("modal-active")) {
    modal__meeting.querySelector(".form-action").focus();
  }
  // "Tab" == e.code &&
  //   (modal__meeting.classList.contains("modal-active")
  //     ? modal__meeting.querySelector(".form-action").focus()

  //     : modalOrderCourse.querySelector(".form-action").focus());
};

//enableScroll for modal window
function enableScroll() {
  const e = parseInt(body.dataset.position, 10);
  (body.style.top = "auto"), body.classList.remove("disable-scroll");
  window.scroll({
      top: e,
      left: 0,
    }),
    body.removeAttribute("data-position");
}
//disableScroll for modal window
function disableScroll() {
  const e = window.scrollY;
  body.classList.add("disable-scroll");
  (body.dataset.position = e);
  (body.style.top = -e + "px");
}

//timer for present
const timer = () => {
  setTimeout(function () {
    body.classList.contains("modal-opened") ? timer() : openPresentModal();
  }, 30000);
};
timer();

// обработчик для модального окна PRESENT
function openPresentModal() {
  overlay.classList.remove("d-none");
    modal__meeting.classList.remove("d-none");
    modal__meeting.classList.add("modal-active");
    document.addEventListener("keydown", tabModalFocus, {
      once: true,
    });
    disableScroll();
}
// Закрыть модальное окно ПОДАРОК
function closePresentModal() {
  overlay.classList.add("d-none");
    modal__meeting.classList.add("d-none");
    modal__meeting.classList.remove("modal-active");
    // document.addEventListener("keydown", tabModalFocus, { once: true }),
    enableScroll();
}



// for (const e of buttonsBlueOrderCourse)
// 	e.onclick = () => {
// 		overlay.classList.remove("d-none"),
// 			modalOrderCourse.classList.remove("d-none"),
// 			disableScroll(),
// 			document.addEventListener("keydown", tabModalFocus, { once: !0 }),
// 			body.classList.add("modal-opened");
// 	};

// FORMS 

// form validator - валидаторы формы
function validateFormOnSubmit(contact) {
  reason = "";
  if (contact.name) {
    reason += validateName(contact);
  }
  if (contact.email) {
    reason += validateEmail(contact);
  }
  if (contact.tel) {
    reason += validatePhone(contact);
  }
  if (contact.name_ordercourse) {
    reason += validateDegree(contact);
  }

  // reason += validateNumber(contact.number);
  if (contact.disclaimer) {
    reason += validateDisclaimer(contact);
  }
  //возвращаем фокус после неудачной отправки формы
  document.addEventListener("keydown", tabModalFocus, {
    once: true,
  });

  if (reason.length > 0) {
    return false;
  } else {
    return false;
  }
}

// validate required fields
function validateName(contact) {
  const name = contact.name;
  let error = "";

  if (name.value.length < 2) {
    // name.style.background = 'Red';
    // document.getElementById('name-error').innerHTML = "The required field has not been filled in";
    contact.querySelector(".modal__input-name-error").innerHTML =
      "Неверный формат символов";

    error = "1";
  } else {
    // name.style.background = 'White';
    contact.querySelector(".modal__input-name-error").innerHTML = "&nbsp;";
  }
  return error;
}

// validate Email
function validateEmail(contact) {
  const email = contact.email;
  let error = "";
  const temail = trim(email.value); // value of field with whitespace trimmed off
  const emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
  const illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

  if (email.value == "") {
    // email.style.background = 'Red';
    contact.querySelector(".modal__input-email-error").innerHTML =
      "Пожалуйста, введите адрес электронной почты";
    error = "2";
  } else if (!emailFilter.test(temail)) {
    //test email for illegal characters
    // email.style.background = 'Red';
    contact.querySelector(".modal__input-email-error").innerHTML =
      "Пожалуйста, введите действительный адрес электронной почты";
    error = "3";
  } else if (email.value.match(illegalChars)) {
    // email.style.background = 'Red';
    error = "4";
    contact.querySelector(".modal__input-email-error").innerHTML =
      "Адрес электронной почты содержит недопустимые символы";
  } else {
    // email.style.background = 'White';
    contact.querySelector(".modal__input-email-error").innerHTML = "&nbsp;";
  }
  return error;
}
// validate email as required field and format
function trim(s) {
  return s.replace(/^\s+|\s+$/, "");
}

// validate phone for required and format
function validatePhone(contact) {
  let phone = contact.tel;
  let error = "";
  const stripped = phone.value.replace(/[\(\)\.\-\ ]/g, "");

  if (phone.value == "") {
    contact.querySelector(".modal__input-tel-error").innerHTML =
      "Пожалуйста введите номер телефона";
    // phone.style.background = 'Red';
    error = "6";
  } else if (isNaN(parseInt(stripped))) {
    error = "5";
    contact.querySelector(".modal__input-tel-error").innerHTML =
      "Неверный формат номера телефона";
    // phone.style.background = 'Red';
  } else if (stripped.length < 10) {
    error = "6";
    contact.querySelector(".modal__input-tel-error").innerHTML =
      "Телефонный номер слишком короткий";
    // phone.style.background = 'Red';
  } else {
    // phone.style.background = 'White';
    contact.querySelector(".modal__input-tel-error").innerHTML = "&nbsp";
  }
  return error;
}
// validate checkbox

function validateDegree(contact) {
  let error = "";
  if (
    contact.degree[0].checked == false &&
    contact.degree[1].checked == false
  ) {
    contact.querySelector(".modal__input-chbox-error").innerHTML =
      "Нужно выбрать Да или Нет";
    error = "2";
  } else {
    contact.querySelector(".modal__input-chbox-error").innerHTML = " ";
  }

  return error;
}

// validate Disclaimer

function validateDisclaimer(contact) {
  const disclaimer = contact.disclaimer;
  let error = "";
  // const checkbox = contact.querySelector(".checkbox-input");
  // console.log('disclaimer.id =', disclaimer.id, 'disclaimer = ', disclaimer);
  // console.log('document.getElementById("disclaimer").checked= ', document.getElementById(disclaimer.id).checked  );
  // const chb = document.querySelector('.checkbox-label[::before]');
  // console.log('document.getElementById(disclaimer.id).nextElementSibling= ', document.getElementById(disclaimer.id).nextElementSibling);

  if (document.getElementById(disclaimer.id).checked === false) {
    // document.getElementById('disclaimer-error').innerHTML = "Required";
    document.getElementById(disclaimer.id).style.backgroundColor = "green";
    document
      .getElementById(disclaimer.id)
      .nextElementSibling.classList.add("checkbox-input_error");
    error = "4";
  } else {
    // document.getElementById('disclaimer-error').innerHTML = '';
    document
      .getElementById(disclaimer.id)
      .nextElementSibling.classList.remove("checkbox-input_error");
  }
  return error;
}

// обработчик отправки формы
const forms = () => {
  const form = document.querySelectorAll("form"),
    inputs = document.querySelectorAll("input");

  const message = {
    loading: "Загрузка",
    success: "Спасибо! Скоро мы с Вами свяжемся",
    failure: "Что-то пошло не так",
  };
  const postData = async (url, data) => {
    document.querySelector(".status").textContent = message.loading;
    let res = await fetch(url, {
      method: "POST",
      body: data,
    });

    return await res.text();
  };

  const clearInputs = () => {
    inputs.forEach((item) => {
      item.value = "";
    });
  };

  form.forEach((item) => {
    item.addEventListener("submit", (e) => {
      e.preventDefault();

      let statusMessage = document.createElement("div");
      statusMessage.classList.add("status");
      item.appendChild(statusMessage);

      const formData = new FormData(item);

      postData("sendmail.php", formData)
        .then((res) => {
          console.log(res);
          statusMessage.textContent = message.success;
          closePresentModal();
        })
        .catch(() => (statusMessage.textContent = message.failure))
        .finally(() => {
          clearInputs();
          setTimeout(() => {
            statusMessage.remove();
          }, 5000);
        });
    });
  });
};

forms();