import { openPhoto } from "./modal";

//init photo-grid
const photoGrid = document.querySelector('.photo-grid');

//init and clone template
const templatePhotoGrid = document.querySelector('#template').content;

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
  const photoGridItem = createCard(element);

  photoGrid.prepend(photoGridItem);

  likeCard();
  removeCard();
  openPhoto(photoGridItem);
}

function renderCards() {
  initialCards.forEach(renderCard);
}

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

export { renderCards, renderCard };
