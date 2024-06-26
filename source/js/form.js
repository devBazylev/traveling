const form = document.querySelector('.form');
const formTemplate = form.querySelector('.form__template');
const inputTel = form.querySelector('.form__tel');
const inputMail = form.querySelector('.form__mail');
const labelTel = form.querySelector('.form__tel-sign');
const labelMail = form.querySelector('.form__mail-sign');
const submitButton = form.querySelector('.form__button');

const FONT_SIZE = '16px';

const onTel = () => {
  if (inputTel.value !== '') {
    labelTel.style.fontSize = 0;
  } else {
    labelTel.style.fontSize = FONT_SIZE;
  }
};

const onMail = () => {
  if (inputMail.value !== '') {
    labelMail.style.fontSize = 0;
  } else {
    labelMail.style.fontSize = FONT_SIZE;
  }
};

const onClick = () => {
  if (!formTemplate.classList.contains('form__validation')) {
    formTemplate.classList.add('form__validation');
  }
  submitButton.removeEventListener('click', onClick);
};

const onSubmit = async (evt) => {
  formTemplate.submit();
  evt.preventDefault();
  formTemplate.reset();
};

inputTel.addEventListener('input', onTel);
inputMail.addEventListener('input', onMail);
submitButton.addEventListener('click', onClick);
formTemplate.addEventListener('submit', onSubmit);
