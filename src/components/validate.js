const showError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};

const hideError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);

  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
  errorElement.textContent = '';
};

function checkInputValidity(formElement, inputElement, inputErrorClass, errorClass) {
    if (!inputElement.validity.valid) {
      showError(formElement, inputElement, inputErrorClass, errorClass);
    } else {
      hideError(formElement, inputElement, inputErrorClass, errorClass);
    }
}

const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
    checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
    })
  })
}

function hasInvalidInput(inputList) {
  return inputList.some((element) => {
    return !element.validity.valid;
  })
}

function toggleButtonState(inputList, buttonElement, inactiveButtonClass) {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }
}

function enableValidation(obj) {
  const formSelector =  obj.formSelector;
  const inputSelector = obj.inputSelector;
  const submitButtonSelector = obj.submitButtonSelector;
  const inactiveButtonClass = obj.inactiveButtonClass;
  const inputErrorClass = obj.inputErrorClass;
  const errorClass = obj.errorClass;

  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach((formElement) => {
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  })
}

function disableButton() {
  const buttonsSave = Array.from(document.querySelectorAll('.popup__button-save'));

  buttonsSave.forEach((buttonSave) => {
    buttonSave.setAttribute("disabled", "disabled");
    buttonSave.classList.add('popup__button-save_disable');
  })
}

export { enableValidation, disableButton };
