
import Link from "next/link"
import styles from "./links.module.css"
import NavLink from "./navLink/NavLink"

const Links = () => {
    const links = [
        {
            title: "Homepage",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Contact",
            path: "/contact"
        },
        {
            title: "Blog",
            path: "/posts"
        }
    ]

    const session = true
    const isAdmin = true

    return <div className={styles.links}>
        {links.map((link) => (
            <NavLink item={link} key={link.title} />
            // <Link href={link.path} key={link.title}>{link.title}</Link>
        ))}
        {session ? <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
        </> : <NavLink item={{ title: "Login", path: "/login" }} />}
    </div>
}

export default Links