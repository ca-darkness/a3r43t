"use client"
import { useState } from "react";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { IoEye, IoEyeOff } from "react-icons/io5"

type Props = { changeTab: (tab: string) => void }

export default function Login({ changeTab }: Props) {
    const router = useRouter()
    const { toast } = useToast()
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const login = async (form: FormData) => {
        try {

            const userName = form.get("userName")
            const password = form.get("password")

            const api = await fetch("https://apimb66.itokvip.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, password })
            })

            const { code, data, message } = await api.json()
            if (code === 200) {
                router.push(`login?t=${data.token}`)
                // window.location.href = `https://mb6698.com?token=${data.token}&uagt=digia001a&path=root`
            } else {
                toast({ title: "Lỗi", description: message, variant: "destructive" })
            }
        } catch (err) {

        }
    }

    return <div className="h-full w-screen lg:w-[600px] flex flex-col px-1 lg:px-12">
        <div className="px-4 flex items-center justify-between mb-4">
            <div className="">
                <p className="roboto text-base lg:text-lg font-bold">Đối Tác Chính Thức</p>
                <span className="roboto base-txt text-sm lg:text-base">Villarreal CF & OKVIP</span>
            </div>
            <img src="/images/brand.svg" className="w-[200px]" alt="" />
        </div>

        <form action={login} className="flex justify-center items-center flex-col space-y-4 my-8 px-4">

            <div className="roboto !px-6 bg-white form-input w-full !h-[66px] flex items-center space-x-2">
                <img src="/icons/username.svg" />
                <input id="userName" name="userName" placeholder="Vui lòng nhập tên tài khoản" className="text-lg w-full bg-transparent outline-none border-none" />
            </div>
            <div className="roboto !px-6 bg-white form-input w-full !h-[66px] flex items-center space-x-2">
                <img src="/icons/password.svg" />
                <input id="password" type={showPassword ? "text" : "password"} name="password" placeholder="Vui lòng nhập mật khẩu" className="text-lg w-full bg-transparent outline-none border-none" />
                {
                    showPassword ? <IoEyeOff onClick={() => setShowPassword(prev => !prev)} className="cursor-pointer text-[#4F4F4F] text-3xl right-3 top-[2.4rem]" />
                        : <IoEye onClick={() => setShowPassword(prev => !prev)} className="cursor-pointer text-[#4F4F4F] text-3xl right-3 top-[2.4rem]" />
                }
            </div>
            <div>
                <p className="roboto text-center text-base text-gray-700">Vui lòng tự bảo quản thông tin tài khoản</p>
                <p className="roboto text-center text-base text-gray-700">Để bảo đảm an toàn cho tài khoản của bạn</p>
            </div>
            <Button type="submit" className="rounded-3xl w-full h-[48px] bg-red-500 hover:bg-red-600">ĐĂNG NHẬP</Button>
            <div className="text-base flex items-center space-x-2">
                <span>Bạn chưa có tài khoản?</span>
                <p onClick={() => changeTab("register")} className="cursor-pointer hover:text-red-500 text-red-600">Đăng ký ngay</p>
            </div>
        </form>
    </div>
}