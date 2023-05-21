import { deleteCardFromServer, addLike, removeLike } from "./api.js";
import { openPopup } from "./utils.js";
import { userId } from "./index.js";

//init photo-grid
const photoGrid = document.querySelector('.photo-grid');

//img
const photo = document.querySelector('.popup__photo');
const imgTitle = document.querySelector('.popup__img-title');
const imgPopup = document.querySelector('.img-popup');

//init and clone template
const templatePhotoGrid = document.querySelector('#template').content;

function getCard(item) {
  const cardElement = templatePhotoGrid.querySelector(':first-child').cloneNode(true);
  const cardElementImage = cardElement.querySelector('.photo-grid__image');

  cardElementImage.src = item.link;
  cardElementImage.alt = item.name;
  cardElement.querySelector('.photo-grid__title').textContent = item.name;

  if(item.likes.length > 0) {
     cardElement.querySelector('.photo-grid__likes').textContent = item.likes.length;
  }

  cardElement.dataset.id = item._id;

  if(item.owner._id === userId) {
    cardElement.querySelector('.photo-grid__button-delete').classList.add('photo-grid__button-delete_active');
  }

  if(item.likes.some((like) => {
    return like._id === userId;
  })) {
    const buttonLike = cardElement.querySelector('.photo-grid__like');
    buttonLike.classList.add('photo-grid__like_active');
  }

  openPhoto(cardElementImage);
  likeCard(cardElement);
  removeCard(cardElement);

  return cardElement;
}

function createCard(item) {
  const cards = getCard(item, userId);
  photoGrid.prepend(cards);
}

function likeCard(item) {
  const buttonLike = item.querySelector('.photo-grid__like');
  const likeCounter = buttonLike.querySelector('.photo-grid__likes');

  buttonLike.addEventListener('click', () => {
    if(buttonLike.classList.contains('photo-grid__like_active')){
      removeLike(item.dataset.id)
        .then((data) => {
          buttonLike.classList.remove('photo-grid__like_active');
          likeCounter.textContent = data.likes.length;
        })
        .catch(reject => console.log(reject));
    } else {
       addLike(item.dataset.id)
        .then((data) => {
          buttonLike.classList.add('photo-grid__like_active');
          likeCounter.textContent = data.likes.length;
        })
        .catch(reject => console.log(reject));
    }
  });
}

function removeCard(item) {
  const buttonRemove = item.querySelector('.photo-grid__button-delete');

  buttonRemove.addEventListener('click', () => {
    deleteCardFromServer(item.dataset.id)
      .then(() => buttonRemove.closest('.photo-grid__item').remove())
      .catch(reject => console.log(reject));
      })
}

function openPhoto(image) {
  image.addEventListener('click', () => {

  photo.src = image.src;
  photo.alt = image.alt;
  imgTitle.textContent = photo.alt;

  openPopup(imgPopup);
  })
}

export { getCard, createCard, photoGrid };
