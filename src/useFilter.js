import { useMemo } from "react";

export default function useFilter(data, filter) {
	useMemo(() => {
		data = data.filter((item) =>
			filter
				? item.selection.status == filter
				: item.selection.status != "closed"
		);
	}, [filter]);
	return data;
}
