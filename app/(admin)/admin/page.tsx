import dynamic from "next/dynamic"

const Table = dynamic(() => import("../../../components/table"), { ssr: false })

async function AdminDashboard() {
	return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div className="sm:w-32 lg:w-64 h-screen lg:block" />
				<div>hsafdsyhidfkhsifsiuyhifs</div>
			</div>
		</main>
	)
}

export default AdminDashboard
