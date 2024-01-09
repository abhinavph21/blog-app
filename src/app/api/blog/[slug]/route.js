import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { slug } = params;

    try {
        await connectToDb();
        console.log("get 1 post");
        const posts = await Post.find({ userId: slug });
        return NextResponse.json(posts[0]);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

export const DELETE = async (request, { params }) => {
    const { slug } = params;

    try {
        connectToDb();

        await Post.deleteOne({ slug });
        return NextResponse.json("Post deleted");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete post!");
    }
};
