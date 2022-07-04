const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, distance = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  console.log(elementTop);

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / distance
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

export const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.2)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el);
    }
  });
};
