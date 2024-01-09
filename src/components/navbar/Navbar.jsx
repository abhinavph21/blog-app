import React from 'react'
import Link from 'next/link'
import Links from "./links/Links"
import styles from './navbar.module.css'
import { auth } from '@/lib/auth'
// this container will be different from globals

// import './navbar.css'
// this container will overwrite globals container css everywhere

const Navbar = async () => {
  const session = await auth()
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Insightful Posts</Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}
export default Navbar
