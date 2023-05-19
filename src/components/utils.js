let currentPopup;

function openPopup(popup) {
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

export { openPopup, closePopup, changeButtonName };
