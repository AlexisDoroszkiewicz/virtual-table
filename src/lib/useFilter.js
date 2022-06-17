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
		let arr;
		switch (filter) {
			case null:
				arr = noClosedStatus;
				break;

			case "new":
				arr = newStatus;
				break;

			case "ongoing":
				arr = ongoingStatus;
				break;

			case "ready":
				arr = readyStatus;
				break;

			case "closed":
				arr = closedStatus;
				break;
		}
		setTasks(arr);
	}, [filter]);

	return tasks;
}
