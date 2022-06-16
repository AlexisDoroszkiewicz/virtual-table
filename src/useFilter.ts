import { useMemo } from "react";

export default function useFilter(data, filter) {
	console.log(filter);

	useMemo(() => {
		data = data.filter((item) => item.selection.status != "closed");
		console.log(data);
	}, [filter]);
	return data;
}
