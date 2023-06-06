'use strict';

import throttle from 'lodash';

const form = document.querySelector('.feedback-form');
let formData = {
    email: '',
    message: '',
}

const SaveCurrentFormVal = () => {
    formData = {
        email: form.nextElementSibling.email.value,
        message: form.nextElementSibling.message.value,
    };
    console.log(formData);
    localStorage.setItem('feedback-form-state', JSON.stringify(formData))
};

const submitFormHandler = event => {
    event.preventDefault();

    if (form.nextElementSibling.email.value === '' || form.nextElementSibling.message.value === ''){
        const alertMessage = 'Proszę uzupełnić wszystkie pola formularza';
        alert(alertMessage);
    } else {
        try {
            const submitFormHandler = JSON.parse(
                localStorage.getItem('feedback-form-state')
            );
            console.log('Submited form data: ', submitedFormData);
            localStorage.removeItem('feedback-form-state');
            form.nextElementSibling.email.value = '';
            form.nextElementSibling.message.value = '';
        } catch (error) {
            console.log(error.name);
            console.log(error.message);
        }
    }
}

const reloadPage = () => {
    try {
        const savedFormData = JSON.parse(
            localStorage.getItem('feedback-form-state')
        );
        if (savedFormData === null) {
            return;
        }
        form.nextElementSibling.email.value = savedFormData.email;
        form.nextElementSibling.message.value = savedFormData.message;
    } catch (error) {
        console.timeLog(error.name);
        console.log(error.message)
    }
}

form.addEventListener('input', throttle(saveCurrentFormValue, 500));
form.addEventListener('submit', submitFormHandler);
form.addEventListener('load', reloadPage);
