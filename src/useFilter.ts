import { useMemo } from "react";

export default function useFilter(data, filter) {
	useMemo(() => {
		if (filter)
			data = data.filter((item) => item.selection.status == filter);
	}, [filter]);
	return data;
}
