import React, { FormEvent, useState } from "react";
import { IAddCategoryProps } from "../interfaces";

export const useAddCategories = (
	onAddCategories: IAddCategoryProps["onAddCategories"]
) => {
	const [inputValue, setInputValue] = useState<string>("");

	const handleInputChange = (inputValue: string) => {
		setInputValue(inputValue);
	};

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (inputValue.trim().length < 1) return;

		onAddCategories(inputValue);
		setInputValue("");
	};

	return { handleSubmit, handleInputChange, inputValue };
};
