import { useEffect, useRef } from "react"

export const Map = () => {
    const mapContainerRef = useRef(null);
    const mapRef = useRef(null);
    let isDragging = false;
    let startX;
    let startY;
    let translateX = 0;
    let translateY = 0;
  
    useEffect(() => {
      const mapContainer = mapContainerRef.current;
      const map = mapRef.current;
  
      const handleMouseDown = (event) => {
        event.preventDefault();
        isDragging = true;
        startX = event.clientX - translateX;
        startY = event.clientY - translateY;
      };
  
      const handleMouseMove = (event) => {
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
      };
  
      const handleMouseUp = () => {
        isDragging = false;
      };
  
      const handleMouseLeave = () => {
        isDragging = false;
      };
  
      mapContainer.addEventListener('mousedown', handleMouseDown);
      mapContainer.addEventListener('mousemove', handleMouseMove);
      mapContainer.addEventListener('mouseup', handleMouseUp);
      mapContainer.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        mapContainer.removeEventListener('mousedown', handleMouseDown);
        mapContainer.removeEventListener('mousemove', handleMouseMove);
        mapContainer.removeEventListener('mouseup', handleMouseUp);
        mapContainer.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);
  
    return (
        <>
            <div className="p-2 " style={{ minWidth: "320px", flex: "2" }}>
                <div className="bg-primary d-flex flex-grow-1 align-items-center border-dark border border-4 rounded m-0 dropShadowCustom"
                    style={{ height: "75vh" }}>
                    <div ref={mapContainerRef} id="map-container" className="bg-success hScroll"
                        style={{ cursor: "move", position: "relative", top: "0", left: "0", flex: "2", boxSizing: "border-dark border-box", height: "100%", overflow: "scroll" }}>
                        <img ref={mapRef} id="map" src="mapa/Recurso 16.svg" className="position-absolute top-0 start-0"
                            style={{ height: "auto", width: "200vw" }} alt="" />
                    </div>
                    <script src="./mapMovement.js"></script>
                </div>
            </div>
        </>
    )
}