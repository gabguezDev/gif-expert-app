import React, { useEffect, useState } from "react";

import getGifs from "../helpers/getGifs";

import { IGetGifsResponse } from "../interfaces";

export const useFetchGifs = (category: string) => {
	const [categoryItems, setCategoryItems] = useState<IGetGifsResponse[]>([]);

	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getImages = async () => {
		const newImages = await getGifs(category);

		setCategoryItems([...newImages]);
		setIsLoading(false);
	};

	useEffect(() => {
		getImages();
		/* return () => {
			second;
		}; */
	}, [category]);

	return { categoryItems, isLoading };
};
