import { prisma } from "@/lib/authOptions"
import { User } from "@/lib/types"
import { formattedValue } from "@/lib/utils"
import dynamic from "next/dynamic"
import React from "react"

const allUser: User[] = [
	{
		id: "6557527b0a0f4ccc4e9f2038",
		name: "Joseph Akinlade",
		email: "demo@minimals.cc",
		emailVerified: null,
		password: "$2a$10$TNpRwg74tr2XC31xSO048u3o/CKwTXn59hcOKdJVOiyhRpc800X0S",
		image: null,
		balance: 7000,
		interest: 90,
		plan: "BASIC",
		transactions: [],
	},
	{
		id: "655753262627f9401ba2693d",
		name: "ryt",
		email: "elprimeroinvestments@gmail.com",
		emailVerified: null,
		password: "$2a$10$FdgCOl5FaSPvUNOB/XYCDOPaoUKUSwEce4WIegkSw.5x4LsoRrIVG",
		image: null,
		balance: 5000,
		interest: 300,
		plan: "PREMIUM",
		transactions: [],
	},
	{
		id: "65577dd57d87616483052b13",
		name: "alamu",
		email: "akinladejoseph3880@gmail.com",
		emailVerified: null,
		password: "$2a$10$drDEG9o5FPkZbQeRO8onn.g8AAUucS83fyc/precmJJgE.y5p3cg6",
		image: null,
		balance: 0,
		interest: 0,
		plan: "BASIC",
		transactions: [],
	},
	{
		id: "6557527b0a0f4ccc4e9f2038",
		name: "Joseph Akinlade",
		email: "demo@minimals.cc",
		emailVerified: null,
		password: "$2a$10$TNpRwg74tr2XC31xSO048u3o/CKwTXn59hcOKdJVOiyhRpc800X0S",
		image: null,
		balance: 7000,
		interest: 90,
		plan: "BASIC",
		transactions: [],
	},
	{
		id: "655753262627f9401ba2693d",
		name: "ryt",
		email: "elprimeroinvestments@gmail.com",
		emailVerified: null,
		password: "$2a$10$FdgCOl5FaSPvUNOB/XYCDOPaoUKUSwEce4WIegkSw.5x4LsoRrIVG",
		image: null,
		balance: 5000,
		interest: 300,
		plan: "PREMIUM",
		transactions: [],
	},
	{
		id: "65577dd57d87616483052b13",
		name: "Alamu",
		email: "akinladejoseph3880@gmail.com",
		emailVerified: null,
		password: "$2a$10$drDEG9o5FPkZbQeRO8onn.g8AAUucS83fyc/precmJJgE.y5p3cg6",
		image: null,
		balance: 0,
		interest: 0,
		plan: "BASIC",
		transactions: [],
	},
	{
		id: "6557527b0a0f4ccc4e9f2038",
		name: "Joseph Akinlade",
		email: "demo@minimals.cc",
		emailVerified: null,
		password: "$2a$10$TNpRwg74tr2XC31xSO048u3o/CKwTXn59hcOKdJVOiyhRpc800X0S",
		image: null,
		balance: 7000,
		interest: 90,
		plan: "BASIC",
		transactions: [],
	},
	{
		id: "655753262627f9401ba2693d",
		name: "ryt",
		email: "elprimeroinvestments@gmail.com",
		emailVerified: null,
		password: "$2a$10$FdgCOl5FaSPvUNOB/XYCDOPaoUKUSwEce4WIegkSw.5x4LsoRrIVG",
		image: null,
		balance: 5000,
		interest: 300,
		plan: "PREMIUM",
		transactions: [],
	},
	{
		id: "65577dd57d87616483052b13",
		name: "caleb",
		email: "akinladejoseph3880@gmail.com",
		emailVerified: null,
		password: "$2a$10$drDEG9o5FPkZbQeRO8onn.g8AAUucS83fyc/precmJJgE.y5p3cg6",
		image: null,
		balance: 0,
		interest: 0,
		plan: "BASIC",
		transactions: [],
	},
	{
		id: "6557527b0a0f4ccc4e9f2038",
		name: "Joseph Akinlade",
		email: "demo@minimals.cc",
		emailVerified: null,
		password: "$2a$10$TNpRwg74tr2XC31xSO048u3o/CKwTXn59hcOKdJVOiyhRpc800X0S",
		image: null,
		balance: 7000,
		interest: 90,
		plan: "BASIC",
		transactions: [],
	},
	{
		id: "655753262627f9401ba2693d",
		name: "ryt",
		email: "elprimeroinvestments@gmail.com",
		emailVerified: null,
		password: "$2a$10$FdgCOl5FaSPvUNOB/XYCDOPaoUKUSwEce4WIegkSw.5x4LsoRrIVG",
		image: null,
		balance: 5000,
		interest: 300,
		plan: "PREMIUM",
		transactions: [],
	},
	{
		id: "65577dd57d87616483052b13",
		name: "Veronica",
		email: "akinladejoseph3880@gmail.com",
		emailVerified: null,
		password: "$2a$10$drDEG9o5FPkZbQeRO8onn.g8AAUucS83fyc/precmJJgE.y5p3cg6",
		image: null,
		balance: 0,
		interest: 0,
		plan: "BASIC",
		transactions: [],
	},
]

const Table = dynamic(() => import("../../../../components/table"), { ssr: false })

async function AdminDashboard() {
	// const allUser = await prisma.user.findMany()

	return (
		<main className="relative container lg:px-8">
			<div className="w-full h-screen flex items-start space-x-0">
				<div className="sm:w-32 lg:w-64 h-screen lg:block" />
				<Table allUser={allUser} />
			</div>
		</main>
	)
}

export default AdminDashboard
