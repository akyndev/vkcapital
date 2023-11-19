"use server"

import axios from "axios"
import { revalidateTag } from "next/cache"

export async function getUsers(email: string){
    await axios.delete(`/api/delete/${email}`)
    revalidateTag("users")
}