const popup = document.querySelector('.popup');
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__button-close');
const nameProfile = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__subtitle');
const saveButton = document.querySelector('.popup__button-save');

//get text for value inputs
const popupName = document.querySelector('#popup__name');
popupName.value = nameProfile.textContent;
const popupDescription = document.querySelector('#popup__description');
popupDescription.value = descriptionProfile.textContent;

function openPopup() {
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = popupName.value;
  descriptionProfile.textContent = popupDescription.value;
  closePopup();
}


saveButton.addEventListener('click', handleFormSubmit);
