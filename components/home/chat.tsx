"use client"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { useState } from "react"

export default function Chat() {

    const [loading, setLoading] = useState<boolean>(false)
    const [open, setOpen] = useState<boolean>(false)
    const [loaded, setLoaded] = useState<boolean>(false)
    const [hidden, setHidden] = useState<boolean>(false)

    const handler = () => {

        if (loaded && !hidden) {
            setHidden(true)
            return
        }

        if (loaded) {
            if (hidden) {
                setHidden(false)
            } else {
                setHidden(true)
            }
        } else {
            setLoading(true)
            setHidden(false)
            setOpen(true)
        }
    }

    const onBlur = () => {
        setHidden(true)
    }

    const onLoad = () => {
        setLoading(false)
        setLoaded(true)
    }

    return <div className="bg-transparent">

        <div className="flex space-x-2 items-center">
            { loading ? 
                <span className="cursor-wait px-2 py-1 bg-white rounded-md flex flex-col">
                    <img src="/images/Spinner.svg" alt="" />
                    Đang kết nối tới tổng đài, vui lòng chờ...
                </span>
                : <button onClick={handler} className="border-2 bg-[#ED0103] hover:bg-red-500 w-12 h-12 rounded-full flex justify-center items-center">
                    <IoChatboxEllipsesOutline className="text-white text-2xl" />
                </button> }
        </div>

        <Popover open={open} onOpenChange={onBlur}>
            <PopoverContent className="shadow-none drop-shadow-none border-none bg-transparent fixed left-[15vw] md:left-[30vw] lg:left-[60vw] xl:left-[80vw] p-0 m-0 top-0 lg:top-10 flex items-center justify-center">
                <div style={{ display: hidden ? "none":"block" }} className="relative bg-transparent  h-[800px] flex items-center justify-center">
                        { (loaded && !hidden) && <p onClick={()=>setHidden(true)} className="absolute top-0 cursor-pointer text-lg right-2">x</p> }
                        <iframe
                        loading="lazy"
                        onLoad={onLoad}
                        frameBorder={1}
                        scrolling="no"
                        data-content-tab={2}
                        src="https://962356.com/livechat/vandekhac"
                        className="h-[700px] w-[375px]"
                        title="chat widget" data-rocket-lazyload="fitvidscompatible"
                        data-lazy-src="https://962356.com/livechat/vandekhac"
                        data-ll-status="loaded" />
                    
                </div>
            </PopoverContent>
        </Popover>
    </div>
}