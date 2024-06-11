import Chat from "@/components/home/chat";
import Intro from "@/components/home/intro";
import Term from "@/components/home/term";
import Start from "@/components/start";

import type { Metadata } from 'next'
import Link from "next/link";

export const metadata: Metadata = {
  icons: "/favicon.jpg",
  title: 'MB66VI | Trang chủ chính thức MB66VI.COM',
  description: 'MB66VI Trang chính thức 2024. Công ty công nghệ mới, áp dụng nhiều công nghệ hiện đại vào dịch vụ.',
}

export default function Home() {
  return <main className="relative overflow-hidden flex min-h-screen w-screen flex-col" style={{ backgroundImage: `url(images/background.svg)` }}>
    <div className="flex md:hidden w-full h-[40px] bg-[#ED0103]"></div>
    <img src="/images/union.svg" alt="" className="-translate-y-[5px] w-full" />
    <div className="p-4 lg:p-10 w-full flex flex-col justify-center items-center">
      <img src="/images/mb66-logo.webp" className="w-[11.22rem] md:w-[20rem] lg:w-[26rem] h-[49.51px] lg:h-[114px]" alt="" />
      <Start />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-1 lg:gap-[1.37rem]">
        <img src="/images/banner-1.webp" className="w-80" alt="" />
        <img src="/images/banner-2.webp" className="w-80" alt="" />
        <img src="/images/banner-3.webp" className="w-80" alt="" />
        <img src="/images/banner-4.webp" className="w-80" alt="" />
      </div>
      <div className="mt-16 lg:mt-10 flex items-center w-full">
        <Intro />
        <Term />
      </div>
    </div>
    <div className="flex lg:hidden absolute bottom-0">
      <div>
        <img src="/images/union.svg" alt="" className="translate-y-[6px] rotate-180 w-full" />
        <div className="flex md:hidden w-full h-[40px] bg-[#ED0103]"></div>
      </div>
    </div>
    <div className="fixed right-6 bottom-6">
      <Chat />
    </div>
  </main>
}
