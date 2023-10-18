"use client";

import { useLeafletContext } from "@react-leaflet/core";
import L from "leaflet";
import { useEffect } from "react";
import { Button } from "./ui/button";

export function Sidebar() {
	const context = useLeafletContext();

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			if (e.key === "Escape") {
				context.map.pm.disableDraw("Marker");
			}
		});

		return () => {
			document.removeEventListener("keydown", (e) => {
				if (e.key === "Escape") {
					context.map.pm.disableDraw("Marker");
				}
			});
		};
	}, [context.map.pm]);

	return (
		<div className="relative z-[900] w-1/12 items-start justify-center p-6">
			<div className="ml-8 flex flex-col space-y-3">
				<Button
					type="button"
					className="bg-yellow-400 text-yellow-900 hover:bg-yellow-500"
					onClick={() => {
						const storeicon = L.icon({
							iconUrl:
								"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
						});
						const options = {
							markerStyle: {
								icon: storeicon,
								title: "Magazyn",

								text: "Magazyn 1",
							},
						};
						context.map.pm.enableDraw("Marker", {
							...options,
							finishOn: "click",
							continueDrawing: false,
						});
					}}
				>
					Magazyn
				</Button>
				<Button
					type="button"
					className="bg-purple-400 text-purple-900 hover:bg-purple-500"
					onClick={() => {
						const deliveryicon = L.icon({
							iconUrl:
								"https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
						});
						const options = {
							markerStyle: {
								icon: deliveryicon,
							},
						};
						context.map.pm.enableDraw("Marker", {
							...options,
							finishOn: "click",
							continueDrawing: false,
						});
					}}
				>
					Przesyłka
				</Button>
			</div>
		</div>
	);
}
