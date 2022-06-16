import Select from "react-select";

const options = [
	{ value: "new", label: "new" },
	{ value: "ongoing", label: "ongoing" },
	{ value: "ready", label: "ready" },
	{ value: "closed", label: "closed" },
];

export default function DropDown({ state }) {
	const [selectedOption, setSelectedOption] = state;

	return (
		<div>
			<Select
				defaultValue={selectedOption}
				onChange={setSelectedOption}
				options={options}
				isClearable
			/>
		</div>
	);
}
