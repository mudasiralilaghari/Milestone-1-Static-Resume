var btn = document.getElementById("toggle-skills");
var skillSection = document.querySelector(".skills");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    if (skillSection) {
        skillSection.classList.toggle("hidden");
    }
});
