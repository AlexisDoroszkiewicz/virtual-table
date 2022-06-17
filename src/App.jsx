import "@styles/App.css";
import DropDown from "@components/DropDown";
import RowVirtualizerFixed from "@components/RowVirtualizerFixed";
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
