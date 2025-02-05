document.querySelectorAll("#sec_rec > div").forEach((divElement) => {
  divElement.addEventListener("click", () => {
    const spanElement = divElement.nextElementSibling;
    
    if (spanElement && spanElement.classList.contains("rec_container_inside")) {
        if (spanElement.style.display === "none") {
          spanElement.style.display = "block";
        } else {
          spanElement.style.display = "none";
        }
    }
  });
});


function loadBooks(array) {
  document.getEleme
}