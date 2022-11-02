import { useEffect, useLayoutEffect, useState } from 'react';

export const useWidth = (): number => {
	const [width, setWidth] = useState<number>(320);

	useEffect(() => {
		const onResize = () => {
			console.log(window.innerWidth);
			setWidth(window.innerWidth);
		};

		window.addEventListener('resize', onResize);

		return () => {
			window.removeEventListener('resize', onResize);
		};
	}, []);

	useLayoutEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	return width;
};
