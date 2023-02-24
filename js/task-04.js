const BTNdecrementRef = document.querySelector('button[data-action="decrement"]');
const BTNincrementRef = document.querySelector('button[data-action="increment"]');
const spanRef = document.getElementById('value');

spanRef.textContent = 0;

const onDecrementBtnClick = function () 
{
  spanRef.textContent = Number(spanRef.textContent) - 1;
};

const onIncrementBtnClick = function () 
{
  spanRef.textContent = Number(spanRef.textContent) + 1;
};

BTNdecrementRef.addEventListener('click', onDecrementBtnClick);
BTNincrementRef.addEventListener('click', onIncrementBtnClick); 
