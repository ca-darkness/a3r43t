import AuthTabs from "./Auth.tabs";
import Signup from "./Register";

const loader = async () => {
    try {
        const res = await fetch("https://apimb66.itokvip.com/api/auth/captcha", { cache: "no-cache" })
        const data = await res.json()
        return data.data
    } catch(err) {
        return { err }
    }
}

export default async function Auth() {

    const capcha: { uuid: string, image: string } = await loader()

    return <AuthTabs {...capcha} />
}