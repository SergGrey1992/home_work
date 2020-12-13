import React, {useState} from 'react';

export default {
	title: "MultiSelect"
}
type ListSelectType = {
	id: number
	city: string
	country: string
	population: number
}
export const MultiSelect = () => {

	const listSelect: Array<ListSelectType> = [
		{ id: 1, city: "Minsk", country: "Belarus", population: 100000000 },
		{ id: 2, city: "Mogilev", country: "Belarus", population: 100000000 },
		{ id: 3, city: "Brest", country: "Belarus", population: 100000000 },
		{ id: 4, city: "Vitebsk", country: "Belarus", population: 100000000 },

		{ id: 5, city: "Moscow", country: "Russia", population: 120000000 },
		{ id: 6, city: "Omsk", country: "Russia", population: 8000000 },
		{ id: 7, city: "Tomsk", country: "Russia", population: 70000000 },
		{ id: 8, city: "Piter", country: "Russia", population: 600000000 },

		{ id: 9, city: "Kiev", country: "Belarus", population: 100000000 },
		{ id: 10, city: "Xarkov", country: "Belarus", population: 90000000 },
		{ id: 11, city: "Dnepr", country: "Belarus", population: 12000000 },
		{ id: 12, city: "Chernogov", country: "Belarus", population: 8000000 }
	]
const [value, setValue] = useState(1)

	return<>
	<select value={value}
	></select>
	</>
}