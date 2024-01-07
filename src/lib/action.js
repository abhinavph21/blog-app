"use server";
//  all functions are server actions

import { connectToDb } from "./utils";
import { Post } from "./models";
import { revalidatePath } from "next/cache";

export const addPost = async (formData) => {

    // const title = formData.get("title");
    // const desc = formData.get("desc");
    // const slug = formData.get("slug");

    const { title, desc, slug, userId } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            slug,
            userId,
        });

        await newPost.save();
        console.log("saved to db");
        //  will not use cache, and fetch again
        revalidatePath("/blog");
        //   revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deletePost = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.findByIdAndDelete(id);
        console.log("deleted from db");
        revalidatePath("/blog");
        // revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};