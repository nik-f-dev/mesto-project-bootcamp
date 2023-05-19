let currentPopup;

function openPopup(popup) {
  const popupButton = document.querySelector(`.${popup.id}__button-save`);

  switch(popup.id) {
    case 'edit-popup':
    case 'add-popup':
    case 'avatar-popup':
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

export { openPopup, closePopup, changeButtonName, disableButton };
