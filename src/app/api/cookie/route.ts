import { cookies } from "next/headers"

export async function POST(req: Request) {
    const cookieStore = cookies()
    const body = await req.json()
    try {
        const expires = new Date();
        expires.setFullYear(expires.getFullYear() + 1000)
        cookieStore.set(body.key, body.value, {
            httpOnly: true,
            path: '/',
            expires: expires.getTime()
        })
        return new Response('success', {
            status: 200,
        })
    }
    catch (e) {
        console.log(e)
        return new Response('fail', {
            status: 400,
        })
    }
}