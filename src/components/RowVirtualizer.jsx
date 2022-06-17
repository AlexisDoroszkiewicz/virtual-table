import Task from "@components/Task";
import data from "@public/tasks.json";
import { useVirtualizer } from "@tanstack/react-virtual";
import { useRef } from "react";
import useFilter from "@lib/useFilter";

export default function RowVirtualizer({ filter }) {
	const parentRef = useRef();

	const tasks = useFilter(data, filter);

	const rowVirtualizer = useVirtualizer({
		count: tasks?.length,
		getScrollElement: () => parentRef.current,
		estimateSize: () => 40,
		overscan: 5,
	});

	return (
		<>
			<div className="List" ref={parentRef}>
				<div
					style={{
						height: `${rowVirtualizer.getTotalSize()}px`,
						width: "100%",
						position: "relative",
					}}>
					{rowVirtualizer.measurementsCache.map((virtualRow) => {
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
			</div>
		</>
	);
}
