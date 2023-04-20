const addButton = document.querySelector('.profile__add-button');

addButton.addEventListener('click', () => {
  const popup = document.querySelector('.popup');
  popup.classList.add('popup_opened');
});

const closeButton = document.querySelector('.popup__button-close');

closeButton.addEventListener('click', () => {
  const popup = document.querySelector('.popup');
  popup.classList.remove('popup_opened');
});
