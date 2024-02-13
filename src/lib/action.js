"use server";
//  all functions are server actions
import bcrypt from "bcryptjs"
import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "./auth";
import { ObjectId } from "mongodb";

//  useform state in component
export const addPost = async (prevState, formData) => {
    console.log(formData);
    const { title, desc, userId, img } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newPost = new Post({
            title,
            desc,
            userId: new ObjectId(userId),
            img
        });

        await newPost.save();
        console.log("saved post to db");
        //  will not use cache, and fetch again
        revalidatePath("/blog");
        revalidatePath("/admin");
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

//  useform state in component
export const addUser = async (prevState, formData) => {
    const { username, email, password, img, isAdmin } = Object.fromEntries(formData);

    try {
        connectToDb();
        const newUser = new User({
            username,
            email,
            password,
            img,
            isAdmin
        });

        await newUser.save();
        console.log("saved user to db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDb();

        await Post.deleteMany({ userId: id });
        await User.findByIdAndDelete(id);
        console.log("deleted user from db");
        revalidatePath("/admin");
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
};


export const handleGithubLogin = async () => {
    await signIn("github");
};

export const handleLogout = async () => {
    await signOut()
}

export const register = async (prevState, formData) => {
    const { username, email, password, img, passwordRepeat } = Object.fromEntries(formData)
    if (password !== passwordRepeat) {
        return { error: "Passwords do not match" };
    }

    try {
        connectToDb();
        const user = await User.findOne({ email });

        if (user) {
            return { error: "email already exists" };
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            img,
            isAdmin: true
        });
        await newUser.save();
        console.log("saved to db");

        return { success: true };
    } catch (err) {
        console.log(err);
        return { error: "Something went wrong!" };
    }
}

export const login = async (formData) => {
    const { username, password } = Object.fromEntries(formData);

    try {
        const res = await signIn("credentials", { redirect: false, username, password });
        console.log(res);
    } catch (err) {
        if (err.message.includes("CredentialsSignin")) {
            return { error: "Invalid username or password" };
        }
    }
};