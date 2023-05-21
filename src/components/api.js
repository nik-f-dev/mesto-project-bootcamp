import { checkResponse } from './utils.js';

const config = {
  baseUrl: `https://nomoreparties.co/v1/wbf-cohort-8/`,
  headers: {
    authorization: '89323da2-785e-48f5-ab5a-36b87f5e2d1d',
    'Content-Type': 'application/json',
  },
}

function request(url, options) {
  return fetch(`${config.baseUrl}${url}`, options).then(checkResponse)
}

function changeValueProfile(nameValue, aboutValue) {
  return fetch(`${config.baseUrl}users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: nameValue,
      about: aboutValue
    })
  })
    .then(checkResponse)
}

function addCard(nameValue, linkValue) {
  return fetch(`${config.baseUrl}cards`, {
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: nameValue,
      link: linkValue
    })
  })
    .then(checkResponse)
  }

function addLike(cardId) {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: 'PUT',
    headers: config.headers,
  })
    .then(checkResponse)
}

function removeLike(cardId) {
  return fetch(`${config.baseUrl}cards/likes/${cardId}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(checkResponse)
}

function deleteCardFromServer(id) {
  return fetch(`${config.baseUrl}cards/${id}`, {
    method: 'DELETE',
    headers: config.headers,
  })
    .then(checkResponse)
}

function changeAvatar(avatarUrl) {
  return fetch(`${config.baseUrl}users/me/avatar`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatarUrl
    })
  })
    .then(checkResponse)
}

function getCardsInfo() {
  return request('cards', config)
}

function getUserInfo() {
  return request('users/me', config)
}

export { changeValueProfile, addCard, deleteCardFromServer, addLike, removeLike, changeAvatar, request, getCardsInfo, getUserInfo };
