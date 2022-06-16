import "./App.css";
import DropDown from "./DropDown";
import RowVirtualizerFixed from "./RowVirtualizerFixed";
import { useState } from "react";

function App() {
	const [selectedOption, setSelectedOption] = useState({ value: null });
	return (
		<>
			<DropDown state={[selectedOption, setSelectedOption]} />
			<RowVirtualizerFixed filter={selectedOption?.value} />
		</>
	);
}

export default App;
