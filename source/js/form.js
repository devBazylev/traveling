const form = document.querySelector('.form');
const inputMail = form.querySelector('.form__mail');
const inputTel = form.querySelector('.form__tel');
// const submitButton = form.querySelector('.form__button');

// const MAX_LETTERS_COUNT = 100;

// const toggleSubmitButton = (isDisabled) => {
//   submitButton.disabled = isDisabled;
// };

const validateLetters = (mail) => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(String(mail));
};

const validateNumbers = (phone) => {
  const reg = /^[^a-zа-яё]*$/i;
  return reg.test(String(phone));
};

// const validateMail = () => {
//   const mailValue = inputMail.value;

//   if (!validateLetters(mailValue)) {
//     inputMail.classList.add('form__mail--error');
//   } else {
//     inputMail.classList.remove('form__mail--error');
//   }

//   if (mailValue.length > MAX_LETTERS_COUNT) {
//     inputMail.classList.add('form__mail--error');
//   } else {
//     inputMail.classList.remove('form__mail--error');
//   }
// };

// const validateTel = () => {
//   const telValue = inputTel.value;

//   if (!validateNumbers(telValue)) {
//     inputTel.classList.add('form__tel--error');
//   } else {
//     inputTel.classList.remove('form__tel--error');
//   }

//   if (telValue.length > MAX_LETTERS_COUNT) {
//     inputTel.classList.add('form__tel--error');
//   } else {
//     inputTel.classList.remove('form__tel--error');
//   }
// };

form.addEventListener('submit', (evt) => {
  if (!validateNumbers(inputTel.value)) {
    inputTel.classList.add('form__tel--error');
    evt.preventDefault();
    // console.log('form__tel--error');
  } else if (!validateLetters(inputMail.value)) {
    inputMail.classList.add('form__mail--error');
    evt.preventDefault();
    // console.log('form__mail--error');
  }
});
