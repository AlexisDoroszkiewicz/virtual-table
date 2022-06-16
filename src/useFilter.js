import { useMemo, useState } from "react";

export default function useFilter(data, filter) {
	const [tasks, setTasks] = useState();
	useMemo(() => {
		data = data.filter((item) =>
			filter != null
				? item.selection.status == filter
				: item.selection.status != "closed"
		);
		setTasks(data);
	}, [filter]);

	return tasks;
}
