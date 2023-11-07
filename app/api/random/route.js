import { NextResponse } from "next/server"

export const GET = async (req,{params})=>{
    console.log(params)
    return NextResponse.json({success:true})
}