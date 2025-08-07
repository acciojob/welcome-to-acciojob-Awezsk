//your JS code here. If required.
// When the button is clicked, change the heading color randomly
document.getElementById("color-btn").addEventListener("click", function () {
  const colors = ["#1565c0", "#2e7d32", "#ad1457", "#ff6f00", "#6a1b9a"];
  const heading = document.getElementById("main-heading");
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  heading.style.color = randomColor;
});
