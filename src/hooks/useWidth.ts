import { useEffect, useState } from 'react';

export const useWidth = (): number => {
	const [width, setWidth] = useState<number>(320);

	useEffect(() => {
		const onResize = () => {
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return width;
};
