import './style.css';

function component () {
    const element = document.createElement('div');
    element.innerHTML = '<strong>Dynamically</strong> generated content...';
    element.classList.add('title');

    return element;
}

document.body.appendChild(component());
