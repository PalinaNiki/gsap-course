const nav = document.querySelectorAll(".nav-link");

nav.forEach((item, index) => {
  console.log(item, index); // индекс 0 1 2 3 4 5 6
  item.addEventListener("click", () => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: {
        y: "#section" + (index + 1),
        offsetY: 0,
      },
    });
  });
});

const scrollButtons = document.querySelectorAll(".scroll-button");

scrollButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    gsap.to(window, {
      duration: 0.8,
      scrollTo: {
        y: "#rectangle" + (index + 1),
        offsetY: 80,
      },
    });
  });
});
