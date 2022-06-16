import { useMemo } from "react";

export default function useFilter(data, filter) {
	console.log(filter);
	useMemo(() => {
		data = data.filter((item) =>
			filter != null
				? item.selection.status == filter
				: item.selection.status != "closed"
		);
	}, [filter]);
	return data;
}
