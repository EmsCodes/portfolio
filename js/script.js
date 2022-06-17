import { dropDownMenu } from "./functions/functions.js";
import { handleScrollAnimation } from "./functions/displayOnScroll.js";
const menuBtn = document.querySelector(".menu__burger-btn");

menuBtn.addEventListener("click", dropDownMenu);

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});
