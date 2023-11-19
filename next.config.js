/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/admin",
				destination: "/admin/users",
				permanent: true,
			},
			{
				source: "/auth",
				destination: "/auth/login",
				permanent: true,
			},
			// {
			// 	source: "/auth/",
			// 	destination: "/auth/login",
			// 	permanent: true,
			// },
		]
	},
}

module.exports = nextConfig
