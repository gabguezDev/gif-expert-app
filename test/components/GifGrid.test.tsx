import React from "react";

import { render, screen } from "@testing-library/react";

import { GifGrid } from "../../src/components/GifGrid";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Test over <GifGrid />", () => {
	test("should render Loading initially", () => {
		const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<
			typeof useFetchGifs
		>;

		mockUseFetchGifs.mockReturnValue({ categoryItems: [], isLoading: true });

		const category = "One punch";
		const loadingLabel = "Cargando....";

		render(<GifGrid category={category} />);

		expect(screen.getByText(loadingLabel));
		expect(screen.getByText(category));

		// screen.debug();
	});

	test("should render 2 images when fetch them", () => {
		const mockUseFetchGifs = useFetchGifs as jest.MockedFunction<
			typeof useFetchGifs
		>;

		const gifItems = [
			{
				id: "ABC",
				title: "title",
				height: "100",
				width: "100",
				imgSrc: "url1",
			},
			{
				id: "123",
				title: "title",
				height: "200",
				width: "200",
				imgSrc: "url2",
			},
		];

		mockUseFetchGifs.mockReturnValue({
			categoryItems: gifItems,
			isLoading: false,
		});

		const category = "One punch";
		const loadingLabel = "Cargando....";

		render(<GifGrid category={category} />);

		expect(screen.getByText(category));
		expect(screen.getAllByRole("img").length).toBe(2);

		screen.debug();
	});
});
