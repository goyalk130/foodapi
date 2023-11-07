import data from "@/utils/data"
import { NextResponse } from "next/server"

export const GET = async (req,{params})=>{
    
    return NextResponse.json({success:true,data:data})
}