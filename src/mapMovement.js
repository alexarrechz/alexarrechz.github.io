const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map");
let isDragging = false;
let startX;
let startY;
let translateX = 0;
let translateY = 0;

mapContainer.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDragging = true;
  startX = event.clientX - translateX;
  startY = event.clientY - translateY;
});

mapContainer.addEventListener("mousemove", (event) => {
  event.preventDefault();
  if (isDragging) {
    translateX = event.clientX - startX;
    translateY = event.clientY - startY;

    // limit translateX and translateY to stay within mapContainer
    const maxX = mapContainer.clientWidth - map.clientWidth;
    const maxY = mapContainer.clientHeight - map.clientHeight;
    translateX = Math.min(Math.max(translateX, maxX), 0);
    translateY = Math.min(Math.max(translateY, maxY), 0);

    map.style.transform = `translate(${translateX}px, ${translateY}px)`;
  }
});

mapContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

mapContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});
