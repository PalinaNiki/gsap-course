// Draggable

const draggable = document.querySelector(".draggable");

Draggable.create(".drag", {
  // type: "y",
  bounds: draggable,
  inertia: true,

  onRelease: function () {
    console.log("drag ended");
    gsap.to(".drag", { scale: 1 });
  },
  onPress: function () {
    console.log("onPress");
    gsap.to(".drag", { scale: 0.9 });
  },
  dragClickables: true,
});

// Добавляем новый Draggable для элемента drag-2
Draggable.create(".drag-2", {
  type: "rotation",
  inertia: true,
});

Draggable.create(".ball", {
  type: "x",
  bounds: draggable,
  inertia: true,
});
