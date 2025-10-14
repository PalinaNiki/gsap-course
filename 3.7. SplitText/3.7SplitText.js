// split elements with the class "split" into words and characters
let split = SplitText.create(".split", { type: "words" });
const startsplit = document.querySelector(".startsplit");

const startAnimation = gsap.from(split.words, {
  duration: 0.4,
  y: 10, // animate from 10px below
  autoAlpha: 0, // fade in from opacity: 0 and visibility: hidden
  stagger: 0.05, // 0.05 seconds between each
  paused: true, // initially paused
});

startsplit.addEventListener("click", () => {
  startAnimation.restart(); // restart the animation on each click
});
