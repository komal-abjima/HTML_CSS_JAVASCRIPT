// SELECTORS
const buttonSelector = document.querySelector('#button');
const inputSelector = document.querySelector('#input');
const responseSelector = document.querySelector('#response');
const errorSelector = document.querySelector('#error');

// API
const API_ENDPOINT = 'https://yesno.wtf/api';


let isRequestInProgress = false;

const setIsRequestInProgress = value => {
    isRequestInProgress = value;
};

const setDisableButtonState = isDisabling => {
    if (isDisabling) {
        buttonSelector.setAttribute('disabled', 'disabled');
    } else {
        buttonSelector.removeAttribute('disabled');
    }
};

//function for cleaning response
const cleanupResponse = () => {
    setTimeout(() => {
        responseSelector.innerHTML = '';
        inputSelector.value = '';
        setIsRequestInProgress(false);
        setDisableButtonState(false);
    }, 5000);
};

//function for show response
const showResponse = answer => {
    setTimeout(() => {
        responseSelector.innerHTML = `<p>${answer}</p>`;
        //for showing response in Image
        // responseSelector.innerHTML = `<img src=\"${answer}\" width=\"600px\" height=\"400px\">`;
        cleanupResponse();
    }, 5000);
};

//function for fetch Response
const fetchResponse = () => {
    setIsRequestInProgress(true);

    setDisableButtonState(true);

    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => showResponse(data.answer));   //data.image (for image data)
};

//function for show error
const showError = () => {
    errorSelector.innerHTML = 'Write Something First...';

    setTimeout(() => {
        errorSelector.innerHTML = '';
    }, 3000);
};


//function for get response
const getResponse = () => {
    if (isRequestInProgress) return;
    if (!inputSelector.value) return showError();

    fetchResponse();
};


//function for handle key press
const handleKeyEnter = e => {
    if (e.keyCode === 13) {
        getResponse();
    }
};

//event listener
buttonSelector.addEventListener('click', getResponse);