import { search, deleteCardFromServer, addLike, removeLike } from "./api";
import { closePopup, openPopup, changeButtonName } from "./utils";

//init photo-grid
const photoGrid = document.querySelector('.photo-grid');

//img
const photo = document.querySelector('.popup__photo');
const imgTitle = document.querySelector('.popup__img-title');
const imgPopup = document.querySelector('.img-popup');

//init and clone template
const templatePhotoGrid = document.querySelector('#template').content;
const deleteButton = document.querySelector('#delete-popup__save-button');
const deletePopup = document.querySelector('.delete-popup');

function createCard(item) {
  const cardElement = templatePhotoGrid.querySelector(':first-child').cloneNode(true);

  cardElement.querySelector('.photo-grid__image').src = item.link;
  cardElement.querySelector('.photo-grid__image').alt = item.name;
  cardElement.querySelector('.photo-grid__title').textContent = item.name;

  if(item.likes.length > 0) {
     cardElement.querySelector('.photo-grid__likes').textContent = item.likes.length;
  }

  cardElement.dataset.id = item._id;

  if(item.owner._id === '9cfb4c2414d52e5ba6a8acdd') {
    cardElement.querySelector('.photo-grid__button-delete').classList.add('photo-grid__button-delete_active');
  }

  if(item.likes.some((like) => {
    return like._id === '9cfb4c2414d52e5ba6a8acdd';
  })) {
    const buttonLike = cardElement.querySelector('.photo-grid__like');
    buttonLike.classList.add('photo-grid__like_active');
  }

  const image = cardElement.querySelector('.photo-grid__image');
  openPhoto(image);

  return cardElement;
}

function renderCard(element) {
  const photoGridItem = createCard(element);

  photoGrid.prepend(photoGridItem);

  likeCard(photoGridItem);
  removeCard(photoGridItem);
}

function renderCards() {
  search('cards')
    .then((data) => {
      photoGrid.replaceChildren('');
      data.reverse().forEach(renderCard);
    })
    .catch(err => console.log(err));
}

function likeCard(item) {
  const buttonLike = item.querySelector('.photo-grid__like');

  buttonLike.addEventListener('click', () => {
    if(buttonLike.classList.contains('photo-grid__like_active')){
      removeLike(item.dataset.id)
        .then(() => {
          buttonLike.classList.remove('photo-grid__like_active');
          renderCards();
        })
    } else {
       addLike(item.dataset.id)
      .then(() => {
        buttonLike.classList.add('photo-grid__like_active');
        renderCards();
      })
    }
  });
}

function removeCard(item) {
  const buttonRemove = item.querySelector('.photo-grid__button-delete');
  const photoGridItem = item;

  buttonRemove.addEventListener('click', () => {
    changeButtonName(deleteButton, 'Да');
    openPopup(deletePopup);
    deleteCard(photoGridItem);
  })
}

function deleteCard(item) {
  deleteButton.addEventListener('click', (evt) => {
    evt.preventDefault();

    deleteCardFromServer(item.dataset.id)
    .then(res => {
      if (res.ok) {
        renderCards();
        changeButtonName(deleteButton, 'Удаление..');
        closePopup(deletePopup);
        return;
      }
      return Promise.reject(`${res.status}`);
    })
    .catch(err => console.log(err));
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

export { renderCards, renderCard };
