const bodyHtml = document.querySelector('body');
const secretHtml = document.querySelector('.secret-number');
const hintHtml = document.querySelector('.hint');
const reloadHtml = document.querySelector('.reload');
const checkHtml = document.querySelector('.check');
const inputHtml = document.querySelector('#input');
const scoreHtml = document.querySelector('#score');
const highScoreHtml = document.querySelector('#highScore');

const secret = Math.trunc(Math.random() * 21);

let guessedNumberString = '';
hintHtml.innerHTML = 'Start guessing...';
let score = 20;
let highScore = 0;

reloadHtml.addEventListener('click', () => {
	bodyHtml.style.backgroundColor = 'black';
	secretHtml.innerHTML = '?';
	hintHtml.innerHTML = 'Start guessing...';
	inputHtml.value = '';
	checkHtml.disabled = false;
	score = 20;
	scoreHtml.innerHTML = score;
});

checkHtml.addEventListener('click', () => {
	guessedNumberString = inputHtml.value;
	const guessedNum = parseInt(guessedNumberString);

	if (guessedNum > secret) {
		hintHtml.innerHTML = '📈 Too high!';
		score--;
		scoreHtml.innerHTML = score;
	} else if (guessedNum < secret) {
		hintHtml.innerHTML = '📉 Too low!';
		score--;
		scoreHtml.innerHTML = score;
	} else if (guessedNum == secret) {
		checkHtml.disabled = true;
		hintHtml.innerHTML = '🎉 You nailed it!';
		bodyHtml.style.backgroundColor = 'green';
		secretHtml.innerHTML = secret;
		if (score > highScore) {
			highScore = score;
			highScoreHtml.innerHTML = highScore;
		}
	}
});
