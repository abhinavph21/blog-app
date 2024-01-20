import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import users from "@/lib/users";
import posts from "@/lib/posts";

export const GET = async (request) => {
    try {
        console.log("fetch all posts");
        await connectToDb();
        const posts = await Post.find();
        return NextResponse.json(posts);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};

export const POST = async (request) => {
    try {
        console.log("add posts");
        let postsWithUserId = await Promise.all(
            posts.map(async (post) => {
                post.userId = new ObjectId(users[Math.floor(Math.random() * 5)]._id)
                return post
            })
        )
        // console.log(postsWithUserId);
        // let postsWithUserId = posts.map((post)=>{
        //     post.userId = new ObjectId(users[Math.floor(Math.random()*5)]._id)
        //     return post
        // })
        await connectToDb();
        const newPosts = await Post.insertMany(postsWithUserId);
        console.log("inserted posts", newPosts);
        return NextResponse.json(newPosts);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};
