import build from "next/dist/build";
import {baseApi} from "./baseApi"
import {LoginRequest} from "@/types/auth"


type LoginResponse = {
  success: boolean;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};
export const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(credentials:LoginRequest)=>({
                url:"/auth/login",
                method:"POST",
                body:credentials,

            }),
        }),
    }),
});

export const {useLoginMutation} = authApi;