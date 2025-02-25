const generateMemeButton = document.querySelector(".generatememe");
const memeImage = document.querySelector(".memegenerator img");
const memeTitle = document.querySelector(".memetitle");
const memeAuthor = document.querySelector(".memeAuthor");


const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Author: ${author}`;
};


const generate = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
        .then(response => response.json())
        .then(data => {
            updateDetails(data.url, data.title, data.author);
        })
        .catch(error => console.log("Error fetching meme:", error));
};

generateMemeButton.addEventListener("click", generate);
