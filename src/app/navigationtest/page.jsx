"use client"
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

const NavigationTest = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    const navigateToHome = () => {
        router.push("/")
    }

    // console.log(pathname, q);

    return (
        <div>
            <div>NavigationTest</div>
            {/* method 1 */}
            <Link href="/" prefetch={false}>home</Link>
            {/* method 2  client side */}
            <button onClick={navigateToHome}>click here</button>
        </div>
    )
}

export default NavigationTest
