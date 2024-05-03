const form = document.querySelector('.form');
const inputMail = form.querySelector('.form__mail');
const inputTel = form.querySelector('.form__tel');
const submitButton = form.querySelector('.form__button');form__mail--error

const MAX_LETTERS_COUNT = 100;

const toggleSubmitButton = (isDisabled) => {
  submitButton.disabled = isDisabled;
};

const validateLetters = (mail) => {
  const reg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return reg.test(String(mail));
};

const validateNumbers = (phone) => {
  const reg = /^[^a-zа-яё]*$/i;
  return reg.test(String(phone));
};

const validateMail = () => {
  const mailValue = inputMail.value;

  if (!validateLetters(mailValue)) {
    inputMail.classList.add('form__mail--error');
    toggleSubmitButton(true);
    return false;
  } else {
    inputMail.classList.remove('form__mail--error');
    if (!inputTel.classList.contains('form__mail--error')){
      toggleSubmitButton(false);
    }
  }

  if (mailValue.length > MAX_LETTERS_COUNT) {
    inputMail.classList.add('form__mail--error');
    toggleSubmitButton(true);
    return false;
  } else {
    inputMail.classList.remove('form__mail--error');
    if (!inputTel.classList.contains('form__mail--error')){
      toggleSubmitButton(false);
    }
  }
};

const validateTel = () => {
  const telValue = inputTel.value;

  if (!validateNumbers(telValue)) {
    inputTel.classList.add('form__tel--error');
    toggleSubmitButton(true);
    return false;
  } else {
    inputTel.classList.remove('form__tel--error');
    if (!inputMail.classList.contains('form__tel--error')) {
      toggleSubmitButton(false);
    }
  }

  if (telValue.length > MAX_LETTERS_COUNT) {
    inputTel.classList.add('form__tel--error');
    toggleSubmitButton(true);
    return false;
  } else {
    inputTel.classList.remove('form__tel--error');
    if (!inputMail.classList.contains('form__tel--error')) {
      toggleSubmitButton(false);
    }
  }
};

const onSubmitButton = () => {
  // evt.preventDefault();
  toggleSubmitButton(true);
  form.submit();
  form.reset();
  toggleSubmitButton(false);
};

inputMail.addEventListener('input', validateMail);
inputTel.addEventListener('input', validateTel);
form.addEventListener('submit', onSubmitButton);
