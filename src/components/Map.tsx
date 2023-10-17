"use client";

import { type Map } from "leaflet";
import { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Geoman } from "./Geoman";

const MapComponent = () => {
	const mapRef = useRef<Map | null>(null);
	const zoom = 10;

	return (
		<MapContainer
			ref={(ref) => (mapRef.current = ref)}
			center={[52.409538, 16.931992]}
			zoom={zoom}
			className="h-screen w-full"
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Geoman />
		</MapContainer>
	);
};

export default MapComponent;
