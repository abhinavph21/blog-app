import React from 'react'
import Link from 'next/link'
import Links from "./links/Links"
import styles from './navbar.module.css'
// this container will be different from globals

// import './navbar.css'
// this container will overwrite globals container css everywhere

const Navbar = () => {

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>Logo</Link>
      <div>
        <Links />
      </div>
    </div>
  )
}
export default Navbar
