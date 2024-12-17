const btn = document.getElementById("toggle-skills") as HTMLButtonElement;
const skillSection = document.querySelector(".skills") as HTMLDivElement;

btn.addEventListener("click", (event: MouseEvent) => {
  event.preventDefault(); 
  if (skillSection) {
    skillSection.classList.toggle("hidden");
  }
});
