const body = document.body;
// Swiper
const sliderButtonsOpinions = document.querySelector('.slider-buttons_opinions');
const next = sliderButtonsOpinions.querySelector('.swiper-button-next');
const prev = sliderButtonsOpinions.querySelector('.swiper-button-prev');
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 53,

  // Navigation arrows
  navigation: {
    nextEl: next,
    prevEl: prev,
  },

});
// Swiper Diplopms
const sliderButtonsDiploms = document.querySelector('.slider-buttons_diploms');
const next2 = sliderButtonsDiploms.querySelector('.swiper-button-next');
const prev2 = sliderButtonsDiploms.querySelector('.swiper-button-prev');
console.log('next2 = ', next2);
const swiper2 = new Swiper('.swiper-container2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 40,

  // Navigation arrows
  navigation: {
    nextEl: next2,
    prevEl: sliderButtonsDiploms.querySelector('.swiper-button-prev'),
  },

});

// links from forms
const modalMeetingTerms = document.querySelector('.modal__meeting_terms');
modalMeetingTerms.onclick = (e) =>{
  e.preventDefault();
  window.open('http://example.com');
}

const modalMeetingPrivacy = document.querySelector('.modal__meeting_privacy');
modalMeetingPrivacy.onclick = (e) =>{
  e.preventDefault();
  window.open('http://example.com');
}

const modalOrderCourseTerms = document.querySelector('.modal__order-course_terms');
if(modalOrderCourseTerms) {
  modalOrderCourseTerms.onclick = (e) =>{
  e.preventDefault();
  window.open('http://example.com');
}
}


const modalOrderCoursePrivacy = document.querySelector('.modal__order-course_privacy');
if(modalOrderCourseTerms) {
  modalOrderCoursePrivacy.onclick = (e) =>{
  e.preventDefault();
  window.open('http://example.com');
}
}






// modal__close
const modalCloseButtons = document.querySelectorAll('.modal__close');
const overlay = document.querySelector('.overlay');
for(button of modalCloseButtons) {
  button.onclick = (e)=> {
    e.target.closest('.modal').classList.add('d-none');
    overlay.classList.add('d-none');
    enableScroll();
    body.classList.remove('modal-opened');

  }
}

// open modal
// const buttonBlueModalMeeting = document.querySelectorAll('.button-blue_modal_meeting');
const buttonsBlueOrderCourse = document.querySelectorAll('.button-blue_order-course');
const modalOrderCourse = document.querySelector('.modal__order-course');
const modal__meeting = document.querySelector('.modal__meeting');

// tab Modal Focus
const tabModalFocus =  (event)=>{
  if (event.code == 'Tab') {
    if(modal__meeting.classList.contains('modal-active')) {
      modal__meeting.querySelector('.form-action').focus();
    } else {
      modalOrderCourse.querySelector('.form-action').focus();
    }

  }
}
// Запрет скрола окна
function enableScroll() {
  const pagePosition = parseInt(body.dataset.position, 10);
  body.style.top = 'auto';
  body.classList.remove('disable-scroll');
  window.scroll({top: pagePosition, left: 0});
  body.removeAttribute('data-position');
}

function disableScroll() {
  const pagePosition = window.scrollY;
  body.classList.add('disable-scroll');
  body.dataset.position = pagePosition;
  body.style.top = -pagePosition + 'px';
}

// запуск модального окна ПОДАРОК через 1 минуту
const timer = ()=> {
  setTimeout(function () {
    if(!body.classList.contains('modal-opened')) {
    openPresentModal();
    } else {
      timer();
    }

  }, 10000);
}
// timer();
function openPresentModal() {
  overlay.classList.remove('d-none');
  modal__meeting.classList.remove('d-none');
  modal__meeting.classList.add('modal-active');
  document.addEventListener('keydown', tabModalFocus, {once: true});
  disableScroll();
}

// Открыть Модальное окно по кнопке Записаться на курс
for (const button of buttonsBlueOrderCourse) {
  button.onclick = ()=> {
    overlay.classList.remove('d-none');
    // modal__meeting.classList.remove('d-none');
    modalOrderCourse.classList.remove('d-none');
    disableScroll();

    // listening the TAB keydown event
    document.addEventListener('keydown', tabModalFocus, {once: true});
    body.classList.add('modal-opened');
}
}

// const buttonLightOrderCourse = document.querySelector('.button-light_order-course');
// const buttonBluePrice = document.querySelector('.button-blue_price');

// buttonLightOrderCourse.onclick = ()=> {
//   overlay.classList.remove('d-none');

//   modalOrderCourse.classList.remove('d-none');
// }


// // // _________________________form validator
// function validateFormOnSubmit(contact) {
//   reason = "";
//   if(contact.name) {
//     reason += validateName(contact);
//   }
//   if(contact.email) {
//     reason += validateEmail(contact);
//   }
//   if(contact.tel) {
//     reason += validatePhone(contact);
//   }
//   if(contact.name_ordercourse) {
//     reason += validateDegree(contact);
//   }

//   // reason += validateNumber(contact.number);
//   if(contact.disclaimer) {
//     reason += validateDisclaimer(contact);
//   }


