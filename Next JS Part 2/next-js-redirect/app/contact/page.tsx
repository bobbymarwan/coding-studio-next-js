'use client'

import { redirect } from "next/navigation"
import { DOMAttributes, MouseEventHandler } from "react"

export default function Page() {

    const handleButtonClick:MouseEventHandler<HTMLElement> = () => {
        redirect('/home')
    }
    return(
        <div>
            HALO THIS IS CONTACT US PAGE
            <button onClick={handleButtonClick}>Go To HomePage</button>
        </div>
    )
}