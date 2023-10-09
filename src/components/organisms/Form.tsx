"use client";

import { useForm, type SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { setFormDataToLocalStorage } from "@/utils";

export type Inputs = {
	name: string;
	weight: number;
	color: string;
	fillColor: string;
};

export function FormComponent() {
	const form = useForm<Inputs>();
	const [formData, setFormData] = useState<Inputs[]>([]);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const onSubmit: SubmitHandler<Inputs> = (data) => {
		setFormData([...formData, data]);
		setIsSubmitting(true);
		setFormDataToLocalStorage([...formData, data]);
	};

	useEffect(() => {
		form.reset({
			name: "",
			weight: 0,
			color: "",
			fillColor: "",
		});
		setIsSubmitting(false);
	}, [form, isSubmitting]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8"
			>
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Nazwa regionu</FormLabel>
							<FormControl>
								<Input type="text" placeholder="Poznań" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="weight"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Grubość lini</FormLabel>
							<FormControl>
								<Input
									type="number"
									placeholder="Grubość lini"
									defaultValue={0}
									max={10}
									min={0}
									{...field}
								/>
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="color"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Kolor lini</FormLabel>
							<FormControl>
								<Input type="color" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="fillColor"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Kolor wypełnienia</FormLabel>
							<FormControl>
								<Input type="color" {...field} />
							</FormControl>
						</FormItem>
					)}
				/>
				<Button type="submit">Dodaj</Button>
			</form>
		</Form>
	);
}
