import './../pages/index.css';

import { handleEditFormSubmit, handleAddFormSubmit, addPopup, profileName, descriptionProfile, editPopup, elementEditForm, handleAvatarFormSubmit, profileImage, avatarPopup } from './modal.js';
import { openPopup } from './utils.js';
import { getCard, photoGrid } from './card.js';
import { enableValidation } from './validate.js';
import { getCardsInfo, getUserInfo } from './api';

let userId;

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

avatarEditButton.addEventListener('click', () => {
  openPopup(avatarPopup);
});

elementAvatarForm.addEventListener('submit', handleAvatarFormSubmit);

Promise.all([getUserInfo(), getCardsInfo()])
  .then(([userInfo, cards]) => {
    userId = userInfo._id;

    cards.forEach((card) => {
      photoGrid.append(getCard(card));
    });

    profileName.textContent = userInfo.name;
    descriptionProfile.textContent = userInfo.about;
    profileImage.src = userInfo.avatar;
  })
  .catch(reject => console.log(reject));

enableValidation({
  formSelector: '.popup__container_type-form',
  inputSelector: '.popup__item',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disable',
  inputErrorClass: 'popup__item_type_error',
  errorClass: 'popup__item-error_active'
});

export { userId };
