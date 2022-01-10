const genrateCat = () => {
    let image = document.createElement('img');
    let div = document.getElementById('flex-cat-genrator');
    image.src = "https://api.thecatapi.com/v1/images/search?mime_types=gif&size =small&format=src";
    div.appendChild(image);
}
