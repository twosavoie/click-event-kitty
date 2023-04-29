const showCatButton = document.querySelector(".show-cat");
const catImage = document.querySelector("figure.cat");
// console.log(catImage)

// Event listener just shows cat image. 
// showCatButton.addEventListener("click", function()  { catImage.classList.add("show");
// });

showCatButton.addEventListener("click", function(){
  if (catImage.classList.contains("show")) {
    catImage.classList.remove("show")
    showCatButton.innerText = "Wait, come back!"
    showCatButton.classList.add("disappear")
  } else {
    showCatButton.classList.remove("disappear")
    showCatButton.innerText = "Shoo, cat"
    catImage.classList.add("show")
  }
})


// Add?
// done - image shows and disappears
// change CSS
// separate the listener and handler into different functions