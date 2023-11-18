/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/admin",
				destination: "/admin/users",
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
