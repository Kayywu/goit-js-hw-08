'use strict';

import throttle from 'lodash/throttle';

const LOCALSTORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
import throttle from 'lodash/throttle';
let formObj = {
  email: '',
  message: '',
};
form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));
saveData();
function onInput(event) {
  formObj[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formObj));
}
function onSubmit(event) {
  if (formObj) {
    event.preventDefault();
    console.log(formObj);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    event.currentTarget.reset();
  }
}
function saveData() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  const savedDataP = JSON.parse(savedData);
  if (savedDataP) {
    return returnData(savedDataP);
  }
}
function returnData(data) {
  formObj.email = data.email;
  formObj.message = data.message;
  form.elements.email.value = formObj.email;
  form.elements.message.value = formObj.message;
}