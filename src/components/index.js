import './../pages/index.css';

import { handleEditFormSubmit, handleAddFormSubmit, addPopup, profileName, descriptionProfile, editPopup, elementEditForm, handleAvatarFormSubmit } from './modal.js';
import { changeButtonName, openPopup } from './utils.js';
import { renderCards } from './card.js';
import { enableValidation } from './validate.js';
import { uploadProfile } from './api.js';
import { avatarPopup, avatarButtonSave, addPopupButtonSave, editPopupButtonSave } from './modal.js';

// init profile
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

// init edit-popup
const editPopupName = document.querySelector('#edit-popup__name');
const editPopupDescription = document.querySelector('#edit-popup__description');

// init add-popup
const elementAddForm = document.querySelector('.add-popup__add-form');

//init avatar
const elementAvatarForm = document.querySelector('.avatar-popup__avatar-form');
const avatarEditButton = document.querySelector('.profile__edit-avatar-button');

//open edit-popup
editButton.addEventListener('click', () => {


  editPopupName.value = profileName.textContent;
  editPopupDescription.value = descriptionProfile.textContent;

  changeButtonName(editPopupButtonSave, 'Сохранить');
  openPopup(editPopup);
})

//open add-popup
addButton.addEventListener('click', () => {
  changeButtonName(addPopupButtonSave, 'Создать');
  openPopup(addPopup);
})

//save edit-form
elementEditForm.addEventListener('submit', handleEditFormSubmit);

//save add-form
elementAddForm.addEventListener('submit', handleAddFormSubmit);

avatarEditButton.addEventListener('click', () => {
  changeButtonName(avatarButtonSave, 'Сохранить');
  openPopup(avatarPopup);
});

elementAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

uploadProfile();

renderCards();

enableValidation({
  formSelector: '.popup__container_type-form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disable',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
});
