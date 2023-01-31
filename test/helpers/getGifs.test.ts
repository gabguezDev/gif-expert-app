import getGifs from "../../src/helpers/getGifs";

describe("Tests over getGifs()", () => {
	test("should return gifs array", async () => {
		const gifs = await getGifs("One punch");

		expect(gifs.length).toBeGreaterThan(0);
		expect(gifs[0]).toEqual({
			id: expect.any(String),
			title: expect.any(String),
			height: expect.any(String),
			imgSrc: expect.any(String),
			width: expect.any(String),
		});
	});
});
