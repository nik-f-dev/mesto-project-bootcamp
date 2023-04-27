// init profile
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const descriptionProfile = document.querySelector('.profile__subtitle');

// init edit-popup
const editPopup = document.querySelector('.edit-popup');
const closeEditButton = document.querySelector('.popup__button-close');
const elementEditForm = document.querySelector('.edit-popup__edit-form');
const editPopupName = document.querySelector('#edit-popup__name');
const editPopupDescription = document.querySelector('#edit-popup__description');

// init add-popup
const addPopup = document.querySelector('.add-popup');
const closeAddButton = document.querySelector('.add-popup__button-close');
const elementAddForm = document.querySelector('.add-popup__add-form');
const addPopupName = document.querySelector('#add-popup__name');
const addPopupLink = document.querySelector('#add-popup__link');

//init img-popup
const imgPopup = document.querySelector('.img-popup');
const photo = document.querySelector('.popup__photo');
const imageButtonClose = document.querySelector('.img-popup__button');

//init photo-grid
const photoGrid = document.querySelector('.photo-grid');

//init and clone template
const templatePhotoGrid = document.querySelector('#template').content;


//get text for inputs value in edit-popup
editPopupName.value = profileName.textContent;
editPopupDescription.value = descriptionProfile.textContent;

function openEditPopup() {
  editPopup.classList.add('popup_opened');
}

function closeEditPopup() {
  editPopup.classList.remove('popup_opened');
}

function openAddPopup() {
  addPopup.classList.add('popup_opened');
}

function closeAddPopup() {
  addPopup.classList.remove('popup_opened');
}

//open edit-popup
editButton.addEventListener('click', openEditPopup);

//close edit-popup
closeEditButton.addEventListener('click', closeEditPopup);

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = editPopupName.value;
  descriptionProfile.textContent = editPopupDescription.value;

  closeEditPopup();
}

//save edit-popup
elementEditForm.addEventListener('submit', handleEditFormSubmit);

//open add-popup
addButton.addEventListener('click', openAddPopup);

//close add-popup
closeAddButton.addEventListener('click', closeAddPopup);

const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function renderCard(element) {
  const photoGridItem = templatePhotoGrid.querySelector(':first-child').cloneNode(true);
  photoGridItem.querySelector('.photo-grid__image').src = element.link;
  photoGridItem.querySelector('.photo-grid__title').textContent = element.name;
  photoGrid.prepend(photoGridItem);
}

function renderCards() {
  initialCards.forEach(renderCard);
}

renderCards();

function likeCard() {
  const buttonLike = document.querySelectorAll('.photo-grid__like');
  buttonLike.forEach(element => {
    element.addEventListener('click', () => {
      element.classList.toggle('photo-grid__like_active');
    })
  });
}

likeCard();

function removeCard() {
  const buttonRemove = document.querySelectorAll('.photo-grid__button-delete');
  buttonRemove.forEach(element => {
    element.addEventListener('click', () => {
      element.parentElement.remove();
    })
  })
}

removeCard();

function openPhoto() {
  const gridImage = document.querySelectorAll('.photo-grid__image');

  gridImage.forEach(element => {
    element.addEventListener('click', () => {
      photo.src = element.src;
      imgPopup.classList.add('popup_opened');
    })
  })
}

openPhoto();

//close photo
imageButtonClose.addEventListener('click', () => {
  imgPopup.classList.remove('popup_opened');
})

function addCard() {
  const newCard = {
    name: addPopupName.value,
    link: addPopupLink.value
  };

  addPopupName.value = '';
  addPopupLink.value = '';

  renderCard(newCard);
  likeCard();
  removeCard();
  openPhoto();
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  closeAddPopup();
  addCard();
}

//save add-form
elementAddForm.addEventListener('submit', handleAddFormSubmit);
