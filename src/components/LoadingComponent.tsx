import React from "react";

import { ILoadingComponentProps } from "../interfaces";

export const LoadingComponent = ({ isLoading }: ILoadingComponentProps) => {
	if (isLoading) {
		return <h3>Cargando.... </h3>;
	}

	return null;
};
