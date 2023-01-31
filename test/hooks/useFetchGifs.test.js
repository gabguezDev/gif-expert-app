import { renderHook, waitFor } from "@testing-library/react";

import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Test over useFetchGifs hook", () => {
	const category = "One punch";
	test("should return initial state", () => {
		const { result } = renderHook(() => useFetchGifs(category));

		const { categoryItems, isLoading } = result.current;

		expect(categoryItems.length).toBe(0);
		expect(isLoading).toBeTruthy();
	});

	test("should return an images array and isLoading is false", async () => {
		const { result } = renderHook(() => useFetchGifs(category));

		await waitFor(() =>
			expect(result.current.categoryItems.length).toBeGreaterThan(0)
		);

		const { categoryItems, isLoading } = result.current;

		expect(categoryItems.length).toBeGreaterThan(0);
		expect(isLoading).toBeFalsy();
	});
});
