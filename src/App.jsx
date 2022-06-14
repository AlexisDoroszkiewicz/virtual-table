import "./App.css";
import tasks from "./tasks.json";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { css } from "@emotion/react";

/* task : {
  company :{name, picture}, 
  details: {applicants, jobType, },
  selection: {target, status},
  shifts: {},
 } 
*/
function Task({ task }) {
	return (
		<div
			css={css`
				display: flex;
				align-items: center;
			`}>
			<div>{task.company.name}</div>
			<div>{task.selection.status}</div>
			<div>{task.selection.target}</div>
			<div>{task.details.jobType}</div>
			<div>{task.details.applicants}</div>
		</div>
	);
}

function RowVirtualizerFixed() {
	const rowVirtualizer = useVirtualizer({
		count: tasks.length,
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
							<Task task={tasks[virtualRow.index]} />
						</div>
					))}
				</div>
			</div>
		</>
	);
}

function App() {
	return (
		<div className="App">
			<RowVirtualizerFixed />
		</div>
	);
}

export default App;
