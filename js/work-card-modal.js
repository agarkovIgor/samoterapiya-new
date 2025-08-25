//модальное окно для описания МАК
let backgroundModal = document.querySelector('.background-modal');
let modal = document.querySelector('.modal');
let buttonCloseModal = document.querySelector('.button-close-modal');
let buttonOpenModal = document.querySelector('.button-open-modal');

buttonOpenModal.addEventListener('click', function() {
    backgroundModal.classList.add('visibility');
    modal.classList.add('visibility');
    
});
buttonCloseModal.addEventListener('click', function() {
    backgroundModal.classList.remove('visibility');
    modal.classList.remove('visibility');
    
});
backgroundModal.addEventListener('click', function() {
    backgroundModal.classList.remove('visibility');
    modal.classList.remove('visibility');
    
});





