import Task from "@components/Task";
import data from "@public/tasks.json";
import { useWindowVirtualizer } from "@tanstack/react-virtual";
import useFilter from "@lib/useFilter";

export default function RowVirtualizer({ filter }) {
	const tasks = useFilter(data, filter);

	const rowVirtualizer = useWindowVirtualizer({
		count: tasks?.length,
		estimateSize: () => 40,
		overscan: 5,
	});

	return (
		<>
			<div
				style={{
					height: `${rowVirtualizer.getTotalSize()}px`,
					width: "100%",
					position: "relative",
				}}>
				{rowVirtualizer.getVirtualItems().map((virtualRow) => {
					return (
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
					);
				})}
			</div>
		</>
	);
}
