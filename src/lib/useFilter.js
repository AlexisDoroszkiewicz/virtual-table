import { useMemo } from "react";

export default function useFilter(data, filter) {
	data = useMemo(() => {
		return data.reduce((acc, task) => {
			if (!acc["default"]) acc["default"] = [];
			if (!acc[task.selection.status]) acc[task.selection.status] = [];

			if (task.selection.status != "closed") acc["default"].push(task);
			acc[task.selection.status].push(task);

			return acc;
		}, {});
	}, []);
	return data[filter];
}
