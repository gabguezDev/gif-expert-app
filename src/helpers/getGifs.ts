import React from "react";
import { IGetGifsApiResponse, IGetGifsResponse } from "../interfaces";

const getGifs = async (category: string) => {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=LpzM1u2koeP8gVplmNQ6cMVEJs3PUvIl&q=${category}&limit=10`;
	const response = await fetch(url);

	const { data } = await response.json();

	const gifsArray: IGetGifsResponse[] = data.map(
		(image: IGetGifsApiResponse) => ({
			id: image.id,
			title: image.title,
			imgSrc: image.images.downsized_medium.url,
			width: image.images.downsized_medium.width,
			height: image.images.downsized_medium.height,
		})
	);

	return gifsArray;
};

export default getGifs;
