// Write Javascript code!
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');
const value = document.getElementById('value');

console.log(decrement);

increment.addEventListener('click', () => {
  value.innerHTML = Number(value.innerText) + 1;
});

decrement.addEventListener('click', () => {
  value.innerHTML = Number(value.innerText) - 1;
});
