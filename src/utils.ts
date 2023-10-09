import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { type Inputs } from "./components/organisms/Form";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const getFormDataFromLocalStorage = () => {
	const itemsFromLocalStorage = localStorage.getItem("FORM_DATA");

	if (!itemsFromLocalStorage) {
		return [];
	}

	try {
		const items = JSON.parse(itemsFromLocalStorage) as Inputs[];
		return items;
	} catch (error) {
		console.error(error);
		return [];
	}
};

export const setFormDataToLocalStorage = (items: Inputs[]) => {
	return localStorage.setItem("FORM_DATA", JSON.stringify(items));
};
