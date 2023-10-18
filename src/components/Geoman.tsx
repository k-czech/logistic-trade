"use client";

import { useMap } from "react-leaflet";

import "@geoman-io/leaflet-geoman-free";
import "@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css";
import { useCallback, useState } from "react";

export function Geoman() {
	const [drawStart, setDrawStart] = useState(false);
	const map = useMap();

	map.pm.addControls();

	map.pm.setLang("en");

	map.on("pm:drawstart", (e) => {
		console.log(e, "draw start");
		setDrawStart(true);
	});

	map.on("pm:create", (e) => {
		console.log(e, "create");
		setDrawStart(false);
	});

	map.on("pm:textblur", (e) => {
		console.log(e, "text blur");
	});

	const generateRandomColor = useCallback(() => {
		const maxVal = 0xffffff;
		let randomNumber = Math.random() * maxVal;
		randomNumber = Math.floor(randomNumber);
		randomNumber = randomNumber;
		const randColor = randomNumber.toString(16).substring(0, 6);
		return `#${randColor.toUpperCase()}`;
	}, [drawStart]);

	map.pm.setGlobalOptions({
		snapDistance: 15,
		allowSelfIntersection: false,
		templineStyle: { color: generateRandomColor() },
		hintlineStyle: {
			color: generateRandomColor(),
			dashArray: [5, 5],
		},
		pathOptions: { color: generateRandomColor() },
	});

	return null;
}
