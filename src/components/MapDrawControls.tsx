"use client";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import { FeatureGroup } from "react-leaflet";
import {
	EditControl,
	type EditControlProps,
} from "react-leaflet-draw";

export const MapDrawControls = () => {
	const onCreated = (e: EditControlProps["onCreated"]) => {
		console.log(e, "created");
		console.log("Geojson", e.layer.toGeoJSON());
		console.log("coords", e.layer.getLatLngs());
	};

	const onDeleted = (e: EditControlProps["onDeleted"]) => {
		console.log(e, "deleted");
	};

	const onDrawStop = (e: EditControlProps["onDrawStop"]) => {
		console.log(e, "drawStop");
	};

	return (
		<FeatureGroup>
			<EditControl
				position="bottomright"
				onCreated={onCreated}
				onDrawStop={onDrawStop}
				onDeleted={onDeleted}
				draw={{
					polyline: {
						shapeOptions: {
							color: "#16a34a",
							weight: 8,
						},
					},
					polygon: {
						allowIntersection: false,
						showArea: true,
						drawError: {
							color: "#e11d48",
							message:
								"<strong>Oh snap!<strong> you can't draw that!",
						},
						shapeOptions: {
							color: "#f43f5e",
							fillColor: "#be123c",
							fillOpacity: 0.3,
							weight: 8,
						},
					},
				}}
			/>
		</FeatureGroup>
	);
};
