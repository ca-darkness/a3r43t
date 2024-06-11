"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

type Props = {
    token: string
}

export default function Redirect({ token }: Props) {

    const route = useRouter()

    useEffect(() => {

        if (token) {
            if (token.length < 23) {
                route.push(`/`)
            } else {
                setTimeout(() => {
                    window.location.href = `https://mb6698.com?token=${token}&uagt=digia001a&path=root`
                }, 2000)
            }
        } else {
            route.push(`/`)
        }
    }, [])

    return <>

    </>
}