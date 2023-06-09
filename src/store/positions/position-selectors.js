export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filter) => {
	if (filter.length === 0) return state.positions;

	return state.positions.filter((item) => item.state !== filter);
};
