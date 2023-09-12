const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const reset = document.querySelector('.reset');
let count = document.querySelector('.count');
let countValue = parseInt(count.innerHTML);

add.addEventListener('click', () => {
	countValue++; // Increment the value
	count.innerHTML = countValue; // Update the HTML with the new value
});

subtract.addEventListener('click', () => {
	countValue--; // Decrement the value
	count.innerHTML = countValue; // Update the HTML with the new value
});

reset.addEventListener('click', () => {
	countValue = 0; // Reset the value
	count.innerHTML = countValue; // Update the HTML with the new value
});
