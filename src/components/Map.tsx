"use client";

import { type LatLngBoundsExpression } from "leaflet";
import { MapContainer, Polygon, TileLayer } from "react-leaflet";
import { useState } from "react";
import { MapDrawControls } from "./MapDrawControls";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

const positions: LatLngBoundsExpression = [
	[52.699690022554584, 17.155151367187504],
	[52.60137941045536, 16.776123046875004],
	[52.69136718582764, 16.421813964843754],
	[52.51454943590015, 16.174621582031254],
	[52.331982407533786, 15.930175781250002],
	[51.7508394806285, 17.031555175781254],
	[52.10397471104031, 17.306213378906254],
	[52.24377883252849, 17.70584106445313],
	[52.45433567512185, 17.580871582031254],
];

const Map = () => {
	const [open, setOpen] = useState(false);
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
			<Polygon positions={positions} />
			<MapDrawControls />
			<AlertDialog open={open}>
				<AlertDialogContent className="z-[999]">
					<AlertDialogHeader>
						<AlertDialogTitle>
							Wprowadź nazwę zaznaczonego regionu
						</AlertDialogTitle>
						<AlertDialogDescription>
							Lorem ipsum dolor sit, amet consectetur adipisicing
							elit. Voluptatibus nostrum inventore eveniet consectetur
							doloribus quas expedita possimus vero tempore debitis.
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel onClick={() => setOpen(false)}>
							Anuluj
						</AlertDialogCancel>
						<AlertDialogAction onClick={() => setOpen(false)}>
							Zapisz
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</MapContainer>
	);
};

export default Map;
