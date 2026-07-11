import {NextResponse} from "next/server";
import { success } from "zod";
import fa from "zod/v4/locales/fa.cjs";

const mockUser={
    id:'1',
    name:"Rishika",
    email:"rishik@gmail.com",
}

export async function POST(request:Request){
    const body = await request.json();

    const {email, password} = body;

    if(email==="rishik@gmail.com" && password==="123456"){
        return NextResponse.json({
            success:true,
            user:mockUser,
            token:"mock-jwt-token",
        })
    }

    return NextResponse.json({

        success:false,
        message:"Invalid email or password"
    },
    {status:401}
    )
}