const headerNav = document.querySelector("nav");
const logo = document.querySelector(".logo");

export function dropDownMenu() {
	headerNav.classList.toggle("active");

	if (headerNav.classList.contains("active")) {
		logo.src = "images/Logo-dark-blue.png";
	} else {
		logo.src = "images/Logo-white.png";
	}
}
