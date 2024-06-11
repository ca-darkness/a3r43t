import Redirect from "@/components/redirect"

type Context = {
    params: {}
    searchParams: {
        t: string
        r: string
    }
}

// { params: {}, searchParams: {} }

export default function Page(ctx: Context) {
    
    return <main className="relative overflow-hidden flex min-h-screen w-screen flex-col" style={{ backgroundImage: `url(images/background.svg)` }}>
        <div className="flex md:hidden w-full h-[40px] bg-[#ED0103]"></div>
        <img src="/images/union.svg" alt="" className="-translate-y-[5px] w-full" />
        <div className="w-full pt-12 lg:pt-16 flex items-center justify-center">
            <div className="p-4 lg:p-10 w-full flex flex-col justify-center items-center">
                <img src="/images/mb66-logo.webp" className="w-[11.22rem] md:w-[20rem] lg:w-[26rem] h-[49.51px] lg:h-[114px]" alt="" />
                <p className="drop-shadow text-center mt-8 text-2xl md:text-3xl lg:text-4xl text-[#ED0103]">Xin cảm ơn đã tin dùng sản phẩm của chúng tôi</p>
                <p className="drop-shadow text-center mt-2 text-xl text-[#ED0103]">Bạn sẽ được chuyển tới MB66 sau vài giây</p>
                <img src="/images/Spinner.svg" className="w-36" alt="" />
            </div>
        </div>
        <Redirect token={ctx.searchParams.t} />
    </main>
}