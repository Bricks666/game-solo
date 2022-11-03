import * as React from 'react';

export const extractId = (
	evt: React.SyntheticEvent<HTMLElement, Event>
): number | null => {
	console.dir(evt.currentTarget.dataset);
	const id = Number(evt.currentTarget.dataset.id);
	return Number.isNaN(id) ? null : id;
};
