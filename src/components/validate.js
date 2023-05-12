const showError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add('popup__item_type_error');
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add('popup__item-error_active');
};

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove('popup__item_type_error');
  errorElement.classList.remove('popup__item-error_active');
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement) {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement);
    } else {
      hideError(formElement, inputElement);
    }
}

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__item'));
  const buttonElement = formElement.querySelector('.popup__button-save');

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    checkInputValidity(formElement, inputElement);
    toggleButtonState(inputList, buttonElement);
    })
  })
}

function enableValidation() {
  const formList = Array.from(document.querySelectorAll('.popup__container_type-form'));

  formList.forEach((formElement) => {
    setEventListeners(formElement);
  })
}

function hasInvalidInput(inputList) {
  return inputList.some((element) => {
    return !element.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button-save_disable');
  } else {
    buttonElement.classList.remove('popup__button-save_disable');
  }
}

export { enableValidation };
