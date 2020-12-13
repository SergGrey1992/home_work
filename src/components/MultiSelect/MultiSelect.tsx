import React, {useState} from 'react';

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

		{ id: 9, city: "Kiev", country: "Ukraine", population: 100000000 },
		{ id: 10, city: "Xarkov", country: "Ukraine", population: 90000000 },
		{ id: 11, city: "Dnepr", country: "Ukraine", population: 12000000 },
		{ id: 12, city: "Chernogov", country: "Ukraine", population: 8000000 }
	]

	const optionEl = listSelect.map((li, i) => <option key={i}>{li.country}</option>)

const valueSelect = listSelect.find( li => <select>{ li.city === "Minsk" }</select>)

	return (
		<div>
			<select name="qwe" id="1" value={valueSelect && valueSelect.city} ></select>
			<option value={optionEl && optionEl.length}></option>{optionEl}
		</div>
	)

}