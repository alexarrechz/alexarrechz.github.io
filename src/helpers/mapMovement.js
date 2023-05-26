const mapContainer = document.getElementById("map-container");
const map = document.getElementById("map_div");

let isDragging = false;
let startX;
let startY;
let translateX = 0;
let translateY = 0;

// Centrar el mapa en el contenedor al inicio
const containerWidth = mapContainer.clientWidth;
const containerHeight = mapContainer.clientHeight;
const mapWidth = map.clientWidth;
const mapHeight = map.clientHeight;
translateX = (containerWidth - mapWidth) / 2;
translateY = (containerHeight - mapHeight) / 2;

// Ajustar los límites de desplazamiento para mantener el mapa visible dentro del contenedor
const maxX = mapWidth - containerWidth;
const maxY = mapHeight - containerHeight;
translateX = Math.max(Math.min(translateX, 0), -maxX / 2);
translateY = Math.max(Math.min(translateY, 0), -maxY / 2);

// Establecer las barras de desplazamiento en el 50% horizontal y verticalmente
mapContainer.scrollLeft = (mapContainer.scrollWidth - mapContainer.clientWidth) / 2.9;
mapContainer.scrollTop = (mapContainer.scrollHeight - mapContainer.clientHeight) / 2;


mapContainer.addEventListener("mousedown", (event) => {
  event.preventDefault();
  isDragging = true;
  startX = event.clientX;
  startY = event.clientY;
});

mapContainer.addEventListener("mousemove", (event) => {
  event.preventDefault();
  if (isDragging) {
    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;
    startX = event.clientX;
    startY = event.clientY;

    // Mover las barras de desplazamiento del contenedor
    mapContainer.scrollLeft -= deltaX;
    mapContainer.scrollTop -= deltaY;
  }
});

mapContainer.addEventListener("mouseup", () => {
  isDragging = false;
});

mapContainer.addEventListener("mouseleave", () => {
  isDragging = false;
});
