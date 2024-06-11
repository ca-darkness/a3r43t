"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { ReactNode, useState } from "react"
import Register from "./Register"
import Login from "./Login"

type Props = { uuid: string, image: string }

export default function AuthTabs({ uuid, image }: Props) {

    const [currentTab, setCurrentTab] = useState<string>("register")

    const changeTab = (tab: string) => {
        setCurrentTab(tab)
    }
    const Tabs: { [tab: string]: ReactNode } = {
        "register": <Register uuid={uuid} image={image} changeTab={changeTab} />,
        "login": <Login changeTab={changeTab} />
    }

    return <div className="h-[90vh] overflow-y-auto scrollbar-none">
        { Tabs[currentTab] }
    </div>
}