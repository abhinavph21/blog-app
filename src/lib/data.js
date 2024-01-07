import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from 'next/cache'
// const posts = [
//     {
//         id: 1,
//         title: "post1",
//         body: "body1",
//         userId: 1
//     },
//     {
//         id: 2,
//         title: "post2",
//         body: "body2",
//         userId: 1
//     },
//     {
//         id: 3,
//         title: "post3",
//         body: "body3",
//         userId: 2
//     },
//     {
//         id: 4,
//         title: "post4",
//         body: "body4",
//         userId: 2
//     }
// ]
export const getPosts = async () => {
    try {
        connectToDb();
        const posts = await Post.find();
        return posts;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch posts!");
    }
};

export const getPost = async (userId) => {
    try {
        connectToDb();
        const posts = await Post.find({ userId });

        // console.log(posts);
        return posts[0];
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch post!");
    }
};

export const getUser = async (id) => {
    noStore();
    try {
        connectToDb();
        const user = await User.findOne({ "id": id });
        return user;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch user!");
    }
};

export const getUsers = async () => {
    try {
        connectToDb();
        const users = await User.find();
        return users;
    } catch (err) {
        console.log(err);
        throw new Error("Failed to fetch users!");
    }
};