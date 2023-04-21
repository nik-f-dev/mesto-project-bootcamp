// init profile
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__subtitle');

// init edit-popup
const editPopup = document.querySelector('.edit-popup');
const CloseEditButton = document.querySelector('.edit-popup__button-close');
const elementEditForm = document.querySelector('.edit-popup__edit-form');
const editPopupName = document.querySelector('#edit-popup__name');
const editPopupDescription = document.querySelector('#edit-popup__description');

// init add-popup
const addPopup = document.querySelector('.add-popup');
const CloseAddButton = document.querySelector('.add-popup__button-close');
const elementAddForm = document.querySelector('.add-popup__add-form');
const addPopupName = document.querySelector('#add-popup__form-name');

//get text for value inputs in edit-popup
editPopupName.value = profileName.textContent;
editPopupDescription.value = descriptionProfile.textContent;

function openEditPopup() {
  editPopup.classList.add('edit-popup_opened');
}

function closeEditPopup() {
  editPopup.classList.remove('edit-popup_opened');
}

function openAddPopup() {
  addPopup.classList.add('add-popup_opened');
}

function closeAddPopup() {
  addPopup.classList.remove('add-popup_opened');
}

editButton.addEventListener('click', openEditPopup);
CloseEditButton.addEventListener('click', closeEditPopup);

function handleFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = editPopupName.value;
  descriptionProfile.textContent = editPopupDescription.value;
  closeEditPopup();
}

elementEditForm.addEventListener('submit', handleFormSubmit);

addButton.addEventListener('click', openAddPopup);
CloseAddButton.addEventListener('click', closeAddPopup);
