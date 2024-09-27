/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	images: {
		unoptimized: true,
	},
	assetPrefix: '/coming-soon/',
	basePath: '/coming-soon',
};

module.exports = nextConfig;
