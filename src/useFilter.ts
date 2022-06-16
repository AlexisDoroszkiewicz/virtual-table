import { useMemo } from "react";

export default function useFilter(data, filter) {
	if (filter) data = data.filter((item) => item.selection.status == filter);
	return data;
}
