import _ from 'lodash';
import './style.css';
import Icon from './icon.png';

function component() {
  let element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  // Add the image to our existing div.
  var myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

let arr = [0, 123, 1010, 1025, 1026];


for (let j = 2; j <= 36; j++) {
	console.log('*** Основание: ' + j);
	for (let i = 0; i < arr.length; i++) {
		console.log(arr[i] + ': ' + arr[i].toString(j));
	}
	console.log('********************')
}