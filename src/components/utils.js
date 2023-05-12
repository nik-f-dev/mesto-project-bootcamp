function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function closePopupEsc(popup) {
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePopup(popup);
    }
  })
}

export { openPopup, closePopup, closePopupEsc };
