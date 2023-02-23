const BTNdecrementRef = document.querySelector('button[data-action = "decrement"]');
const BTNincrementRef = document.querySelector('button[data-action = "increment"]');
const spanRef = document.getElementById('value');

spanRef.textContent = 0;

const OnDecrementBTNClick = function()
{
    spanRef.textContent = -1;
};

const OnIncrementBTNClick = function()
{
   spanRef.textContent = Number(spanRef.textContent) + 1;
};

BTNdecrementRef.addEventListener('click', OnDecrementBTNClick);
BTNincrementRef.addEventListener('click', OnIncrementBTNClick);