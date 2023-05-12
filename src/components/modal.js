import { renderCard } from "./card";
import { closePopup, closePopupEsc } from "./utils.js"

//init img-popup
const imgPopup = document.querySelector('.img-popup');
const photo = document.querySelector('.popup__photo');
const imgTitle = document.querySelector('.popup__img-title');

// init profile
const profileName = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__subtitle');

// init edit-popup
const editPopup = document.querySelector('.edit-popup');
const elementEditForm = document.querySelector('.edit-popup__edit-form');
const editPopupName = document.querySelector('#edit-popup__name');
const editPopupDescription = document.querySelector('#edit-popup__description');

// init add-popup
const addPopup = document.querySelector('.add-popup');
const addPopupName = document.querySelector('#add-popup__name');
const addPopupLink = document.querySelector('#add-popup__link');

//init buttons close
const closeButtons = document.querySelectorAll('.popup__button-close');

//init popups
const popups = Array.from(document.querySelectorAll('.popup'));

popups.forEach(popup => {
  popup.addEventListener('click', (evt) => {
    if(evt.target === popup) {
      closePopup(popup);
    }
  })
})

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');

  button.addEventListener('click', () => closePopup(popup));
})

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = editPopupName.value;
  descriptionProfile.textContent = editPopupDescription.value;

  closePopup(editPopup);
}

function addCard() {
  const newCard = {
    name: addPopupName.value,
    link: addPopupLink.value,
    alt: addPopupName.value
  };

  renderCard(newCard);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  closePopup(addPopup);
  addCard();
  evt.target.reset();
}

function openPhoto() {
  const gridImage = document.querySelector('.photo-grid__image');

  gridImage.addEventListener('click', () => {
    photo.src = gridImage.src;
    photo.alt = gridImage.alt;
    imgTitle.textContent = photo.alt;

    imgPopup.classList.add('popup_opened');

    closePopupEsc(imgPopup);
  })
}

export { openPhoto, handleEditFormSubmit, handleAddFormSubmit, addPopup, profileName, descriptionProfile, editPopup, elementEditForm, closePopupEsc };
