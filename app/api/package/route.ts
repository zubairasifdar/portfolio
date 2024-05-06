import { NextRequest, NextResponse } from "next/server";

const POST = async (req: NextRequest, res: NextResponse) => {
    const { price, description} = req.body;
    
    return new res.json({ price })
}