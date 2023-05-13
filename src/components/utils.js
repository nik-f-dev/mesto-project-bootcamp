import { popups } from './modal.js';
import { disableButton } from './validate.js';

function openPopup(popup) {
  popup.classList.add('popup_opened');

  disableButton();

  document.addEventListener('keydown', closePopupByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');

  document.removeEventListener('keydown', closePopupByEsc);
}

function closePopupByEsc(evt) {
    if (evt.key === 'Escape') {
      popups.forEach(popup => {
        closePopup(popup);
      });
    }
}

export { openPopup, closePopup };
