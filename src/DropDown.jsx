import { css } from "@emotion/react";
import Select from "react-select";

const options = [
	{ value: "new", label: "new" },
	{ value: "ongoing", label: "ongoing" },
	{ value: "ready", label: "ready" },
	{ value: "closed", label: "closed" },
];

export default function DropDown({ state }) {
	const [selectedOption, setSelectedOption] = state;

	const handleChange = (e, action) => {
		if (action?.action != "clear") {
			setSelectedOption(e.value);
		} else setSelectedOption(null);
	};

	return (
		<div
			css={css`
				position: sticky;
				top: 0;
				background: white;
				z-index: 99;
			`}>
			<Select
				defaultValue={selectedOption}
				onChange={(e, action) => handleChange(e, action)}
				options={options}
				isClearable
			/>
		</div>
	);
}
