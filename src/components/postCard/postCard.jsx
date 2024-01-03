import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <Image src="https://images.pexels.com/photos/3772623/pexels-photo-3772623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
            </div>
            <div>
                <Link className={styles.link} href={`/blog/post`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard