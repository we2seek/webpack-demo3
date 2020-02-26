function component () {
    const element = document.createElement('div');
    element.innerHTML = '<strong>Dynamically</strong> generated content...';
    return element;
}

document.body.appendChild(component());
