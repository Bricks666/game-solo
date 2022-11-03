/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	redirects: async () => [
		{
			source: '/',
			destination: '/start',
			permanent: true,
		},
	],
};

module.exports = nextConfig;
