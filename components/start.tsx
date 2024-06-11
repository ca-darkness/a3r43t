import React from "react";
import AuthWrapper from "./containers/Auth.wrapper";
import { Dialog, DialogTrigger, DialogContent } from "./ui/dialog";

export default function Start() {
    return <Dialog>
        <DialogTrigger asChild>
            <img src="/images/join-button.webp" className="hover:animate-pulse duration-200 hover:scale-105 cursor-pointer w-[20.55rem] md:w-[26rem] lg:w-[30rem] mt-[2.2rem] h-[78px] lg:h-[119px]" alt="" />
        </DialogTrigger>
        <DialogContent style={{ backgroundImage: `url(images/background.svg)` }} className="concac !border-none lg:!border-solid h-screen lg:h-[90vh] !rounded-none lg:!rounded-[40px] px-0 py-12 flex items-center justify-center flex-col">
            <img src="/images/logo.webp" className="w-[237px]" alt="" />
            <React.Suspense fallback={<img src="/images/Spinner.svg"/>}>
                <AuthWrapper />
            </React.Suspense>
        </DialogContent>
    </Dialog>
}