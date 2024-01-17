import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
    const { id } = params;

    try {
        await connectToDb();
        console.log("get single post", id);
        const post = await Post.findOne({ _id: id });
        return NextResponse.json(post);
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

export const DELETE = async (request, { params }) => {
    const { id } = params;

    try {
        connectToDb();

        await Post.deleteOne({ id });
        return NextResponse.json("Post deleted");
    } catch (err) {
        console.log(err);
        throw new Error("Failed to delete post!");
    }
};
