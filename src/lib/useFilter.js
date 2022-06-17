import { useEffect, useMemo, useState } from "react";

export default function useFilter(data, filter) {
	const [tasks, setTasks] = useState();
	const noClosedStatus = useMemo(() => {
		return data.filter((item) => item.selection.status != "closed");
	}, [data]);

	const newStatus = useMemo(() => {
		return data.filter((item) => item.selection.status == "new");
	}, [data]);

	const ongoingStatus = useMemo(() => {
		return data.filter((item) => item.selection.status == "ongoing");
	}, [data]);

	const readyStatus = useMemo(() => {
		return data.filter((item) => item.selection.status == "ready");
	}, [data]);

	const closedStatus = useMemo(() => {
		return data.filter((item) => item.selection.status == "closed");
	}, [data]);

	useEffect(() => {
		switch (filter) {
			case null:
				setTasks(noClosedStatus);
				break;

			case "new":
				setTasks(newStatus);
				break;

			case "ongoing":
				setTasks(ongoingStatus);
				break;

			case "ready":
				setTasks(readyStatus);
				break;

			case "closed":
				setTasks(closedStatus);
				break;
		}
	}, [filter]);

	return tasks;
}
