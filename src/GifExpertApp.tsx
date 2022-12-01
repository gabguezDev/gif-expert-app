import { useState } from "react";

import { GifGrid, AddCategory } from "./components";

const GifExpertApp = () => {
	const [categories, setCategories] = useState<string[]>([]);

	const addCategory = (newCategory: string) => {
		//Filter Repeated categories START
		const auxArray = categories.map(cat => cat.toLowerCase());
		if (auxArray.includes(newCategory.toLowerCase())) return;
		//Filter Repeated categories FINISH

		setCategories(prevCategories => [newCategory, ...prevCategories]);
	};

	return (
		<>
			<h1>Gif Expert App</h1>

			<AddCategory onAddCategories={addCategory} />

			{categories.map((category, index) => (
				<GifGrid key={`category-${index}`} category={category} />
			))}
		</>
	);
};

export default GifExpertApp;
