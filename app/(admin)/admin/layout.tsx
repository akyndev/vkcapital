import Aside from "@/components/aside"
import React from "react"

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Aside />
			{children}
		</div>
	)
}

export default AdminLayout
