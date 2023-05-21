let currentPopup;

function openPopup(popup) {
  const popupButton = document.querySelector(`.${popup.id}__button-save`);

  if(popup.id !== 'img-popup'){
    popupButton.classList.add('popup__button-save_disable');
    disableButton(popupButton);
  }

  currentPopup = popup;
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
}

function handleEsc(evt) {
    if (evt.key === 'Escape') {
      closePopup(currentPopup);
      console.log(currentPopup);
    }
}

function changeButtonName(buttonElement, name) {
  buttonElement.textContent = name;
}

function disableButton(buttonElement) {
  buttonElement.setAttribute("disabled", "");
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export { openPopup, closePopup, changeButtonName, disableButton, checkResponse };
