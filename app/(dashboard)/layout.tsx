import Aside from "@/components/aside"
import Header from "@/components/header"
import React from "react"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Aside />
			<Header />
			{children}
		</div>
	)
}

export default DashboardLayout
