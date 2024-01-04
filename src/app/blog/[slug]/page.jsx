import React, { Suspense } from 'react'
import Image from 'next/image';
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser';

const getData = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`)
  if (!res.ok)
    throw new Error("something went wrong")
  return res.json()
}

const SinglePostPage = async ({ params }) => {
  const { slug } = params
  // console.log(params, searchParams);
  const post = await getData(slug)
  console.log(post);

  return (
    <div className={styles.container}>
      {/* {post.img && (
      )} */}
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/6001658/pexels-photo-6001658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {new Date().toDateString()}
              {/* {post.createdAt.toString().slice(4, 16)} */}
            </span>
          </div>
        </div>
        <div className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum provident rem distinctio in quia molestias. Harum facere animi debitis quod possimus corrupti ex earum aspernatur autem mollitia facilis, nulla ea.</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
