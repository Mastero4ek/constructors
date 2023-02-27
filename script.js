'use strict'

const body = document.querySelector('body');

const DomElement = function(selector, height, width, bg, fontSize) {
	this.selector = selector,
	this.height = height + 'px',
	this.width = width + 'px',
	this.bg = bg,
	this.fontSize = fontSize + 'px',
	this.addElement = function() {
		if(this.selector[0] === '.') {
			const div = document.createElement('div');

			div.classList.add(`${this.selector.substring(1)}`);
			div.style.height = this.height;
			div.style.width = this.width;
			div.style.background = this.bg;
			div.style.fontSize = this.fontSize;
			div.textContent = 'Привет Александр! :)'

			body.insertAdjacentElement('beforeend', div);
		} else
		if(this.selector[0] === '#') {
			const p = document.createElement('p');

			p.setAttribute('id', `${this.selector.substring(1)}`);
			p.style.height = this.height;
			p.style.width = this.width;
			p.style.background = this.bg;
			p.style.fontSize = this.fontSize;
			p.textContent = 'Привет Александр! :)'

			body.insertAdjacentElement('beforeend', p);
		}
	}
};

// const newDomElement1 = new DomElement('#block', 20, 1000, 'rgba(53, 89, 64, .6)', 16);
// const newDomElement2 = new DomElement('.block', 30, 500, 'rgba(148, 87, 51, .6)', 20);
// newDomElement1.addElement();
// newDomElement2.addElement();

const square = new DomElement('.block', 100, 100, 'red');
square.addElement();

const block = document.querySelector('.block');
block.style.position = 'absolute';
block.style.textAlign = 'center';

let moveLeft = 0;
let moveDown = 0;

function move(event) {
	switch(true) {
		case event.key === 'ArrowRight':
			moveLeft = moveLeft + 10;
			block.style.left = moveLeft + 'px';
		break;

		case event.key === 'ArrowLeft':
			moveLeft = moveLeft - 10;
			block.style.left = moveLeft + 'px';
		break;

		case event.key === 'ArrowUp':
			moveDown = moveDown - 10;
			block.style.top = moveDown + 'px';
		break;

		case event.key === 'ArrowDown':
			moveDown = moveDown + 10;
			block.style.top = moveDown + 'px';
		break;

		default:
			alert('Двигай квадрат стрелками на клавиатуре!');
		break;
	}
}

document.addEventListener('keydown', (event) => {
	move(event);
});