import React, { useEffect, useState } from "react";

import { useFetchGifs } from "../hooks/useFetchGifs";

import { IGifGridProps } from "../interfaces";

import { LoadingComponent, GifItem } from "../components";

export const GifGrid = ({ category }: IGifGridProps) => {
	const { categoryItems, isLoading } = useFetchGifs(category);

	return (
		<>
			<h3>{category}</h3>

			<LoadingComponent isLoading={isLoading} />

			<div className="card-grid">
				{categoryItems.map(categoryItem => (
					<GifItem key={categoryItem.id} {...categoryItem} />
					// <li key={id}>{title}</li>
				))}
			</div>
		</>
	);
};
