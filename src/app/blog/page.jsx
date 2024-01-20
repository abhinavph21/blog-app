import React from 'react'
import styles from './blog.module.css'
import PostCard from '@/components/postCard/postCard'
// import { getPosts } from '@/lib/data'

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", { next: { revalidate: 5 } })
  if (!res.ok)
    throw new Error("something went wrong")
  return res.json()
}

const BlogPage = async () => {
  // api
  const posts = await getData()
  // without api
  // const posts = await getPosts()

  return (
    <div className={styles.container}>
      {posts?.length > 0 && posts.map((post) => (
        (post.title && post.desc) && <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  )
}

export default BlogPage
