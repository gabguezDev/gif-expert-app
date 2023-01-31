import React from "react";

import { fireEvent, render, screen } from "@testing-library/react";

import { AddCategory } from "../../src/components/AddCategory";

describe("Test over <AddCategory/>", () => {
	test("should change textbox value", () => {
		render(<AddCategory onAddCategories={() => {}} />);

		const input: HTMLInputElement = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: "Saitama" } });

		expect(input.value).toBe("Saitama");

		// screen.debug();
	});

	test("should call onNewCategory if input has a value", () => {
		const inputValue = "Saitama";

		const onNewCategory = jest.fn();

		render(<AddCategory onAddCategories={onNewCategory} />);

		const form: HTMLFormElement = screen.getByRole("form");
		const input: HTMLInputElement = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe("");
		expect(onNewCategory).toHaveBeenCalled();
		expect(onNewCategory).toHaveBeenCalledWith(inputValue);
		// expect(onNewCategory).toHaveBeenCalledTimes(2)
	});

	test("should not call onNewCategory if input is empty", () => {
		const inputValue = "";

		const onNewCategory = jest.fn();

		render(<AddCategory onAddCategories={onNewCategory} />);

		const form: HTMLFormElement = screen.getByRole("form");
		const input: HTMLInputElement = screen.getByRole("textbox");

		fireEvent.input(input, { target: { value: inputValue } });
		fireEvent.submit(form);

		expect(input.value).toBe("");
		expect(onNewCategory).not.toHaveBeenCalled();
		// expect(onNewCategory).toHaveBeenCalledWith(inputValue);
		// expect(onNewCategory).toHaveBeenCalledTimes(2)
	});
});
