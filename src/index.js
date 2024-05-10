import _ from "lodash";
import './style.css';
import myImage from './myImage.jpeg'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported from this script
    element.innerHTML = _.join(['Hello','webpack'], ' ');
    element.classList.add('hello');

    //Adding image to our existing div
    const image = new Image();
    image.src = myImage;
    element.appendChild(image);

    return element;
};

document.body.appendChild(component());