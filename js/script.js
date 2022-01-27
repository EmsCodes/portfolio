import { dropDownMenu } from "./functions/functions.js";

const menuBtn = document.querySelector(".menu__burger-btn");

menuBtn.addEventListener("click", dropDownMenu);

// project show on scroll
const projectCard = document.querySelectorAll(".projects__card");
const projectContainer = document.querySelector(".projects__display");
const outerContainer = document.querySelector(".projects");

console.log(projectCard);

// const topMargin =

function scrollDisplay(container, card) {
	card.forEach((element) => {
		const cardPosition = element.offsetTop;

		if (cardPosition <= container.clientHeight) {
			console.log(cardPosition);

			element.style.opacity = 1;
		}
	});
}

window.addEventListener("scroll", scrollDisplay(projectContainer, projectCard));
