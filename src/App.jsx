import "@styles/App.css";
import DropDown from "@components/DropDown";
import RowVirtualizer from "@components/RowVirtualizer";
import { useState } from "react";

function App() {
	const [selectedOption, setSelectedOption] = useState("default");
	return (
		<>
			<DropDown state={[selectedOption, setSelectedOption]} />
			<RowVirtualizer filter={selectedOption} />
		</>
	);
}

export default App;
