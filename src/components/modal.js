import { closePopup } from "./utils.js"
import { changeValueProfile, addCard, changeAvatar } from "./api.js";
import { changeButtonName, disableButton } from "./utils.js";

//init img-popup
const photo = document.querySelector('.popup__photo');

// init profile
const profileName = document.querySelector('.profile__title');
const profileImage = document.querySelector('.profile__image');
const descriptionProfile = document.querySelector('.profile__subtitle');

// init edit-popup
const editPopup = document.querySelector('.edit-popup');
const elementEditForm = document.querySelector('.edit-popup__edit-form');
const editPopupName = document.querySelector('#edit-popup__name');
const editPopupDescription = document.querySelector('#edit-popup__description');
const editPopupButtonSave = document.querySelector('.popup__button-save_type_edit');

// init add-popup
const addPopup = document.querySelector('.add-popup');
const addPopupName = document.querySelector('#add-popup__name');
const addPopupLink = document.querySelector('#add-popup__link');
const addPopupButtonSave = document.querySelector('.popup__button-save_type_add');

//init buttons close
const closeButtons = document.querySelectorAll('.popup__button-close');

//init avatar-popup
const avatarPopup = document.querySelector('.avatar-popup');
const avatarPopupItem = document.querySelector('.avatar-popup__item');
const avatarButtonSave = document.querySelector('.popup__button-save_type_avatar');

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
  changeButtonName(editPopupButtonSave, 'Сохранение...');

  changeValueProfile(editPopupName.value, editPopupDescription.value)
    .then((data) => {
      profileName.textContent = data.name;
      descriptionProfile.textContent = data.about;
    })

  closePopup(editPopup);
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  changeButtonName(addPopupButtonSave, 'Создание...');
  disableButton(addPopupButtonSave);
  closePopup(addPopup);
  addCard(addPopupName.value, addPopupLink.value);
  evt.target.reset();
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();

  changeButtonName(avatarButtonSave, 'Сохранение...');

  changeAvatar(avatarPopupItem.value)
    .then((data) => {
      profileImage.src = data.avatar;
      closePopup(avatarPopup);
      evt.target.reset();
    });
}

export { handleEditFormSubmit, handleAddFormSubmit, handleAvatarFormSubmit, addPopup, profileName, descriptionProfile, editPopup, elementEditForm, photo, avatarPopup, avatarButtonSave, addPopupButtonSave, editPopupButtonSave };
