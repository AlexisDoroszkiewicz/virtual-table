import "./App.css";
import tasks from "./tasks.json";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import { css } from "@emotion/react";

function Task({ task }) {
	console.log(task);
	return (
		<div
			css={css`
				display: grid;
				gap: 1em;
				grid-template-columns: 25px 2fr 8ch 1fr 1fr 4ch;
				justify-content: center;
				align-items: center;
				width: 100%;
				padding: 0.5em 1em;
				border-bottom: 1px solid lightgrey;
			`}>
			<img src={task.company.pictureURL} width="24" height="24" />
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
		estimateSize: () => 40,
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
