import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                {post?.img && <div className={styles.imgContainer}>
                    <Image src={post.img} alt="" fill className={styles.img} />
                </div>}
                <div className={styles.date}>{new Date(post.createdAt).toString().slice(4, 16)}</div>
            </div>
            <div className={styles.bottom}>
                {post.title && <h1 className={styles.title}>{post.title.length > 50 ? `${post.title.substring(0, 50)} ...` : post.title}</h1>}
                {post.body && <p className={styles.desc}>{post.body.length > 80 ? `${post.body.substring(0, 80)} ...` : post.body}</p>}
                <Link className={styles.link} href={`/blog/${post._id}`}>READ MORE</Link>
            </div>
        </div>
    )
}

export default PostCard