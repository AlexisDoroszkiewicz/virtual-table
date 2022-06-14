import "./App.css";
import tasks from "./tasks.json";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";

/* task : {
  company :{name, picture}, 
  details: {applicants, jobType, },
  selection: {target, status},
  shifts: {},
 } 
*/

function RowVirtualizerFixed() {
	const rowVirtualizer = useVirtualizer({
		count: 1000,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 35,
		overscan: 5,
	});

	const parentRef = useRef();

	return (
		<>
			<div className="List" ref={parentRef}>
				<div
					style={{
						height: `${rowVirtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}>
					{rowVirtualizer.getVirtualItems().map((virtualRow) => (
						<div
							key={virtualRow.index}
							className={
								virtualRow.index % 2
									? "ListItemOdd"
									: "ListItemEven"
							}
							style={{
								position: "absolute",
								top: 0,
								left: 0,
								width: "100%",
								height: `${virtualRow.size}px`,
								transform: `translateY(${virtualRow.start}px)`,
							}}>
							Row {virtualRow.index}
						</div>
					))}
				</div>
			</div>
		</>
	);
}

function App() {
	console.log(tasks);
	return (
		<div className="App">
			<RowVirtualizerFixed />
		</div>
	);
}

export default App;
