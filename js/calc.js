const screenResult = document.querySelector('.screen__text');
const insert =  (num) => {
    if(num !== undefined && num !== '' && num !== null) {
      screenResult.innerHTML += num;
    } else {
      screenResult.innerHTML = '';
    }
};

const reset = () => {
  screenResult.innerHTML = '';
};

const del = () => {
  screenResult.innerHTML = screenResult.innerHTML.substring(0,screenResult.innerHTML.length - 1)
};

const calculate = () => {
  const screenResult = document.querySelector('.screen__text').innerHTML
  if(screenResult) {
    document.querySelector('.screen__text').innerHTML =+ Function("return " + screenResult)();
  }
};

calculate();
del();
reset();
insert();