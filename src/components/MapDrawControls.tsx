"use client";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";
import { useCallback, useEffect, useState } from "react";
import { FeatureGroup } from "react-leaflet";
import {
	EditControl,
	type EditControlProps,
} from "react-leaflet-draw";

export const MapDrawControls = () => {
	const [drawStart, setDrawStart] = useState(false);
	const onCreated = (e: EditControlProps["onCreated"]) => {
		console.log(e, "created");
		console.log("Geojson", e.layer.toGeoJSON());
		e.layer.bindTooltip("I am a tooltip");
		setDrawStart(false);
	};

	const onDeleted = (e: EditControlProps["onDeleted"]) => {
		console.log(e, "deleted");
	};

	const onEdited = (e: EditControlProps["onEdited"]) => {
		console.log(e, "edited");
	};

	const onDrawStart = (e: EditControlProps["onDrawStart"]) => {
		console.log(e, "draw start");
	};

	const generateRandomColor = useCallback(() => {
		const maxVal = 0xffffff;
		let randomNumber = Math.random() * maxVal;
		randomNumber = Math.floor(randomNumber);
		randomNumber = randomNumber;
		const randColor = randomNumber.toString(16).substring(0, 6);
		return `#${randColor.toUpperCase()}`;
	}, [drawStart]);

	useEffect(() => {
		if (!drawStart) {
			setDrawStart(true);
		}
	}, [drawStart]);

	return (
		<FeatureGroup>
			<EditControl
				position="bottomright"
				onCreated={onCreated}
				onDeleted={onDeleted}
				onEdited={onEdited}
				onDrawStart={onDrawStart}
				draw={{
					polyline: {
						allowIntersection: false,
						shapeOptions: {
							color: generateRandomColor(),
							weight: 5,
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
							color: generateRandomColor(),
							fillColor: generateRandomColor(),
							fillOpacity: 0.3,
							weight: 8,
						},
					},
				}}
			/>
		</FeatureGroup>
	);
};
