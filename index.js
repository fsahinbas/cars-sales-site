// javascript
const btnMenu = document.querySelector(".menu"),
  filterMenu = document.querySelector(".filter"),
  filterMenuStyles = window.getComputedStyle(filterMenu),
  hearts = document.querySelectorAll(".far");

btnMenu.addEventListener("click", () => {
  if (
    filterMenuStyles.getPropertyValue("clip-path") === "circle(0% at 100% 0%)"
  ) {
    filterMenu.style.clipPath = "circle(100% at 50% 50%)";
  } else {
    filterMenu.style.clipPath = "circle(0% at 100% 0%)";
  }
});

document.addEventListener("mouseup", (e) => {
  console.log(e.target);
  if (
    filterMenuStyles.getPropertyValue("clip-path") === "circle(100% at 50% 50%)"
  ) {
    if (!filterMenu.contains(e.target)) {
      filterMenu.style.clipPath = "circle(0% at 100% 0%)";
    }
  }
});

const changeHeart = (heart) => {
  heart.classList.toggle("fas");
  heart.classList.toggle("far");
};
