import * as React from 'react';
import type { AppProps } from 'next/app';
import { Global, css } from '@emotion/react';
import { globalStyles } from '@/styles';
import { useWidth } from '@/hooks';

export default function App({ Component, pageProps }: AppProps) {
	const width = useWidth();

	const styles = React.useMemo(() => {
		return css`
			${globalStyles}
			:root {
				--current-width: clamp(var(--min-width), ${width}, var(--max-width));
			}
		`;
	}, [width]);
	return (
		<>
			<Global styles={styles} />
			<Component {...pageProps} />
		</>
	);
}
