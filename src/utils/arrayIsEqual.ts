export const arrayIsEqual = <T extends number | string | null>(
	sortedArray1: T[],
	sortedArray2: T[]
): boolean => {
	if (sortedArray1.length !== sortedArray2.length) {
		return false;
	}
	return sortedArray1.join('') === sortedArray2.join('');
};
