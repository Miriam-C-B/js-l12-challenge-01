const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImages = async function () {
    const res = await fetch ("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};

const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    //console.log(randomIndex);

    const randomImage = images[randomIndex]; 
    //console.log(randomImage);
    displayImage(randomImage);
};

const displayImage = function(randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    
//changing DOM elements
    authorSpan.innerText = randomImage.author;
    img.src = randomImage.download_url;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function() {
    getImages();
});