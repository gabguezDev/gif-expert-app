export interface IAddCategoryProps {
	onAddCategories: (newCategory: string) => void;
}

export interface IGifGridProps {
	category: string;
}

export interface ILoadingComponentProps {
	isLoading: boolean;
}

export interface IGetGifsApiResponse {
	id: string;
	title: string;
	images: {
		downsized_medium: { url: string; width: string; height: string };
	};
}

export interface IGetGifsResponse {
	id: string;
	title: string;
	imgSrc: string;
	width: string | number;
	height: string | number;
}
