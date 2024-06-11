"use client"
import { Button } from "../ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
    DialogClose
} from "@/components/ui/dialog"
import { Input } from "../ui/input";
import Link from "next/link";
import { useToast } from "../ui/use-toast";

export default function Header() {
    const { toast } = useToast()
    const login = async (form: FormData) => {
        try {

            const userName = form.get("userName")
            const password = form.get("password")

            const api = await fetch("https://apimb66.itokvip.com/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({userName, password})
            })

            const { code, data, message } = await api.json()
            if (code === 200) {
                window.location.href = `https://mocbai.cc?token=${data.token}`
            } else {
                toast({ title: "Lỗi", description: message, variant: "destructive" })
            }
        } catch (err) {

        }
    }

    return <header className="px-[5%] md:px-[10%] lg:px-[15%] flex justify-between items-center bg-gray-50 border-b py-4">
        <Link href={"/"}><img src="/images/logo.webp" className="w-36" alt="" /></Link>
        <div className="flex space-x-4 items-center">
            <Dialog>
                <DialogTrigger asChild><Button className="bg-gray-50 hover:bg-gray-100 border border-red-500 text-red-500">Đăng nhập</Button></DialogTrigger>
                <DialogContent className="border-4 rounded-[50px]">
                    <div className="head w-full justify-center flex">
                        <img src="/images/logo.webp" className="w-44" alt="" />
                    </div>
                    <form action={login} className="flex justify-center items-center flex-col space-y-4">
                        <Input id="userName" placeholder="Tên đăng nhập" name="userName" className="shadow-lg h-[48px] rounded-3xl bg-gray-50 text-dark w-full" />
                        <Input id="password" type="password" placeholder="Mật khẩu" name="password" className="shadow-lg h-[48px] rounded-3xl bg-gray-50 text-dark w-full" />
                        <p className="text-center text-sm text-gray-500">Vui lòng tự bảo quản thông tin tài khoản để bảo đảm an toàn cho tài khoản của bạn</p>
                        <Button type="submit" className="rounded-3xl w-full h-[48px] bg-red-500 hover:bg-red-600">ĐĂNG NHẬP</Button>
                        <div className="text-sm flex space-x-2">
                            <span>Bạn chưa có tài khoản?</span>
                            <DialogClose asChild className="text-red-500">
                                <Link href={"signup"}>Đăng ký ngay</Link>
                            </DialogClose>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
            <Button className="bg-red-600 hover:bg-red-400">Đăng ký</Button>
        </div>
    </header>
}