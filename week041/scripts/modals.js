const dialogBox = document.querySelector('#dialogBox');
const openButton1 = document.querySelector('#openButton1');
const openButton2 = document.querySelector('#openButton2');
const openButton3 = document.querySelector('#openButton3');
const closeButton = document.querySelector('#closeButton');

const dialogBoxText = document.querySelector('#dialogBox div');


openButton1.addEventListener('click', () => {
    dialogBoxText.textContent = "An Apple has 95 calories";
    dialogBox.showModal();
});

openButton2.addEventListener('click', () => {
    dialogBoxText.textContent = "An Orange has 45 calories";
    dialogBox.showModal();
});

openButton3.addEventListener('click', () => {
    dialogBoxText.textContent = "An Banana has 105 calories";
    dialogBox.showModal();
});

closeButton.addEventListener('click', () => {
    dialogBox.close();
});