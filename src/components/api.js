import { profileName, descriptionProfile } from './modal.js';
import { renderCard } from './card.js';

const profileImage = document.querySelector('.profile__image');

function search(path, method) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-8/${path}`, {
    method: method,
    headers: {
      authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d'
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

function uploadProfile() {
  search('users/me', 'GET')
    .then((data) => {
      profileName.textContent = data.name;
      descriptionProfile.textContent = data.about;
      profileImage.src = data.avatar;
    })
    .catch(err => console.log(err));
}

function changeValueProfile(nameValue, aboutValue) {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-8/users/me', {
    method: 'PATCH',
    headers: {
      authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameValue,
      about: aboutValue
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

function addCard(nameValue, linkValue) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-8/cards`, {
    method: 'POST',
    headers: {
      authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameValue,
      link: linkValue
    })
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then((data) => {
      renderCard(data);
    })
  }

function addLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-8/cards/likes/${cardId}`, {
    method: 'PUT',
    headers: {
      authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d',
      'Content-Type': 'application/json'
    },
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

function removeLike(cardId) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-8/cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d',
    }
  })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

function deleteCardFromServer(id) {
  return fetch(`https://nomoreparties.co/v1/wbf-cohort-8/cards/${id}`, {
    method: 'DELETE',
    headers: {
    authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d',
  }
})
}

function changeAvatar(avatarUrl) {
  return fetch('https://nomoreparties.co/v1/wbf-cohort-8/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: avatarUrl
    })
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
}

// changeAvatar();


export { uploadProfile, search, changeValueProfile, addCard, deleteCardFromServer, addLike, removeLike, changeAvatar };
