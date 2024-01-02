"use client"
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './navlink.module.css'

const NavLink = ({ item }) => {

    const pathName = usePathname()

    return (
        <Link href={item.path}
            className={`${styles.container} ${item.path == pathName && styles.active}`}
        >
            {item.title}
        </Link>
    )
}

export default NavLink
