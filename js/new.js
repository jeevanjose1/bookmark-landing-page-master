const curser = document.querySelector(".round");
document.addEventListener("mousemove", function (e) {
  curser.style.left = e.pageX + "px";
  curser.style.top = e.pageY + "px";
});
