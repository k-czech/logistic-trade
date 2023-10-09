"use client";

import { MapContainer, TileLayer } from "react-leaflet";
import { MapDrawControls } from "./MapDrawControls";

const Map = () => {
	return (
		<MapContainer
			center={[52.409538, 16.931992]}
			zoom={10}
			className="h-screen w-full"
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<MapDrawControls />
		</MapContainer>
	);
};

export default Map;
