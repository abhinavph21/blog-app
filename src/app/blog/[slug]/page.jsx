import React, { Suspense } from 'react'
import Image from 'next/image';
import styles from './singlePost.module.css'
import PostUser from '@/components/postUser/postUser';
// import { getPost } from '@/lib/data';

//  api
const getData = async (slug) => {
  console.log(`http://localhost:3000/api/blog/${slug}`);
  try {
    const res = await fetch(`http://localhost:3000/api/blog/1`);
    const data = await res.json()
    console.log(data);
    return data;
  } catch (err) {
    console.log();
    throw new Error(err)
  }
  // if (!res.ok) {
  //   throw new Error("Something went wrong");
  // }

};

// export const generateMetadata = async ({ params }) => {
//   const { slug } = params;

//   const post = await getPost(slug);

//   return {
//     title: post.title,
//     description: post.desc,
//   };
// };

// not working api
const SinglePostPage = async ({ params }) => {
  // slug = id
  const { slug } = params
  // console.log(params, searchParams);
  // const post = await getPost(slug)

  const post = await getData(slug)

  return (
    <div className={styles.container}>
      {post?.img && (
        <div className={styles.imgContainer}>
          <Image src={post?.img} alt="" fill className={styles.img} />
        </div>
      )}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>Loading...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post?.createdAt?.toString()}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post?.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
