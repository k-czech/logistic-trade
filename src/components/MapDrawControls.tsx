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

	return (
		<FeatureGroup>
			<EditControl
				position="bottomright"
				onCreated={onCreated}
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
							color: "#e1e100",
							message:
								"<strong>Oh snap!<strong> you can't draw that!",
						},
						shapeOptions: {
							color: "#bada55",
						},
					},
				}}
			/>
		</FeatureGroup>
	);
};
