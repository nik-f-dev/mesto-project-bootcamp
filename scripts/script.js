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
const imgTitle = document.querySelector('.popup__img-title');

//init photo-grid
const photoGrid = document.querySelector('.photo-grid');

//init and clone template
const templatePhotoGrid = document.querySelector('#template').content;

//init buttons close
const closeButtons = document.querySelectorAll('.popup__button-close');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

closeButtons.forEach((button) => {
  const popup = button.closest('.popup');

  button.addEventListener('click', () => closePopup(popup));
});

//open edit-popup
editButton.addEventListener('click', () => {
  editPopupName.value = profileName.textContent;
  editPopupDescription.value = descriptionProfile.textContent;

  openPopup(editPopup);
});

function handleEditFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = editPopupName.value;
  descriptionProfile.textContent = editPopupDescription.value;

  closePopup(editPopup);
}

//save edit-popup
elementEditForm.addEventListener('submit', handleEditFormSubmit);

//open add-popup
addButton.addEventListener('click', () => {
  openPopup(addPopup);
});

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

function createCard(item) {
  const cardElement = templatePhotoGrid.querySelector(':first-child').cloneNode(true);

  cardElement.querySelector('.photo-grid__image').src = item.link;
  cardElement.querySelector('.photo-grid__image').alt = item.name;
  cardElement.querySelector('.photo-grid__title').textContent = item.name;

  return cardElement;
}

function renderCard(element) {
  const photoGridItem = createCard(element)

  photoGrid.prepend(photoGridItem);

  likeCard();
  removeCard();
  openPhoto();
}

function renderCards() {
  initialCards.forEach(renderCard);
}

renderCards();

function likeCard() {
  const buttonLike = document.querySelector('.photo-grid__like');

  buttonLike.addEventListener('click', () => {
    buttonLike.classList.toggle('photo-grid__like_active');
  });
}

function removeCard() {
  const buttonRemove = document.querySelector('.photo-grid__button-delete');

  buttonRemove.addEventListener('click', () => {
    buttonRemove.parentElement.remove();
  })
}

function openPhoto() {
  const gridImage = document.querySelector('.photo-grid__image');

  gridImage.addEventListener('click', () => {
    photo.src = gridImage.src;
    photo.alt = gridImage.alt;
    imgTitle.textContent = photo.alt;

    imgPopup.classList.add('popup_opened');
  })
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

//save add-form
elementAddForm.addEventListener('submit', handleAddFormSubmit);
