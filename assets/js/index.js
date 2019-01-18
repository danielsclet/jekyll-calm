// Open menu mobile
document.getElementsByClassName('mobile-menu-btn')[0].onclick = function () {
  document.getElementsByClassName('mobile-menu')[0].style.transform = 'translateX(0)';
};

document.getElementsByClassName('mobile-menu-btn-close')[0].onclick = function () {
  document.getElementsByClassName('mobile-menu')[0].style.transform = 'translateX(100vw)';
};