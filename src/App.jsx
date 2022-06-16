import "./App.css";
import DropDown from "./DropDown";
import RowVirtualizerFixed from "./RowVirtualizerFixed";
import { useState } from "react";

function App() {
	const [selectedOption, setSelectedOption] = useState(null);
	return (
		<>
			<DropDown state={[selectedOption, setSelectedOption]} />
			<RowVirtualizerFixed filter={selectedOption} />
		</>
	);
}

export default App;
