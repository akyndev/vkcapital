import * as d from "next/dynamic"

const Table = d.default(() => import("../../../../components/table"), {
	ssr: false,
})


function AdminDashboard() {

	return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div className="sm:w-24 lg:w-64 h-screen lg:block" />
				<Table />
			</div>
		</main>
	)
}

export default AdminDashboard
