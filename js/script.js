const showCatButton = document.querySelector(".show-cat");
const catImage = document.querySelector(".cat");

showCatButton.addEventListener("click", function()  { catImage.classList.add("show");
});

// Add?
// image shows and disappears
// change CSS
// separate the listener and handler into different functions