//   document.addEventListener('keydown', tabModalFocus, {once: true});
//   if (reason.length > 0) {
//       return false;
//   } else {
//       return false;
//   }
// }

// // validate required fields
// function validateName(contact) {
//   const name = contact.name
//   let error = "";

//   if (name.value.length == 0) {
//       // name.style.background = 'Red';
//       // document.getElementById('name-error').innerHTML = "The required field has not been filled in";
//       contact.querySelector('.modal__input-name-error').innerHTML = "Неверный формат символов";

//       error = "1";
//   } else {
//       // name.style.background = 'White';
//       contact.querySelector('.modal__input-name-error').innerHTML = "&nbsp;";
//   }
//   return error;
// }

// // validate Email
// function validateEmail(contact) {
//   const email = contact.email;
//   let error = "";
//   const temail = trim(email.value); // value of field with whitespace trimmed off
//   const emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
//   const illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

//   if (email.value == "") {
//       // email.style.background = 'Red';
//       contact.querySelector('.modal__input-email-error').innerHTML = "Пожалуйста, введите адрес электронной почты";
//       error = "2";
//   } else if (!emailFilter.test(temail)) { //test email for illegal characters
//       // email.style.background = 'Red';
//       contact.querySelector('.modal__input-email-error').innerHTML = "Пожалуйста, введите действительный адрес электронной почты";
//       error = "3";
//   } else if (email.value.match(illegalChars)) {
//       // email.style.background = 'Red';
//       error = "4";
//       contact.querySelector('.modal__input-email-error').innerHTML = "Адрес электронной почты содержит недопустимые символы";
//   } else {
//       // email.style.background = 'White';
//       contact.querySelector('.modal__input-email-error').innerHTML = '&nbsp;';
//   }
//   return error;
// }
// // validate email as required field and format
// function trim(s) {
//   return s.replace(/^\s+|\s+$/, '');
// }

// // validate phone for required and format
// function validatePhone(contact) {
//   let phone = contact.tel
//   let error = "";
//   const stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

//   if (phone.value == "") {
//       contact.querySelector('.modal__input-tel-error').innerHTML = "Пожалуйста введите номер телефона";
//       // phone.style.background = 'Red';
//       error = '6';
//   } else if (isNaN(parseInt(stripped))) {
//       error = "5";
//       contact.querySelector('.modal__input-tel-error').innerHTML = "Неверный формат номера телефона";
//       // phone.style.background = 'Red';
//   } else if (stripped.length < 10) {
//       error = "6";
//       contact.querySelector('.modal__input-tel-error').innerHTML = "Телефонный номер слишком короткий";
//       // phone.style.background = 'Red';
//   } else {
//       // phone.style.background = 'White';
//       contact.querySelector('.modal__input-tel-error').innerHTML = '&nbsp';
//   }
//   return error;
// }
// // validate checkbox

// function validateDegree(contact) {

//   let error = "";
//   if ((contact.degree[0].checked == false) && (contact.degree[1].checked == false) ) {
//     contact.querySelector('.modal__input-chbox-error').innerHTML = "Нужно выбрать Да или Нет";
//       error = "2";
//   } else {
//     contact.querySelector('.modal__input-chbox-error').innerHTML = ' ';
//   }

//   return error;
// }

// // validate Disclaimer

// function validateDisclaimer(contact) {
//   const disclaimer = contact.disclaimer;
//   let error = "";
//   const checkbox = contact.querySelector(".checkbox-input");
//   console.log('disclaimer.id =', disclaimer.id, 'disclaimer = ', disclaimer);
//   console.log('document.getElementById("disclaimer").checked= ', document.getElementById(disclaimer.id).checked  );
//   // const chb = document.querySelector('.checkbox-label[::before]');
//   console.log('document.getElementById(disclaimer.id).nextElementSibling= ', document.getElementById(disclaimer.id).nextElementSibling);

//   if (document.getElementById(disclaimer.id).checked === false) {
//       // document.getElementById('disclaimer-error').innerHTML = "Required";
//       document.getElementById(disclaimer.id).style.backgroundColor='green';
//       document.getElementById(disclaimer.id).nextElementSibling.classList.add('checkbox-input_error');
//       error = "4";
//   } else {
//       // document.getElementById('disclaimer-error').innerHTML = '';
//       document.getElementById(disclaimer.id).nextElementSibling.classList.remove('checkbox-input_error');
//   }
//   return error;
// }


// form submit
const forms = document.querySelectorAll('form');
// console.log('forms =', forms);
for (form of forms) {
  form.addEventListener('submit', (e)=> {
    console.log(e);

    e.preventDefault();
  });
}

// Burger
// const menu = document.querySelector('.header__menu'),
// menuItem = document.querySelectorAll('.menu_item'),
// burger = document.querySelector('.header__burger');

// hurger.addEventListener('click', () => {
//   burger.classList.toggle('header__burger_active');
//   menu.classList.toggle('header__menu_active');
// });

// menuItem.forEach(item => {
//   item.addEventListener('click', () => {
//     burger.classList.toggle('header__burger_active');
//     menu.classList.toggle('header__menu_active');
//   })
// })

// window.addEventListener('DOMContentLoaded', () => {
// })