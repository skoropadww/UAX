if (document.querySelector('.client__btn')) {
  const clientBtn = document.querySelector('.client__btn');
  const popupClose = document.querySelector('.popup__close');
  clientBtn.addEventListener('click', function () {
    clientBtn.classList.add('active');
  })

  popupClose.addEventListener('click', function () {
    clientBtn.classList.remove('active');
  })

}