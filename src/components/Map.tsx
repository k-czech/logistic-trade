"use client";

import L from "leaflet";
import {
	MapContainer,
	Marker,
	Popup,
	TileLayer,
} from "react-leaflet";
import MarkerIcon from "leaflet/dist/images/marker-icon.png";

const Map = () => {
	return (
		<MapContainer
			center={[51.505, -0.09]}
			zoom={13}
			scrollWheelZoom={false}
			className="h-screen w-full"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker
				icon={L.icon({
					iconUrl: MarkerIcon.src,
					iconRetinaUrl: MarkerIcon.src,
					iconSize: [25, 41],
					iconAnchor: [12, 41],
					popupAnchor: [1, -34],
				})}
				position={[51.505, -0.09]}
			>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
};

export default Map;
