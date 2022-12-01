import React from "react";

import { IGetGifsResponse } from "../interfaces";

export const GifItem = ({
	id,
	height,
	imgSrc,
	width,
	title,
}: IGetGifsResponse) => {
	return (
		<div className="card" id={`card-${id}`}>
			<img src={imgSrc} alt={title} width={width} height={height} />
			<p>{title}</p>
		</div>
	);
};
