import { useMemo } from "react";

export default function useFilter(data, filter) {
	const filterByStatus = (data, filter) => {
		return filter == null
			? data.filter((item) => item.selection.status != "closed")
			: data.filter((item) => item.selection.status == filter);
	};

	const defaultStatus = useMemo(() => {
		return filterByStatus(data, null);
	}, [data]);

	const newStatus = useMemo(() => {
		return filterByStatus(data, "new");
	}, [data]);

	const ongoingStatus = useMemo(() => {
		return filterByStatus(data, "ongoing");
	}, [data]);

	const readyStatus = useMemo(() => {
		return filterByStatus(data, "ready");
	}, [data]);

	const closedStatus = useMemo(() => {
		return filterByStatus(data, "closed");
	}, [data]);

	const switchResult = (filter) => {
		switch (filter) {
			case null:
				return defaultStatus;
			case "new":
				return newStatus;
			case "ongoing":
				return ongoingStatus;
			case "ready":
				return readyStatus;
			case "closed":
				return closedStatus;
		}
	};

	return switchResult(filter);
}
