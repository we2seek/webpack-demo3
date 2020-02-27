import './style.css';
import printMe from './print.js';

function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console...';
    btn.onclick = printMe;

    element.innerHTML = '<strong>Dynamically</strong> generated content...';
    element.classList.add('title');
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
