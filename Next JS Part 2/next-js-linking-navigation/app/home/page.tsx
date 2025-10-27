'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter()
    return(
        <div>
            <Link href='/about'>About</Link>
            <br />
            <Link href='/contact'>Contact Us</Link>
            <br />
            NAVIGATION 
            <br />
            <button onClick={() => router.push('/about')}>About</button>
            <br />
            <button onClick={() => router.push('/contact')}>Contact Us</button>
            <br />
            HALO THIS IS HOMEPAGE
        </div>
    )
}