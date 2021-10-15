const $toggle = document.querySelector('.header__toggle-container');
const $html = document.querySelector('html');
const $span = document.querySelector('.header__toggle-container > span');


const moveTheme = () => {
  if($span.classList.contains('themeOne')) {
    $html.classList.remove('themeOne');
    $span.classList.remove('themeOne');
    $html.classList.add('themeTwo');
    $span.classList.add('themeTwo');

  } else if ($span.classList.contains('themeTwo')) {
    $html.classList.remove('themeTwo');
    $span.classList.remove('themeTwo');
    $html.classList.add('themeThree');
    $span.classList.add('themeThree');

  } else {
    $html.classList.remove('themeThree');
    $span.classList.remove('themeThree');
    $html.classList.add('themeOne');
    $span.classList.add('themeOne');
  }
}


$toggle.addEventListener('click', moveTheme);