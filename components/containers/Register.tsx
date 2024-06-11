"use client"
import { Button } from "../ui/button"
import { useState } from "react"
import { IoCheckmark, IoReload } from "react-icons/io5"
import { useToast } from "../ui/use-toast"
import { useRouter } from "next/navigation"
import { IoEye, IoEyeOff } from "react-icons/io5"
import { RiVerifiedBadgeFill } from "react-icons/ri"

type Props = { uuid: string, image: string, changeTab: (tab: string) => void }

const usernameRegex = new RegExp('^[A-Za-z0-9]{5,12}$')
const passwordRegex = new RegExp(`^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@\^&%*\$])([a-zA-Z0-9@\^&%*\$]{8,20})$`)
const emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
const phoneNumberRegex = new RegExp(`^(?!0)[1-9]{9}$`)

export default function Register({ uuid, image, changeTab }: Props) {

    const router = useRouter()
    const [captcha, setCaptcha] = useState({ uuid, image })
    const [loading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showRePassword, setShowRePassword] = useState<boolean>(false)
    const [checked, setChecked] = useState<boolean>(true)
    const [password, setPassword] = useState<string>("")
    const [rePassword, setRePassword] = useState<string>("")
    const { toast } = useToast()
    const reloadCaptcha = async () => {
        try {
            const res = await fetch("https://apimb66.itokvip.com/api/auth/captcha", { cache: "no-cache" })
            const data = await res.json()
            setCaptcha({ uuid: data.data.uuid, image: data.data.image })
        } catch (err) {
            return { err }
        }

    }

    const isValidPassword = passwordRegex.test(password)
    const isSameValue = password.length > 7 && (password === rePassword)

    const signup = async (form: FormData) => {
        try {
            setIsLoading(true)
            const userName = form.get("userName")
            const fullName = form.get("fullName")
            const password = form.get("password")
            const rePassword = form.get("rePassword")
            const email = form.get("email")
            const mobile = form.get("mobile")
            const _captcha = form.get("captcha")

            let errors: string[] = []

            if (userName) {
                if (!usernameRegex.test(userName as string)) {
                    errors.push("Tên tài khoản phải lớn hơn 5 và nhỏ hơn 12 ký tự")
                }
            }

            if (password) {
                if (!passwordRegex.test(password as string)) {
                    errors.push("Mật khẩu phải bao gồm 8-20 ký tự / số, chứa ít nhất 1 chữ hoa và có bao gồm ký tự đặc biệt như @,^,&,%*,...")
                }
            }

            if (email) {
                if (!emailRegex.test(email as string)) {
                    errors.push("Email không hợp lệ")
                }
            }

            if (mobile) {
                if (!phoneNumberRegex.test(mobile as string)) {
                    errors.push("Số điện thoại chỉ bao gồm 9 chữ số và không bắt đầu bằng số 0")
                }
            }

            if (rePassword !== password) {
                errors.push("Nhập lại mật khẩu không chính xác")
            }

            if (errors.length > 0) {
                toast({
                    title: "Lỗi",
                    description: errors.join(", "),
                    variant: "destructive"
                })
                setIsLoading(false)
                return
            }

            const api = await fetch("https://apimb66.itokvip.com/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ userName, fullName, password, email, mobile: "84" + " " + mobile, captcha: _captcha, captchaId: captcha.uuid })
            })

            const { code, data, message } = await api.json()
            // setIsLoading(false)
            if (code === 200) {
                router.push(`signup?t=${data.token}`)
            } else {
                setIsLoading(false)
                toast({ title: "Lỗi", description: message, variant: "destructive" })
                await reloadCaptcha()
            }
        } catch (err) {
            setIsLoading(false)
        }
    }

    return <div className="w-screen md:w-[90vw] lg:w-[60vw]">
        <div className="w-full drop-shadow-lg py-2 flex items-center justify-center">

            {loading ? <img className="fixed z-[99] " src="/images/Spinner.svg" alt="" /> : <></>}
            <div className="mt-4 px-2">

                <form action={signup} className="space-y-2 !px-16">
                    <div className="px-2 flex items-center justify-between mb-4">
                        <div className="">
                            <p className="roboto text-base lg:text-lg font-bold">Đối Tác Chính Thức</p>
                            <span className="roboto base-txt text-sm lg:text-base">Villarreal CF & OKVIP</span>
                        </div>
                        <img src="/images/brand.svg" className="w-[200px]" alt="" />
                    </div>

                    {/* o day */}

                    <div className="flex flex-col lg:flex-row space-x-0 lg:space-x-10">
                        <div className="left-side w-full lg:w-[50%] space-y-2">
                            <div className="form-item w-full">
                                <label className="mb-1 px-2 flex items-center space-x-2" htmlFor="userName">
                                    <img src="/icons/username.svg" alt="" />
                                    <span className="roboto text-[#D72828] text-[16px]">Tên đăng nhập</span>
                                </label>
                                <input id="userName" name="userName" placeholder="Vui lòng nhập tên tài khoản" className="roboto w-full form-input" />
                                <p className="roboto ml-4 mt-2 text-[14px] text-[#4F4F4F]">Vui lòng nhập 5-12 ký tự</p>
                            </div>
                            <div className="form-item w-full relative">
                                <label className="mb-1 px-2 flex items-center space-x-2" htmlFor="password">
                                    <img src="/icons/password.svg" alt="" />
                                    <span className="roboto text-[#D72828] text-[16px]">Mật khẩu</span>
                                </label>
                                {
                                    isValidPassword && <RiVerifiedBadgeFill className="text-xl text-lime-500 absolute right-10 top-[2.5rem]" />
                                }
                                {
                                    showPassword ? <IoEyeOff onClick={() => setShowPassword(prev => !prev)} className="cursor-pointer absolute text-[#4F4F4F] text-2xl right-3 top-[2.4rem]" />
                                        : <IoEye onClick={() => setShowPassword(prev => !prev)} className="cursor-pointer absolute text-[#4F4F4F] text-2xl right-3 top-[2.4rem]" />
                                }
                                <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "text" : "password"} id="password" name="password"
                                    placeholder="Vui lòng nhập mật khẩu thành viên." className="roboto w-full form-input" />
                                <p className="roboto ml-4 mt-2 text-[14px] text-[#4F4F4F]">Mật khẩu phải bao gồm 8-20 ký tự / số, chứa ít nhất 1 chữ hoa và có bao gồm ký tự đặc biệt như @,^,&,%*,...</p>
                            </div>
                            <div className="form-item w-full relative">
                                <label className="mb-1 px-2 flex items-center space-x-2" htmlFor="rePassword">
                                    <img src="/icons/password.svg" alt="" />
                                    <span className="roboto text-[#D72828] text-[16px]">Xác nhận mật khẩu</span>
                                </label>

                                {
                                    isSameValue && <RiVerifiedBadgeFill className="text-xl text-lime-500 absolute right-10 top-[2.5rem]" />
                                }

                                {
                                    showRePassword ? <IoEyeOff onClick={() => setShowRePassword(prev => !prev)} className="cursor-pointer absolute
            text-[#4F4F4F] text-2xl right-3 top-[2.4rem]" />
                                        : <IoEye onClick={() => setShowRePassword(prev => !prev)} className="cursor-pointer absolute text-[#4F4F4F]
                text-2xl right-3 top-[2.4rem]" />
                                }
                                <input onChange={(e) => setRePassword(e.target.value)} id="rePassword" type={showRePassword ? "text" : "password"} name="rePassword"
                                    placeholder="Vui lòng nhập lại mật khẩu thành viên" className="roboto form-input w-full" />
                                <p className="roboto ml-4 mt-2 text-[14px] text-[#4F4F4F]">Vui lòng xác nhận lại mật khẩu của bạn.</p>
                            </div>

                        </div>
                        <div className="right-side w-full lg:w-[50%] space-y-2">
                            <div className="form-item w-full">
                                <label className="mb-1 px-2 flex items-center space-x-2" htmlFor="fullName">
                                    <img src="/icons/fullname.svg" alt="" />
                                    <span className="roboto text-[#D72828] text-[16px]">Họ và tên</span>
                                </label>
                                <input id="fullName" name="fullName" placeholder="Vui lòng nhập họ và tên đầy đủ"
                                    className="roboto form-input w-full" />
                                <p className="roboto ml-4 mt-2 text-[14px] text-[#4F4F4F]">Họ và tên phải được viết hoa không dấu và cách nhau
                                    bằng dấu cách</p>
                            </div>
                            <div className="form-item w-full">
                                <label className="mb-1 px-2 flex items-center space-x-2" htmlFor="email">
                                    <img src="/icons/email.svg" alt="" />
                                    <span className="roboto text-[#D72828] text-[16px]">Địa chỉ email</span>
                                </label>
                                <input id="email" name="email" placeholder="Vui lòng nhập địa chỉ Email" className="roboto form-input w-full" />
                                <p className="roboto ml-4 mt-2 text-[14px] text-[#4F4F4F]">Điền chính xác Gmail để đủ điều kiện đăng ký khuyến
                                    mãi</p>
                            </div>
                            <div className="form-item w-full">
                                <label className="mb-1 px-2 flex items-center space-x-2" htmlFor="mobile">
                                    <img src="/icons/phonenumber.svg" alt="" />
                                    <span className="roboto text-[#D72828] text-[16px]">Số điện thoại</span>
                                </label>
                                <div className="bg-white flex items-center form-input">
                                    <div className="pl-1 h-[48px] flex items-center justify-center space-x-1">
                                        <img src="/images/vn.png" className="w-5 h-6" alt="" />
                                        <span className="text-sm">+84</span>
                                    </div>
                                    <input id="mobile" type="number" min={1} max={999999999} name="mobile"
                                        className="bg-transparent w-[80%] text-sm outline-none border-none h-[48px] text-dark" />
                                </div>
                                <p className="roboto ml-4 mt-2 text-[14px] text-[#4F4F4F]">Số điện thoại không được bắt đầu bằng số 0, bạn cần
                                    điền chính xác số điện thoại để có thể khôi phục lại mật khẩu.</p>
                            </div>
                            <div className="form-item w-full">
                                <label className="mb-1 px-2 flex items-center space-x-2" htmlFor="password">
                                    <img src="/icons/captcha.svg" alt="" />
                                    <span className="roboto text-[#D72828] text-[16px]">Mã xác minh</span>
                                </label>
                                <div className="form-input flex justify-between bg-white">
                                    <input id="captcha" name="captcha" placeholder="Vui lòng nhập mã xác minh"
                                        className="z-10 bg-gray-50 h-full w-full bg-transparent outline-none border-none text-dark" />
                                    <div className="flex space-x-2 items-center">
                                        <img src={captcha.image} alt="" className="w-[4.4rem] h-[1.8rem]" />
                                        <IoReload onClick={reloadCaptcha} className="text-red-500 cursor-pointer text-lg" />
                                    </div>
                                </div>
                                <p className="roboto ml-4 mt-2 text-[14px] text-[#4F4F4F]">Mã xác minh</p>
                            </div>
                        </div>
                    </div>

                    <div className="lg:ml-0 translate-y-0 lg:-translate-y-20 form-item w-full">
                        <div className="flex mt-4 items-center space-x-2">
                            <div onClick={() => setChecked(prev => !prev)} className="cursor-pointer w-6 h-6 flex items-center
                justify-center rounded-full border-2 border-[#D72828]">
                                {checked &&
                                    <IoCheckmark className="text-lg text-[#D72828]" />}
                            </div>
                            <p>Tôi đã đủ tuổi và đồng ý <span className="text-[#D72828]">“Chính sách thành viên”</span></p>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center justify-center space-x-6">
                        <Button type="submit" className="uppercase bg-[#EC3641] hover:bg-red-500 h-[48px] rounded-[36px] w-[170px] lg:w-[200px]">Đăng ký ngay</Button>
                        <Button onClick={() => changeTab("login")} type="button" className="uppercase h-[48px] rounded-[36px] w-[120px] lg:w-[150px]">Đăng nhập</Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
}