import { useEffect, useRef } from "react"
import mapa from '../mapa/Recurso 16.svg'
import { fetchBuilding } from "./helpers/fetchBuilding";

export const Map = () => {
	const mapContainerRef = useRef(null);
	const mapRef = useRef(null);

	useEffect(() => {
		const mapDiv = mapContainerRef.current.querySelector("#map_div");
		const edificios = mapDiv.getElementsByClassName("edificio");

		const handleClick = async (event) => {
			if (event.target.classList.contains("edificio")) {
				const clickedDiv = event.target;
				const divId = clickedDiv.id.substring(clickedDiv.id.indexOf("_") + 1);
				// Acceder a los elementos de la carta usando referencias
				const carta_name = document.getElementById("main-card_name");
				//const carta_subtitle = document.getElementById("main-card_subtitle");
				const carta_parrafo = document.getElementById("main-card_parrafo");

				const { result } = await fetchBuilding(divId);
				console.log(result);
				carta_name.textContent = result.Nombre;
				//carta_subtitle.textContent = "subtitle";
				//carta_subtitle.classList.remove("d-none");
				carta_parrafo.textContent = result.Descripcion;
			}
		};

		Array.from(edificios).forEach((edificio) => {
			edificio.addEventListener("click", handleClick);
		});

		return () => {
			Array.from(edificios).forEach((edificio) => {
				edificio.removeEventListener("click", handleClick);
			});
		};
	}, []);

	useEffect(() => {
		const mapContainer = mapContainerRef.current;
		const map = mapRef.current;

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

		const handleMouseDown = (event) => {
			event.preventDefault();
			isDragging = true;
			startX = event.clientX;
			startY = event.clientY;
		};

		const handleMouseMove = (event) => {
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
		};

		const handleMouseUp = () => {
			isDragging = false;
		};

		const handleMouseLeave = () => {
			isDragging = false;
		};

		mapContainer.addEventListener("mousedown", handleMouseDown);
		mapContainer.addEventListener("mousemove", handleMouseMove);
		mapContainer.addEventListener("mouseup", handleMouseUp);
		mapContainer.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			mapContainer.removeEventListener("mousedown", handleMouseDown);
			mapContainer.removeEventListener("mousemove", handleMouseMove);
			mapContainer.removeEventListener("mouseup", handleMouseUp);
			mapContainer.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<>
			<div id="main_map" className="p-2 " style={{ minWidth: "320px", flex: "2" }}>
				<div id="map_container_container"
					className="bg-primary d-flex flex-grow-1 align-items-center border-dark border border-4 rounded m-0 dropShadowCustom">
					<div ref={mapContainerRef} id="map-container" className="map_container bg-success hScroll">
						<div className="map_div" id="map_div">
							<div id="edificio_1" className="edificio edificio_1"></div>
							<div id="edificio_2" className="edificio edificio_2"></div>
							<div id="edificio_3" className="edificio edificio_3"></div>
							<div id="edificio_4" className="edificio edificio_4"></div>
							<div id="edificio_5" className="edificio edificio_5"></div>
							<div id="edificio_6" className="edificio edificio_6"></div>
							<div id="edificio_7" className="edificio edificio_7"></div>
							<div id="edificio_8" className="edificio edificio_8"></div>
							<div id="edificio_9" className="edificio edificio_9"></div>
							<div id="edificio_10" className="edificio edificio_10"></div>
							<div id="edificio_11" className="edificio edificio_11"></div>
							<div id="edificio_12" className="edificio edificio_12"></div>
							<div id="edificio_13" className="edificio edificio_13"></div>
							<div id="edificio_14" className="edificio edificio_14"></div>
							<div id="edificio_15" className="edificio edificio_15"></div>
							<div id="edificio_16" className="edificio edificio_16"></div>
							<div id="edificio_17" className="edificio edificio_17"></div>
							<div id="edificio_18" className="edificio edificio_18"></div>
							<div id="edificio_19" className="edificio edificio_19"></div>
							<div id="edificio_20" className="edificio edificio_20"></div>
							<div id="edificio_21" className="edificio edificio_21"></div>
							<div id="edificio_22" className="edificio edificio_22"></div>
							<div id="edificio_23" className="edificio edificio_23"></div>
							<div id="edificio_24" className="edificio edificio_24"></div>
							<div id="edificio_25" className="edificio edificio_25"> </div>
							<img id="map" ref={mapRef} src={mapa} alt="" />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}