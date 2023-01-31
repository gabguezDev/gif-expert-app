import React, { FormEvent, useState } from "react";
import { useAddCategories } from "../hooks/useAddCategories";

import { IAddCategoryProps } from "../interfaces";

export const AddCategory = ({ onAddCategories }: IAddCategoryProps) => {
	const { handleSubmit, handleInputChange, inputValue } =
		useAddCategories(onAddCategories);

	return (
		<form onSubmit={event => handleSubmit(event)} aria-label="form">
			<input
				type="text"
				placeholder="Buscar gifs"
				value={inputValue}
				onChange={({ target }) => handleInputChange(target.value)}
			/>
		</form>
	);
};
