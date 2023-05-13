import './../pages/index.css';

import { handleEditFormSubmit, handleAddFormSubmit, addPopup, profileName, descriptionProfile, editPopup, elementEditForm, } from './modal.js';
import { openPopup } from './utils.js';
import { renderCards } from './card.js';
import { enableValidation } from './validate.js'

// init profile
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

// init edit-popup
const editPopupName = document.querySelector('#edit-popup__name');
const editPopupDescription = document.querySelector('#edit-popup__description');

// init add-popup
const elementAddForm = document.querySelector('.add-popup__add-form');

//open edit-popup
editButton.addEventListener('click', () => {
  editPopupName.value = profileName.textContent;
  editPopupDescription.value = descriptionProfile.textContent;

  openPopup(editPopup);
})

//open add-popup
addButton.addEventListener('click', () => {
  openPopup(addPopup);
})

//save edit-form
elementEditForm.addEventListener('submit', handleEditFormSubmit);

//save add-form
elementAddForm.addEventListener('submit', handleAddFormSubmit);


renderCards();

enableValidation({
  formSelector: '.popup__container_type-form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disable',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
});
