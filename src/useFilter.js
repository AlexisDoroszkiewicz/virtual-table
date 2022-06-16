export default function useFilter(data, filter) {
	data = data.filter((item) =>
		filter != null
			? item.selection.status == filter
			: item.selection.status != "closed"
	);
	return data;
}
